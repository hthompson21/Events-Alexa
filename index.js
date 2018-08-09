// Alexa, give me today's events.

'

use strict';
const Alexa = require('alexa-sdk');



const APP_ID = undefined;



const SKILL_NAME = 'Events';

const GET_TODAY_MESSAGE = 'Here are the events going on today: ';
const GET_TOMORROW_MESSAGE = 'Here\'s what is going on tomorrow: ';

const HELP_MESSAGE = 'You can say what are today\'s events, or, you can say exit... What can I help you with?';

const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Have a good day!';

const CONTINUE_MESSAGE = 'Would you like to hear tomorrow\'s events?';

//==================================================================================



const Todaydata = [

	'August 8th, 2018. There is the Interns\' Micro Project #3 Presentation from 10:00 to 11:30 in the Oak Room, the Young Professional BRG\'s Marquee Event from 2 to 5 p.m. at the Springfield Picnic Grove, and Boston\'s First Meet at One Marina Park from 4 to 6 p.m. on the 8th floor lounge of One Marina Park. '

];


const Tomorrowdata = [
    'On August 9th, 2018. The Say Cheese food truck will be in the springfield office from 11 to 1:30, and don\'t forget about the various yoga, zumba, and conditioning classes taking place in the fitness center throughout the day. '

];
    


//===================================================================================



const handlers = {

'LaunchRequest': function () {

        this.emit('GetTodayEventIntent');

    },

    
'GetTodayEventIntent': function () {

        const factArr = Todaydata;

        const factIndex = Math.floor(Math.random() * factArr.length);

        const randomFact = factArr[factIndex];

        const speechOutput = GET_TODAY_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);

        this.response.speak(speechOutput);

        this.emit(':responseReady');

    },

    
'GetTomorrowIntent': function () {

        const factArr = Tomorrowdata;

        const factIndex = Math.floor(Math.random() * factArr.length);

        const randomFact = factArr[factIndex];

        const speechOutput = GET_TOMORROW_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);

        this.response.speak(speechOutput);

        this.emit(':responseReady');

    },
   
 
'AMAZON.HelpIntent': function () {

        const speechOutput = HELP_MESSAGE;

        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);

        this.emit(':responseReady');

    },


    'AMAZON.CancelIntent': function () {

        this.response.speak(STOP_MESSAGE);

        this.emit(':responseReady');

    },

    
'AMAZON.StopIntent': function () {

        this.response.speak(STOP_MESSAGE);

        this.emit(':responseReady');

    },


};




exports.handler = function (event, context, callback) {

    const alexa = Alexa.handler(event, context, callback);

    alexa.APP_ID = APP_ID;

    alexa.registerHandlers(handlers);

    alexa.execute();

};

const {
  BasicCard,
  Permission,
  Suggestions
} = require('actions-on-google');

const {
  colorMap,
  fakeColorCarousel
} = require('./utils');

class IntentHandler {

    static HandleWelcome(conv) {
        const name = conv.user.storage.userName;
        if (!name) {
            conv.ask(new Permission({
            context: 'Hi there, to get to know you better',
            permissions: 'NAME',
            }));
        } else {
            conv.ask(`Hi again, ${name}. What's your favorite color?`);
        }
    }

    static HandlePermissions(conv, params, permissionGranted) {
        if (!permissionGranted) {
            conv.ask(`OK, no worries. What's your favorite color?`);
            conv.ask(new Suggestions('Blue', 'Red', 'Green'));
        } else {
            conv.user.storage.userName = conv.user.name.display;
            conv.ask(`Thanks, ${conv.user.storage.userName}. ` +
                `What's your favorite color?`);
            conv.ask(new Suggestions('Blue', 'Red', 'Green'));
        }
    }

    static HandleColor(conv, {color}) {
        const luckyNumber = color.length;
        const audioSound = 'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg';
        if (conv.user.storage.userName) {
          conv.ask(`<speak>${conv.user.storage.userName}, your lucky number is ` +
            `${luckyNumber}.<audio src="${audioSound}"></audio> ` +
            `Would you like to hear some fake colors?</speak>`);
          conv.ask(new Suggestions('Yes', 'No'));
        } else {
          conv.ask(`<speak>Your lucky number is ${luckyNumber}.` +
            `<audio src="${audioSound}"></audio> ` +
            `Would you like to hear some fake colors?</speak>`);
          conv.ask(new Suggestions('Yes', 'No'));
        }
    }

    static HandleFakeColor(conv, {fakeColor}) {
        fakeColor = conv.arguments.get('OPTION') || fakeColor;
        if (!conv.screen) {
          conv.ask(colorMap[fakeColor].text);
        } else {
          conv.ask(`Here you go.`, new BasicCard(colorMap[fakeColor]));
        }
        conv.ask('Do you want to hear about another fake color?');
        conv.ask(new Suggestions('Yes', 'No'));
    }

    static HandleSilent(conv) {
        const repromptCount = parseInt(conv.arguments.get('REPROMPT_COUNT'));
        if (repromptCount === 0) {
          conv.ask('Which color would you like to hear about?');
        } else if (repromptCount === 1) {
          conv.ask(`Please say the name of a color.`);
        } else if (conv.arguments.get('IS_FINAL_REPROMPT')) {
          conv.close(`Sorry we're having trouble. Let's ` +
            `try this again later. Goodbye.`);
        }
    }

    static HandleConfirmation(conv) {
        conv.ask('Which color, indigo taco, pink unicorn or blue grey coffee?');
        if (conv.screen) return conv.ask(fakeColorCarousel());
    }
}

module.exports = IntentHandler;

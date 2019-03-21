const { dialogflow } = require('actions-on-google');

const functions = require('firebase-functions');

const app = dialogflow({debug: true});

const IntentHandler = require('./handler');

app.intent('Default Welcome Intent', IntentHandler.HandleWelcome);

app.intent('actions_intent_PERMISSION', IntentHandler.HandlePermissions);

app.intent('favorite color', IntentHandler.HandleColor);

app.intent('favorite fake color', IntentHandler.HandleFakeColor);

app.intent('actions_intent_NO_INPUT', IntentHandler.HandleSilent);

app.intent(['favorite color - yes', 'favorite fake color - yes'], IntentHandler.HandleConfirmation);

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

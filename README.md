# Lucky Bot

> A google action which guesses your lucky number based on your favourite color

## Setup Instructions

1. Import **dialogflow.zip** in the DialogFlow console

2. Clone this repository
```shell
git clone https://github.com/alphadose/Lucky-Bot Lucky-Bot
```

3. Setup firebase
```shell
npm install -g firebase-tools
cd Lucky-Bot
firebase init
```

4. Add your firebase project
```shell
firebase use --add <YOUR_PROJECT_NAME>
```

5. Install dependencies
```shell
cd functions and npm install
``` 

6. Run server
```shell
npm serve
```
const TelegramBot = require('node-telegram-bot-api');
const TELEGRAM_TOKEN = require('./constants').TELEGRAM_TOKEN;
const CHAT_ID = 17894631;

let bot;

const start = function() {
    bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

    bot.on('message', (msg) => {
      chatId = msg.chat.id;
      console.log('chat id', chatId);
      bot.sendMessage(chatId, 'Received your message');
    });
}

const sendMessage = function (payload) {
    if (bot && CHAT_ID) {
        const message = JSON.stringify(payload);
        bot.sendMessage(CHAT_ID, message);
        return true;
    }
    return false;
}

module.exports = {
    start: start,
    sendMessage: sendMessage
};

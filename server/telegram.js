const TelegramBot = require('node-telegram-bot-api');
const config = require('./config.json');
const TELEGRAM_TOKEN = config.TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = config.TELEGRAM_CHAT_ID;

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
    if (bot && TELEGRAM_CHAT_ID) {
        const message = JSON.stringify(payload);
        bot.sendMessage(TELEGRAM_CHAT_ID, message);
        return true;
    }
    return false;
}

module.exports = {
    start: start,
    sendMessage: sendMessage
};

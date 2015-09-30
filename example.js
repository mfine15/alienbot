const Alienbot = require('alienbot');
var bot = new Alienbot({
  auth: {},
  subreddit: 'askreddit',
  footer: 'Look at me, I\'m a bot!'
});

bot.command('!Search [query]*', (req) => {
  return `Search results for ${query}`
});

bot.command('!Ping', (req) => {
  return 'Pong!'
});

bot.on('response_error', (error) => {
  console.log('Reddit returned an error', error);
});

bot
  .start()
  .then(() => {
    console.log('Bot running');
  })



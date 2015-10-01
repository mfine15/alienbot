let Alienbot = require('alienbot');

let bot = new Alienbot({
  auth:  { 
    type: 'script',
    key: 'client_id from reddit', 
    secret: 'client_secret from reddit',
    username: 'yourUsername',
    password: 'yourPassword',
    scope: [ 'flair', 'identity' ] 
  },
  subreddit: 'askreddit',
  footer: 'Look at me, I\'m a bot!'
});

bot.command('!Search [query]*', (req) => {
  return Promise
  .delay(500)
  .then(() => {
    return `Search results for ${req.query}`
  });
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



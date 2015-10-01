var reddit = require('snoocore');

class Alienbot {
  constructor(opts){
    this.auth = opts.auth;
    this.subreddit = opts.subreddit || 'all'
    this.footer = opts.footer || ''
  }

  start(){

  }
}
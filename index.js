const Twit = require ('twit');
const koa = require('koa');
const winston = require('winston');
var db = require ('./db/db')
var fs = require('fs');

const logger = winston.createLogger({
	transports: [
	  new winston.transports.Console(),
	]
  });
  const levels = { 
	error: 0, 
	warn: 1, 
	info: 2, 
	verbose: 3, 
	debug: 4, 
	silly: 5 
  }
  
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  // 
  if (process.env.NODE_ENV !== 'production') {
	logger.add(new winston.transports.Console({
	  format: winston.format.simple()
	}));
  };

var twitterKeys = JSON.parse(fs.readFileSync('twitter-keys.json', 'utf8'));
console.log(twitterKeys);
console.log(twitterKeys.consumerKey);

const T = new Twit({
    consumer_key:         twitterKeys.consumerKey,
    consumer_secret:      twitterKeys.consumerSecret,
    access_token:         twitterKeys.accessToken,
    access_token_secret:  twitterKeys.accessTokenSecret,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  });


logger.info("Inicio");
//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
// T.get('search/tweets', { q: 'Awesome chat today!!! Truly insightful.', is_quote_status: false, count: 2}, function(err, data, response) {
// 	console.log(data);
// 	// console.log('name', data.statuses[1].user.screen_name);
// 	// console.log('name', data.statuses[1].quoted_status);
// });
var id_str = "915270079222370304";

// var params = {
// 	// in_reply_to_status_id: 915270079222370300,
// 	in_reply_to_status_id: id_str,
// 	status: "@ennapg Esto es una prueba desde la API de Twitter en NodeJS"
// };

// T.post('statuses/update', params, function (err, data, response) {
// 	console.log(data);
// });


console.log(db.frases.count());

var obj = JSON.parse(fs.readFileSync('frases.json', 'utf8'));
console.log(obj[1]);
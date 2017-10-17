const loki = require('lokijs');
var db = new loki('loki.json');

var tweetsRespondidos = db.addCollection('tweets-respondidos');
var frases = db.addCollection('frases');


module.exports = {
    tweetsRespondidos,
    frases
};
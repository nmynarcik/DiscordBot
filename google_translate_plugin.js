var util = require('util');
var AuthDetails = require('./auth.json');
var googleTranslate;

function GoogleTranslate() {
  console.log('::GoogleTranslate Init::');
  googleTranslate = require('google-translate')(AuthDetails.google_translate);
};

GoogleTranslate.prototype.respond = function(query, channel, bot) {
  var args = query.split(' ');
  var targetLang = args.pop();
  var text = args.join(' ');
  if (targetLang == '') {
    bot.sendMessage(channel, 'Did you forget what language you wanted that in? Here\'s a list of your options: https://cloud.google.com/translate/v2/using_rest#language-params');
    return;
  }

  googleTranslate.translate(text, targetLang, function(err, translation) {
    if (err) {
      bot.sendMessage(channel, 'Something went wrong. Contact @RedSeal. ' + err);
    } else {
      // console.log(translation);
      bot.sendMessage(channel, translation.translatedText);
    }
  });
};

module.exports = GoogleTranslate;

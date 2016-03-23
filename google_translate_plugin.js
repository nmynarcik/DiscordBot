var util = require('util');
var AuthDetails; // = require('./auth.json');
var googleTranslate;

function GoogleTranslate() {
  //console.log('::GoogleTranslate Init::');
  googleTranslate = require('google-translate')(process.env.GOOGLE_TRANSLATE);
};

GoogleTranslate.prototype.respond = function(query, channel, bot) {
  var args = query.split(' ');
  var targetLang = args.pop();
  var text = args.join(' ');
  console.log('language:', targetLang);
  if (targetLang.length !== 2) {
    bot.sendMessage(channel, 'Did you forget what language you wanted that in? Here\'s a list of your options: ```' + supportedLanguages + '```');
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

var supportedLanguages = 'Afrikaans: af,\nAlbanian: sq,\nArabic: ar,\nArmenian: hy,\nAzerbaijani: az,\nBasque: eu,\nBelarusian: be,\nBengali: bn,\nBosnian: bs,\nBulgarian: bg,\nCatalan: ca,\nCebuano	: eb,\nChichewa: ny,\nChinese Simplified	zh-CN,\nChinese Traditional	zh-TW,\nCroatian: hr,\nCzech: cs,\nDanish: da,\nDutch: nl,\nEnglish: en,\nEsperanto: eo,\nEstonian: et,\nFilipino: tl,\nFinnish: fi,\nFrench: fr,\nGalician: gl,\nGeorgian: ka,\nGerman: de,\nGreek: el,\nGujarati: gu,\nHaitian Creole: ht,\nHausa: ha,\nHebrew: iw,\nHindi: hi,\nHmong	: mn,\nHungarian: hu,\nIcelandic: is,\nIgbo: ig,\nIndonesian: id,\nIrish: ga,\nItalian: it,\nJapanese: ja,\nJavanese: jw,\nKannada: kn,\nKazakh: kk,\nKhmer: km,\nKorean: ko,\nLao: lo,\nLatin: la,\nLatvian: lv,\nLithuanian: lt,\nMacedonian: mk,\nMalagasy: mg,\nMalay: ms,\nMalayalam: ml,\nMaltese: mt,\nMaori: mi,\nMarathi: mr,\nMongolian: mn,\nMyanmar (Burmese): my,\nNepali: ne,\nNorwegian: no,\nPersian: fa,\nPolish: pl,\nPortuguese: pt,\nPunjabi: ma,\nRomanian: ro,\nRussian: ru,\nSerbian: sr,\nSesotho: st,\nSinhala: si,\nSlovak: sk,\nSlovenian: sl,\nSomali: so,\nSpanish: es,\nSudanese: su,\nSwahili: sw,\nSwedish: sv,\nTajik: tg,\nTamil: ta,\nTelugu: te,\nThai: th,\nTurkish: tr,\nUkrainian: uk,\nUrdu: ur,\nUzbek: uz,\nVietnamese: vi,\nWelsh: cy,\nYiddish: yi,\nYoruba: yo,\nZulu: zu';

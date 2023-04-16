"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    let { text, locale } = req.body;
    let locales = ["american-to-british", "british-to-american"];
    if (!locale || text === undefined || locale === undefined) {
      return res.status(400).json({ error: "Required field(s) missing" });
    } else if (text.trim() === "") {
      return res.status(400).json({ error: "No text to translate" });
    } else if (locales.indexOf(locale) === -1) {
      return res.status(400).json({ error: "Invalid value for locale field" });
    }

    let translation = translator.translateAll(text, locale);
    console.log(translation);
    if (translation === text) {
      return res.json({ text, translation: "Everything looks good to me!" });
    }
    res.json({ text, translation: translation });
  });
};

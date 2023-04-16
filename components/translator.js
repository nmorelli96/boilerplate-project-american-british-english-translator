const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translateWords(wordsArr, locale) {
    if (locale === "american-to-british") {
      for (let i = 0; i < wordsArr.length; i++) {
        if (Object.keys(americanOnly).includes(wordsArr[i])) {
          let translatedWord = Object.values(americanOnly).find(
            (translation) => americanOnly[wordsArr[i]] === translation
          );
          wordsArr[i] = `<span class="highlight">${translatedWord}</span>`;
        }
        if (Object.keys(americanToBritishSpelling).includes(wordsArr[i])) {
          let translatedWord = Object.values(americanToBritishSpelling).find(
            (translation) =>
              americanToBritishSpelling[wordsArr[i]] === translation
          );
          wordsArr[i] = `<span class="highlight">${translatedWord}</span>`;
        }
      }
    } else if (locale === "british-to-american") {
      for (let i = 0; i < wordsArr.length; i++) {
        if (Object.keys(britishOnly).includes(wordsArr[i])) {
          let translatedWord = Object.values(britishOnly).find(
            (translation) => britishOnly[wordsArr[i]] === translation
          );
          wordsArr[i] = `<span class="highlight">${translatedWord}</span>`;
        }
        if (Object.values(americanToBritishSpelling).includes(wordsArr[i])) {
          let translatedWord = Object.keys(americanToBritishSpelling).find(
            (translation) =>
              americanToBritishSpelling[translation] === wordsArr[i]
          );
          wordsArr[i] = `<span class="highlight">${translatedWord}</span>`;
        }
      }
    }
    return wordsArr;
  }

  translateTitles(wordsArr, locale) {
    if (locale === "american-to-british") {
      for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].slice(-1) == ",") {
          if (
            Object.keys(americanToBritishTitles).includes(
              wordsArr[i].slice(0, -1)
            )
          ) {
            let translatedWord = Object.values(americanToBritishTitles).find(
              (translation) =>
                americanToBritishTitles[wordsArr[i].slice(0, -1)] ===
                translation
            );
            wordsArr[i] = `<span class="highlight">${
              translatedWord + ","
            }</span>`;
          }
        } else {
          if (Object.keys(americanToBritishTitles).includes(wordsArr[i])) {
            let translatedWord = Object.values(americanToBritishTitles).find(
              (translation) =>
                americanToBritishTitles[wordsArr[i]] === translation
            );
            wordsArr[i] = `<span class="highlight">${translatedWord}</span>`;
          }
        }
      }
    } else if (locale === "british-to-american") {
      for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].slice(-1) == ",") {
          if (
            Object.values(americanToBritishTitles).includes(
              wordsArr[i].slice(0, -1)
            )
          ) {
            let translatedWord = Object.keys(americanToBritishTitles).find(
              (translation) =>
                americanToBritishTitles[translation] ===
                wordsArr[i].slice(0, -1)
            );
            wordsArr[i] = `<span class="highlight">${
              translatedWord + ","
            }</span>`;
          }
        } else {
          if (Object.values(americanToBritishTitles).includes(wordsArr[i])) {
            let translatedWord = Object.keys(americanToBritishTitles).find(
              (translation) =>
                americanToBritishTitles[translation] === wordsArr[i]
            );
            wordsArr[i] = `<span class="highlight">${translatedWord}</span>`;
          }
        }
      }
    }
    return wordsArr;
  }

  translateTime(wordsArr, locale) {
    if (locale === "american-to-british") {
      for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].match(/([0-9]+[:][0-9]+)/)) {
          wordsArr[i] = `<span class="highlight">${wordsArr[i].replace(
            /:/g,
            "."
          )}</span>`;
        }
      }
    } else if (locale === "british-to-american") {
      for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].match(/([0-9]+[.][0-9]+)/)) {
          wordsArr[i] = `<span class="highlight">${wordsArr[i].replace(
            /[.]/g,
            ":"
          )}</span>`;
        }
      }
    }
    return wordsArr;
  }

  translateAll(text, locale) {
    console.log(`text is = "${text}" and locale = ${locale}`);
    let wordsArr = text.split(" ");
    console.log(`wordsArr = ${wordsArr}`);

    let translatedArr = this.translateWords(wordsArr, locale);
    console.log(`translatedArr = ${translatedArr}`);

    let timeIndex = translatedArr.findIndex((value) =>
      /([0-9]+[.:][0-9]+)/.test(value)
    );

    let titleIndex = translatedArr.findIndex((value) =>
      /(mr\.?,?|mrs\.?,?|ms\.?,?|mx\.?,?|dr\.?,?|prof\.?,?)/i.test(value)
    );

    if (timeIndex != -1) {
      translatedArr = this.translateTime(wordsArr, locale);
      console.log(`time wordsArr = ${wordsArr}`);
    }

    if (titleIndex != -1) {
      translatedArr = this.translateTitles(wordsArr, locale);
      console.log(`title wordsArr = ${wordsArr}`);
    }

    return translatedArr.join(" ");
  }
}

module.exports = Translator;

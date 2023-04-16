const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

const translator = new Translator();
const locales = ["american-to-british", "british-to-american"];

suite("Unit Tests", () => {
  test("Translate to British English 1", (done) => {
    let text = "Mangoes are my favorite fruit.";
    assert.equal(
      translator.translateAll(text, locales[0]),
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
    done();
  });
  test("Translate to British English 2", (done) => {
    let text = "I ate yogurt for breakfast.";
    assert.equal(
      translator.translateAll(text, locales[0]),
      'I ate <span class="highlight">yoghurt</span> for breakfast.'
    );
    done();
  });
  test("Translate to British English 3", (done) => {
    let text = "We had a party at my friend's condo";
    assert.equal(
      translator.translateAll(text, locales[0]),
      'We had a party at my friend\'s <span class="highlight">flat</span>'
    );
    done();
  });
  test("Translate to British English 4", (done) => {
    let text = "Can you toss this in the trashcan for me?";
    assert.equal(
      translator.translateAll(text, locales[0]),
      'Can you toss this in the <span class="highlight">bin</span> for me?'
    );
    done();
  });
  test("Translate to British English 5", (done) => {
    let text = "The parking lot was full.";
    assert.equal(
      translator.translateAll(text, locales[0]),
      "The parking lot was full."
    );
    done();
  });
  test("Translate to British English 6", (done) => {
    let text = "Like a high tech Rube Goldberg machine.";
    assert.equal(
      translator.translateAll(text, locales[0]),
      "Like a high tech Rube Goldberg machine."
    );
    done();
  });
  test("Translate to British English 7", (done) => {
    let text = "To play hooky means to skip class or work.";
    assert.equal(
      translator.translateAll(text, locales[0]),
      "To play hooky means to skip class or work."
    );
    done();
  });
  test("Translate to British English 8", (done) => {
    let text = "No Mr. Bond, I expect you to die.";
    assert.equal(
      translator.translateAll(text, locales[0]),
      'No <span class="highlight">Mr</span> Bond, I expect you to die.'
    );
    done();
  });
  test("Translate to British English 9", (done) => {
    let text = "No Mr. Bond, I expect you to die.";
    assert.equal(
      translator.translateAll(text, locales[0]),
      'No <span class="highlight">Mr</span> Bond, I expect you to die.'
    );
    done();
  });
  test("Translate to British English 10", (done) => {
    let text = "Dr. Grosh will see you now.";
    assert.equal(
      translator.translateAll(text, locales[0]),
      '<span class="highlight">Dr</span> Grosh will see you now.'
    );
    done();
  });
  test("Translate to British English 11", (done) => {
    let text = "Lunch is at 12:15 today.";
    assert.equal(
      translator.translateAll(text, locales[0]),
      'Lunch is at <span class="highlight">12.15</span> today.'
    );
    done();
  });
  test("Translate to American English 1", (done) => {
    let text = "We watched the footie match for a while.";
    assert.equal(
      translator.translateAll(text, locales[1]),
      'We watched the <span class="highlight">soccer</span> match for a while.'
    );
    done();
  });
  test("Translate to American English 2", (done) => {
    let text = "paracetamol takes up to an hour to work.";
    assert.equal(
      translator.translateAll(text, locales[1]),
      '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    );
    done();
  });
  test("Translate to American English 3", (done) => {
    let text = "First, caramelise the onions.";
    assert.equal(
      translator.translateAll(text, locales[1]),
      'First, <span class="highlight">caramelize</span> the onions.'
    );
    done();
  });
  test("Translate to American English 4", (done) => {
    let text = "I spent the bank holiday at the funfair .";
    assert.equal(
      translator.translateAll(text, locales[1]),
      'I spent the bank holiday at the <span class="highlight">carnival</span> .'
    );
    done();
  });
  test("Translate to American English 5", (done) => {
    let text = "I had a bicky then went to the chippy .";
    assert.equal(
      translator.translateAll(text, locales[1]),
      'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span> .'
    );
    done();
  });
  test("Translate to American English 6", (done) => {
    let text = "I've just got bits and bobs in my bum bag.";
    assert.equal(
      translator.translateAll(text, locales[1]),
      "I've just got bits and bobs in my bum bag."
    );
    done();
  });
  test("Translate to American English 7", (done) => {
    let text = "The car boot sale at Boxted Airfield was called off.";
    assert.equal(
      translator.translateAll(text, locales[1]),
      "The car boot sale at Boxted Airfield was called off."
    );
    done();
  });
  test("Translate to American English 8", (done) => {
    let text = "Have you met Mrs Kalyani?";
    assert.equal(
      translator.translateAll(text, locales[1]),
      'Have you met <span class="highlight">Mrs.</span> Kalyani?'
    );
    done();
  });
  test("Translate to American English 9", (done) => {
    let text = "Prof Joyner of King's College, London.";
    assert.equal(
      translator.translateAll(text, locales[1]),
      '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
    );
    done();
  });
  test("Translate to American English 10", (done) => {
    let text = "Tea time is usually around 4 or 4.30";
    assert.equal(
      translator.translateAll(text, locales[1]),
      'Tea time is usually around 4 or <span class="highlight">4:30</span>'
    );
    done();
  });
  test("Highlight translation", (done) => {
    let text = "I ate yogurt for breakfast";
    assert.equal(
      translator.translateAll(text, locales[0]),
      'I ate <span class="highlight">yoghurt</span> for breakfast'
    );
    done();
  });
  test("Highlight translation 2", (done) => {
    let text = "We watched the footie match for a while.";
    assert.equal(
      translator.translateAll(text, locales[1]),
      'We watched the <span class="highlight">soccer</span> match for a while.'
    );
    done();
  });
  test("Highlight translation 3", (done) => {
    let text = "paracetamol takes up to an hour to work.";
    assert.equal(
      translator.translateAll(text, locales[1]),
      '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    );
    done();
  });
});

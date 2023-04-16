const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

const translator = new Translator();
const locales = ["american-to-british", "british-to-american"];

suite("Functional Tests", () => {
  test("POST with text and locale fields", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.equal(
          res.body.translation,
          'Mangoes are my <span class="highlight">favourite</span> fruit.'
        );
        done();
      });
  });
  test("POST with text and invalid locale field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "saddas", locale: "grssgrrsg" })
      .end((err, res) => {
        assert.equal(res.status, 400);
        assert.deepEqual(res.body, { error: "Invalid value for locale field" });
        done();
      });
  });
  test("POST with missing text field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ locale: "american-to-british" })
      .end((err, res) => {
        assert.equal(res.status, 400);
        assert.deepEqual(res.body, { error: "Required field(s) missing" });
        done();
      });
  });
  test("POST with missing locale field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "saddas", locale: "" })
      .end((err, res) => {
        assert.equal(res.status, 400);
        assert.deepEqual(res.body, { error: "Required field(s) missing" });
        done();
      });
  });
  test("POST with empty text", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "saddas", locale: "" })
      .end((err, res) => {
        assert.equal(res.status, 400);
        assert.deepEqual(res.body, { error: "Required field(s) missing" });
        done();
      });
  });
  test("POST with text that need no translation", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "british-to-american",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.equal(res.body.translation, "Everything looks good to me!");
        done();
      });
  });
});

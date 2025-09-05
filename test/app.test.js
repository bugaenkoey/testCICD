const request = require("supertest");

const { app } = require("../app");

//Test group name. For example, "Express tests"
describe("Express tests", function () {
  it("should return Hello Test", function (done) {
    request(app).get("/").expect("Hello Test").end(done);
  });
});

import { expect } from "chai";
import request from "supertest";
import server from "../server.js";
import STATUS_CODE from "../constants/statusCode.js";
import User from "../models/usersModel.js";
import jwt from "jsonwebtoken";

let app = request.agent(server);

//    how to add authorization:
// it("Get some random Info", function(done) {
//   chai
//     .request(baseUrl)
//     .get("/someRandomApi")
//     .auth(token, { type: 'bearer' })  <<<<<<<<<<<<<
//     .end(function(err, res) {
//       expect(res).to.have.status(200);
//       done();
//     });
// });

// function generateAuthToken(userId) {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "7d",
//   });
//   return token;
// }
// const token = generateAuthToken("give valid user id");
// .auth(token, { type: 'bearer' })  for auth

describe.only("User requests", () => {
  // GET
  describe("GET request", () => {
    it("Checks if we get data", (done) => {
      app.get("/api/v1/users").end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        done();
      });
    });

    it("Checks if data is not empty", (done) => {
      app.get("/api/v1/users").end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.status).to.equal(200);
        expect(res.body).to.not.have.lengthOf(0);
        expect(res.body).to.not.be.empty;
        done();
      });
    });
  });

  // POST
  describe("POST create account request", () => {
    // runs once before the first test in this block
    // before((done) => {
    //   User.deleteMany({ name: /test/gi })
    //     .then(() => done())
    //     .catch((err) => done(err));
    // });

    // runs once after all tests in this suite are done
    after((done) => {
      User.deleteMany({ name: /test/gi })
        .then(() => done())
        .catch((err) => done(err));
    });

    it("Should return status 401 (created) ", (done) => {
      app
        .post("/api/v1/users/create")
        .send({
          name: "test",
          email: "test@gmail.com",
          password: "123",
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          expect(res.status).to.equal(STATUS_CODE.CREATED);
          expect(res.body).to.be.an("object");
          done();
        });
    });

    it("Should return status 409 (conflict)", (done) => {
      app
        .post("/api/v1/users/create")
        .send({
          name: "test",
          email: "test@gmail.com",
          password: "123",
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          expect(res.status).to.equal(STATUS_CODE.CONFLICT);
          done();
        });
    });

    it("Should return 400 [bad request] for missing field in body", (done) => {
      app
        .post("/api/v1/users/create")
        .send({
          // missing name
          email: "tests@gmail.com",
          password: "123",
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          expect(res.status).to.equal(400);
          done();
        });
    });
  });

  describe("POST Login request", () => {
    it("Should return 200", (done) => {
      app
        .post("/api/v1/users/login")
        .send({
          email: "hasan@gmail.com",
          password: "123",
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("object");
          done();
        });
    });

    it("Should return 400 [bad request] for missing field", (done) => {
      app
        .post("/api/v1/users/login")
        .send({
          password: "123",
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.equal(STATUS_CODE.BAD_REQUEST);
          done();
        });
    });

    it("Should return 404 [not found] for invalid credentials", (done) => {
      app
        .post("/api/v1/users/login")
        .send({
          email: "NOTFOUND@gmail.com",
          password: "123",
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.equal(STATUS_CODE.NOT_FOUND);
          done();
        });
    });
  });

  describe("DELETE request", () => {
    it.skip("Should return status 200 for deleting ", (done) => {
      app
        .delete("/api/v1/users/delete/65c396998f5b95faf080ee47")
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("object");
          done();
        });
    });

    it("Should return 404 [not found]", (done) => {
      app.delete("/api/v1/users/delete").end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal("User not found");
        done();
      });
    });
  });
});

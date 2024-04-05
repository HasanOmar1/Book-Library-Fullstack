import { expect } from "chai";
import request from "supertest";
import server from "../server.js";
import Books from "../models/bookModel.js";
import jwt from "jsonwebtoken";

const app = request.agent(server);

//    how to add authorization:
function generateAuthToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}
// const token = generateAuthToken("65c47ea85ddb712dae8c924e");
// .auth(token, { type: 'bearer' })  for auth

describe("Books requests", () => {
  //GET request
  describe("GET request", () => {
    it("Should return all the database as array", (done) => {
      app.get("/api/v1/books").end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        done();
      });
    });

    describe("FindBookByName function", () => {
      it("Should return an array of objects with the searched name", (done) => {
        app.get("/api/v1/books/search/harry").end((err, res) => {
          if (err) done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("array");
          done();
        });
      });

      it("Should return 404 not found for providing book that isnt in the database", (done) => {
        app.get("/api/v1/books/search/harryyy").end((err, res) => {
          if (err) done(err);
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal("Book not found");
          done();
        });
      });

      it("Should return 404 book not found for not providing name", (done) => {
        app.get("/api/v1/books/search").end((err, res) => {
          if (err) done(err);
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal("Book not found");
          done();
        });
      });

      describe("FindBookByCategory function", () => {
        it("Should return an array of objects with the searched category ", (done) => {
          app.get("/api/v1/books/category/art").end((err, res) => {
            if (err) done(err);
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("array");
            done();
          });
        });

        it("Should return 404 not found for providing a valid category", (done) => {
          app.get("/api/v1/books/category/randomCategory").end((err, res) => {
            if (err) done(err);
            expect(res.status).to.equal(404);
            expect(res.body.message).to.equal("Book not found");
            done();
          });
        });
      });

      describe("findBookByAuthor function", () => {
        it("Should return an array of objects with the searched author ", (done) => {
          app.get("/api/v1/books/author/stan").end((err, res) => {
            if (err) done(err);
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("array");
            done();
          });
        });

        it("Should return 404 not found for providing a valid category", (done) => {
          app.get("/api/v1/books/author/randomAuthor").end((err, res) => {
            if (err) done(err);
            expect(res.status).to.equal(404);
            expect(res.body.message).to.equal("Book not found");
            done();
          });
        });
      });
    });
  });
  //POST request
  describe("POST requests", () => {
    const newBook = {
      volumeInfo: {
        imageLinks: {
          thumbnail: "test",
        },
        title: "test",
        authors: ["test"],
        publisher: "test",
        publishedDate: "2018-07-31T00:00:00.000Z",
        description: "test",
        pageCount: 72,
        categories: ["test"],
        maturityRating: "test",
      },
      comments: [],
    };

    after((done) => {
      Books.findOneAndDelete({ "volumeInfo.title": "test" })
        .then(() => done())
        .catch((err) => done(err));
    });

    it("Adds new book to database", (done) => {
      app
        .post("/api/v1/books/")
        .send(newBook)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });

  //PUT requests
  describe("PUT requests", () => {
    // const token = generateAuthToken("65c47ea85ddb712dae8c924e");

    it("Add book to library, protected", (done) => {
      app
        .put("/api/v1/books/addBook/65a12f256a5b5ef3c0103173")
        .auth(token, { type: "bearer" })
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });

  //Delete requests
  describe.skip("delete requests", () => {
    const token = generateAuthToken("65b19a079528f804c2c229ba");

    it("Removes book from library, protected", (done) => {
      app
        .put("/api/v1/books/removeBook/65a12f256a5b5ef3c0103173")
        .auth(token, { type: "bearer" })
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });
});

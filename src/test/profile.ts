import { Profile } from "../models/Profile";

import chai from "chai";
import chaiHttp from "chai-http";
import app from "../api";
let should = chai.should();

chai.use(chaiHttp);

describe("Profile", () => {
  beforeEach((done) => {
    //Before each test we empty the database
    Profile.remove({}, (err) => {
      done();
    });
  });
  describe("/GET profile", () => {
    it("it should GET all the profiles", (done) => {
      chai
        .request(app)
        .get("/api/profile")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});

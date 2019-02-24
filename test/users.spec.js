import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import User from '../models';
import { type } from 'os';

const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('Users', () => {
  beforeEach(done => {
    done();
  });

  // Test GET /users route
  describe('GET /users', () => {
    it('it should GET all the users', done => {
      chai
        .request(app)
        .get('/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.equal(10);
          done();
        });
    });

    it('it should GET correct users', done => {
      chai
        .request(app)
        .get('/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body[0].should.be.an('object');
          res.body[0].name.should.be.a('string');
          res.body[0].name.should.equal('이정도');
          done();
        });
    });
  });

  describe('GET /users/:id', () => {
    it('it should GET correct user by ID', done => {
      chai
        .request(app)
        .get('/users/1')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          res.body.should.have.keys(
            'id',
            'name',
            'username',
            'email',
            'phone',
            'website',
            'province',
            'city',
            'district',
            'street',
            'zipcode',
            'createdAt',
            'updatedAt'
          );
          expect(res.body.name).to.be.a('string');
          expect(res.body.name).to.equal('이정도');
          done();
        });
    });
  });

  describe('POST /users', () => {
    it('it should POST', done => {
      chai
        .request(app)
        .post('/users')
        .type('form')
        .send({
          formData1: '1',
          formData2: '2'
        })
        .end((err, res) => {
          res.should.have.status(201);
          console.log(res.body);
          expect(res.body).to.be.an('object');
          res.body.should.have.keys('formData1', 'formData2');
          expect(res.body.formData1).to.be.a('string');
          expect(res.body.formData1).to.equal('1');
          expect(res.body.formData2).to.equal('2');
          done();
        });
    });
  });
});

process.env.NODE_ENV = 'test';

const sequelize = require('sequelize');
const {Employee} = require('../models/index');

const chai = require('chai');
const chaiHttp = require('chai');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Employee', () => {
  beforeEach((done) => {
    done();
  })

  describe('/GET /employee', () => {
    it('It should GET all the EMPLOYEES',(done) => {
      chai.request(server)
        .get('/book')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(4);
          done();
        })
    })
  })
  describe('/POST  /employee', () => {
    it('It should POST a create a new Employee', (done) => {
      const employee = 
      {
        employee_id: "040518-214",
        employee_fName: "FirstName",
        employe_lName: "LastName"
      }
      chai.request(server)
        .post('/employee')
        .send(employee)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property('employee_id');
          res.body.should.have.property('employee_fName');
          res.body.should.have.property('employee_lName');
          done()
        })
    }) 
  })
  describe('/GET employee/:id', () => {
    const employeeId = "040518-214";
    it('It should get a Book based on given ID', (done) => {
      chai.request(server)
        .post('/employee/' + employeeId)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('employee_id');
          res.body.should.have.property('employee_fName');
          res.body.should.have.property('employee_lName');
          done();
        })
    })
  })
})

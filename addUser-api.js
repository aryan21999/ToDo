const expect = require('chai').expect;
const sinon = require('sinon'); 
var db = require('../mongodb');

const AddUserApi = require('../api/addUser');


describe('AddUser Api - addUser', function() {
  it('should throw an error if contact already exist ', function () {
   sinon.stub(db.Accounts, 'findOne');

   db.Accounts.findOne.throws();
    
   expect(AddUserApi.addUser)
   db.Accounts.findOne.restore();
});
});



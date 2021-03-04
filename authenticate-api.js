const expect = require('chai').expect;
const sinon = require('sinon'); 
var db = require('../mongodb');

const AuthenticateApi = require('../api/authenticate')


describe('Authenticate Api - authenticate', function() {
  it('should throw an error if accessing the database fails', function () {
   sinon.stub(db.Accounts, 'findOne');

   db.Accounts.findOne.throws();
    
   expect(AuthenticateApi.authenticate)
   db.Accounts.findOne.restore();
});
});



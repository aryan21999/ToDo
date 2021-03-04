const expect = require('chai').expect;
const sinon = require('sinon'); 
var db = require('../mongodb');

const CheckTodoApi = require('../api/checkTodo');


describe('CheckTodo Api - addTodo', function() {
  it('should throw an error if updation failed', function () {
   sinon.stub(db.Accounts, 'findOne');

   db.Accounts.findOne.throws();
    
   expect(CheckTodoApi.checkTodo)
   db.Accounts.findOne.restore();
});
});



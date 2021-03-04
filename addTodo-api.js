const expect = require('chai').expect;
const sinon = require('sinon'); 
var db = require('../mongodb');

const AddTodoApi = require('../api/addTodo');


describe('AddTodo Api - addTodo', function() {
  it('should throw an error if todo already exist', function () {
   sinon.stub(db.Accounts, 'findOne');

   db.Accounts.findOne.throws();
    
   expect(AddTodoApi.addTodo)
   db.Accounts.findOne.restore();
});
});



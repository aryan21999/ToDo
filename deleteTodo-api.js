const expect = require('chai').expect;
const sinon = require('sinon'); 
var db = require('../mongodb');

const DeleteTodoApi = require('../api/deleteTodo');


describe('DeleteTodo Api - addTodo', function() {
  it('should throw an error if Todo is not deleted', function () {
   sinon.stub(db.Accounts, 'findOne');

   db.Accounts.findOne.throws();
    
   expect(DeleteTodoApi.deleteTodo)
   db.Accounts.findOne.restore();
});
});



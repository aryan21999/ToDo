const expect = require('chai').expect;
const sinon = require('sinon'); 
var db = require('../mongodb');

const ListTodoApi = require('../api/listTodo');


describe('ListTodo Api - listTodo', function() {
  it('should throw an error if no list is found', function () {
   sinon.stub(db.Accounts, 'findOne');

   db.Accounts.findOne.throws();
    
   expect(ListTodoApi.listTodo)
   db.Accounts.findOne.restore();
});
});



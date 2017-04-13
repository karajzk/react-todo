var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList',()=>{
    it('should exist',()=>{
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each totd item',()=>{
        var todos = [{
            id:1,
            text: 'something'
        },{
            id:2,
            text: 'check mail'
        }];
        var todoList=TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents=TestUtils.scryRenderedComponentsWithType(todoList,Todo);

        expect(todosComponents.length).toBe(2);
    });
});

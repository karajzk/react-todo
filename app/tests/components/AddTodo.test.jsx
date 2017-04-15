const React = require("react");
const ReactDOM = require("react-dom");
const TestUtils = require("react-dom/test-utils");
const expect = require("expect");
const $ = require("jQuery");

import AddTodo from "AddTodo";

describe("AddTodo", () => {
  it("should exist", () => {
    expect(AddTodo).toExist();
  });

  it("should call onAddTodo prop with valid data", () => {
    const todoText = "check mail";
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it("should not call onAddTodo prop with invalid data", () => {
    const todoText = "";
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toNotHaveBeenCalled();
  });


});

const React = require("react");
const TestUtils = require("react-dom/test-utils");
const expect = require("expect");

import TodoApp from "TodoApp";

describe("TodoApp", () => {
  it("should exist", () => {
    expect(TodoApp).toExist();
  });

  it("should add todo to the todos state on handleAddTodo", () => {
    const todoText = "test test";
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({
      todos: []
    });
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it("should toggle completed value when handleToggle called", () => {
    const todoData = {id: "11", text: "test", completed: false};
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({
      todos: [todoData]
    });
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle("11");
    expect(todoApp.state.todos[0].completed).toBe(true);
  });

});

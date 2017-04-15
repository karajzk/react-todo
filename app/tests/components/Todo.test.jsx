const React = require("react");
const TestUtils = require("react-dom/test-utils");
const expect = require("expect");

import Todo from "Todo";

describe("Todo", () => {
  it("should exist", () => {
    expect(Todo).toExist();
  });

  it("should call onToggle prop with id on click", () => {
    const todoData = {
      id: "11",
      text: "test",
      completed: true
    };
    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={ spy } />);
    TestUtils.Simulate.click(todo.divRef);
    expect(spy).toHaveBeenCalledWith("11");
  });

});

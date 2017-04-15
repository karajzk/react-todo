const React = require("react");
const TestUtils = require("react-dom/test-utils");
const expect = require("expect");

import TodoSearch from "TodoSearch";

describe("TodoSearch", () => {
  it("should exist", () => {
    expect(TodoSearch).toExist();
  });

  it("should call onSeacrh with entered input text", () => {
    const searchText = "check mail";
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it("should call onSeacrh with proper checked value", () => {
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);


    expect(spy).toHaveBeenCalledWith(true, "");
  });

});

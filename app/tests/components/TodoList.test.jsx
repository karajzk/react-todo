const React = require("react");
const ReactDOM = require("react-dom");
const TestUtils = require("react-dom/test-utils");
const expect = require("expect");
const $ = require("jQuery");

import TodoList from "TodoList";
import Todo from "Todo";

describe("TodoList", () => {
    it("should exist", () => {
        expect(TodoList).toExist();
    });

    it("should render one Todo component for each totd item", () => {
        const todos = [
            {
                id: 1,
                text: "something"
            }, {
                id: 2,
                text: "check mail"
            }
        ];
        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(2);
    });
});

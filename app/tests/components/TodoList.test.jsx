const React = require("react");
const TestUtils = require("react-dom/test-utils");
const expect = require("expect");

import TodoList from "TodoList";
import Todo from "Todo";

describe("TodoList", () => {
    it("should exist", () => {
        expect(TodoList).toExist();
    });

    it("should render one Todo component for each totd item", () => {
        const todos = [
            {
                id: "1",
                text: "something"
            }, {
                id: "2",
                text: "check mail"
            }
        ];
        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(2);
    });

    it("should render empty message if no todos", () => {
        const todos = [];
        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        expect(todoList.pRef).toExist();
    });

});

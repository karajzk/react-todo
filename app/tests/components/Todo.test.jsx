const React = require("react");
const ReactDOM = require("react-dom");
const TestUtils = require("react-dom/test-utils");
const expect = require("expect");
const $ = require("jQuery");

import Todo from "Todo";

describe("Todo", () => {
    it("should exist", () => {
        expect(Todo).toExist();
    });
});

import expect from "expect";
import df from "deep-freeze-strict";

import * as reducers from "reducers";

describe("Reducers", () => {
    describe("searchTextReducer", () => {
        it("should set search text", () => {
            const action = {
                type: "SET_SEARCH_TEXT",
                searchText: "some search"
            };
            const res = reducers.searchTextReducer(df(""), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe("showCompletedReducer", () => {
        it("should toggle show completed", () => {
            const action = {
                type: "TOGGLE_SHOW_COMPLETED"
            };
            const res = reducers.showCompletedReducer(df(true), df(action));

            expect(res).toEqual(false);
        });
    });

    describe("todosReducer", () => {
        it("should add todo", () => {
            const action = {
                type: "ADD_TODO",
                text: "first to do"
            };
            const res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it("should toggle todo", () => {
            const action = {
                type: "TOGGLE_TODO",
                id: "11"
            };
            const todos = [
                {
                    id: "11",
                    text: "valami",
                    completed: false,
                    createdAt: 100,
                    completedAt: undefined
                }
            ];

            const res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(true);
            expect(res[0].completedAt).toBeA("number");
        });

    });

});
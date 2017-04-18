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
});
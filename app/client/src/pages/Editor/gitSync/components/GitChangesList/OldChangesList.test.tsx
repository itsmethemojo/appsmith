import type { GitStatusData } from "reducers/uiReducers/gitSyncReducer";
import { gitChangeListData } from "./OldChangesList";

describe("GitChangesList", () => {
  describe("gitChangesListData", () => {
    it("returns proper data", () => {
      const status: Partial<GitStatusData> = {
        conflicting: [],
        aheadCount: 1,
        behindCount: 1,
        isClean: false,
        modified: [],
        modifiedPages: 1,
        modifiedQueries: 1,
        remoteBranch: "string",
        modifiedJSObjects: 1,
        modifiedDatasources: 1,
        modifiedJSLibs: 1,
        discardDocUrl: "string",
      };
      const actual = gitChangeListData(status);
      expect(Array.isArray(actual)).toBeTruthy();
      const actualJSON = JSON.stringify(actual);
      expect(actualJSON.length).toBeGreaterThan(0);
      const expectedJSON =
        '[{"key":"change-status-widget","ref":null,"props":{"message":"1 page modified","iconName":"widget","hasValue":true},"_owner":null,"_store":{}},{"key":"change-status-query","ref":null,"props":{"message":"1 query modified","iconName":"query","hasValue":true},"_owner":null,"_store":{}},{"key":"change-status-js","ref":null,"props":{"message":"1 JS Object modified","iconName":"js","hasValue":true},"_owner":null,"_store":{}},{"key":"change-status-database-2-line","ref":null,"props":{"message":"1 datasource modified","iconName":"database-2-line","hasValue":true},"_owner":null,"_store":{}},{"key":"change-status-package","ref":null,"props":{"message":"1 library modified","iconName":"package","hasValue":true},"_owner":null,"_store":{}}]';
      expect(actualJSON).toEqual(expectedJSON);
    });
    it("returns empty array", () => {
      const actual = gitChangeListData();
      const expected: JSX.Element[] = [];
      expect(actual).toEqual(expected);
    });
  });
});

import { stringIsExactlyBoop } from "../index";

describe("sample tests", () => {
  test("snoops", async () => {
    expect(stringIsExactlyBoop("snoop")).toEqual(false);
  });

  test("boops", async () => {
    expect(stringIsExactlyBoop("boop")).toEqual(true);
  });
});

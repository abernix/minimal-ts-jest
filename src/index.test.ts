import defaultFunc from ".";

describe("index test", () => {
  test("with boop", () => {
    expect(defaultFunc()).toEqual("Yes, it booped");
  });
});

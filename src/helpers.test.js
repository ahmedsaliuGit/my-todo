import { limitText } from "./helpers";

describe("Text limiter", () => {
  test("Text doesn't exceed limit", () => {
    expect(limitText("THisis is me test out function")).toBe(
      "THisis is me test out function"
    );
  });

  test("Text that exceed limit should have ...", () => {
    expect(limitText("THisis is me test out functions to reuse")).toBe(
      "THisis is me test out functions..."
    );
  });

  test("Text that end with space is trimed", () => {
    expect(limitText("THis is me test out functionss ")).toBe(
      "THis is me test out functionss..."
    );
  });
});

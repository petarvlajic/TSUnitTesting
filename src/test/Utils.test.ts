import { Utils } from "../app/Utils";

describe("Utils test suite", () => {
  //  1
  test("First test", () => {
    const result = Utils.toUpperCase("abc");
    expect(result).toBe("ABC");
  });
  //  2
  test("Parse simple URL", () => {
    const parsedURL = Utils.parseUrl("http://localhost:8080/login");
    expect(parsedURL.href).toBe("http://localhost:8080/login");
    expect(parsedURL.port).toBe("8080");
    expect(parsedURL.protocol).toBe("http:");
    expect(parsedURL.query).toEqual({});
  });

  //   3
  test("parse URL with query", () => {
    const parseUrl = Utils.parseUrl(
      "http://localhost:8080/login?user=user&password=pass"
    );
    const expectedQuery = {
      user: "user",
      password: "pass",
    };
    expect(parseUrl.query).toEqual(expectedQuery);
    expect(expectedQuery).toBe(expectedQuery);
  });

  //   4
  test("test invalid URL", () => {
    function expectError() {
      Utils.parseUrl("");
    }
    expect(expectError).toThrowError();
  });

  //   5
  test.only("test invalid URL with try and catch", () => {
    try {
      Utils.parseUrl("");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", "Empty url!");
    }
  });
});

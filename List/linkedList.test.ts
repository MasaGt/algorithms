import { LinkedList } from "./linkedList";

describe("LinkedList init test", () => {

  test("init without values", () => {
    const list = new LinkedList<string>();
    expect('').toBe(list.toString());
  });

  test("init with values", () => {
    const list = new LinkedList<string>(["1", "2", "3"]);
    expect("1, 2, 3").toBe(list.toString())
  });

  test("isEmpty test with a empty list", () => {
    const list = new LinkedList<string>();
    let result: boolean = list.isEmpty();
    expect(result).toBeTruthy();
  });
  
  test("isEmpty test with a non-empty list", () => {
    const list = new LinkedList<string>(["1", "2", "3"]);
    let result: boolean = list.isEmpty();
    expect(result).toBeFalsy();
  });
});

describe("LinkedList insertion test", () => {
  test("push a element", () => {
    // TODO: pushメソッドの実装
    const list = new LinkedList<number>();
    list.push(1);
    expect("1").toBe(list.toString());
  });

});

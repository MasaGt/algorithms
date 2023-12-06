import { LinkedList } from "./linkedList";

let emptyStrList: LinkedList<string>;
let nonEmptyNumList: LinkedList<number>;

beforeEach(() => {
  emptyStrList = new LinkedList<string>();
  nonEmptyNumList = new LinkedList<number>([1, 5, 10]);
});
describe("LinkedList init test", () => {
  test("init without values", () => {
    expect("").toBe(emptyStrList.toString());
  });

  test("init with values", () => {
    expect("1, 5, 10").toBe(nonEmptyNumList.toString());
  });
});

describe("LinkedList insertion test", () => {
  test("add an element", () => {
    emptyStrList.add("1");
    expect("1").toBe(emptyStrList.toString());
  });
  test("addFirst", () => {
    nonEmptyNumList.addFirst(100);
    expect("100, 1, 5, 10").toBe(nonEmptyNumList.toString());
  });
  test("addLast", () => {
    nonEmptyNumList.addLast(0);
    expect("1, 5, 10, 0").toBe(nonEmptyNumList.toString());
  });
});

describe("get tests", () => {
  test("get form non empty list", () => {
    expect(5).toBe(nonEmptyNumList.get(1));
  });
  test("get form empty list", () => {
    expect(undefined).toBe(emptyStrList.get(1));
  });
  test("getFirst", () => {
    expect(1).toBe(nonEmptyNumList.getFirst());
  });
});

describe("isEmpty test", () => {
  test("empty list", () => {
    expect(emptyStrList.isEmpty()).toBeTruthy();
  });
  test("non empty list", () => {
    expect(nonEmptyNumList.isEmpty()).toBeFalsy();
  });
});

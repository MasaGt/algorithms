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
});

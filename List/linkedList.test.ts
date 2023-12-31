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
    expect(emptyStrList.get(1)).toBeUndefined();
  });
  test("getFirst from non-empty list", () => {
    expect(1).toBe(nonEmptyNumList.getFirst());
  });
  test("getLast from non-empty list", () => {
    expect(10).toBe(nonEmptyNumList.getLast());
  });
  test("getLast from empty list", () => {
    expect(emptyStrList.getLast()).toBeUndefined();
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

describe("contains test", () => {
  test("specified existing value", () => {
    expect(nonEmptyNumList.contains(1)).toBeTruthy();
  });
  test("specfied non existing value", () => {
    expect(nonEmptyNumList.contains(0)).toBeFalsy();
  });
});

describe("remove tests", () => {
  test("remove from non-empty list", () => {
    const result = nonEmptyNumList.remove(1);
    expect(5).toBe(result);
    expect("1, 10").toBe(nonEmptyNumList.toString());
  });
  test("remove from empty list", () => {
    // check if RangeError is thrown
    expect(() => {
      emptyStrList.remove(0);
    }).toThrow(RangeError);
  });
});

describe("clear tests", () => {
  test("clear from non-empty list", () => {
    nonEmptyNumList.clear();
    expect("").toBe(nonEmptyNumList.toString());
  });
});

describe("operations", () => {
  test("operations to empty list", () => {
    emptyStrList.add("Hello");
    emptyStrList.add("World");
    emptyStrList.addFirst("Test");
    emptyStrList.addLast("!");

    // anti-pattern Assertion Roulette
    expect("World").toBe(emptyStrList.get(2));
    expect("Test").toBe(emptyStrList.getFirst());
    expect("!").toBe(emptyStrList.getLast());

    const result = emptyStrList.remove(2);
    expect("World").toBe(result);
  });
});

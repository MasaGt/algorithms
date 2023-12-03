/**
 * 片側から走査していく方法
 * @param data ソート対象
 * @param start 配列の操作範囲の最初のインデックス
 * @param end 配列の操作範囲の末尾のインデックス
 * @returns
 */
export function quickSort(data: number[], start: number, end: number): void {
  // base case: 長さが1よりも長い配列
  if (start <= end) {
    // ピボット未満のデータを挿入する位置
    let cur_index: number = start;
    let pivot: number = data[end];

    // startからpivotの手前まで走査
    for (let i = start; i <= end - 1; i++) {
      if (data[i] < pivot) {
        // ピボット未満のデータを先頭に集める
        let temp: number = data[cur_index];
        data[cur_index] = data[i];
        data[i] = temp;
        cur_index++;
      }
    }

    // この操作によってピボット未満のデータがデータ列の先頭に来る構造になる
    let temp: number = pivot;
    data[end] = data[cur_index];
    data[cur_index] = temp;

    quickSort(data, start, cur_index - 1);
    quickSort(data, cur_index + 1, end);
  }

  return;
}

let data = [7, 6, 10, 2, 5, 1, 8, 3, 9, 4];
quickSort(data, 0, data.length - 1);
console.log(data);

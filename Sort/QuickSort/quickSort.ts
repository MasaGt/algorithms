/**
 * 両側から走査していく方法
 * @param data ソート対象
 * @param start 配列の操作範囲の最初のインデックス
 * @param end 配列の操作範囲の末尾のインデックス
 * @returns 
 */
function quickSort(data: number[],
                   start: number,
                   end: number): void
{
    //長さが1よりも長い配列
    if (start <= end) {

        // サーチ範囲を示すindexであるhead, tail
        let head = start;
        let tail = end;
        let pivot: number = data[Math.floor((head + tail)/2)];        

        //パーティショニング作成
        while (true) {
            
            //pivotより大きい値を見つける(左側に移すために)
            while (data[head] < pivot) {
                //最終的にheadはdata[head]=pivotで止まる
                head++;
            }

            //pivotより小さい値を見つける(右側に移すために)
            while (pivot < data[tail]) {
                //最終的にtailはdata[tail]=pivotで止まる
                tail--;
            }

            //範囲内を走査し終えたらbreak
            if (head >= tail) {
                break;
            }

            //swap
            let temp: number = data[head];
            data[head] = data[tail];
            data[tail] = temp;
            head++;
            tail--;
        }

        //pivotより小さい値のグループで再帰
        quickSort(data, start, head - 1);
        //pivotより大きい値のグループで再帰
        quickSort(data, tail + 1, end);
    }

    return;
};

let data = [7, 6, 10, 2, 5, 1, 8, 3, 9, 4];
quickSort(data, 0, data.length - 1);
console.log(data);
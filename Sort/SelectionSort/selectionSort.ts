/**
 * Sort data in descending order
 * @param data 
 * @returns sorted data
 */
const sort = (data: number[]): number[] => {

    for (let i = 0; i < data.length; i++) {
        let minValue = data[i];
        let minIndex = i;

        for (let k = i + 1; k < data.length; k++) {
            if (data[k] < minValue) {
                minValue = data[k];
                minIndex = k;
            }
        }

        // swap data so that min data comes forward
        let temp = data[i];
        data[i] = minValue;
        data[minIndex] = temp;
    }
    return data;
};

console.log(sort([10, 1, 8, 7, 26, 55]));

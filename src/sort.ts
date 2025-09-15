// undegined => 값
// [1,undefined] or [undefined,1]
// 막아주세요~ 라는거임 js에서는 저런일이 발생 가능
export function simpleSort(arr: number[]): number[] {
    //버블 소트 작성

    for(let i = 0; i<arr.length-1; i++) {
        for(let j = 0; j<arr.length-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//order를 제한할수있을까?
export function simpleSort(arr: number[], order: 'asc'): number[] {
    const sortedArr = [...arr]; // 원본 배열을 변경하지 않도록 복사
    for (let i = 0; i < sortedArr.length - 1; i++) {
        for (let j = 0; j < sortedArr.length - 1 - i; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }   
        }
    }
    return sortedArr;
}
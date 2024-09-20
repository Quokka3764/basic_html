// sort() 오름차순; 원래 array가 변경된다
// sort() 는 섬세한 부분이있고, 함수를 넣어서 정렬도 가능하다
//      .sort((a, b) => {}) 에서 a와 b를 비교할때
//      1. a를 b보다 뒤에 놓으려면 0보다 큰 숫자를 반환
//      2. a를 b보다 먼저 놓으려면 0보다 작은 숫자를 반환
//      3. 원래 순서를 그대로 두려면 0을 반환

// 19. 주어진 배열을 오름차순으로 정렬하세요. sort 사용하기.
// 위의 3가지만 기억하면 오름차순 & 내림차순 정렬 쉽다. a > b 를 만족하면 1을 반환 > 오름차순; -1 반환으로하면 내림차순
//     * 입력: [34, 7, 23, 32, 5, 62]
        //  let array = [34, 7, 23, 32, 5, 62]
        //  console.log(array.sort((a, b) => {
        //     return a > b ? 1 : -1
        //  }));


// 20. 주어진 배열을 내림차순으로 정렬하세요.
//     * 입력: [34, 7, 23, 32, 5, 62]
let array = [34, 7, 23, 32, 5, 62]
console.log(array.sort((a, b) => a > b ? -1 : 1 )) //내림차순
console.log(array.sort((a, b) => a > b ? 1 : -1)) // 오름차순
console.log(array) // 배열을 바꾼다는 사실!


//  15. 배열에서 특정 값이 존재하는지 확인하고, 존재하면 그 인덱스를 출력하세요.
//     * 입력: [5, 10, 15, 20, 25], 찾는 값: 15



// join() array를 string으로 묶을 수 있다. 굉장히 많이 사용함.
//  합계 계산하기
        // 배열 [5, 7, 8, 10, 12]의 모든 요소의 합을 계산하여 콘솔에 출력하세요.
        // let array = [5, 7, 8, 10, 12]
        // console.log(array.join('/'))
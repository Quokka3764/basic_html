// array = [5, 7, 8, 10, 12]
// console.log(array.reduce((p, n) => p + n, 0));
console.log('-----------------------')

///배열의 요소 필터링하기
/// 배열 [3, 45, 6, 12, 14]에서 10보다 큰 숫자만 새 배열에 저장하고, 이 새 배열을 콘솔에 출력하세요.

// filter() 뒤에 저렇게 함수를 만들어서 조건을달고 그걸 새롭게 배열해서 콘솔에 출력가능!
numbers = [3, 45, 6, 12, 14]
console.log(numbers.filter((x) => x > 10));

// find() 조건식에 가장 부합하는 첫번째 element를 출력한다.

console.log(numbers.filter((x) => x % 2 !== 0));

// sort 제대로 배우기.
// a, b를 비교했을때
    // 1) a를 b보다 나중에 정렬하려면 0보다 큰 숫자를 반환
    // 2) a를 b보다 먼저 정렬하려면 0보다 작은 숫자를 반환
    // 3) 원래 순서를 그대로 두려면 0을 반환

let array = [1, 9, 7, 5, 3];
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});

//map map 함수는 배열의 모든값을 순회하는 특징을 가지고 있다. 와 진짜편해! 

let HT = [1, 2, 3, 4, 5]
console.log(HT.map((x) => x + 1)) // 이런식으로 x값에 모든 배열값을 한번씩 순회한값을 출력하여 배열에 입력해준다!
// if else 조건문까지 활용하여 배열을 쉽게 골라낼수있다.
console.log(HT.map((x) => {
    if(x % 2 === 0){
        return '짝수';
    }else{
        return x;
    }
}));
// 1. 짝수만 출력하기
// 1부터 20까지의 숫자 중에서 짝수만 콘솔에 출력하는 코드를 작성하세요.
    // for(let i = 1; i <= 10; i++){
    //     let a = 2 * i
    //     console.log(a)
    // }

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// 2. 합계 계산하기
// 배열 [5, 7, 8, 10, 12]의 모든 요소의 합을 계산하여 콘솔에 출력하세요.
    // let array = [5, 7, 8, 10, 12]
    // let sum = 0
    // for(let i = 0; i < 5; i++){
    //     sum += array[i]
    // }
    // console.log(sum)


// 3. 배열 역순 출력하기
// 주어진 배열 [ 'apple', 'banana', 'cherry' ]를 역순으로 출력하세요. 배열의 순서를 변경하지 말고, 단순히 출력만 역순으로 하세요.
    // let array = [ 'apple', 'banana', 'cherry' ]
    // console.log(array.slice().reverse())
    // console.log(array)

   //4. 구구단 출력하기
  // 2단부터 9단까지의 구구단을 출력하는 코드를 작성하세요. 각 단은 "2 x 1 = 2"와 같은 형식으로 콘솔에 출력하세요.

    //   for(let i = 2; i <= 9; i++){
    //     for(let j= 1; j <= 9; j++){
    //         console.log(`${i} x ${j} = ${i * j}`);
    //     }
    //     console.log('')
    //   }

    // 5. 피보나치 수열 생성하기
    // 첫 번째 10개의 피보나치 수열 숫자를 생성하고 배열로 저장한 후, 이 배열을 콘솔에 출력하세요. 
    // 피보나치 수열에서 각 숫자는 앞의 두 숫자의 합으로 구성됩니다. < n은 배열의 길이임을 기억하면  좀 편함

        // function fibonacci(n){
        //     let A = [0, 1];
        //     if(A[n] === 1) return [0];
        //     if(A[n] === 2) return A;

        //     for(let i = 2; i < n; i++){
        //         A[i] = A[i - 1] + A[i - 2]
        //     }
        //     return A;
        // }
        // console.log(fibonacci(n));

    // 배열의 요소 필터링하기
    // 배열 [3, 45, 6, 12, 14]에서 10보다 큰 숫자만 새 배열에 저장하고, 이 새 배열을 콘솔에 출력하세요.

        // let A  = [3, 45, 6, 12, 14]
        // console.log(A.filter((x) => x > 10))
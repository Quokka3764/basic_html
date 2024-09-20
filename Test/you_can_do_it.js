//     1. 1부터 100까지의 숫자 중에서 3의 배수를 출력하세요.
//     * 입력: 1부터 100까지의 숫자

        // for(i = 1; i <=100; i++){
        //     if(i % 3 ===0){
        //         console.log(i)
        //     }
        // }

// 2. 주어진 배열의 모든 요소에 3을 더한 결과를 새 배열에 저장하고 출력하세요.
//     * 입력: [2, 4, 6, 8, 10]

        // let array = [2, 4, 6, 8, 10]
        // let array2 = [];
        // for(i = 0; i < array.length; i++){
        //     array2[i] = array[i] + 3
        // }
        // console.log(array2)

// 3. 문자열에서 각 문자의 ASCII 값을 출력하세요.
//     * 입력: "hello world"

        // let str = "hello world"
        // for(i = 0; i < str.length; i++){
        //     let ASCII = str.charCodeAt(i);
        //     console.log(`Character: ${str[i]}, ASCII: ${ASCII}`)
        // }

// 4. 주어진 배열의 모든 요소를 제곱한 값을 출력하세요. 
//     * 입력: [1, 2, 3, 4, 5]

        // let array = [1, 2, 3, 4, 5];
        // let array2 = [];
        // for(let i = 0; i < array.length; i++){
        //     array2[i] = array[i] * array[i]
        // }
        // console.log(array2)

// 5. 배열의 요소 중 짝수만 출력하세요. 
//     * 입력: [10, 20, 30, 40, 50]
        //     let array = [15, 11, 30, 40, 50];
        //     let array2 = [];
        //         for(let i = 0; i < array.length; i++){
        //             if(array[i] % 2 === 0){
        //                console.log(array[i])
        //             }
        //         }

// 배열의 요소 필터링하기
// 배열 [3, 45, 6, 12, 14]에서 10보다 큰 숫자만 새 배열에 저장하고, 이 새 배열을 콘솔에 출력하세요.

// let array = [3, 45, 6, 12, 14];
// let array2 = [];

//     for(let i = 0; i < array.length; i++){
//         if(array[i] > 10){
//             array2.push(array[i])
//         }
//     }
//     console.log(array2)
            console.log('---------------------------------')

    // 7. 주어진 배열에서 가장 큰 값을 찾아 출력하세요. 
     //     * 입력: [45, 22, 87, 53, 89, 48, 60]
        let array = [45, 22, 87, 53, 89, 48, 60];
        let A = 0;
        for(let i = 0; i < array.length; i++){
            if(array[i] > A){
                A = array[i]
            }
        }
        console.log(A)

        // 2. 주어진 배열의 모든 요소에 3을 더한 결과를 새 배열에 저장하고 출력하세요.
//     * 입력: [2, 4, 6, 8, 10]

            // let array = [2, 4, 6, 8, 10]
        
            // console.log(array.map((x) => x + 3))

// 16. 주어진 숫자 배열에서 양수만 더한 값을 출력하세요.
//     * 입력: [-1, 2, -3, 4, 5]
    
    // let array = [-1, 2, -3, 4, 5]
    // let sum = 0
    //     for(let i = 0; i < array.length; i++){
    //         if(array[i] > 0){
    //             sum += array[i]
    //         }
    //     }
    //     console.log(sum)

//17. 주어진 숫자 배열에서 0보다 작은 값들의 절대값을 구한 후 출력하세요. 
//     * 입력: [-1, -2, 3, -4, 5]

    let array = [-1, -2, 3, -4, 5];
    let numbers = 0;
        for(let i = 0; i < array.length; i++){
            if(array[i] < 0){
               numbers = array[i] * -1;
               console.log(numbers);
                }
            }
        
      

        
    
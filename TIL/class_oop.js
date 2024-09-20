/**
 * Class keyword
 */
class IdolModel{
    name; // class 안에 입력되어있는 요소를 property 라고하고 함수 역시 넣어서 활용가능
    year; // 일반적으로 다른언어에서는 이렇게 property를 지정해주지만 JS에서는 이둘을 생략가능하고 
        // 바로 constructor로 넘어가서 지정해줘도 무방함. 그래도 왠만하면 미리 정해놓는 습관을 들여놓는게 좋다.
    
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    sayName(){
        return `안녕하세요 저는 ${this.name}입니다` 
        // sayName이라는 function을 만든것이고 JS에서는 이렇게해도 function으러 인식함
        // 함수 이므로 저렇게 활용해서 다른 인스턴스들에 값이 입려되어도 변화가 가능하도록 설정가능!
    }
}

//constructor - 생성자
// 이렇게 class 안에다가 원하는 property를 구성하고
//constructor 로 지정해놓으면 여러개의 변수를 쉽게 통일가능하다. 밑에처럼 원하는만큼 인스턴스를 만들수있다

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul)

// 위에처럼 인스턴스를 만들면 실제 객체처럼 활용이 가능하다 예를들어

console.log(yuJin.name); //name인 안유진이 나온다.
console.log(yuJin.year);
console.log(yuJin.sayName()); // sayName 이라는 function이 잘 작동함을 알 수있다.
console.log(gaeul.sayName());

console.log(typeof IdolModel); // class 역시 함수 타입인걸 알 수있다.
console.log(typeof yuJin); // class로 생성한 인스턴스, yuJin은 객체, Object임을 알 수있다.

// static, get & set
// inheritance (상속개념...)
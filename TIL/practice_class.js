class Myfamily{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    sayHello(){
        return `안녕하세요 저는 ${this.name} 입니다`;
    }

}

class Male extends Myfamily{        //extends 를 사용해서 Myfamily로 부터 property들을 상속받음
    role;

    constructor(name, year, role){  // 생성자를 덮어쓰는, override하고 싶으면 이렇게 재설정 가능
        super(name, year);  // 이렇게 표현하면 Myfamily로 부터 상속받음을 표현가능. 
                            //정확하게는 기존의 생성자로부터의 특성을 그대로 이어받음
        this.role = role;  // Male이라는 class에서 새롭게 정한 property.
    }
        sayHello(){
            // return `안녕하세요 ${this.name} 입니다. ${this.role} 이에요~~`
            return `${super.sayHello()} ${this.role}이지요`;
        }
}

const hyotaean = new Myfamily('안효태', 1993)
console.log(hyotaean)

const Hyotaean2 = new Male('안효태', 1993, '아들')
console.log(Hyotaean2)
 
const Jiyea = new Myfamily('안지예', 1995);
console.log(Jiyea)
console.log(Jiyea.sayHello());

console.log(Hyotaean2.sayHello()); // Male class에 속해있던 Hyotaean2 가 super class의 property에 정의된 sayHello 함수를그대로 상속받은 모습.
console.log(Hyotaean2.sayHello());
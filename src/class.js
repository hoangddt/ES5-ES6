class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age  =age;
        this.gender =  gender;
    }

    display () {
        console.log(this.name + ", age:" + this.age + ", gender: " + this.gender);
    }
}

var human = new Human ("Hoang", 21, "Male");
human.display();

class Student extends Human {
    constructor() {
        super("N/A", 20, "N/A");
    }
}

var student = new Student();
student.display();
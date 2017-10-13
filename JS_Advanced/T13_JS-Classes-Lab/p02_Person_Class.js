/**
 * Created by PC on 14.7.2017 г..
 */
class Person{
    constructor (firstName,lastName,age,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }

    toString(){
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}
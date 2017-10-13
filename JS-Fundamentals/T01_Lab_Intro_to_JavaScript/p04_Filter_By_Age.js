/**
 * Created by PC on 23.5.2017 г..
 */
function filter(minAge,p1Name,p1Age,p2Name,p2Age){
    person1={name:p1Name, age:p1Age};
    person2={name:p2Name, age:p2Age};

    if(person1.age>=minAge){
        console.log(person1);
    }
    if(person2.age>=minAge){
        console.log(person2);
    }
}

filter(12, 'Ivan', 15, 'Asen', 9);

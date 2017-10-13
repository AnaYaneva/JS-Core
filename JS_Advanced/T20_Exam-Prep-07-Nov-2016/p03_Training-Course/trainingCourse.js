/**
 * Created by PC on 19.7.2017 г..
 */
class TrainingCourse{
    constructor(title, trainer ){
        this.title=title;
        this.trainer=trainer;
        this.topics=[];
    }

    addTopic(title, date) {
        this.topics.push({
            title: title,
            date: date
        });
        this.topics=this.topics.sort((a,b)=>new Date(a.date)-new Date(b.date));
        return this;
    }

    get firstTopic(){
        return this.topics[0];
    }

    get lastTopic (){
        return this.topics[this.topics.length-1];
    }

    toString(){
        let result=`Course "${this.title}" by ${this.trainer}`;

        if(this.topics.length!==0){
            for (let i = 0; i < this.topics.length; i++) {
                result+=` * ${this.topics[i].title} - ${this.topics[i].date}`;
            }
        }
        return result;
    }
}
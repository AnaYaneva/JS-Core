/**
 * Created by PC on 14.7.2017 г..
 */
class Rectangle{
    constructor(width, height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    calcArea(){
        return this.height*this.width;
    }
}
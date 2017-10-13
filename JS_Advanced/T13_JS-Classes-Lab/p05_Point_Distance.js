/**
 * Created by PC on 14.7.2017 г..
 */
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    static distance(a,b){
        const dx=a.x-b.x;
        const dy=a.y-b.y;
        return Math.sqrt(dx*dx+dy*dy);
    }
}
/**
 * Created by PC on 27.5.2017 г..
 */
function distance(x1, y1, x2, y2) {
    point1={x:x1,y:y1};
    point2={x:x2,y:y2};

    return Math.sqrt((x1-x2)**2+(y1-y2)**2);
}
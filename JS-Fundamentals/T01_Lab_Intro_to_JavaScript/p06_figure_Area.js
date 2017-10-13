/**
 * Created by PC on 24.5.2017 г..
 */
function calculateArea(H,W,h,w) {
    let maxH=Math.max(H,h);
    let maxW=Math.max(W,w);
    let area;
    if((H-h)*(W-w)>0){
        area=(maxH*maxW);
    }else {
        let emptyH = Math.abs(H - h);
        let emptyW = Math.abs(w - W);

        area = (maxH * maxW) - (emptyH * emptyW);
    }
    console.log(area);
}

calculateArea(5,3,2,4);

calculateArea(5,3,1,2);

calculateArea(5,3,6,2);

calculateArea(5,3,6,4);
calculateArea(5,3,5,3);
calculateArea(2,4,5,3);
calculateArea(13,2,5,8);
calculateArea(13,2,0,0);
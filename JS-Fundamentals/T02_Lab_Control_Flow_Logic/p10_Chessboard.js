/**
 * Created by PC on 28.5.2017 г..
 */
function chessboard(n) {
let html='<div class="chessboard">\n';
for(let i=0;i<n;i++){
    html+="  <div>\n";
    for(let j=0;j<n;j++){
        let color="white";
        if((i+j)%2==0){
            color="black"
        }
        html+=`    <span class="${color}"></span>\n`;
    }
    html+="  </div>\n";
}
    html+="</div>";
    return html;
}

console.log(chessboard(6));
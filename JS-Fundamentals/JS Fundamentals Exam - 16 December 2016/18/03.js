
function solve(input){
    let regex = /^<message\s+(?:[a-z]+)\=\"(?:[\w\s\.]+)\"\s+(?:[a-z]+)\=\"(?:[\w\s\.]+)\"(?:\s+[a-z]+=\"[\w\s\.]+\")*>(.*\n*.*)<\/message>$/g;
    let text=input;
    if(text.indexOf(' to')==-1||text.indexOf(' from')==-1){
       console.log('Missing attributes');
       return;
    }
    if(!regex.test(input)){
        console.log('Invalid message format');
        return;
    }
    let start=text.indexOf('to')+4;
    let end=text.indexOf('"',+start+1);
    let recipient=text.substring(start,end);
    start=text.indexOf("from")+6;
    end=text.indexOf('"',+start+1);
    let sender=text.substring(start,end);
    let message;

    text=text.replace(/\n/g,(match)=>"</p>\n        <p>");
    text=text.replace(/<message\s+(?:[a-z]+)\=\"(?:[\w\s\.]+)\"\s+(?:[a-z]+)\=\"(?:[\w\s\.]+)\"(?:\s+[a-z]+=\"[\w\s\.]+\")*>/g,
        (match)=>`
<article>
    <div>From: <span class="sender">${sender}</span></div>
    <div>To: <span class="recipient">${recipient}</span></div>
    <div>
        <p>`);
    text=text.replace(/<\/message>/g,(match)=>
    `</p>
    </div>
</article>`);


    console.log((text));
}

solve(`<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>`);
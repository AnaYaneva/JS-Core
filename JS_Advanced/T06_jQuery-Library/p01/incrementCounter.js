/**
 * Created by PC on 1.7.2017 г..
 */
function increment(selector) {
    $(selector).append("<textarea class='counter' disabled='disabled'></textarea>")
        .append("<button class='btn' id='incrementBtn'>Increment</button>")
        .append("<button class='btn' id='addBtn'>Add</button>")
        .append("<ul class='results'>");

    let textarea=$('textarea.counter');
    textarea.val(0);
    $('#incrementBtn').on('click',function(){
        textarea.val(+textarea.val()+1)
    });
    let list=$('ul.results');
    $('#addBtn').on('click',function(){
        let li=$(`<li>${textarea.val()}</li>`);
        li.appendTo(list);
    });

}

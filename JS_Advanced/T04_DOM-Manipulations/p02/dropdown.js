
function addItem() {
    let text=document.getElementById("newItemText");
    let value=document.getElementById("newItemValue");

    let option=document.createElement('option');
    let select=document.getElementById("menu");

    option.value=value.value;
    option.text=text.value;
    text.value='';
    value.value='';
    select.appendChild(option);


}

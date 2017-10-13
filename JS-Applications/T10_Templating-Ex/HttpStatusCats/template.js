$(() => {
    let source=$('#cat-template').html();
    let catTemp=Handlebars.compile(source);

    renderCatTemplate();

    function renderCatTemplate() {
        for(let cat of window.cats){
            $('#allCats').append(catTemp(cat));
        }
        $('.btn-primary').click(toggleStatus);

        function toggleStatus() {
            if($(this).text()==='Show status code'){
                $(this).text('Hide status code');
            }else{
                $(this).text('Show status code');
            }

            $(this).next().toggle();
        }
    }

});

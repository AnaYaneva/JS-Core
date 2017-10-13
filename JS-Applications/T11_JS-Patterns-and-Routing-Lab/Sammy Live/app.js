const app = Sammy('#main', function () {
    this.use('Handlebars','hbr');

    this.get('index.html', () => {
        this.swap('<h2>Home Page</h2>');
    });
    this.get('about', () => {
        this.swap('<h2>About Page</h2>');
    });
    this.get('contact', () => {
        this.swap('<h2>Contact Page</h2>');
    });

    this.get('#/greet/:name',function(ctx){
        ctx.loadPartials({
            first_line:'./templates/partial1.hbr',
            second_line:'./templates/partial2.hbr',
        }).then(function(){
            ctx.partials=this.partials;
            ctx.title="Handlebars";
            ctx.name=ctx.params.name;
            ctx.partial('./templates/greeting.hbr');
        });
    });
});

$(() => {
    app.run();
});


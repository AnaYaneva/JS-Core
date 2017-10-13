const handlers={};
const util={};

$(()=>{
    util.getPartials=function (page) {
        return {
            header:'./templates/common/header.hbs',
            footer:'./templates/common/footer.hbs',
            page:`./templates/${page}.hbs`
        }
    };

    const app=Sammy('#app',function () {
        this.use('Handlebars','hbs');

        //1.
        this.get('index.html',handlers.home);

        this.get('#/login',handlers.login);
        this.post('#/login',handlers.loginAction);

        this.get('#/register',handlers.register);
        this.post('#/register',handlers.registerAction);

        this.get('#/messages',function () {
            this.loadPartials({
                header:'./templates/common/header.hbs',
                footer:'./templates/common/footer.hbs',
                page:'./templates/myMessages.hbs'
            }).then(function () {
                this.partial('./templates/common/main.hbs');
            });
        });

        this.get('#/archive',function () {
            this.loadPartials({
                header:'./templates/common/header.hbs',
                footer:'./templates/common/footer.hbs',
                page:'./templates/archiveSent.hbs'
            }).then(function () {
                this.partial('./templates/common/main.hbs');
            });
        });

        this.get('#/send',function () {
            this.loadPartials({
                header:'./templates/common/header.hbs',
                footer:'./templates/common/footer.hbs',
                page:'./templates/sendMessage.hbs'
            }).then(function () {
                this.partial('./templates/common/main.hbs');
            });
        });

        this.get('#/logout',function (ctx) {
            auth.logout()
                .then(()=>{
                sessionStorage.clear();
                notifications.showInfo('Logout successful.');
                ctx.redirect('#');
            });
        });

    }).run();
});

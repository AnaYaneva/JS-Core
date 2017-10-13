const handlers={};

$(() => {
    const app=Sammy('#main', function () {
        this.use('Handlebars','hbr');

        this.get('index.html',displayWelcome);

        //this.get('',displayWelcome);

        function displayWelcome() {
            this.loadPartials({
                header:'./templates/common/header.hbr',
                footer:'./templates/common/footer.hbr'
            }).then(function () {
                this.partial('./templates/welcome.hbr');
            });
        }

        this.get('#/register',function () {
            //display register form
            this.loadPartials({
                header:'./templates/common/header.hbr',
                footer:'./templates/common/footer.hbr'
            }).then(function () {
                this.partial('./templates/register.hbr');
            });
        });

        this.get('#/contacts',handlers.contactsController);

        this.get('#/profile',function () {
            //edit profile form
            this.loadPartials({
                header:'./templates/common/header.hbr',
                footer:'./templates/common/footer.hbr'
            }).then(function () {
                this.partial('./templates/profile.hbr');
            });

        });

        this.get('#/logout',function () {
            //logout
            auth.logout()
                .then(function(){
                    localStorage.clear();
                    this.redirect('#');
                });

        });

        this.post('#/login',function (ctx) {
            //handle login
            console.log("Logging in...");
            let username=ctx.params.username;
            let password=ctx.params.password;
            auth.login(username,password)
                .then(function(data){
                    auth.saveSession(data);
                    ctx.redirect('#/contacts');
                });
        });

        this.post('#/register',function () {
            //handle register

        });

        this.post('#/profile',function () {
            //handle edit profile
        });
    }).run();
     //TODO
     //*user search
    //*messages
});
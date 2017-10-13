$(()=>{
    const app=Sammy('#app',function () {
        this.use('Handlebars','hbs');

        this.get('index.html',function () {
            this.loadPartials({
                header:'./templates/common/header.hbs',
                footer:'./templates/common/footer.hbs',
                notifications:'./templates/common/notifications.hbs',
                page:'./templates/appHome.hbs'
            }).then(function () {
                this.partial('./templates/common/main.hbs');
            });
        })
    }).run();












    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('teamId', userInfo.teamId);
    }
    
    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    $(document).on({
        ajaxStart:()=>$('#loadingBox').show(),
        ajaxStop:()=>$('#loadingBox').fadeOut(),
    });
});

let notifications = (() => {
    $('#infoBox').click((event)=>$(event.target).hide());
    $('#errorBox').click((event)=>$(event.target).hide());

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

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    return {
        handleError,
        showInfo,
        showError
    }
})();

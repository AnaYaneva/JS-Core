handlers.contactsController=function (ctx) {
    //show contact list
    $.get('data.json')
        .then(data=>ctx.contacts=data);

    ctx.loadPartials({
        header:'./templates/common/header.hbr',
        footer:'./templates/common/footer.hbr',
        contact:'./templates/common/contact.hbr',
        contact_list:'./templates/common/contactsList.hbr',
        contact_details:'./templates/common/details.hbr',
    }).then(function () {
        ctx.partials=this.partials;
        ctx.partial('./templates/contacts.hbr');
    });
};

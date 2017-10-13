/**
 * Created by PC on 23.7.2017 г..
 */
class Contact{
    constructor(firstName, lastName, phone, email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.phone=phone;
        this.email=email;
        this.online=false;
    }



    render(id) {
        let article=$('<article>');
        let title=$(`<div class="title">${this.firstName} ${this.lastName}</div>`);
        let button=$(`<button>&#8505;</button>`).click(()=>$('div.info').toggle());
        let info=$('<div>').addClass('info').attr('style','display:none');
        let spanPhone=$(`<span>&phone; ${this.phone}</span>`);
        let spanMail=$(`<span>&#9993; ${this.email}</span>`);

        if(this.online){
            title.addClass('online');
        }

        info.append(spanPhone);
        info.append(spanMail);
        title.append(button);
        article.append(title);
        article.append(info);

        $(`#`+id).append(article);
    }
}
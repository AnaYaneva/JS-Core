$(()=>{
    const app=Sammy('.content',function () {
      this.use('Handlebars','hbs');

        $(document).on({
            ajaxStart:()=>$('#loadingBox').show(),
            ajaxStop:()=>$('#loadingBox').fadeOut(),
        });

        //HOME
        this.get('index.html',displayHome);
        this.get('#/home',displayHome);

        function displayHome(ctx) {
            ctx.isAnonymous=sessionStorage.getItem('username')===null;
            ctx.username=sessionStorage.getItem('username');

            ctx.loadPartials({
                header:'./templates/common/header.hbs',
                footer:'./templates/common/footer.hbs',
                home:'./templates/home/home.hbs'
            }).then(function () {
                this.partial('./templates/home/homePage.hbs');
            })
        }



        //LOGIN
       this.post('#/login',function (ctx) {
           let {username, password}=ctx.params;

           let usernameRegex = /^[a-zA-Z]{3,}$/;
           let passwordRegex = /^[a-zA-Z0-9]{6,}$/;

           let isValid = true;

           if (!username.match(usernameRegex)) {
               notifications.showError('Username should be at least 3 characters long and should contain only english alphabet letters.');
               isValid = false;
           } else if (!password.match(passwordRegex)) {
               notifications.showError('Password should be at least 6 characters long and should contain only english alphabet letters and digits');
               isValid = false;
           }

           if (isValid) {
               auth.login(username, password)
                   .then(function (userInfo) {
                       auth.saveSession(userInfo);
                       notifications.showInfo('Login successful.');
                       ctx.redirect('#/catalog');
                   }).catch(notifications.handleError);
           }
       });

        //REGISTER
       this.post('#/register',function (ctx) {
           let usernameRegex = /^[a-zA-Z]{3,}$/;
           let passwordRegex = /^[a-zA-Z0-9]{6,}$/;

           let username = ctx.params.username;
           let password = ctx.params.password;
           let repeatPass = ctx.params.repeatPass;

           let isValid = true;

           if (!username.match(usernameRegex)) {
               notifications.showError('Username should be at least 3 characters long and should contain only english alphabet letters.');
               isValid = false;
           } else if (!password.match(passwordRegex)) {
               notifications.showError('Password should be at least 6 characters long and should contain only english alphabet letters and digits');
               isValid = false;
           } else if(repeatPass.localeCompare(password)!=0){
               notifications.showError('Both passwords should match');
               isValid = false;
           }

           if (isValid) {
               auth.register(username, password, repeatPass)
                   .then(function (userInfo) {
                       auth.saveSession(userInfo);
                       notifications.showInfo('Register successful.');
                       ctx.redirect('#/catalog');
                   }).catch(notifications.handleError);
           }
       });

        //LOGOUT
       this.get('#/logout',function (ctx) {
           auth.logout()
               .then(function (userInfo) {
                   sessionStorage.clear();
                   notifications.showInfo('Logout successful.');
                   ctx.redirect('#/index.html');
           }).catch(notifications.handleError);

       });

       this.get('#/catalog',function (ctx) {
           ctx.isAnonymous = sessionStorage.getItem('username') === null;
           ctx.username = sessionStorage.getItem('username');

           postService.getPosts()
               .then(function (posts) {

                   let counter = 0;

                   for (let post of posts) {
                       post['counter'] = ++counter;
                       post['period'] = calcTime();
                       post.isAuthor=post._acl.creator === sessionStorage.getItem('userId');
                   }

                   ctx.posts = posts;
                   ctx.loadPartials({
                       header: './templates/common/header.hbs',
                       footer: './templates/common/footer.hbs',
                       sidebar: './templates/common/sidebar.hbs',
                       catalogPost: './templates/catalog/catalogPost.hbs'
                   }).then(function () {
                       this.partial('./templates/catalog/catalogPage.hbs');
                   });

               }).catch(notifications.handleError);
       });

        this.get('#/submitLink',function (ctx) {
            ctx.isAnonymous=sessionStorage.getItem('username')===null;
            ctx.username=sessionStorage.getItem('username');

                    ctx.loadPartials({
                        header:'./templates/common/header.hbs',
                        footer:'./templates/common/footer.hbs',
                        sidebar:'./templates/common/sidebar.hbs',
                        create:'./templates/create/create.hbs'
                    }).then(function () {
                        this.partial('./templates/create/createPage.hbs');
                });
            });

        this.post('#/submitLink',function (ctx) {
           let author=sessionStorage.getItem('username');
           let title=ctx.params.title.replace("<","&lt;").replace(">","&gt;");
           let description=ctx.params.comment.replace("<","&lt;").replace(">","&gt;");
           let url=ctx.params.url;
           let imageUrl=ctx.params.image;

           let isValid=true;
           if(url===''||!url.startsWith('http')){
              notifications.showError('Link url is not optional and should always start with “http”.');
              isValid=false;
           }else if(title===''||!url.startsWith('http')){
               notifications.showError('Title is not optional.');
               isValid=false;
           }
            if(isValid) {
                postService.createPost(author, title, description, url, imageUrl)
                    .then(function (postInfo) {
                        notifications.showInfo('Post created.');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notifications.handleError);
            }
        });

        this.get('#/edit',function (ctx) {
            ctx.isAnonymous=sessionStorage.getItem('username')===null;
            ctx.username=sessionStorage.getItem('username');
            //let postId=ctx.params.id.substr(1);
            postService.loadPostDetails(postId)
                .then(function(postInfo){
                ctx.title=postId.title;
                ctx.description=postId.description;
                ctx.url=postId.url;
                ctx.image=postId.imageUrl;
                ctx.isAuthor=postInfo._acl.creator === sessionStorage.getItem('userId');
                ctx.loadPartials({
                    header:'./templates/common/header.hbs',
                    footer:'./templates/common/footer.hbs',
                    sidebar:'./templates/common/sidebar.hbs',
                    create:'./templates/create/create.hbs'
                }).then(function () {
                    this.partial('./templates/create/createPage.hbs');
                });
            }).catch(notifications.handleError);

        });

        this.post('#/edit/:id',function (ctx) {
            let postId = ctx.params.id.substr(1);
            let title=ctx.params.title.replace("<","&lt;").replace(">","&gt;");
            let description=ctx.params.comment.replace("<","&lt;").replace(">","&gt;");
            let url=ctx.params.url;
            let imageUrl=ctx.params.image;

            let isValid=true;
            if(url===''||!url.startsWith('http')){
                notifications.showError('Link url is not optional and should always start with “http”.');
                isValid=false;
            }else if(title===''||!url.startsWith('http')){
                notifications.showError('Title is not optional.');
                isValid=false;
            }
            if(isValid) {
                postService.edit(postId, title, description, url, imageUrl)
                    .then(function (postInfo) {
                        notifications.showInfo(`Post ${postInfo.title} updated.`);
                        ctx.redirect('#/catalog');
                    })
                    .catch(notifications.handleError);
            }
        });

        this.get('#/myPosts',function (ctx) {
            ctx.isAnonymous=sessionStorage.getItem('username')===null;
            ctx.username=sessionStorage.getItem('username');

            postService.getPosts()
                .then(function (posts) {

                    let counter = 0;
                    let userPosts=[];
                    for (let post of posts) {
                        post['counter'] = ++counter;
                        post['period'] = calcTime();
                        post.isAuthor=post._acl.creator === sessionStorage.getItem('userId');

                        if(sessionStorage.getItem('userId')===post._acl.creator){
                            userPosts.push(post);
                        }
                    }

                    ctx.posts = userPosts;
                    ctx.loadPartials({
                        header:'./templates/common/header.hbs',
                        footer:'./templates/common/footer.hbs',
                        sidebar:'./templates/common/sidebar.hbs',
                        post:'./templates/posts/post.hbs'
                    }).then(function () {
                        this.partial('./templates/posts/postsPage.hbs');
                    });

                }).catch(notifications.handleError);
        });

        this.get('#/comments',function (ctx) {
            ctx.isAnonymous=sessionStorage.getItem('username')===null;
            ctx.username=sessionStorage.getItem('username');

            ctx.loadPartials({
                header:'./templates/common/header.hbs',
                footer:'./templates/common/footer.hbs',
                sidebar:'./templates/common/sidebar.hbs',
                comment:'./templates/comments/comment.hbs'
            }).then(function () {
                this.partial('./templates/comments/commentsPage.hbs');
            });
        });

        this.post('#/comments',function (ctx) {
            let content=ctx.params.title.replace("<","&lt;").replace(">","&gt;");
            let postId="";

                postService.createComment(content,postId)
                    .then(function (postInfo) {
                        notifications.showInfo('Post created.');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notifications.handleError);

        });

        function calcTime(dateIsoFormat) {
            let diff = new Date - (new Date(dateIsoFormat));
            diff = Math.floor(diff / 60000);
            if (diff < 1) return 'less than a minute';
            if (diff < 60) return diff + ' minute' + pluralize(diff);
            diff = Math.floor(diff / 60);
            if (diff < 24) return diff + ' hour' + pluralize(diff);
            diff = Math.floor(diff / 24);
            if (diff < 30) return diff + ' day' + pluralize(diff);
            diff = Math.floor(diff / 30);
            if (diff < 12) return diff + ' month' + pluralize(diff);
            diff = Math.floor(diff / 12);
            return diff + ' year' + pluralize(diff);
            function pluralize(value) {
                if (value !== 1) return 's';
                else return '';
            }
        }

    });

    app.run();
});
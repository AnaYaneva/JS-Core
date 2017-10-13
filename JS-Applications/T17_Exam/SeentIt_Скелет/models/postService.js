let postService  = (() => {

    function getPosts() {
        let endpoint=`posts?query={}&sort={"_kmd.ect": -1}`;
        return requester.get('appdata', endpoint, 'kinvey');
    }

    function getComments() {
        let endpoint=`comments?query={"postId":"${post_id}"}&sort={"_kmd.ect": -1}`;
        return requester.get('appdata', endpoint, 'kinvey');
    }


    function createPost(author, title, description, url,imageUrl) {
        let msgData = {
            author: author,
            title: title,
            description:description,
            url:url,
            imageUrl:imageUrl,
        };

        return requester.post('appdata', 'posts', 'kinvey', msgData);
    }

    function createComment( content, postId) {
        let msgData = {
            author: sessionStorage.getItem('username'),
            content: content,
            postId: postId,
        }

        return requester.post('appdata', 'comments', 'kinvey', msgData);
    }

    function edit(postId, title, description, url,imageUrl) {
        let msgData = {
            author: sessionStorage.getItem('username'),
            title: title,
            description: description,
            url: url,
            imageUrl: imageUrl,
        };

        return requester.update('appdata', 'posts/' + postId, 'kinvey', msgData);
    }

    function loadPostDetails(postId) {
        return requester.get('appdata', 'posts/' + postId, 'kinvey');
    }

    return {
        createPost,
        getPosts,
        edit,
        loadPostDetails,
        getComments,
        createComment,
    }
})();
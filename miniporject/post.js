let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));
console.log(post);

let postBox = document.getElementsByClassName('post')[0];
postBox.innerText = JSON.stringify(post);

let commentsBox = document.getElementsByClassName('comments')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then((value) => {
        for (const commentItem of value) {
            let comment = document.createElement('li');
            comment.innerText = commentItem.body;
            commentsBox.appendChild(comment);
        }
    })
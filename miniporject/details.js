let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
console.log(user);
let detailsBox = document.getElementsByClassName('user-details')[0];
detailsBox.innerText = `${JSON.stringify(user)}`;

let posts = document.getElementsByClassName('posts')[0];
let btn = document.getElementsByClassName('details-button')[0];
btn.onclick = function () {
    this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then((value) =>{
            for (const postItem of value) {
                let postBox = document.createElement('div');
                postBox.classList.add('post');
                postBox.innerText = postItem.title;
                let postButton = document.createElement('button');
                postButton.classList.add('post-button');
                let anchor = document.createElement('a');
                anchor.innerText = 'Details';
                anchor.href =`./post-details.html?data=${JSON.stringify(postItem)}`;
                postButton.appendChild(anchor);
                postBox.appendChild(postButton);
                posts.appendChild(postBox);
            }
        })
}



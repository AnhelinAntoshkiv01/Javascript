console.log('1. Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті https://jsonplaceholder.typicode.com/posts ' +
    'зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(posts => {
        let div = document.createElement('div');
        for (let post of posts) {
            let divPost = document.createElement('div');
            divPost.innerHTML = `<h3> id: ${post.id} </h3>
                 <h3> post: ${post.body}</h3>`;
            let btn = document.createElement(`button`);
            btn.innerText = 'show post';
            btn.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then((response) => response.json())
                    .then(comments => {
                        for (let comment of comments) {
                            if (post.id === comment.postId) {
                                let divComment = document.createElement(`div`);
                                divComment.innerHTML = `<h3> id: ${comment.id} </h3>
                                       <h5> name: ${comment.name}</h5>
                                       <h3> post: ${comment.body}</h3>`;
                                divPost.append(divComment);
                            }
                            btn.disabled = true;
                        }
                    })
            }
            divPost.append(btn);
            div.append(divPost);
            document.body.append(div);
        }
    });
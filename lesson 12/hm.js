console.log('1. Отримати з цього ресурсу відповідь, та вивести в документ об\'єкти. ' +
    'Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.\n' +
    'Для кожного елементу свій блок div.post Всі характеристики повинні мати свої блоки всередені div.post\n' +
    'https://jsonplaceholder.typicode.com/posts');

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then(posts => {
//         let div = document.createElement('div');
//         div.classList.add('box');
//         for (let post of posts) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('publication');
//             divPost.innerHTML = `<h3> id: ${post.id} </h3>
//                  <h4> Post: ${post.body}</h4>`;
//             div.append(divPost);
//             document.body.append(div);
//         }
//     });




console.log('2. Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.\n' +
    'Для кожного елементу свій блок div.comment. Всі характеристики повинні мати свої блоки всередені div.comment\n' +
    'https://jsonplaceholder.typicode.com/comments');

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then(comments => {
        let div = document.createElement('div');
        div.classList.add('box');
        for (let comment of comments) {
            let divComment = document.createElement('div');
            divComment.classList.add('publication');
            divComment.innerHTML = `<h3> id: ${comment.id} </h3>
                 <h6> name: ${comment.name}</h6>
                 <h4> Comment: ${comment.body}</h4>`;
            div.append(divComment);
            document.body.append(div);
        }
    });
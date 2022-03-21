let usersBox = document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then((value) => value.json())
    .then((value) => {
        for (const userItem of value) {
            let userBox = document.createElement('div');
            userBox.classList.add('user');
            userBox.innerText = `${userItem.id} - ${userItem.name}`;
            let userButton = document.createElement('button');
            let anchor = document.createElement('a');
            anchor.innerText = 'Details';
            anchor.href =`./user-details.html?data=${JSON.stringify(userItem)}`;
            userButton.appendChild(anchor);
            userBox.appendChild(userButton);
            usersBox.appendChild(userBox);
        }
    })
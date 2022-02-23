function loadData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => console.log(data));

}

function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => Response.json())
    .then((data=> displayUsers(data)))
}


function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        console.log(user.name)


        const li = document.createElement('li');
        li.innerText = `Id: ${user.id},Name: ${user.name}, Email: ${user.email}`
        ul.appendChild(li)
    }
}
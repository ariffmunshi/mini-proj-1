const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}
const displayUser = (user) => {
    const template = document.getElementById("card-template").content.cloneNode(true);
    
    template.querySelector('.card-title').innerText = user.name;
    template.querySelector('.card-text').innerText = user.email;

    document.querySelector('#user-list').appendChild(template);
}

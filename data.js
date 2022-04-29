
document.getElementById('getUsers').addEventListener
('click', getUsers);

function getUsers(){
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach(function(user){
        output += `<ul class="list-group mb-3 card card-body">
        <li class="list-group-item">Name: ${user.Name}</li>
        <li class="list-group-item">Email: ${user.Email}</li>
        <li class="list-group-item">Job: ${user.Job}</li>
        <li class="list-group-item">Comment: ${user.Comment}</li>
        </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}
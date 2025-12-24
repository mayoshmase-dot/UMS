const getUsers = async()=> {
    const response = await axios.get('https://ums12.runasp.net/api/users?limit=500');
    return response.data;
}
const displayUsers = async() => {
    const result = await getUsers();
    const users = result.users.map((user) => {
        return `
        <tr>
        <td>${user.name}</td>
        <td><img src="${user.imageUrl}" width = "100px"/> </td>
            <td><button class ="btn btn-outline-danger" onclick=deleteUsers(${user.id})>Delete</button></td>
        </tr>
        `
    }).join(' ');
    console .log(users);
    document.querySelector(".users .data-body").innerHTML = users;
}
displayUsers();
const deleteUsers =async(id)=>{
const response = await axios.delete (`https://ums12.runasp.net/api/users/${id}`);
}

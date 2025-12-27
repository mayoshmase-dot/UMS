const getUsers = async () => {
    const response = await axios.get('https://ums12.runasp.net/api/users?limit=5');
    return response.data;
}
const displayUsers = async () => {
    try {
        const result = await getUsers();
        const users = result.users.map((user) => {
            return `
        <tr>
        <td>${user.name}</td>
        <td><img src="${user.imageUrl}" width = "100px"/> </td>
            <td><button class ="btn btn-outline-danger" onclick=deleteUsers(${user.id})>Delete</button></td>
            <td>    <a href="./details.html?UserId=${user.id}" class="btn btn-outline-info">Details</a></td>
        </tr>
        `
        }).join(' ');
        console.log(users);
        document.querySelector(".users .data-body").innerHTML = users;
    }
    catch (error) {
        document.querySelector(".errorClass").classList.remove("d-none");
    }
    finally {
        document.querySelector(".loader").classList.add("d-none");
    }
}
displayUsers();
const deleteUsers = async (id) => {
    const response = await axios.delete(`https://ums12.runasp.net/api/users/${id}`);
}

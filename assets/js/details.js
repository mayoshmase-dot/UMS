const getUser = async () => {
    const params = new URLSearchParams(location.search);
    const userid = params.get('UserId');
    const response = await axios.get(`https://ums12.runasp.net/api/users/${userid}`);
    console.log(response.data);
    if (response.status == 200) {
        return response.data;
    }

};
const displayUserData = async () => {
    const response = await getUser();
    document.querySelector(".userName").textContent = response.data.name;
    document.querySelector(".userEmail").textContent = response.data.email;
    document.querySelector(".userAge").textContent = response.data.age;

}
displayUserData();
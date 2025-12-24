const CreateUserForm = document.forms["addUser"];

CreateUserForm.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const formData = new FormData(CreateUserForm);
    // formData.forEach((value)=>{

    // })

const response = await axios.post('http://ums12.runasp.net/api/users',formData);
console.log(response);
});
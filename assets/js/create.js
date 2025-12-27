const CreateUserForm = document.forms["addUser"];

CreateUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(CreateUserForm);
    // formData.forEach((value)=>{

    // })
    const response = await axios.post('https://ums12.runasp.net/api/users', formData);

    if (response.status == 200) {
        location.href = "./index.html"
    }
    console.log(response);
});

CreateUserForm.image.addEventListener("change", () => {
    const file = CreateUserForm.image.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
        document.querySelector(".preview").setAttribute("src", e.target.result);
    };
});
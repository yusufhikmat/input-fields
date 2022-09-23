const myform = document.querySelector('.myform');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const msgInput = document.querySelector('.error-message');
const userList = document.querySelector('.user');

//add event listener to myform
myform.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    //condiional statement
    if(nameInput.value==='' || emailInput.value===''){
        msgInput.classList.add('error');
        msgInput.innerHTML="please input fields";
        setTimeout(() => msgInput.remove(), 3000)
    }else{
        //create element
        const li =document.createElement('li');
        //create and append textnode
        li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`))
        
        //appendchild to parrent
        userList.appendChild(li);

        //clear inputs fields
        nameInput.value='';
        emailInput.value='';
    }
}
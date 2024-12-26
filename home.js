function clickAddButton() {
    let task = document.querySelector('.addTask-field').value;
    if(task===""){
        document.querySelector('.addTask-field').value = "";
    } else {
        document.querySelector('.added-task').innerHTML = task;
        document.querySelector('.addTask-field').value = "";
    }
    
    
}
document.querySelector('.add-btn').addEventListener('click',clickAddButton)

function clickDeleteButton() {
    document.querySelector('.added-task').innerHTML = "";
}
document.querySelector('.delete-btn').addEventListener("click",clickDeleteButton)
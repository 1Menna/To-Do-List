let list_container=document.getElementById("list-container")

let inputBox=document.getElementById("input-box");

function AddTask(){
        if(inputBox.value !== ''){
            let task = document.createElement('li');
            task.textContent=inputBox.value;
            list_container.appendChild(task);

            let span =  document.createElement('span');
            span.textContent='\u00d7';
            task.appendChild(span);

        }
        
        inputBox.value='';
        saveData();
}  

list_container.addEventListener('click',function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked')
    }
    else{
    e.target.parentElement.remove(); 
    saveData();
    }
})

function saveData(){
    localStorage.setItem("tasks",list_container.innerHTML)
}
function showData(){
    list_container.innerHTML = localStorage.getItem('tasks');
}
showData();
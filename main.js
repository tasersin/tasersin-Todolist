window.addEventListener('load', ()=>{
    const form= document.querySelector("#task-form");
    const input= document.querySelector("#task-input");
    const list= document.querySelector("#tasks");


    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;
        if (!task) {
            return;
        } 

        const task_div = document.createElement("div");
        task_div.classList.add("task");
        list.appendChild(task_div);


        const task_content_div = document.createElement("div");
        task_content_div.classList.add("content");
        task_div.appendChild(task_content_div);
   

        const task_input= document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value= task;
        task_input.setAttribute("readonly", "readonly");
        task_content_div.appendChild(task_input);


        const task_actions_div= document.createElement("div");
        task_actions_div.classList.add("actions");
        task_div.appendChild(task_actions_div);

        const task_delete_button= document.createElement("button");
        task_delete_button.classList.add("Sil");
        task_delete_button.innerHTML = "sil";

        const task_completed_button= document.createElement("button");
        task_completed_button.classList.add("Tamamlandı");
        task_completed_button.innerHTML = "Tamamlandı";

        task_actions_div.appendChild(task_completed_button);
        task_actions_div.appendChild(task_delete_button);
        

        task_delete_button.addEventListener('click', ()=>{
            if (confirm("Bu görevi silmek istediğinizden emin misiniz?")) {
                list.removeChild(task_div);
                

            }
        })
        
        task_completed_button.addEventListener('click', ()=>{
            
                task_input.style.textDecoration="line-through";
                task_input.setAttribute("readonly", "readonly");
               
        })

   
        input.value = "";


    });
});
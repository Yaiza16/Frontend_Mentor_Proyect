const toggleThemes = document.getElementById('toggle-themes');
const body = document.querySelector('body')
const tasksContainer = document.getElementById('tasks-container')
const form = document.getElementById('form-new-task');

const filterContainer = document.getElementById('filters')

let tasks = [
    {
        id: 25325235235,
        description: 'Complete online JavaScript course',
        status: 'active'
    },
    {
        id: 25457839,
        description: 'Job around the park 3x',
        status: 'active'
    }
]

toggleThemes.addEventListener('click', e =>{
    const iconMoon = "images/icon-moon.svg";
    const iconSun = "images/icon-sun.svg";
    if (toggleThemes.dataset.theme == "light"){
        toggleThemes.dataset.theme = "dark";
        toggleThemes.src = iconSun;
        body.classList.replace("light", "dark");
        document.querySelector(".background-image").src="images/bg-desktop-dark.jpg";
    } else{
        toggleThemes.dataset.theme = "light";
        toggleThemes.src = iconMoon;
        body.classList.replace("dark", "light");
        document.querySelector(".background-image").src="images/bg-desktop-light.jpg";
    }
})

form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(form)
    const nameTask = form.querySelector('.new-task').value;

    const newTask = {
        id: Date.now(),
        description: nameTask,
        status: 'active'
    }

    tasks.push(newTask)
    printTasks()
    updateItemsLeft()
})


tasksContainer.addEventListener('click', e =>{
    if (e.target.classList.contains('btn')){
        changeStatusTask(e.target);
        updateItemsLeft()

    }


    if (e.target.classList.contains('close-icon')){
        removeTask(e.target);
        printTasks()
        updateItemsLeft()
    }
})


filterContainer.addEventListener('click', e =>{
    if (e.target.classList.contains('filter')){
        if (e.target.dataset.filter == 'all'){
            printTasks()
        }else if(e.target.dataset.filter == 'active'){
            printActiveTasks()
        }else if(e.target.dataset.filter == 'completed'){
            printCompletedTasks()
        }else if(e.target.dataset.filter == 'clear'){
            clearCompleted();
            printTasks()
        }
    }
})
//////////////


const printTasks = () =>{
    tasksContainer.innerHTML = null;

    tasks.forEach(task => {
        const containerTask = document.createElement('div');
        containerTask.dataset.id = task.id
        containerTask.classList.add('todo-item');
        if (task.status == 'completed'){
            containerTask.classList.add('checked')
        }

        const buttonTask = document.createElement('button');
        buttonTask.classList.add('btn')

        const textTask = document.createElement('p');
        textTask.classList.add('todo-text');
        const textTaskContent = document.createTextNode(task.description);
        textTask.appendChild(textTaskContent)

        const iconClose = document.createElement('img');
        iconClose.src = 'images/icon-cross.svg';
        iconClose.classList.add('close-icon');

        containerTask.appendChild(buttonTask);
        containerTask.appendChild(textTask);
        containerTask.appendChild(iconClose);

        tasksContainer.appendChild(containerTask)
    })
}


const printActiveTasks = () =>{
    tasksContainer.innerHTML = null;

    tasks.forEach(task => {
        if (task.status == 'active'){
            const containerTask = document.createElement('div');
        containerTask.dataset.id = task.id
        containerTask.classList.add('todo-item');
        if (task.status == 'completed'){
            containerTask.classList.add('checked')
        }

        const buttonTask = document.createElement('button');
        buttonTask.classList.add('btn')

        const textTask = document.createElement('p');
        textTask.classList.add('todo-text');
        const textTaskContent = document.createTextNode(task.description);
        textTask.appendChild(textTaskContent)

        const iconClose = document.createElement('img');
        iconClose.src = 'images/icon-cross.svg';
        iconClose.classList.add('close-icon');

        containerTask.appendChild(buttonTask);
        containerTask.appendChild(textTask);
        containerTask.appendChild(iconClose);

        tasksContainer.appendChild(containerTask)
        }
    })
}

const printCompletedTasks = () =>{
    tasksContainer.innerHTML = null;

    tasks.forEach(task => {
        if (task.status == 'completed'){
            const containerTask = document.createElement('div');
        containerTask.dataset.id = task.id
        containerTask.classList.add('todo-item');
        if (task.status == 'completed'){
            containerTask.classList.add('checked')
        }

        const buttonTask = document.createElement('button');
        buttonTask.classList.add('btn')

        const textTask = document.createElement('p');
        textTask.classList.add('todo-text');
        const textTaskContent = document.createTextNode(task.description);
        textTask.appendChild(textTaskContent)

        const iconClose = document.createElement('img');
        iconClose.src = 'images/icon-cross.svg';
        iconClose.classList.add('close-icon');

        containerTask.appendChild(buttonTask);
        containerTask.appendChild(textTask);
        containerTask.appendChild(iconClose);

        tasksContainer.appendChild(containerTask)
        }
    })
}


const updateItemsLeft = () =>{
    let contador = 0;

    tasks.forEach(task =>{
        if (task.status == 'active'){
            contador += 1;
        }
    })

    document.getElementById('number-items-left').innerHTML = contador;
}

const changeStatusTask = itemSelected =>{
    const taskSelected = itemSelected.parentNode;
    const idTarget = taskSelected.dataset.id;

    tasks.forEach(task =>{
        if (task.id == idTarget){
            if (task.status == 'active'){
                task.status = 'completed';
                taskSelected.classList.add('checked')

            } else if(task.status == 'completed'){
                task.status = 'active';
                taskSelected.classList.remove('checked')
            }
        }
    })
}

const removeTask = (itemSelected) =>{
    const taskSelected = itemSelected.parentNode;
    const idTarget = taskSelected.dataset.id;

    tasks.forEach(task =>{
        if (task.id == idTarget){
            let indexTask = tasks.indexOf(task)
            if (indexTask !== -1){
                tasks.splice(indexTask, 1)
            }        
        }
    })
}

 const clearCompleted = () =>{
    // let indexTask = []

    // tasks.forEach(task =>{
    //     if (task.status == 'completed'){
    //         numberIndexTask = tasks.indexOf(task)
    //         indexTask.push(numberIndexTask)
    //     }
    // })

    // if (indexTask.length>0){
    //     if (indexTask.length == 1){
    //         tasks[indexTask[0]].splice(indexTask, 1)
    //     }else{
    //         indexTask.forEach(index =>{
    //             delete(tasks[indexTask])
    //         })
    //     }
    // }
 }
 
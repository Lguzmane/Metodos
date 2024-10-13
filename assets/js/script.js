

//  predefinidas
let tasks = [
    { id: 1, description: "Ir al Super", completed: false },
    { id: 2, description: "Estudiar Programación", completed: false },
    { id: 3, description: "Sacar a pasear a Vladimir Colinski", completed: true }
];

//  resumen de tareas
function updateSummary() {
    const totalTasks = tasks.length; 
    const completedTasks = tasks.filter(task => task.completed).length; 
    document.getElementById("total-tasks").textContent = totalTasks;
    document.getElementById("completed-tasks").textContent = completedTasks;
}

// mostrar tareas en la tabla
function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; 

    
    tasks.forEach((task) => {
        const row = document.createElement("tr");

        
        const idCell = document.createElement("td");
        idCell.textContent = task.id;
        row.appendChild(idCell);

        
        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = task.description;
        if (task.completed) {
            descriptionCell.classList.add("completed"); 
        }
        row.appendChild(descriptionCell);

        
        const completedCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("click", () => toggleTaskCompleted(task.id)); 
        completedCell.appendChild(checkbox);
        row.appendChild(completedCell);

       
        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", () => deleteTask(task.id)); 
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        taskList.appendChild(row); 
    });

    updateSummary(); 
}

// agregar  nueva tarea
function addTask() {
    const newTaskInput = document.getElementById("new-task");
    const newTaskDescription = newTaskInput.value.trim();

    if (newTaskDescription !== "") {
        const newTask = {
            id: tasks.length + 1, 
            description: newTaskDescription,
            completed: false
        };

        tasks.push(newTask); 
        newTaskInput.value = ""; 
        renderTasks(); 
    }
}

// eliminar una tarea
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks(); 
}

// marcar una tarea como completada o no
function toggleTaskCompleted(id) {
    const task = tasks.find(task => task.id === id); 
    if (task) {
        task.completed = !task.completed; 
        renderTasks(); 
    }
}


document.getElementById("add-task").addEventListener("click", addTask);


renderTasks();

// Task Manager Object
const tasks = [];
var taskNum = tasks.length;
var newTask, dueDate, priority, newId;


//Create Object Constructor
var today = new Date();


function showTaskForm(item) {
    console.log(item);
    document.getElementsByTagName('div')[item].setAttribute('class', 'visible');
     if(item===1) {
        printTasks();
     }
    }


function clearForm() {
    document.getElementById('task').value='';
    document.getElementById('dueDate').value='';
    document.getElementById('priority').value='';
    document.getElementsByTagName('div')[0].setAttribute('class', 'hidden');
}

function addTask() {
    console.log("got here");
    var prevTaskNum = taskNum;
    newId = today.getFullYear;
    newTask = document.getElementById('task').value;
    dueDate = document.getElementById('dueDate').value;
    priority = document.getElementById('priority').value;
    console.log(prevTaskNum, newTask, dueDate, priority);


    console.log("added task" + task);
    tasks.push({ taskId: newId, task: newTask, dueDate: dueDate, priority: priority });
    let newTaskNum = prevTaskNum++;
    if (newTaskNum != prevTaskNum) {
        taskNum++;
        alert("Your task has been added.")
        clearForm();
        if(document.getElementsByTagName('h2')[0].innerHTML!=null) {
            getTaskCount();
        }
        // let displayTaskStatus = document.getElementsByTagName('div')[0].getAttribute('class');
        // console.log("Display status" + displayTaskStatus);
        //         if (displayTaskStatus=='visible') {
            printTasks();
        

    }
    console.log(tasks.length);
}

function removeTask() {
    tasks.pop();
    alert('The last task has been removed.');
    taskNum--;
    getTaskCount();
    printTasks();

}

//     // Remove a task by ID
//     removeTask: function(taskId) {
//       this.tasks = this.tasks.filter(task => task.id !== taskId);
//     },

//     // Get the number of tasks
function getTaskCount() {
    if(taskNum===1) {
        document.getElementsByTagName('h2')[0].innerHTML="There is currently " + taskNum + " task.";
    } else {
        document.getElementsByTagName('h2')[0].innerHTML="There are currently " + taskNum + " tasks.";
    }
}

// Print all tasks
function printTasks() {
    //   console.log('Tasks:');
    //   console.log(tasks);
    if (taskNum> 0) {
        document.getElementById('printTasks').innerHTML = "<h1>My Tasks: " + taskNum + "</h1>";
        for (var i = 0; i < tasks.length; i++) {
            taskString = "<p>";
            taskString += "Task:" + tasks[i].task + "<br/>";
            taskString += "Due Date:" + tasks[i].dueDate + "<br/>";
            taskString += "Priority:" + tasks[i].priority + "<br/>";
            taskString += "</p";
            document.getElementById('printTasks').innerHTML += taskString;
        }
    } else {
        console.log("There are no tasks");
        taskString = "<p>There are no tasks to display.</p>";
        document.getElementById('printTasks').innerHTML=taskString;
    }
}

#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";
let todolist: String [] =[];
let conditions = true;
console.log(chalk.red(">>>=============>>>","<<================....====>>>"));       
console.log(chalk.blue.bold("\n \t wellcome to codehub with Moiz Todo_List Application \n"));
console.log(chalk.red(">==============================....>>.","<<<==================..............=========>..>>"));


let main = async () => {
    while (conditions){
        let option = await inquirer.prompt([
            {
                name:"choice",
                type:"list",
                message:"Select your option want to do",
                choices:["Addtask","Delettask","Updatetask","viwetask todo list","Exit"],
            }
        ]);
        if (option.choice === "Addtask"){
            await addTask()
        }
        else if(option.choice === "Delettask"){
            await deletTask()
        }
        else if (option.choice === "Updatetask"){
            await UpdateTask()
        }
        else if (option.choice === "viwetask todo list"){
          await viwetask()
        }
        else if (option.choice === "Exit"){
            conditions = false;
        }
    }
}
// function to add new task to the list; 
let addTask =async ()=>{
    let newTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter your new task"

        }

    ]);
    todolist.push(newTask.task);
    console.log(`\n ${newTask.task} your task is add to  succesfully todolist `);

}
//function to viwe to todo list task
let viwetask = () =>{
    console.log("\n your todo List: \n");
    todolist.forEach((task, index) => {
         console.log(`${index + 1}:${task}`)
    });

}
// function to the delet task;
 let deletTask = async () => {
    await viwetask()
    let taskindex = await inquirer.prompt([
        {
            name:"index",
            type: "number",
            message: "Enter the index of the task you want to delet :",
        }
    ]);
    let deletTask = todolist.splice(taskindex.index - 1,1);
    console.log(`\n ${deletTask} this task has been is deleted successfullly`)
 }
 // functions to  update task:

 let UpdateTask = async ()=>{
    await viwetask()
    let update_task_index = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the index no of the task you want to update:"

        },
        {
            name:"new_task",
            type:"input",
            message:"now Enter new task name",
        }
    ]);
    todolist[update_task_index.index - 1] = update_task_index.new_task
    console.log(`\n task add index no : ${update_task_index.index - 1}updated successfully check this option viwe task list`)
 }


main();

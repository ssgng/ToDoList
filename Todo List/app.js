let message = prompt("What would you like to do ?");

const todos = [];

while(message !==  "quit" && message !== "q"){
    
    if(message==="new"){
        
        const addTodo = prompt("What would you like to add ? ");
        todos.push(addTodo);
        console.log(`${addTodo} added the list`);
        console.log("**********************");
    }
    
    else if (message==="list"){
        console.log("**********************")
        for(let i = 0 ; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*****************************")
    }
    
    else if (message === "delete"){
        const deleteTodos = parseInt(prompt("Which todo would you like to delete ? "));
        if(!Number.isNaN(deleteTodos)){
            const deleted = todos.splice(deleteTodos,1);
            console.log(`${deleted[0]} is deleted.`);
        }
        else{
            console.log("Unknown index");
        }
        
    }
    message = prompt("what would you like to do ?")
    
}

console.log("Quitting");
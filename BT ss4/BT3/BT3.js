let typeConsole = (str = "log") =>{
    if(str === "log"){
        return console.log("log");
    }
    else if(str === "warm"){
        return console.warn("warm");
    }
    else if(str === "error"){
        return console.error("error");
    }
}

typeConsole("log");
typeConsole("warm");
typeConsole("error");
typeConsole();
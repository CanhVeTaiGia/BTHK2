let users = [
  { userName: "Guys", password: "1201141 4" },
  { userName: "DeezNuts", password: "1asdfxzs" },
];

let spaceInUsers = users.forEach((item, index) =>{
    for(let i = 0; i < item.password.length; i++){
        if(item.password[i] === " "){
            console.log(index);
            return;
        }
    }
});
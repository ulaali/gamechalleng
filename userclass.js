const obj={
    "VE":5,
    "EA":10,
    "ME":20,
    "HA":40,
    "VH":80,
    "EX":120
}




class User{
    constructor(name,xp,log){
        this.name=name;
        this.xp=xp;
        this.log=log;
    }
    newSolvedChalleng(obj2){
         console.log(obj2);
         this.xp+=obj[obj2.level];
         this.log.push(obj2.id)
        
    }
    
}


let user1=new User("jad",0,[]);
console.log(user1);
user1.newSolvedChalleng({
    id:1,
    level:"VE"
})

let o={
    id:2,
    level:"ME"
}

user1.newSolvedChalleng(o);
console.log(user1.xp);
console.log(user1.log);
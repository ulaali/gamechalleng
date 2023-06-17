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

class Challnge{
    constructor(id,level){
        this.id=id,
        this.level=level;
    }
    pointes(){
        return obj={
            id:this.id,
            level:this.level
        }
    }
}
let user1=new User("jad",0,[]);
console.log(user1);
let challenge=new Challnge(1,"VE")
user1.newSolvedChalleng(challenge);
let challenge2=new Challnge(2,"ME")
user1.newSolvedChalleng(challenge2);
let challenge3=new Challnge(3,"EA")
user1.newSolvedChalleng(challenge3);
console.log(user1.xp);
console.log(user1.log);
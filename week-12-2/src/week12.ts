interface User{
    name:string;
    age:number;
    email:string;
    password:string;
    id:number;
};

interface User1{
    readonly name:string;
    age:number;
};

type UserRecords=Record<string,User>

// {
//     "key":{User1 args},
//     "key2":{User2 args}
// }

const userMap=new Map<string,User>();

userMap.set("key",{name:"olo",age:12,email:"",password:"",id:1})
userMap.set("key2",{name:"polo",age:34,email:"",password:"",id:1})

type UpdatedProps =Pick<User, 'name'|'age'|'email'>

type UpdatedPropsOptional=Partial<UpdatedProps>

function updateUser(updatedProps:UpdatedProps){
    //db call to update the user
}

function updateUserOptional(updatedProps:UpdatedPropsOptional){
    //db call to update the user
}

function sumOfAge(user1:UpdatedProps,user2:User){
    return user1.age+user2.age;
}

// updateUser({
//     name:"niraj"
// }) 
// gives error because the all the arguements are not passed 

const user1:User1=({
    name:'niraj',
    age:21
})

const user2:Readonly<User>={
    name:"",
    id:1,
    age:12,
    password:"",
    email:""

}
// make whole object readonly
// user2.age=23; 
// will give error b

// user1.name="olopolo";

// wlll give error since name is read only property, while u can edit age 
user1.age=78;

updateUserOptional({ 
    name:"niraj"
})


const age=sumOfAge({name:'Taro',age:20,email:'olopolo@xyz.in'},{id:1,name:"jiro",age:30,email:'qweer',password:'qweasd'})
console.log(age)
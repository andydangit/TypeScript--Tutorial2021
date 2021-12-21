// This could be done but it's better to let Typescript infer it
// const person: {
//     name: string;
//     age: number
// } 

enum Role {
    Admin, 
    Read_Only, 
    Author
};

const person = {  
    name: 'Andy',
    age: 20,
    hobbies: ['Sports', "Cooking"],
    role: Role.Admin
};

// person.role.push('admin'); // this is an exception 
// person.role[1] = 10; // this does not work


let favoriteActivities: string[];
favoriteActivities = ['Sports'];
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());  // !!! ERROR !!!  
};

if(person.role === Role.Admin) {
    console.log(('is admin')); 
};

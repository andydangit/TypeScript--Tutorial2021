// This could be done but it's better to let Typescript infer it
// const person: {
//     name: string;
//     age: number
// } 

const person: { 
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = { 
    name: 'Andy',
    age: 20,
    hobbies: ['Sports', "Cooking"],
    role: [2, 'author']  
};

// person.role.push('admin'); // this is an exception 
// person.role[1] = 10; // this does not work


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());  // !!! ERROR !!!
    
    
}

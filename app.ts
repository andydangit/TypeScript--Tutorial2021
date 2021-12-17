// This could be done but it's better to let Typescript infer it
// const person: {
//     name: string;
//     age: number
// } 

const person = { 
    name: 'Andy',
    age: 20,
    hobbies: ['Sports', "Cooking"]
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());  // !!! ERROR !!!
    
    
}

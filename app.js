// This could be done but it's better to let Typescript infer it
// const person: {
//     name: string;
//     age: number
// } 
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Read_Only"] = 1] = "Read_Only";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
;
var person = {
    name: 'Andy',
    age: 20,
    hobbies: ['Sports', "Cooking"],
    role: Role.Admin
};
// person.role.push('admin'); // this is an exception 
// person.role[1] = 10; // this does not work
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());  // !!! ERROR !!!  
}
if (person.role === Role.Admin) {
    console.log(('is admin'));
}

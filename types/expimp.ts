import {Role} from './enum';

const person = {
    name : 'Mohamad',
    age : 24,
    hobbies : ['Sports','Music'] ,
    role: Role.ADMIN
};

console.log(person);
if(person.role === Role.ADMIN) console.log('Is Admin');
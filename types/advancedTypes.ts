//partial
type Person = {
    name:string,
    email:string
};

const updatePerson = (id:number,person:Person)=>{
    console.log({id,person});
}

updatePerson(1, {
    name:"mohmad",
    email:"m@wehbe.com"
});

const update = (id:number,person:Partial<Person>)=>{
    console.log({id,person});
}

update(1, {
    name:"wehbe"
});

//extend + conditional Type
type StringOrNot<T> = T extends string ? string : never;
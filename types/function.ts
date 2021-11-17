let hello: Function, greet:Function;

hello = ():void =>{
    console.log("Hello");
}

hello();

greet = (name:string):void =>{
    console.log("hello " + name);
}

greet("mohamad");
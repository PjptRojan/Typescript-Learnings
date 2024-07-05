const title = 'Typescript Bootcamp'; // this is not going to be string type,  but is going to be "Typescript Bootcamp" this string.
const lessonsCount = 10; //this is not going to be a number type, but is going to be 10.
// if you assign a constant with a initial value, the type of that constant is not going to be that associated type.
// this is done by the ts compiler itself to declare the literal type. 
// why is this useful: 
let pageSize = 10; // if we know that a variable can only have certain types of values in it. we can implement the literal types.
pageSize = 15; // now the pageSize variable cannot have values other than 10, 15 or 20.
let courseStatus = 'draft';
courseStatus = "unpublished";

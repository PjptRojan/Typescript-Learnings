//   undefined
let newTitle;
console.log('title = ' + newTitle);
//  both the undefined and null types are falsy in js
if (!newTitle) {
    console.log('the value of title not known yet.');
}
//in js always use null instead of undefined and never explicitly use undefine to assign type of variables.
// optional chaining:
//  let something = null;
let something = {
    textFields: {
        title: 'Hello World'
    }
};
console.log(something?.textFields?.title);
if (something?.textFields?.title) {
    console.log(`The title is ${something.textFields.title}`);
}

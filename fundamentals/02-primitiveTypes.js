//primitive type: number
const lessonsCount = 10;
const total = lessonsCount + 10;
console.log("total is", total);
//primitive type: string
const title = 'Typescript Bootcamp';
const subtitle = 'Learn the language fundamentals';
const fullTitle = title + ": " + subtitle;
console.log('fulltitle:', fullTitle);
//primitive type: boolean
const published = true;
if (published) {
    console.log('the course is published');
}
// primitive type: object
const courseObj = {
    title: 'Typescript Bootcamp',
    subtitle: 'Learn the language fundamentals',
    lessonsCount: 10,
    author: {
        firstName: 'Vasco',
        lastName: 'Prajapati'
    }
};
courseObj.author.lastName = 'Cavalheiro';
console.log(`author name is ${courseObj.author.firstName} ${courseObj.author.lastName}`);
console.log('type of course is', typeof courseObj);

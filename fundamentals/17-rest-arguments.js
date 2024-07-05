const course5 = {
    title: 'TS Bootcamp',
    lessonsCount: 50
};
const course6 = {
    title: 'JS Bootcamp',
    lessonsCount: 45
};
// function printCourses(message: string, courses:Course[]){  // without using rest arguments
function printCourses1(message, ...courses) {
    console.log(message);
    for (let course of courses) {
        console.log(course.title);
    }
}
// printCourses('Welcome to Angular University', [course1, course2]) // without rest arguments
printCourses1('Welcome to Angular University', course5, course6); // with rest arguments

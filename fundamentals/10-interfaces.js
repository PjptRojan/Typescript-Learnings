// interface
// multiple variables with same types and need to re use the defination of a type in multiple places.
const courseDetails = {
    title: 'Typescript Bootcamp',
    subtitle: "Learn Ts fundamentals",
    lessonsCount: 10
};
// courseDetails.title = 'Rojans Bootcamp' // this wouldn't work if we use the readonly property modifier in the interface type.
const otherCourses = {
    title: 'Typescript Bootcamp',
    subtitle: "Learn Ts fundamentals",
    // lessonsCount: 10
};

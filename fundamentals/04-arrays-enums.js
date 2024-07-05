// array
const numbers = [1, 2, 3];
numbers.push(4);
// enums
var CourseType;
(function (CourseType) {
    CourseType[CourseType["FREE"] = 10] = "FREE";
    CourseType[CourseType["PREMIUM"] = 11] = "PREMIUM";
    CourseType[CourseType["PRIVATE"] = 12] = "PRIVATE";
    CourseType[CourseType["HIDDEN"] = 13] = "HIDDEN";
})(CourseType || (CourseType = {}));
const course = {
    title: 'Typescript Bootcamp',
    type: CourseType.HIDDEN
};
console.log(course);

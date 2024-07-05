function createCourse(title, lessons) {
    console.log("".concat(title, " with course count: ").concat(lessons));
    return {
        title: title,
        lessons: lessons
    };
}
var result = createCourse('TS bootcamp', 20);

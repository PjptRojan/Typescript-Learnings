var createCourses = function (title, subtitle, lessonsCount) {
    console.log("".concat(title, ", ").concat(subtitle, ", ").concat(lessonsCount));
    var course = {
        title: title,
        subtitle: subtitle,
        lessonsCount: lessonsCount
    };
    return course;
};
createCourses('JS bootcamp', 'Learn JS with me', 22);
createCourses(22, 'rojan', 'sdafkjl');

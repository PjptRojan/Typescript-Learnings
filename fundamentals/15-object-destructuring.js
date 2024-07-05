const courseDetail = {
    title: 'Typescript Bootcamp',
    subtitle: 'Learn the language fundamentals',
    stats: {
        lessonsCount: 10
    }
};
printCourseDetail(courseDetail);
function printCourseDetail(course) {
    const { title, subtitle, stats } = courseDetail; // Destructuring of object for helps in readablility, less time consumption.
    // const {title, ...rest} = course; // using rest operator to destructure rest of the values from an object.
    // console.log('rest', rest) the rest variable in this case stores remaining values from the object into a new object.
    console.log(`Title: ${title}, subtitle: ${subtitle}, lessons count: ${stats.lessonsCount}`);
}

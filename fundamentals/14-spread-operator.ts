interface Course {
    title: string;
    subtitle: string;
    stats: {
        lessonsCount: number
    }
}

let course: Course = {
    title: 'Typescript Bootcamp',
    subtitle: 'Learn the language fundamentals',
    stats: {
        lessonsCount: 10
    }
}

// const course1 = {
//     title: course.title,
//     subtitle: course.subtitle,
//     stats: course.stats
// }

// console.log('before', course1); this is how we make deep copies of object.in deep copies nested obj can't be modified in the original obj.


const newCourse = {...course} // spread operator makes a shallow copy of the object. nested objects can be modified in shallow copies.


course.stats.lessonsCount = 100;


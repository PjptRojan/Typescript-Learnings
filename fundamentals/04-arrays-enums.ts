// array

const numbers = [1, 2, 3];

numbers.push(4)

// enums

enum CourseType {
    FREE = 10,
    PREMIUM,
    PRIVATE,
    HIDDEN  
}

const course = {
    title: 'Typescript Bootcamp',
    type: CourseType.HIDDEN
}

console.log(course)
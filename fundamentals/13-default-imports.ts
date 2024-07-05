
export const COURSE_NUMBERS = 20;
export const TYPESCRIPT_COURSE = {
    title: 'Something',
    subtitle: 'something with something',
    lessonsCount: 12
}

export default function printCourseName(course){
    console.log(`The course title is ${course.title}`);
    
}

// we can import multiple imports in the following way:
// import {COURSE_NUMBERS, TYPESCRIPT_COURSE, printCourseName} from './....

// import * as constants from '../'

// default exports: for something that is much more used than the others from the same module. default export makes it easier to import.
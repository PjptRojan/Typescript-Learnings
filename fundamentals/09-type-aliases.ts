// using our own custom types for multiple variables with same type. (literal types)

type CourseStatus = 'draft' | 'published' | 'unpublished' | 'archive'

let newCourseStatus:CourseStatus = 'draft';

let  newStatus: CourseStatus = "published"

type Course = {
    title: string,
    subtitle: string,
    lessonsCount: number
}

let courseDetail = {
    title: 'Typescript Bootcamp',
    subtitle: "Learn Ts fundamentals",
    lessonsCount: 10
}
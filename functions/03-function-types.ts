interface Courses{
    title: string;
    subtitle: string;
    lessonsCount: number;
}

type FunctionCreateCourse = (title: string, subtitle: string, lessonsCount: number) => Courses; // custom function type that takes specific arguments and returns specific type data.

type CallbackFunction = (course: Courses) => void //void means the function doesn't return anything.

const createCourses: Function = (title: string, subtitle: string, lessonsCount: number, callback: CallbackFunction) : Courses => {
    console.log(`${title}, ${subtitle}, ${lessonsCount}`);
    
 const course = {
    title,
    subtitle,
    lessonsCount
 }

 callback({title:'test', subtitle:'Test', lessonsCount:1});

 return course
}

createCourses('JS bootcamp', 'Learn JS with me', 22)
createCourses(22, 'rojan', 'sdafkjl')
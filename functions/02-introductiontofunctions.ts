interface Course {
    title:string;
    lessonsCount: number;
}
function createCourse(title: string, lessonsCount: number) : Course {
 console.log(`${title} with course count: ${lessonsCount}`);
    return {
        title,
        lessonsCount
    } 
}

const result = createCourse('TS bootcamp', 20) // return type Course as we have defined the function return type above


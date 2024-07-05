// let neverValue: never = 1; // we cannot assign anything to type never. it throws a compilation error.

// never type is used by the typescript type inference system in situations where the type system determines that certain situation is impossible and it cannot happen. 

//example

type CourseStatus = 'draft' | 'published'
let courseStatus: CourseStatus;
courseStatus = 'draft'
if(courseStatus == 'draft'){
    console.log('draft');
    
} else if (courseStatus == 'published'){
    console.log('published')
} else {
    // const value = courseStatus;
    unexpectedError(courseStatus)
}

function unexpectedError(value: never){
    throw new Error (`Unexpected value: ${value}`)
}
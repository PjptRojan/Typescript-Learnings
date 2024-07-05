function saveCourse(course, callback: Function){
    this.course = course;
    setTimeout(() => {
        callback(this.course?.title ?? 'unknown course'); 
    }, 1000);
}
const cb = (title: string) => console.log('Save Successful.', title)

saveCourse({title: 'TS BootCamp'}, cb)


// arrow functions doesn't have their own this context but takes from the parent scope if available. whereas the function with function keyword has their own this context.  
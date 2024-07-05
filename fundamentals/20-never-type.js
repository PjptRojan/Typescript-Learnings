// let neverValue: never = 1; // we cannot assign anything to type never. it throws a compilation error.
let courseStatus;
courseStatus = 'draft';
if (courseStatus == 'draft') {
    console.log('draft');
}
else if (courseStatus == 'published') {
    console.log('published');
}
else {
    // const value = courseStatus;
    unexpectedError(courseStatus);
}
function unexpectedError(value) {
    throw new Error(`Unexpected value: ${value}`);
}

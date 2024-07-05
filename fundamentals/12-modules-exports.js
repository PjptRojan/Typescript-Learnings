// each file in ts is considered as an isolated module. we cannot use the ts variables into another file directly. we need to export it to use it in another files.
export const PAGE_SIZE = 100;
// console.log('MAX_PAGE_SIZE', MAX_PAGE_SIZE)
// we can reexport all the files that needs to be imported into multiple files in a single line using import barrel technique.
import * as constants from './13-default-imports';
console.log(constants.COURSE_NUMBERS);

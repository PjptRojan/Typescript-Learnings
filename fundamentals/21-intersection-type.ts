// it it opposite of the union type of typescript.

interface HasId {
    id: string;
}

interface HasTitle{
    title: string;
    description: string;
}

type Course = HasId & HasTitle; // use of intersection type, this means the type course has to have both hasId and hasTitle in it.

const myCourse : Course = {
    id: 'lkjsdf33lkdsa',
    title: 'JS Course',
    description: 'This course is focused on beginners who are just starting to learn javascript.'
}
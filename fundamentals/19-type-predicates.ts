//type predicate function:

interface Person {
    name: 'string';
    age: number;
    contact: number;
    location: string;
    email: string;
}

const Mahesh: unknown = {
    name: 'Mahesh',
    age: 38,
    contact: 9864852131,
    location: 'Naxal, Kathmandu',
    email: 'mahesh@gmail.com'
}

// custom type guard using a predicate function.
if(isPersonType(Mahesh)){
    Mahesh.name
}

function isPersonType (value: unknown):value is Person {
    const person = value as Person;
    return person?.name !== null && person?.age !== null;
}
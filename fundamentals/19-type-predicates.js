//type predicate function:
const Mahesh = {
    name: 'Mahesh',
    age: 38,
    contact: 9864852131,
    location: 'Naxal, Kathmandu',
    email: 'mahesh@gmail.com'
};
// custom type guard using a predicate function.
if (isPersonType(Mahesh)) {
    Mahesh.name;
}
function isPersonType(value) {
    const person = value;
    return person?.name !== null && person?.age !== null;
}

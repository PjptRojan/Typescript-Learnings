let anyValue;
anyValue = true;
anyValue = 10;
anyValue = 'String';
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;
let unknownValue; // it's behavior is similar to type any.
unknownValue = true;
unknownValue = 10;
unknownValue = 'String';
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;
// difference between any and unknown : the unknown type is a very restrictive type that cannot be assigned to anything without doing check first.
let value1 = anyValue;
let value2 = anyValue;
let value3 = anyValue;
let value4 = anyValue;
let value5 = anyValue;
let value6 = anyValue;
let value7 = anyValue;
let value8 = anyValue;
// type unknown cannot be assigned to most of the data types without checking its type first.
let values1 = unknownValue;
let values2 = unknownValue;
let values3 = unknownValue;
//to assign it to a specific data type, we can do as follows:
if (typeof unknownValue == 'number') {
    let values4 = unknownValue;
}
let values5 = unknownValue;
let values6 = unknownValue;
let values7 = unknownValue;
let values8 = unknownValue;

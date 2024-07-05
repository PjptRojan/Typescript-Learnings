let anyValue: any;

anyValue = true;
anyValue = 10;
anyValue = 'String';
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;


let unknownValue: unknown;  // it's behavior is similar to type any.

unknownValue = true;
unknownValue = 10;
unknownValue = 'String';
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// difference between any and unknown : the unknown type is a very restrictive type that cannot be assigned to anything without doing check first.

let value1: unknown = anyValue;
let value2: any = anyValue;
let value3: boolean = anyValue;
let value4: number = anyValue;
let value5: string = anyValue;
let value6: object = anyValue;
let value7: any[] = anyValue;
let value8: Function = anyValue;


// type unknown cannot be assigned to most of the data types without checking its type first.
let values1: unknown = unknownValue;
let values2: any = unknownValue;
let values3: boolean = unknownValue;

//to assign it to a specific data type, we can do as follows:

if(typeof unknownValue == 'number'){
    let values4: number = unknownValue;
}

let values5: string = unknownValue;
let values6: object = unknownValue;
let values7: any[] = unknownValue;
let values8: Function = unknownValue;


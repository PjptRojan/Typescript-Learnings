var lessonsCount = 10;
var number = [10, 20, "hello", true];

// any should not be used as much as possible as it is not type safe

const printCourse1 = (title, lessonsCount) => {
  console.log(`Title: ${title}, lessons count: ${lessonsCount}`);
};

printCourse1(20, "Typescript Bootcamp"); //this is not type safe

const safeFunction1 = (title: String, lessonsCount: number) => {
  console.log(`Title: ${title}, lessons count: ${lessonsCount}`);
    
};

safeFunction1("Typescript Bootcamp", 20); //this is not type safe

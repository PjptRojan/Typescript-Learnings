// interface
// multiple variables with same types and need to re use the defination of a type in multiple places.

interface CourseDetails { // this is the type definition for a custom object type
    readonly title: string;
    subtitle: string;
    lessonsCount?: number;
}

const courseDetails: CourseDetails = {
    title: 'Typescript Bootcamp',
    subtitle: "Learn Ts fundamentals",
    lessonsCount: 10
}

// courseDetails.title = 'Rojans Bootcamp' // this wouldn't work if we use the readonly property modifier in the interface type.

const otherCourses: CourseDetails = {
    title: 'Typescript Bootcamp',
    subtitle: "Learn Ts fundamentals",
    // lessonsCount: 10
}

//Property modifiers: ? for only optional values and readonly for values that shouldn't be changed and be read only.

// custom object types should be mostly defined using interfaces instead of type aliases.

// interfaces can be extended after defining it but type aliases cannot be extended once defined.

// type nameType = 'Ram' | 'Shyam' | 'Hari'
// const names: nameType = 'Ram'

// type nameType = "Krishna"   // this doesn't work as type aliases are not open for extension.
// const newName: nameType = "Krishna"

// but for interface it works: in case we need to update it.
interface CourseDetails {
    courseDuration?: '3 months'
}
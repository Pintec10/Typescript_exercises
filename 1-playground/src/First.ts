var a: string = 'hello';
var b: number = 5;
var c: boolean = false;

var someArray: string[] = [];
someArray.push(a);
//someArray.push(b);    //gives an error

var anotherArray: any[] = [];
anotherArray.push(a);
anotherArray.push(b);   //ok
anotherArray.push(c);   //ok

var oneMoreArray: string[] = [];
oneMoreArray.push(a);
oneMoreArray.push(b as any);    //ok: by casting. May be restricted by compiler options



// --------------------------------------
// INTERFACES AND TYPES (ENUMS)
// --------------------------------------

interface Person {
    firstname: string,
    lastname: string,
    relation: Relation,
    optionalField?: string      //question mark makes the field optional
    isVisitor?: boolean
}

type Relation = 'customer' | 'supplier';    //make enums like this. But also works: type relation = string


function generateEmail(input: Person): string {
    return `${input.firstname}.${input.lastname}@email.com`;
}

console.log(generateEmail({
    firstname: 'Mario',
    lastname: 'Rossi',
    relation: 'customer'
}));


//function can return two types
//params can also be optional (not good practice)
function generateEmail2(input: Person, forceEmail?: boolean): string | undefined {
    if (input.isVisitor) {
        return undefined
    } else {
        return `${input.firstname}.${input.lastname}@email.com`;
    }
}



// --------------------------------------
// TYPE GUARDS
// --------------------------------------

//check if param belongs to an interface
function isValidPerson(input: any): boolean {
    if (input.firstname && input.lastname && input.relation) {
        return true;
    }
    return false;
}

//functions can have void return type
function printEmailIfValidPerson(input: any): void {
    if (isValidPerson(input)) {
        console.log(generateEmail2(input));
    } else {
        console.log('Input is not a valid Person');
    }
}

printEmailIfValidPerson({
    girstname: 'Mario',     //field name typo will trigger type guard
    lastname: 'Rossi',
    relation: 'customer'
});


// --------------------------------------
// STRICT NULL CHECKS
// --------------------------------------

const random: number = Math.random() - 0.5;

function getStringOrUndefined(arg: number): string | undefined {
    if (arg > 0 ) {
        return "a string"
    } else return undefined
}

const abc: string | undefined = getStringOrUndefined(random);   //need to specify double possible type

function toUpperCaseCustom(arg: string) {
    if (arg === undefined) {
        return "!!UNDEFINED!!"
    } else return arg.toUpperCase();
}

console.log(toUpperCaseCustom(abc!));  //forces acceptance of parameter (saying I'm sure it's going to work fine)


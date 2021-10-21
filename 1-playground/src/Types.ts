// --------------------------------------
// NULL AND UNDEFINED
// --------------------------------------

function getDataFromWeb(): string | undefined {
    return '';  //example of possible outcome
}

const data = getDataFromWeb();  //here, data: string | undefined

if (data) {
    const someOtherData = data; //here, data: string
}


// --------------------------------------
// UNKNOWN
// --------------------------------------

let input: unknown;
input = 'a string';

let someSensitiveValue: string;
// someSensitiveValue = input;      //gives error: string =/= unknown

if (typeof input === 'string') {    //this way it's ok, no error
    someSensitiveValue = input;
}

console.log(someSensitiveValue!);   //need '!' otherwise compiler says it's unassigned



// --------------------------------------
// NEVER
// --------------------------------------

function doTasks(tasks: number): void | never {
    if (tasks > 3) {
        throw new Error('too many tasks');      // in this case, return type is 'never'
    }
}

const stuff = doTasks(4);   //however, 'stuff' here is of type 'void'
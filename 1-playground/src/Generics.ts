//Note: the generic type does not need to be called 'T', it is a convention
function returnKeys<T>(arg: T) {
    console.log(Object.keys(arg));
    return Object.keys(arg);
}

const k = returnKeys({
    123: 'ghi',
    abc: 'def'
});


interface Citizen<T> {
    name: string,
    age: number,
    special: T
}

const John: Citizen<string> = {
    name: 'John',
    age: 26,
    special: 'Property in string format'
}


class Observable<T extends Citizen<string>>{
    subscribe(arg: T) {
        console.log(`Created subscription for: ${arg.name}`);
    }
}

new Observable<typeof John>().subscribe(John);      //can use typeof in defining the types list

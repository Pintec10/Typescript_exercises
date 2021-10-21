//test object needed for decorator factory demonstration, see below
const testObj = {
    someField: 'initial'
}

class Manager {
    @watchChange
    someProperty: string;

    @linkValue(testObj)
    someField: string;
}


const manager: Manager = new Manager();

console.log('--- testing normal decorator ---');
manager.someProperty = 'abc';
manager.someProperty = 'def';





// --------------------------------------
// DECORATOR
// --------------------------------------

function watchChange(target: any, key: string) {
    let property = target[key];

    const getter = () => property;

    const setter = (value: any) => {
        console.log(`${key as string} changed from ${property} to ${value}`);
        property = value;
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,    //the function assigned to 'set' is used every time the poperty's value is changed
        configurable: true,
        enumerable: true
    });
}

//instead of using the @watchChange decoration, one could execute the following:
//      watchChange(Manager.prototype, 'someProperty');



// --------------------------------------
// DECORATOR FACTORY
// --------------------------------------
//a way to pass additional params to decorators: a function that returns a decorator

function linkValue(otherObject: any) {
    return function(target: any, key: string) {
        let property = target[key];

        const getter = () => property;

        const setter = (value: any) => {
            property = value;
            otherObject[key] = value;
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            configurable: true,
            enumerable: true
        });
    }
}



console.log('--- testing decorator factory ---');
console.log(`manager.someField: ${manager.someField}`);
console.log(`testObj.someField: ${testObj.someField}`);
manager.someField = 'xxx';
console.log(`manager.someField: ${manager.someField}`);
console.log(`testObj.someField: ${testObj.someField}`);
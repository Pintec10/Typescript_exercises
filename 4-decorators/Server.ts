// class Server {
//     private port: number;   //private access modifier: property can be accessed only from within the class
//     protected address: string;  //can be accessed from within the class and any class that extends it

//     constructor(port: number, address: string) {
//         this.port = port;
//         this.address = address;
//     }

//     startServer(): void {
//         console.log(`Starting server at ${this.address} on port ${this.port}`);
//     }
// }

// const someServer = new Server(8080, 'localhost');
// someServer.startServer();

// const somePort = (someServer as any).port;  //casting to 'any' allows accessing private properties



// // --------------------------------------
// // CLASS EXTENSION
// // --------------------------------------


// class DBServer extends Server {
//     constructor(port: number, address: string) {
//         super(port, address);
//     }
// }



// // --------------------------------------
// // ABSTRACT CLASS
// // --------------------------------------

// abstract class AbstractServer {
//     protected port: number;
//     protected address: string;

//     constructor(port: number, address: string) {
//         this.port = port;
//         this.address = address;
//     }

//     abstract stopServer(): void;     //abstract method does not have implementation; will be provided by extending classes

//     //const someAbstractServer = new AbstractServer('5050', 'localhost')    //gives error: abstract classes cannot be instantiated
// }

// class ExtendingDBServer extends AbstractServer {
//     constructor(port: number, address: string) {
//         super(port, address);
//     }

//     stopServer() {
//         console.log('Stopping the server');
//     }
// }



// --------------------------------------
// INTERFACE CLASSES
// --------------------------------------
//preferred to Abstract classes, since Interface implementation create loose coupling while Abstract class extension creates tight coupling
//classes which implement an interface are typed as the interface
//and they need to implement all its methods
//note that even if the fields of the implementing class were public, they would not be accessible: more secure.

interface IServer {         //convention to start interface names with 'I'
    startServer(): void;
    stopServer(): void;
}


class ImplementedServer implements IServer {
    private port: number;
    private address: string;

    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
    }

    async startServer() {
        const data = await this.getStartupData();
        console.log(`Starting server at ${this.address} on port ${this.port}`);
    }

    stopServer(): void {
        console.log('Stopping the server');
    }

    async getStartupData(): Promise<string> {   //async functions return a Promise<string>
        return '{}';
    }
}

const someImplementedServer: IServer = new ImplementedServer(4040, 'localhost');
someImplementedServer.startServer();
someImplementedServer.stopServer();



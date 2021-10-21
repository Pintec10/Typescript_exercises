import { Login } from "./components/Login";
import { Home } from "./components/Home";

export class Router {
    private mainElement = document.getElementById('main-container');

    public handleRequest() {
        const baseUrl= this.getbaseUrl();
        const location= this.getRoute();
        console.log(`Handling request for route ${baseUrl}${location}`);
        switch(location){
            case '/login':
                this.mainElement?.append(new Login().render());
                break;
            default:
                this.mainElement?.append(new Home().render());
                break;
        } 
    }

    private getbaseUrl() {
        return window.location.pathname;
    }

    //using hash to avoid server-side rendering, so index.html is always served
    private getRoute() {
        const route = window.location.hash.substring(1);
        return route;
    }
}
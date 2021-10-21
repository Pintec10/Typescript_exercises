import { Router } from "./Router";

class Launcher {
    private router: Router = new Router();

    public launchApp() {
        this.router.handleRequest();
    }
}


new Launcher().launchApp()
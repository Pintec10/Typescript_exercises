export class Login {
    private container = document.createElement('div');

    render() {
        const pageLabel = document.createElement('label');
        pageLabel.innerText = 'This is the Login page.'
        this.container.append(pageLabel);

        return this.container;
    }
}
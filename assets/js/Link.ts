import { post } from "./utils/api";

class Link {

    private element: Element
    private addFormLink: HTMLInputElement | null;
    private urlInput: any | null;

    constructor(element: Element) {
        this.element     = element
        this.addFormLink = document.querySelector('#addFormLink')
        this.urlInput    = document.querySelector('#addFormLink #urlInput')
    }

    public showFormWithKey (event: KeyboardEvent) {
        if (this.addFormLink === null) return
        if (event.key === 't' && this.addFormLink.classList.contains('hide')) {
            event.preventDefault()
            this.addFormLink.classList.toggle('hide')
            if (! this.urlInput) return;
            this.urlInput.focus()
        } else if (event.key === 'Escape') {
            this.addFormLink.classList.toggle('hide')
        }
    }

    public init () {
        if (this.element) {
            this.element.addEventListener('click', (event: Event) => {
                event.preventDefault()
                if (! this.addFormLink) return
                this.addFormLink.classList.toggle('hide')
            });
            document.addEventListener('keydown', this.showFormWithKey.bind(this))
        }
    }

    public change () {

    }

}

export default Link

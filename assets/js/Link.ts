import { post } from "./utils/api";

class Link {

    private element: Element
    private addFormLink: HTMLInputElement | null;
    private urlInput: EventTarget | null;

    constructor(element: Element) {
        this.element     = element
        this.addFormLink = document.querySelector('#addFormLink')
        this.urlInput    = document.querySelector('#addFormLink #urlInput')
    }

    showFormWithKey (event: KeyboardEvent) {
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

    init () {
        if (this.element) {
            this.element.addEventListener('click', (event: Event) => {
                event.preventDefault()
                if (! this.addFormLink) return
                this.addFormLink.classList.toggle('hide')
            });
            document.addEventListener('keydown', this.showFormWithKey.bind(this))
        }
    }

    change () {
        if (this.urlInput) {
            const routePath = document.querySelector('.routeAjax').value;
            this.urlInput.addEventListener('change', (event: any) => {
                const url = event.target.value
                post('/link/metas', {url: url}).then((response: any) => {
                    console.log(response)
                })
            })
        }
    }

}

export default Link

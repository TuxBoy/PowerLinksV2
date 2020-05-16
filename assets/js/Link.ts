import { post } from "./utils/api";

interface OptionsForm {
    withShortcut?: Boolean,
    keyCode?: String
}

class Link {

    private element: Element
    private form: Element
    private urlInput: any | null;
    private options: OptionsForm;

    constructor(element: Element, form: Element, options?: OptionsForm) {
        this.element = element
        this.form    = form;
        this.options = Object.assign({withShortcut: true, keyCode: 't'}, options || {});
    }

    public showFormWithKey (event: KeyboardEvent) {
        if (this.form === null) return
        if (event.key === this.options.keyCode && this.form.classList.contains('hide')) {
            event.preventDefault()
            this.form.classList.toggle('hide')
            if (! this.urlInput) return;
            this.urlInput.focus()
        } else if (event.key === 'Escape') {
            this.form.classList.toggle('hide')
        }
    }

    public init () {
        if (this.element) {
            this.element.addEventListener('click', (event: Event) => {
                event.preventDefault()
                if (! this.form) return
                this.form.classList.toggle('hide')
            });
            if (this.options.withShortcut) {
                document.addEventListener('keydown', this.showFormWithKey.bind(this))
            }
        }
    }

}

export default Link

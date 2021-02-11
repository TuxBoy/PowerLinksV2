interface OptionsForm {
    withShortcut?: Boolean,
    keyCode?: String
}

export default class Link {

    private options: OptionsForm
    // @ts-ignore
    private addLinkModal: bootstrap.Modal

    constructor(target: string, options?: OptionsForm) {
        // @ts-ignore
        this.addLinkModal = new bootstrap.Modal(document.querySelector(target), {
            keyboard: false
        })
        this.shortcutHandler = this.shortcutHandler.bind(this)
        this.options = Object.assign({withShortcut: true, keyCode: 't'}, options || {});

        window.addEventListener('keydown', this.shortcutHandler)
    }

    public shortcutHandler (event: KeyboardEvent) {
        if (event.key === 'k' && event.ctrlKey === true) {
            event.preventDefault()
            this.addLinkModal.show()
        } else if (event.key === 'Escape') {
            this.addLinkModal.hide()
        }
    }

}

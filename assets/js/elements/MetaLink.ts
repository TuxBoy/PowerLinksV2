import { post } from "../utils/api";

export default class MetaLink extends HTMLElement {

    public constructor () {
        super();
        this.handleChange = this.handleChange.bind(this)
    }

    public connectedCallback () {
        const urlField = this.querySelector('.urlField')
        if  (urlField !== null) {
            urlField.addEventListener('change', this.handleChange)
        }
    }

    private async handleChange (event: any) {
        const url    = event.target.value
        const result = await post('/api/link/metadata', { url })

        this.setFormElement('description', result.description)
        this.setFormElement('image', result.image)
        this.setFormElement('title', result.title)
        this.setFormElement('link_tags', result.tags)
    }

    private setFormElement(selector: String, value: any): void {
        const element = this.querySelector(`.${selector}`)
        if (element === null) {
            return;
        }

        // @ts-ignore
        element.value = value
    }

}


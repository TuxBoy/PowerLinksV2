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
        const result = await post('/link/metadata', { url })
        const description = this.querySelector('.description')
        if (description) {
            // @ts-ignore
            description.value = result.description
        }
        const image = this.querySelector('.image')
        if (image) {
            // @ts-ignore
            image.value = result.image
        }
    }

}


// @ts-ignore
import scrape from 'html-metadata'

export default class MetaLink extends HTMLElement {

    public connectedCallback () {
    }

    private async getMetadata (url: String) {
        const result = await scrape(url)
        console.log(result)
        const { title, description, image } = result.openGraph
    }

}


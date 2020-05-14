import '../css/app.scss'
import Link from "./Link";
import MetaLink from "./elements/MetaLink";


const showFormAddLink = document.querySelector('#showFormAddLink')
const addFormLink = document.querySelector('#addFormLink')
if (showFormAddLink !== null) {
    const link = new Link(showFormAddLink, addFormLink)
    link.init()
}

const showFormFilterButton = document.querySelector('#showFormFilterButton')
const showFormFilter = document.querySelector('.showFormFilter')
if (showFormFilter !== null) {
    const link = new Link(showFormFilterButton, showFormFilter, {keyCode: 'f'})
    link.init()
}

customElements.define('meta-link', MetaLink)

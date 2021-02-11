import '../css/app.scss'

import Link from "./Link";
import MetaLink from "./elements/MetaLink";
import Toolbox from "./elements/Toolbox";
import { TimeAgo } from "./elements/TimeAgo.js";
import Choices from "choices.js";

const link = new Link('#addLink')

const choicesElement = document.querySelector('.js-choice')
if (choicesElement !== null) {
    new Choices(choicesElement, {
        duplicateItemsAllowed: false,
        placeholder: 'Tags',
        addItemText: (value) => `Touche entrer pour ajouter <b>"${value}"</b>`
    })
}

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
})

customElements.define('meta-link', MetaLink)
customElements.define('toolbox-item', Toolbox)
customElements.define('time-ago', TimeAgo)

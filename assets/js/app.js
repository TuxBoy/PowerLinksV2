import '../css/app.scss'

import Link from "./Link";
import MetaLink from "./elements/MetaLink";
import Toolbox from "./elements/Toolbox";
import { TimeAgo } from "./elements/TimeAgo.js";
import Notification from "./elements/Notification.js";
import Choices from "choices.js";
import FavoriteButton from "./elements/FavoriteButton";

if (document.querySelector('#addLink') !== null) {
    const link = new Link(document.querySelector('#addLink'))
}

const choicesElement = document.querySelector('.js-choice')
if (choicesElement !== null) {
    new Choices(choicesElement, {
        duplicateItemsAllowed: false,
        placeholder: true,
        placeholderValue: 'Tags',
        addItemText: (value) => `Touche entrer pour ajouter <b>"${value}"</b>`
    })
}

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
})

const myDropdown = document.getElementById('notificationDropdown')
if (myDropdown !== null) {
    const notification = new Notification()
    myDropdown.addEventListener('show.bs.dropdown', notification.onClickOpenNotification)
}

customElements.define('meta-link', MetaLink)
customElements.define('toolbox-item', Toolbox)
customElements.define('time-ago', TimeAgo)
customElements.define('favorite-button', FavoriteButton)

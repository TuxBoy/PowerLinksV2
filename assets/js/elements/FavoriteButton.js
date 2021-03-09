import {post} from "../utils/api";

/**
 * @property {Promise} clickHandler
 * @property {string} apiRouteAdd
 * @property {string} apiRouteDelete
 * @property {Element} favorite_link
 */
export default class FavoriteButton extends HTMLElement {

    constructor() {
        super();

        this.clickHandler = this.clickHandler.bind(this)
        this.apiRouteAdd = this.getAttribute('route-add')
        this.apiRouteDelete = this.getAttribute('route-delete')
    }

    connectedCallback() {
        this.favorite_link = this.querySelector('.favorite__link')
        const titleMessage = this.isActive() ? 'Supprimer le lien de mes favoris' : 'Ajouter le lien dans mes favoris'
        this.favorite_link.setAttribute('title', titleMessage)
        if (this.favorite_link !== null) {
            this.favorite_link.addEventListener('click', this.clickHandler)
        }
    }

    async clickHandler(event) {
        event.preventDefault()
        const route = this.isActive() ? this.apiRouteDelete : this.apiRouteAdd
        const { success, message } = await post(route)

        if (success === true) {
            console.log(message)
            this.favorite_link.classList.toggle('active')
        }
    }

    /**
     * Si le lien contient la classe "active" alors le lien est ajouté comme favoris
     *
     * @returns {boolean}
     */
    isActive() {
        return this.favorite_link.classList.contains('active') === true
    }

}

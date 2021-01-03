export default class DeleteItem extends HTMLElement
{
    private linkId: number;

    constructor() {
        super();
        this.deleteHandler = this.deleteHandler.bind(this)
        this.linkId = parseInt(this.getAttribute('id') || "", 10)
    }

    connectedCallback () {
        this.innerHTML += this.render()
        const close_button = this.querySelector('.close')
        if (close_button) {
            close_button.addEventListener('click', this.deleteHandler)
        }
    }

    async deleteHandler (event: any) {
        event.preventDefault()
        try {
            const response = await fetch('/api/link/delete/' + this.linkId, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                method: 'DELETE'
            })
            const data = await response.json()
            // loader.hide()
            this.parentElement?.remove()
        } catch (e) {
            //loader.hide()
            const alert = document.createElement('alert-floating')
            alert.innerHTML = e.detail
            document.body.appendChild(alert)
        }
    }

    render (): string {
        return  `
            <form class="delete__item">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </form>
        `
    }
}

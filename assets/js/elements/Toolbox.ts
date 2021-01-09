export default class Toolbox extends HTMLElement
{
    private linkId: number;
    private edit_target: string;

    constructor() {
        super();
        this.deleteHandler = this.deleteHandler.bind(this)
        this.linkId = parseInt(this.getAttribute('id') || "", 10)
        this.edit_target = this.getAttribute('edit_target') || "#"
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
           <div class="toolbox">
             <form class="delete__item">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </form>
            <a class="edit__item" href="${this.edit_target}">
                <span aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </span>
            </a>
           </div>
        `
    }
}

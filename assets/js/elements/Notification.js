import { post } from "../utils/api";

export default class Notification {

    async onClickOpenNotification (event) {
        const updatePath = this.dataset.update

        const { success } = await post(updatePath)
        if (success) {
            const notificationCountElement = document.querySelector('.notification__count')
            if (!notificationCountElement) {
                return
            }
            notificationCountElement.remove()
        }
    }

}

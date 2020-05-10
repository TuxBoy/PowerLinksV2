import '../css/app.scss'
import Link from "./Link";

const showFormAddLink = document.querySelector('#showFormAddLink')
const link = new Link(showFormAddLink)
link.init()
link.change()

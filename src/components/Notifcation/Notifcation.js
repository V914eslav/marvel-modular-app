import { ROOT_MODAL } from "../../constants/root.js";
import imgCloseBlack from "./img/close-black.svg";

import classes from "./Notifcation.css";

class Notifcation {
  render() {
    const hemlWrapper = `
      <div class="${classes.notification__container}">
        <span>Нет контента</span>
        <button  
        class="btn bg-contain ${classes.notification__close}"
        onclick ="modal.innerHTML=''"
        style="background-image: url(${imgCloseBlack})"
        ></button>
      </div>
    `;
    ROOT_MODAL.innerHTML = hemlWrapper;
  }
}
export default new Notifcation();

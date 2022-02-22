import { getDataApi } from "../../utils/getDataApi.js";
import { IMG_STANDARD_XLARGE } from "../../constants/api.js";
import { ROOT_MODAL } from "../../constants/root.js";
import Notifcation from "../Notifcation";
import imgCloseWhite from "./img/close-white.svg";

import classes from "./Characters.css";
class Characters {
  renderContent(data) {
    let htmlContent = "";
    data.forEach(({ name, thumbnail: { extension, path } }) => {
      const imgSrc = path + "/" + IMG_STANDARD_XLARGE + "." + extension;
      htmlContent += `
        <li class="${classes.characters__item}">
          <img class="img-cover ${classes.characters__img}" src="${imgSrc}"/>
          <span class="${classes.characters__name}">${name}</span>
        </li>
      `;
    });
    const htmlWrapper = `
    <div class="${classes.wrapper}">
      <ul class="${classes.characters__container}">
        ${htmlContent}
      </ul>
      <button  
      class="btn bg-contain ${classes.characters__close}"
      onclick ="modal.innerHTML=''"
      style="background-image: url(${imgCloseWhite})"
      ></button>
    </div>
    `;
    ROOT_MODAL.innerHTML = htmlWrapper;
  }

  async render(uri) {
    const data = await getDataApi.getData(uri);
    data.length ? this.renderContent(data) : Notifcation.render();
  }
}
export default new Characters();

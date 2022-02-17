import { getDataApi } from "../../utils/getDataApi.js";
import { API_URL, URL_COMICS } from "../../constants/api.js";
import "./App.css";

class App {
  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);
    console.log(data);
  }
}
export default new App();

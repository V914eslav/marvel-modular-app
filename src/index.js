import "regenerator-runtime/runtime";
import { getDataApi } from "./utils/getDataApi.js";
import { API_URL, URL_COMICS } from "./constants/api.js";

(async () => {
  const data = await getDataApi.getData(API_URL + URL_COMICS);
  console.log(data);
})();

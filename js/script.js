import Header from "./modules/header.js";
import getApi from "./modules/getApi.js";
import { Api } from "./modules/api.js";
const headerMenu = new Header(".header--container", ".nav--menu");

headerMenu.mostrarElemento();

getApi(Api)

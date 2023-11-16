import "@riotjs/hot-reload";
import { component } from "riot";

import "./src/style.css";
import App from "./src/app.riot";
import registerGlobalComponents from "./src/register-global-components";

// register
registerGlobalComponents();

component(App)(document.getElementById("root"));

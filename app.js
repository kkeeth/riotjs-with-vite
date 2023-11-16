import "./src/style.css";
import * as riot from "riot";
import App from "./src/app.riot";

const mountApp = riot.component(App);
mountApp(document.getElementById("root"));

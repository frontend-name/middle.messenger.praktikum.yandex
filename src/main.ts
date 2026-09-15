import Handlebars from "handlebars";
import homeTemplate from "./templates/home.hbs?raw";
import "./styles/main.scss";

const template = Handlebars.compile(homeTemplate);

const html = template({
  title: "Web-chat",
  description: "My first web-app by using Handlebars",
});

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = html;
}

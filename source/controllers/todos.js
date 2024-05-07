import { getList } from "../models/todos.js";

export function mainPage(req, res) {
  const list = getList();

  let page =
    "<!doctype html>" +
    "<html>" +
    "   <head>" +
    '       <meta charset="UTF-8">' +
    "       <title>Список запланированных дел</title>" +
    "   </head>" +
    "   <body>" +
    "       <h1>Запланированные дела</h1>";
  for (let item of list) {
    const date = new Date(item.createdAt);
    page +=
      `<h2><a href="/${item._id}/">${item.title}</a></h2>` +
      `<p>${item.desc}</p>` +
      `<p>${date.toLocaleString()}</p>` +
      "<p>&nbsp;</p>";
  }

  page += "</body></html>";

  res.send(page);
}

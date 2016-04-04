import React from "react"
import ReactDOM from "react-dom"
import {List, Map} from "immutable"

import ArticlesApp from "./components/ArticlesApp"

const articles = List.of(
  Map({ id: 1, title: "12 famous directors that never got the final cut", author: "Timmy Tester", date: 1459807571, reads: 10000, engagements: 1000, comments: 100, picture: "avatar.png", round: 1 }),
  Map({ id: 2, title: "5 surprising facts about frontend development", author: "Sally Summers", date: 1459802571, reads: 2000, engagements: 200, comments: 20, picture: "avatar.png", round: 1 }),
  Map({ id: 3, title: "Local man tries out React", author: "Burt Buritto", date: 1459801171, reads: 1000, engagements: 100, comments: 10, picture: "avatar.png", round: 1 })
)

ReactDOM.render(
  <ArticlesApp articles={articles} />,
  document.getElementById("articlesApp")
)

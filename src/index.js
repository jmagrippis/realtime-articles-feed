import React from "react"
import ReactDOM from "react-dom"
import {List, Map} from "immutable"
import "./../node_modules/normalize.css/normalize.css"

import TrendingApp from "./components/TrendingApp"


const coverImage = "https://placeholdit.imgix.net/~text?txtsize=33&txt=[cover%20image]&w=480&h=480"

const articles = List.of(
  Map({ id: 1, title: "12 famous directors that never got the final cut", author: { name: "Timmy Tester" }, published_at: "2016-04-08T08:33:32.000-07:00", cover_image_url: coverImage, reads: 10000, engagements: 1000, comments: 100, picture: "avatar.png", round: 1 }),
  Map({ id: 2, title: "5 surprising facts about frontend development", author: { name: "Sally Summers" }, published_at: "2016-04-07T23:33:32.000-07:00", cover_image_url: coverImage, reads: 2000, engagements: 200, comments: 20, picture: "avatar.png", round: 1 }),
  Map({ id: 3, title: "Local man tries out React", author: { name: "Burt Buritto" }, published_at: "2016-04-07T10:33:32.000-07:00", cover_image_url: coverImage, reads: 1000, engagements: 100, comments: 10, picture: "avatar.png", round: 1 })
)

ReactDOM.render(
  <TrendingApp articles={articles} />,
  document.getElementById("articlesApp")
)

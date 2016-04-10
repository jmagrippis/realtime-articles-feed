import React from "react"
import ReactDOM from "react-dom"
import {List, Map} from "immutable"
import "./../node_modules/normalize.css/normalize.css"

import TrendingApp from "./components/TrendingApp"
import { placeholders } from "./config"

const coverImage = placeholders.coverThumbImage

const articles = List.of(
  Map({ id: 1, title: "12 famous directors that never got final cut", author: { name: "Timmy Tester" }, published_at: "2016-04-08T08:33:32.000-07:00", cover_image_url: coverImage, tower_data: { reads: 10000, shares: 1000, comments: 100 }, picture: "avatar.png", round: 1 }),
  Map({ id: 2, title: "5 surprising facts about frontend development", author: { name: "Sally Summers" }, published_at: "2016-04-07T23:33:32.000-07:00", cover_image_url: coverImage, tower_data: { reads: 2000, shares: 200, comments: 20 }, picture: "avatar.png", round: 1 }),
  Map({ id: 3, title: "Local man tries out React", author: { name: "Burt Buritto" }, published_at: "2016-04-07T10:33:32.000-07:00", cover_image_url: coverImage, tower_data: { reads: 1000, shares: 100, comments: 10 }, picture: "avatar.png", round: 1 })
)

ReactDOM.render(
  <TrendingApp articles={articles} />,
  document.getElementById("trendingApp")
)

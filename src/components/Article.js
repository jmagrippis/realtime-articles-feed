import React from "react"
import { StyleSheet, css } from "aphrodite"
import {List, Map} from "immutable"
import dateFormat from "dateformat"

import StatBlocks from "./StatBlocks"

const styles = StyleSheet.create({
  flexCenteredRow: {
    display: "flex",
    alignItems: "center"
  },
  coverThumb: {
    maxWidth: 280
  },
  marginRight: {
    marginRight: "1.5em"
  },
  largeHeader: {
    fontSize: "2.25em",
    margin: 0
  },
  byline: {
    fontSize: "1.2em",
    marginBottom: "1.5em"
  }
})

function deriveBlocks(data) {
  return List.of(
    Map({ value: data.reads, title: "Total Reads", color: "#9FC8A7", icon: "flash_on" }),
    Map({ value: data.shares, title: "Engagements", color: "#F08F76", icon: false }),
    Map({ value: data.comments, title: "Comments", color: "#F7D000", icon: false })
  )
}

export default class Article extends React.Component {
  render() {
    let blocks = deriveBlocks(this.props.tower_data)

    return (
      <li key={this.props.id}>
        <article className={css(styles.flexCenteredRow)}>
          <div className={css(styles.marginRight)}><img src={this.props.cover_image_url} className={css(styles.coverThumb)}></img></div>
          <div>
            <h2 className={css(styles.largeHeader)}>{this.props.title}</h2>
            <div className={css(styles.byline)}><strong>{this.props.author.name}</strong> &middot; {dateFormat(new Date(this.props.published_at), "mmmm dS, yyyy")}</div>
            <StatBlocks blocks={blocks} />
          </div>
        </article>
      </li>
    )
  }
}

Article.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.object.isRequired,
  published_at: React.PropTypes.string.isRequired,
  tower_data: React.PropTypes.object.isRequired,
  cover_image_url: React.PropTypes.string
}

Article.defaultProps = {
  cover_image_url: "https://placeholdit.imgix.net/~text?txtsize=33&txt=[cover%20image]&w=480&h=480"
}

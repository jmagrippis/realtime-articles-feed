import React from "react"
import { StyleSheet, css } from "aphrodite"
import dateFormat from "dateformat"


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
    fontSize: "2.25em"
  },
  byline: {
    fontSize: "1.25em"
  }
})

export default class Article extends React.Component {
  render() {
    return (
      <li key={this.props.id}>
        <article className={css(styles.flexCenteredRow)}>
          <div className={css(styles.marginRight)}><img src={this.props.cover_image_url} className={css(styles.coverThumb)}></img></div>
          <div>
            <h2 className={css(styles.largeHeader)}>{this.props.title}</h2>
            <div className={css(styles.byline)}><strong>{this.props.author.name}</strong> &middot; {dateFormat(new Date(this.props.published_at), "mmmm dS, yyyy")}</div>
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
  cover_image_url: React.PropTypes.string
}

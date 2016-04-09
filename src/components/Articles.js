import React from "react"
import { StyleSheet, css } from "aphrodite"

import Article from "./Article"

const styles = StyleSheet.create({
  bulletless: {
    listStyle: "none"
  },
  contained: {
    maxWidth: 800
  }
})

export default class ArticlesApp extends React.Component {
  render() {
    return (
      <section className={css(styles.contained)}>
        <ul className={css(styles.bulletless)}>
          {this.props.articles.map(article =>
            <Article key={article.get("id")} {...article.toJS()}/>
          )}
        </ul>
      </section>
    )
  }
}

ArticlesApp.propTypes = { articles: React.PropTypes.object }
ArticlesApp.defaultProps = { articles: {} }

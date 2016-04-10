import React from "react"
import { StyleSheet, css } from "aphrodite"

import Articles from "./Articles"
import { defaultStyles } from "./../config"

const styles = StyleSheet.create({
  appContainer: {
    alignItems: "center",
    color: defaultStyles.bodyColor,
    display: "flex",
    flexDirection: "column",
    fontFamily: defaultStyles.fontFamily,
    justifyContent: "space-between"
  }
})

export default class ArticlesApp extends React.Component {
  render() {
    return (
      <main className={css(styles.appContainer)}>
        <Articles articles={this.props.articles} className={css(styles.appContainer)} />
      </main>
    )
  }
}

ArticlesApp.propTypes = { articles: React.PropTypes.object }
ArticlesApp.defaultProps = { articles: {} }

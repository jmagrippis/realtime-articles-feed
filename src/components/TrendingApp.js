import React from "react"

import Articles from "./Articles"

export default class ArticlesApp extends React.Component {
  render() {
    return <Articles articles={this.props.articles} />
  }
}

ArticlesApp.propTypes = { articles: React.PropTypes.object }
ArticlesApp.defaultProps = { articles: {} }

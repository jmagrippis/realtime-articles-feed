import React from "react"

import Article from "./Article"

export default class ArticlesApp extends React.Component {
  render() {
    return <section className="articles">
      <ul className="article-list">
        {this.props.articles.map(article =>
          <Article key={article.get("id")} {...article.toJS()}/>
        )}
      </ul>
    </section>
  }
}

ArticlesApp.propTypes = { articles: React.PropTypes.object }
ArticlesApp.defaultProps = { articles: {} }

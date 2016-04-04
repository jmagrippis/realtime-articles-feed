import React from "react"

export default class Article extends React.Component {
  render() {
    return <li key={this.props.id}>
      <h2>{this.props.title}</h2>
    </li>
  }
}

Article.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired
}

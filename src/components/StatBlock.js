import React from "react"
import { StyleSheet, css } from "aphrodite"

const blockStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const styles = StyleSheet.create({
  flexColumn: {
    display: "flex",
    flexDirection: "column"
  }
})

export default class StatBlock extends React.Component {
  render() {
    let style = Object.assign(blockStyle, {color: this.props.color})
    if (this.props.width) {
      style.width = this.props.width
    }

    return (
      <div style={style}>
        {this.props.icon ? <div>!</div> : ""}
        <div className={css(styles.flexColumn)}>
          <div>{this.props.value}</div>
          <div>{this.props.title}</div>
        </div>
      </div>
    )
  }
}

StatBlock.propTypes = {
  value: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  color: React.PropTypes.string,
  icon: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  width: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ])
}

StatBlock.defaultProps = {
  title: "",
  color: "black",
  icon: false,
  width: false
}

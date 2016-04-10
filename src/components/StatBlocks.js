import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import { StyleSheet, css } from "aphrodite"

import StatBlock from "./StatBlock"

const styles = StyleSheet.create({
  flexJustifiedBetweenCenteredRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
})

export default class StatBlocks extends React.Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  
  render() {
    let width = (100/this.props.blocks.count() - 2.5) + "%"
    return (
      <div className={css(styles.flexJustifiedBetweenCenteredRow)}>
        {this.props.blocks.map((block, key) =>
          <StatBlock key={key} width={width} {...block.toJS()}/>
        )}
      </div>
    )
  }
}

StatBlocks.propTypes = {
  blocks: React.PropTypes.object.isRequired
}

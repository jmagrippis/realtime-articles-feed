import React from "react"
import TestUtils from "react-addons-test-utils"
import StatBlock from "../../src/components/StatBlock"
import {expect} from "chai"

const { renderIntoDocument, scryRenderedDOMComponentsWithTag } = TestUtils

describe("StatBlock", () => {
  it("it formats a multi-digit value with commas", () => {
    let properties = {
      value: 12345
    }
    let component = renderIntoDocument(
      <StatBlock {...properties} />
    )
    let rendered = scryRenderedDOMComponentsWithTag(component, "div")

    expect(rendered[1].textContent).to.equal("12,345")

    properties = {
      value: 1234567890
    }
    component = renderIntoDocument(
      <StatBlock {...properties} />
    )
    rendered = scryRenderedDOMComponentsWithTag(component, "div")

    expect(rendered[1].textContent).to.equal("1,234,567,890")

    properties = {
      value: 123
    }
    component = renderIntoDocument(
      <StatBlock {...properties} />
    )
    rendered = scryRenderedDOMComponentsWithTag(component, "div")

    expect(rendered[1].textContent).to.equal("123")
  })
  it("it only renders an icon div when an icon is provided", () => {
    let properties = {
      value: 12345
    }
    let component = renderIntoDocument(
      <StatBlock {...properties} />
    )
    let element = scryRenderedDOMComponentsWithTag(component, "i")

    expect(element.length).to.equal(0)

    properties = {
      value: 12345,
      icon: "face"
    }
    component = renderIntoDocument(
      <StatBlock {...properties} />
    )
    element = scryRenderedDOMComponentsWithTag(component, "i")

    expect(element.length).to.equal(1)
  })
})

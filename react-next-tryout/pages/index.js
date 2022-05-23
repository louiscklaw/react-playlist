import React, { Component } from 'react'

import Link from 'next/link'

import fetch from 'isomorphic-unfetch'

import TestComp1 from '../components/TestComp1'

export default class extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    const data = await res.json()

    return {
      title: data.title,
      imageUrl: data.url,
    }
  }

  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>
          <TestComp1></TestComp1>
          <img src={this.props.imageUrl} />
          <Link href="/page1">
            <a>page1</a>
          </Link>
        </div>
      </div>
    )
  }
}

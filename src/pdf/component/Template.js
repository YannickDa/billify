import React, { PureComponent } from "react"
import { resolve } from "path"

import "./bootstrap.min.scss"
import "./bootstrap-theme.min.scss"

export default class Template extends PureComponent {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href={`file://${resolve(__dirname, "style.css")}`} />
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
}

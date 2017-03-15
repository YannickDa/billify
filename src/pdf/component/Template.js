import React, { PureComponent } from "react"

export default class Template extends PureComponent {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="file:///home/yannick/workspace/billify/src/pdf/component/bootstrap.min.css" />
          <link rel="stylesheet" href="file:///home/yannick/workspace/billify/src/pdf/component/bootstrap-theme.min.css" />
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
}

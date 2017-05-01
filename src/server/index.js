import conditionalGet from "koa-conditional-get"
import routerFactory from "koa-router-factory"
import responseTime from "koa-response-time"
import bodyParser from "koa-bodyparser"
import compress from "koa-compress"
import session from "koa-session"
import Router from "koa-router"
import helmet from "koa-helmet"
import serve from "koa-static"
import mount from "koa-mount"
import etag from "koa-etag"
import koa from "koa"

import zlib from "zlib"

import { StaticRouter } from "react-router-dom"
import { Provider } from "react-redux"
import React from "react"
import { renderToString } from "react-dom/server"
import Html from "./html"
import configureStore from "store/configureStore"
import App from "component/app"

import preload from "./preload"

const env = process.env.NODE_ENV || process.argv[2] || "development"
const app = new Koa()
app.context.env = env

app.use(responseTime())
app.use(conditionalGet())
app.use(etag())

app.use(compress({
  flush: zlib.Z_SYNC_FLUSH
}))

app.use(mount("/", serve("public")))

app.keys = ["billify-your-activity"]

app.use(session({
  maxAge: 7 * 24 * 60 * 60 * 1000
}, app))

app.use(bodyParser())

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log(error)
    ctx.status = error.status && typeof error.status === "number" ? error.status:500
    ctx.message = error.message || "Internal error"
  }
})

app.use(async (ctx, next) => {
  const location = ctx.request.url
  const context = {}
  const store = configureStore()

  const res = await preload(location, store)

  const component = (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )

  const content = renderToString(
    <Html component={component} store={store} />
  )

  if (context.url) {
    ctx.redirect(context.url)
    return
  }

  if (context.missed) {
    ctx.response.status = 404
    ctx.response.message = "Not found"
    return
  }

  ctx.body = `<!DOCTYPE html>\n${content}`
})

app.listen(3000, err => {
  if (err) {
    console.error("Error when running server", err)
    return
  }

  console.log("Server running on port 3000")
})

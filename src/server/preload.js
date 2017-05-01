import { matchPath } from "react-router"

import routes from "application/routes"

export default (async (url, store) => {
  const promises = []

  Object.keys(routes).forEach(async key => {
    const route = routes[key]
    const match = matchPath(url, route.path, {
      exact: route.exact,
      strict: false
    })

    if (match && match.isExact) {
      const component = route.component.WrappedComponent || route.component
      if (component.fetchData) {
        promises.push(component.fetchData({ store, params: match.params }))
      }
    }
  })

  return Promise.all(promises)
})

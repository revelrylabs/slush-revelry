import ReactDOMServer from 'react-dom/server'
import createRenderer from './createRenderer'

const render = createRenderer(ReactDOMServer)

export default render

export function renderJson(_req, res, next) {
  res.render = (name, data) => res.json({name, data})
  next()
}

export function renderHtml(_req, res, next) {
  res.render = (name, data) => res.send(render(name, data))
  next()
}

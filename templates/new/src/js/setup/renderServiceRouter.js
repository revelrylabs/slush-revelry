import {Router} from 'express'
const router = new Router()

router.post('*', function(req, res) {
  const {name, data} = req.body
  res.render(name, data || {})
})

export default router

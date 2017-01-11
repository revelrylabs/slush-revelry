// ACTUAL ROUTES START HERE
import {Router} from 'express'
const router = new Router()

// THIS CODE SECTION IS FOR QUICK MOCKING
// DELETE IT WHEN YOU HAVE REAL BACKING DATA
/* eslint-disable */
let nextFakeId = 0
let fakes = []
const fakesById = {}
function rebuildFakesArray() {
  return fakes = Object.keys(fakesById)
    .sort((a, b) => a - b)
    .map(id => fakesById[id])
}
function findFake(id) {
  return fakesById[id]
}
function createFake(attrs={}) {
  const id = ++nextFakeId
  const name = `widget ${id}`
  const fake = fakesById[id] = {
    name,
    ...attrs,
    id,
  }
  rebuildFakesArray()
  return fake
}
function updateFake(id, attrs={}) {
  const oldAttrs = fakesById[id]
  const fake = fakesById[id] = {...oldAttrs, ...attrs}
  rebuildFakesArray()
  return fake
}
function deleteFake(id) {
  delete fakesById[id]
  rebuildFakesArray()
  return null
}
for(let i = 0; i < 10; i++) {
  createFake()
}
/* eslint-enable */

// index
router.get('/', (req, res) => {
  res.render('widgets/index', {
    widgets: fakes,
  })
})

// new
router.get('/new', (req, res) => {
  const widget = req.body.widget || {}

  res.render('widgets/new', {
    widget,
  })
})

// show
router.get('/:id', (req, res) => {
  res.render('widgets/show', {
    widget: findFake(req.params.id),
  })
})

// edit
router.get('/:id/edit', (req, res) => {
  res.render('widgets/edit', {
    widget: findFake(req.params.id),
  })
})

// create
router.post('/', (req, res) => {
  const attrs = req.body.widgets || {}
  const {id} = createFake(attrs)

  res.redirect(`/widgets/${id}`)
})

// update
router.post('/:id', (req, res) => {
  const attrs = req.body.widgets || {}

  updateFake(req.params.id, attrs)
  res.redirect(`/widgets/${req.params.id}`)
})

// delete
router.delete('/:id', (req, res) => {
  deleteFake(req.params.id)
  res.redirect('/widgets')
})

export default router

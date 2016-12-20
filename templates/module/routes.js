// ACTUAL ROUTES START HERE
import {Router} from 'express'
const router = new Router()

// THIS CODE SECTION IS FOR QUICK MOCKING
// DELETE IT WHEN YOU HAVE REAL BACKING DATA
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
  const fake = fakesById[id] = {...attrs, id}
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

// index
router.get('/', function(req, res) {
  res.render('<%= pluralName %>/index', {
    <%= pluralName %>: fakes,
  })
})

// new
router.get('/new', function(req, res) {
  const <%= singularName %> = req.body.<%= singularName %> || {}
  res.render('<%= pluralName %>/new', {
    <%= singularName %>,
  })
})

// show
router.get('/:id', function(req, res) {
  res.render('<%= pluralName %>/show', {
    <%= singularName %>: findFake(req.params.id),
  })
})

// edit
router.get('/:id/edit', function(req, res) {
  res.render('<%= pluralName %>/edit', {
    <%= singularName %>: findFake(req.params.id),
  })
})

// create
router.post('/', function(req, res) {
  const attrs = req.body.<%= pluralName %> || {}
  const {id} = createFake(attrs)
  res.redirect(`/<%= pluralName %>/${id}`)
})

// update
router.post('/:id', function(req, res) {
  const attrs = req.body.<%= pluralName %> || {}
  updateFake(req.params.id, attrs)
  res.redirect(`/<%= pluralName %>/${req.params.id}`)
})

// delete
router.delete('/:id', function(req, res) {
  deleteFake(req.params.id)
  res.redirect('/<%= pluralName %>')
})

export default router

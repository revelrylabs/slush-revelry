import {Router} from 'express'
import {names, get} from './autoload/routes'

const router = new Router()

router.use('/', get('home'))

names().forEach((name) => router.use(`/${name}`, get(name)))

export default router

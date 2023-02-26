/**
 * The routes.
 *
 * @author Shirin Meirkhan
 * @version 1.0.0
 */

import express from 'express'
import createError from 'http-errors'
import { router as tellUs } from './tell-us-router.js'

export const router = express.Router()

router.use('/', tellUs)

// Catch 404 (ALWAYS keep this as the last route).
router.use('*', (req, res, next) => next(createError(404)))

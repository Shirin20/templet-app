import express from 'express'
import { TellUsController } from '../controllers/tell-us-controller.js'

export const router = express.Router()

const controller = new TellUsController()

// Map HTTP verbs and route paths to controller actions.
router.get('/', controller.index)

import { Router } from 'express'
import * as db from '../db/bookings.ts'

const router = Router()

router.get('/day/:date', async (req, res) => {
  const { date } = req.params
  try {
    const result = await db.getBookingsByDate(date)
    res.json(result)
  } catch (error) {
    console.error(`Error retrieving db.getBookingsByDate:`, error)
    res.sendStatus(500).json({ error: "Couldn't get the bookings by date" })
  }
})

router.post('/', async (req, res) => {
  const booking = req.body
  try {
    const result = await db.addBooking(booking)
    res.json(result)
  } catch (error) {
    console.error(`Error: ${error}`)
    res.sendStatus(500)
  }
})

export default router

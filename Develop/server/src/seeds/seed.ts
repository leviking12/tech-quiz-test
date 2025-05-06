import 'dotenv/config'
import { connectDB, db } from '../config/connection.js'
import { Question } from '../models/index.js'

async function seed(): Promise<void> {
  try {
    await connectDB()
    await Question.deleteMany({})
    console.log('Question collection cleaned.')
  } catch (err) {
    console.error('Error cleaning questions:', err)
    process.exit(1)
  } finally {
    await db.close()
  }
  console.log('Database connection closed. Seeding complete.')
  process.exit(0)
}

seed().catch(err => {
  console.error('Seeding failed:', err)
  process.exit(1)
})

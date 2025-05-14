import 'reflect-metadata'
import 'express-async-errors';
import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import '@babel/register';
import '@shared/container/providers'
import { AppError } from '@shared/errors/app-error'
import { router } from './routes'
import { AppDataSource } from '../data-source'

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
    startServer();
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })

const app = express()
app.use(express.json())

const options = {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}

app.use(cors(options))

app.use(router)

app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    })
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  })
})

function startServer() {
  app.listen(3333, () => {
    console.log('Server running on port 3333')
  })
}

export { app }
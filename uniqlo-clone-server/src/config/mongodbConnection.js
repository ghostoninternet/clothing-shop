import { MongoClient, ServerApiVersion } from 'mongodb'
import { environment } from './environment.js'

let uniqloDB = null

export async function connectDB() {
  const client = new MongoClient(environment.MONGODB_CONNECTION_STRING, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true
    }
  })

  await client.connect()
  .then((connection) => {
    uniqloDB = connection.db(environment.DATABASE_NAME)
  })

}

export function getDB() {
  if (!uniqloDB) throw new Error('Must connect to Database first!')
  return uniqloDB
}

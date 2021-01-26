require("dotenv").config({ path: `${__dirname}/../../../../.env` })
const { Client } = require("pg")

exports.sendLeaderBoard = async () => {
  const client = new Client({
    connectionTimeoutMillis: 50000,
    connectionString: `${process.env.DATABASE_URL}?ssl=true`,
  })
  console.log("connecting to db")
  try {
    await client.connect()
    console.log("connected to db")
    const { rows } = await client.query(`SELECT * FROM leaderboard;`)
    await client.end()
    console.log("Disconnected from db")
    return rows
  } catch (error) {
    await client.end()
    throw new Error(error)
  }
}

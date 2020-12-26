require("dotenv").config({ path: `${__dirname}/../../../../.env` })
const { Client } = require("pg")

exports.selectSteamId = async (steamId) => {
  const client = new Client({
    connectionTimeoutMillis: 50000,
    connectionString: process.env.DATABASE_URL,
  })
  console.log("connecting to db")
  try {
    await client.connect()
    console.log("connected to db")
    const { rows } = await client.query(
      `SELECT * FROM crystal_isles_steamids WHERE steam_id = '${steamId}';`,
    )
    await client.end()
    console.log("Disconnected from db")
    return rows
  } catch (error) {
    await client.end()
    throw new Error(error)
  }
}

exports.insertSteamId = async (steamId) => {
  const client = new Client({
    connectionTimeoutMillis: 50000,
    connectionString: process.env.DATABASE_URL,
  })
  console.log("connecting to db")
  try {
    await client.connect()
    console.log("connected")
    const { rowCount } = await client.query(
      `INSERT INTO crystal_isles_steamids (steam_id, created_at) VALUES ('${steamId}', NOW());`,
    )
    await client.end()
    console.log("Disconnected from db")
    return rowCount
  } catch (error) {
    await client.end()
    throw new Error(error)
  }
}

exports.deleteSteamId = async (steamId) => {
  throw new Error("Not yet implemented")
}

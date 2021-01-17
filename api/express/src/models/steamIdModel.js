require("dotenv").config({ path: `${__dirname}/../../../../.env` })
const { Client } = require("pg")

exports.selectSteamId = async (steamId, tableName) => {
  const client = new Client({
    connectionTimeoutMillis: 50000,
    connectionString: `${process.env.DATABASE_URL}?ssl=true`,
  })
  console.log("connecting to db")
  try {
    await client.connect()
    console.log("connected to db")
    const { rows } = await client.query(`SELECT * FROM ${tableName} WHERE steam_id = '${steamId}';`)
    await client.end()
    console.log("Disconnected from db")
    return rows
  } catch (error) {
    await client.end()
    throw new Error(error)
  }
}

exports.sendAllSteamIds = async (tableName) => {
  const client = new Client({
    connectionTimeoutMillis: 50000,
    connectionString: process.env.DATABASE_URL,
  })
  console.log("connecting to db")
  try {
    await client.connect()
    console.log("connected to db")
    const { rows } = await client.query(`SELECT * FROM ${tableName};`)
    await client.end()
    console.log("Disconnected from db")
    return rows
  } catch (error) {
    await client.end()
    throw new Error(error)
  }
}

exports.insertSteamId = async (steamId, tableName) => {
  const client = new Client({
    connectionTimeoutMillis: 50000,
    connectionString: process.env.DATABASE_URL,
  })
  console.log("connecting to db")
  try {
    await client.connect()
    console.log("connected")
    const { rowCount } = await client.query(
      `INSERT INTO ${tableName} (steam_id, created_at) VALUES ('${steamId}', NOW());`,
    )
    await client.end()
    console.log("Disconnected from db")
    return rowCount
  } catch (error) {
    await client.end()
    throw new Error(error)
  }
}

exports.omitSteamId = async (steamId, tableName) => {
  throw new Error("Not yet implemented")
}

const { Client } = require('pg')

const client = new Client({ 
  database: 'forbidden_planet'
})

exports.selectSteamId = async (steamId) => {
  console.log(steamId)
  console.log('connecting')
  try {

    await client.connect()
    console.log('connected')
    const result = await client.query(`SELECT steamId FROM crystal_isles_steamids WHERE steamId = ${steamId};`)
    return result
  } catch (error) {
    console.log(error)
  }
}

exports.insertSteamId = async (steamId) => {
  console.log(steamId)
  console.log('connecting')
  try {
    await client.connect()
    console.log('connected')
    const result = await client.query(`INSERT INTO crystal_isles_steamids (steam_id, created_at) VALUES ('${steamId}', NOW());`)
    return result
  } catch (error) {
    console.log(error)
  }
}


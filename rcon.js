import { Rcon } from 'rcon-client'

const rconCystalIsles = new Rcon({ host: proccess.env.RCON_CRYSTAL_ISLES_HOST, port: RCON_CRYSTAL_ISLES_PORT, password = RCON_ALL_SERVERS_PASSWORD })

export function giveSteamIDPoints (steamId, server) {
        await server.connect()
        console.log(await server.authenticated())
        server.end()
}
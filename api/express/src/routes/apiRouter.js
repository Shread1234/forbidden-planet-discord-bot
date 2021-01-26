const apiRouter = require("express").Router()
const steamIdRouter = require("./steamIdRouter")

apiRouter.use("/steamid", steamIdRouter)
apiRouter.use("leaderboard", leaderBoardRouter)

module.exports = apiRouter

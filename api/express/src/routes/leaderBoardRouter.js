const leaderBoardRouter = require("express").Router()
const { getLeaderBoard, updateLeaderBoard } = require("../contollers/leaderBoardContoller")

leaderBoardRouter.route("/").get(getLeaderBoard).put(updateLeaderBoard)

module.exports = leaderBoardRouter

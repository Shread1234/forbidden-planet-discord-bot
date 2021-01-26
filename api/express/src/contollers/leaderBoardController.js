const { sendLeaderBoard } = require("../models/leaderBoardModel")

exports.getLeaderBoard = async (req, res) => {
  try {
    const result = await sendLeaderBoard()
    return res.status(200).send(result)
  } catch (error) {
    return res.status(500).send(error)
  }
}

exports.updateLeaderBoard = async (req, res) => {
  throw new Error("Not yet implemented")
}

const express = require("express");
const router = express.Router();

const data = [
    {
      messageId: "1",
      type: "error",
      message: "it's not working",
      timeStamp: new Date(),
    },
    {
        messageId: "2",
        type: "infos",
        message: "it's not working",
        timeStamp: new Date(),
      },
      {
        messageId: "3",
        type: "success",
        message: "it's not working",
        timeStamp: new Date(),
      },
      {
        messageId: "4",
        type: "error",
        message: "it's not working",
        timeStamp: new Date(),
      }
    ];
module.exports = {
  getSampleData: async (req, res, next) => {
    try {
      res.status(200).send({ data });
    } catch (error) {
      res.send(error);
    }
  }
};

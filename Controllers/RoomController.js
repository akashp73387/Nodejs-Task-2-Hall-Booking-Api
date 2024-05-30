// controllers/roomController.js

import { rooms } from "../Data.js";

export const viewAllRooms = (req, res) => {
  res.status(200).json({ RoomsList: rooms });
  console.log(rooms);
};

export const createRoom = (req, res) => {
  const room = req.body;
  const idExists = rooms.find((el) => el.roomId === room.roomId);
  if (idExists) {
    return res.status(400).json({ message: "room already exists." });
  } else {
    rooms.push(room);
    res.status(201).json({ message: "room created" });
  }
};

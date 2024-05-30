// controllers/bookingController.js

import { rooms, bookings, customers } from "../Data.js";

export const createBooking = (req, res) => {
  try {
    const { id } = req.params;
    let bookRoom = req.body;
    let date = new Date();
    let dateFormat = date.toLocaleDateString();
    let idExists = rooms.find((el) => el.roomId === id);

    if (!idExists) {
      return res
        .status(400)
        .json({ message: "room does not exist.", RoomsList: rooms });
    }

    let matchID = bookings.filter((b) => b.roomId === id);
    if (matchID.length > 0) {
      let dateCheck = matchID.filter(
        (m) => m.bookingDate === bookRoom.bookingDate
      );
      if (dateCheck.length === 0) {
        let newID = "B" + (bookings.length + 1);
        let newBooking = {
          ...bookRoom,
          bookingID: newID,
          roomId: id,
          status: "booked",
          booked_On: dateFormat,
        };
        bookings.push(newBooking);
        return res
          .status(201)
          .json({
            message: "hall booked",
            Bookings: bookings,
            added: newBooking,
          });
      } else {
        return res
          .status(400)
          .json({
            message: "hall already booked for this date, choose another hall",
            Bookings: bookings,
          });
      }
    } else {
      let newID = "B" + (bookings.length + 1);
      let newBooking = {
        ...bookRoom,
        bookingID: newID,
        roomId: id,
        status: "booked",
        booked_On: dateFormat,
      };
      bookings.push(newBooking);
      const customerDetails = customers.find(
        (cust) => cust.name === newBooking.customer
      );
      if (customerDetails) {
        customerDetails.bookings.push(newBooking);
      } else {
        customers.push({ name: newBooking.customer, bookings: [newBooking] });
      }
      return res
        .status(201)
        .json({
          message: "hall booked",
          Bookings: bookings,
          added: newBooking,
        });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "error booking room", error: error, data: bookings });
  }
};

export const viewAllBookings = (req, res) => {
  const bookedRooms = bookings.map((booking) => {
    const { roomId, Status, customer, bookingDate, startTime, endTime } =
      booking;
    return { roomId, Status, customer, bookingDate, startTime, endTime };
  });
  res.status(201).json(bookedRooms);
};

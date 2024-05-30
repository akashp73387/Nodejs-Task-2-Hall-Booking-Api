// controllers/customerController.js

import { customers } from "../Data.js";

export const listAllCustomers = (req, res) => {
  const customerBookings = customers.map((customer) => {
    const { name, bookings } = customer;
    const customerDetails = bookings.map((booking) => {
      const { roomId, bookingDate, startTime, endTime } = booking;
      return { name, roomId, bookingDate, startTime, endTime };
    });

    return customerDetails;
  });

  res.json(customerBookings);
};

export const viewCustomerBookings = (req, res) => {
  const { name } = req.params;
  const customer = customers.find((cust) => cust.name === name);
  if (!customer) {
    res.status(404).json({ error: "Customer not found" });
    return;
  }
  const customerBookings = customer.bookings.map((booking) => {
    const {
      customer,
      roomId,
      startTime,
      endTime,
      bookingID,
      status,
      bookingDate,
      booked_On,
    } = booking;
    return {
      customer,
      roomId,
      startTime,
      endTime,
      bookingID,
      status,
      bookingDate,
      booked_On,
    };
  });
  res.json(customerBookings);
};

 // routes/routes.js

import express from 'express';
import { createBooking, viewAllBookings } from '../Controllers/BookingController.js';
import { viewAllRooms, createRoom } from '../Controllers/RoomController.js';
import { listAllCustomers, viewCustomerBookings } from '../Controllers/CustomerController.js';

const router = express.Router();

// Booking Routes
router.post('/booking/create/:id', createBooking);
router.get('/booking/viewbooking', viewAllBookings);

// Room Routes
router.get('/rooms/all', viewAllRooms);
router.post('/rooms/create', createRoom);

// Customer Routes
router.get('/customers', listAllCustomers);
router.get('/customers/:name', viewCustomerBookings);

export default router;

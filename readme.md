This API creates a webserver on port 4010 which has end points to create a room, book a room , list all rooms with booked data, 
list all customers with booked data and list how many times a customer has booked a room.



API URL:

https://nodejs-task-2-hall-booking-api.onrender.com/api

Render URL:

1. Createroom:

https://nodejs-task-2-hall-booking-api.onrender.com/api/create

  /create : Creates a room which has fields such as roomname,number of seats available,amenities and priceperhour.

        For every request,roomid is generated automatically. 


2.  Bookroom:

https://nodejs-task-2-hall-booking-api.onrender.com/api/booking/create/room6

        booking/create/:roomid : This endpoint books the available rooms for the customer.

        User can book a room which has already been booked but the date differs.

        When the same room is booked for same date and time , the user will get correspondng response message.

3. viewbooking :

https://nodejs-task-2-hall-booking-api.onrender.com/api/loadbookings

      /loadbookings: View all the booked room with roomname(roomid),customer name,booking date, starttime,endtime.

 4. Viewcustomers:

 https://nodejs-task-2-hall-booking-api.onrender.com/api/customers

    /customers: This API endponit is used to view the customers wth all the booked data like name,roomid,booking date, start time, end time.

 5. Viewbycustomername: 

 https://nodejs-task-2-hall-booking-api.onrender.com/api/customer/Gokul

     /customer/:name :- This API endpoint is used to list the number of times the customer booked the room.

Postman documentation:

https://documenter.getpostman.com/view/34950748/2sA3Qv7VWF
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// API call to create an appointment
 const createAppointment = async (appointmentData) => {
   const response = await axios.post("http://localhost:3000/api/createAppointment", appointmentData, {
     Headers: {
        'Content-Type': 'application/json', 
     }
   });
   return response.data;
 };

const Appointments = () => {
  // Yup schema for form validation
  const schema = yup.object().shape({
    name: yup.string().required("Enter a name"),
    email: yup.string().email().required("Enter a valid email"),
    phoneNumber: yup.string().max(11).required("Enter your phone number"),
    date: yup.string().required("Pick a date"),
    time: yup.string().required("Pick a time"),
  });

  // React Hook Form setup
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  // Mutation to handle form submission and API call
  const {mutate, isPending} = useMutation({
    mutationFn: createAppointment,
    onSuccess: (data) => {
      console.log('Appointment successfully created', data);
      alert('Appointment successfully created!');
      reset(); // Reset the form after successful submission
    },
    onError: (error) => {
      console.error('Error creating appointment:', error);
      alert('Failed to create appointment. Please try again.');
    }
  });

  // Form submission handler
  const onSubmitHandler = (data) => {
    console.log("Form data:", data);
    mutate(data); // Send the data to the mutation function
  };

  return (
    <>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="number" name="phone" id="phone" placeholder="Enter your phone number" {...register("phoneNumber")} />
          <p>{errors.phoneNumber?.message}</p>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" placeholder="Pick a date" {...register("date")} />
          <p>{errors.date?.message}</p>
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input type="time" name="time" id="time" placeholder="Pick a time" {...register("time")} />
          <p>{errors.time?.message}</p>
        </div>
        <input type="submit" value="Book Appointment" />
        {isPending && <p>Booking your appointment...</p>}
      </form>
    </>
  );
};

export default Appointments;

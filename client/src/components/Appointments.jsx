import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog"

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
    <div className="flex justify-center items-center">
        <div className="font-lato bg-white flex justify-center items-center w-[300px] p-6 rounded-md">
            <div className="w-full">
                <Dialog.Title className=" text-xl py-2 text-center">Book A <span className="text-primaryGreen">Session</span></Dialog.Title>
                <Dialog.Description className="hidden">lorem </Dialog.Description>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="flex flex-col my-4">
                        <label className="text-sm font-bold" htmlFor="name">Name</label>
                        <input className="p-2 w-full bg-[#D9D9D9] rounded-md border-2 border-primaryGray" type="text" name="name" id="name" placeholder="Enter your name" {...register("name")} />
                        <p className="text-rose-500">{errors.name?.message}</p>
                    </div>
                    <div className="flex flex-col my-4">
                        <label className="text-sm font-bold" htmlFor="email">Email</label>
                        <input className="p-2 w-full bg-[#D9D9D9] rounded-md border-2 border-primaryGray" type="email" name="email" id="email" placeholder="Enter your email" {...register("email")} />
                        <p className="text-rose-500">{errors.email?.message}</p>
                    </div>
                    <div className="flex flex-col my-4">
                        <label className="text-sm font-bold" htmlFor="phone">Phone Number</label>
                        <input className="p-2 w-full bg-[#D9D9D9] rounded-md border-2 border-primaryGray" type="number" name="phone" id="phone" placeholder="Enter your phone number" {...register("phoneNumber")} />
                        <p className="text-rose-500">{errors.phoneNumber?.message}</p>
                    </div>
                    <div className="flex flex-col my-4">
                        <label className="text-sm font-bold" htmlFor="date">Date</label>
                        <input className="p-2 w-full bg-[#D9D9D9] rounded-md" type="date" name="date" id="date" placeholder="Pick a date" {...register("date")} />
                        <p className="text-rose-500">{errors.date?.message}</p>
                    </div>
                    <div className="flex flex-col my-4">
                        <label className="text-sm font-bold" htmlFor="time">Time</label>
                        <input className="p-2 w-full bg-[#D9D9D9] rounded-md border-2 border-primaryGray" type="time" name="time" id="time" placeholder="Pick a time" {...register("time")} />
                        <p className="text-rose-500">{errors.time?.message}</p>
                    </div>
                    <div className="flex justify-between">
                        <Dialog.Close asChild>
                            <button className="py-2 bg-primaryGray text-white rounded-xl px-4">Cancel</button>
                        </Dialog.Close>
                        <input className="py-2 bg-primaryGreen text-white rounded-xl px-4 " type="submit" value="Submit" />
                    </div>
                    {isPending && <p>Booking your appointment...</p>}
                </form>
            </div>
        </div>
    </div>
  );
};

export default Appointments;

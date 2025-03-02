import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const createContact = async(data) => {
  try {
    const response = await axios.post("http://localhost:3000/api/createContact", data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
const Contact = () => {

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    number: yup.string().max(11).required("Enter your phone number"),
    message: yup.string().required(),
  });

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schema)
  })


  const {mutate} = useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      console.log("Contact created successfully");
    },
    onError: (error) => {
      alert("Failed to create contact");
      console.log(error)
    }
  })

  const onSubmitHandler = (data) => {
    console.log(data)
    mutate(data)
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-400 p-2 rounded"
                {...register("firstName")}
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input  type="text" id="lastName" className="w-full border border-gray-400 p-2 rounded" {...register("lastName")} />
              {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}  
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full border border-gray-400 p-2 rounded" {...register("email")} />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" id="phoneNumber" className="w-full border border-gray-400 p-2 rounded" {...register("number")} />
              {errors.number && <p className="text-red-500">{errors.number.message}</p>}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" className="w-full border border-gray-400 p-2 rounded" {...register("message")} />
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>
          </div>
          <div className="mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
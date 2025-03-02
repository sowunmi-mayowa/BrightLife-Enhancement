import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import Footer from "../../components/Footer"


const Login = () => {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    })
    
    const { register, handleSubmit, formState: {errors}, reset} =useForm({
        resolver: yupResolver(schema)
    })

    const handleLogin = async(data) => {
        try{
            const response = await axios.post("http://localhost:3000/api/admin/login", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            localStorage.setItem("adminToken", response.data.token);
            navigate("/admin/dashboard");
        }catch(error){
            throw new Error("Login failed. Invalid email or password.");
        }
    
    }

    const { mutate, isPending} = useMutation({
        mutationFn: handleLogin,
        onSuccess: (data) => {
            console.log("success" ,data);
            reset();
        },
        onError: () => {
            console.log("Invalid email or password")
        }
    })

    const onSubmitHandler = (data) => {
        mutate(data)
    }

  return (
    <div className="">
    
        <div className=" py-8 md:py-16 font-lato">
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit(onSubmitHandler)} className="bg-[#e4f4d6] p-8 rounded-lg">
                    <h1 className="text-center text-xl font-bold pb-4">Admin Login</h1>
                    <div className="flex flex-col gap-1 mb-2">
                        <label htmlFor="email">Email</label>
                        <input className="w-64 rounded-md bg-white p-2 h-8" type="email" name="email" id="email" {...register("email")} />
                        <p className="text-rose-500 text-sm"> {errors.email?.message} </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input className="w-64 rounded-md bg-white p-2 h-8" type="password" name="password" id="password" {...register("password")} />
                        <p className="text-rose-500 text-sm"> {errors.password?.message} </p>
                    </div>
                    <input type="submit" value="Login" className="w-full text-white px-4 py-2 rounded-md bg-primaryGreen mt-4 cursor-pointer" />
                </form>
            </div>
        </div>
        <Footer />  
    </div>
  )
}

export default Login

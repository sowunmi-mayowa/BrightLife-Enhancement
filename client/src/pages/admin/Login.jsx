import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"


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
    <div>
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" {...register("email")} />
                    <p> {errors.email?.message} </p>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" {...register("password")} />
                    <p> {errors.password?.message} </p>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    </div>
  )
}

export default Login

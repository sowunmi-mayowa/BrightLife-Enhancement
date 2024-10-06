import { useQuery, useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("adminToken");

    const getAppointments = async() => {
        const response = await axios.get("http://localhost:3000/api/getAppointments", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        return response.data;
    
    }
    const {data: appointments = [] ,error, isLoading} = useQuery({
        queryKey: ['appointment'],
        queryFn: getAppointments

    });

    const handleLogout = () => {
        localStorage.removeItem("adminToken")
        navigate("/admin/login")
    }

  return (
    <div>
        <button className="bg-primaryGreen text-white text-lg px-4 py-2 rounded-md" onClick={handleLogout}>Logout</button>
        {
            appointments.map(appointment => (
                <div key={appointment._id}>
                    <h1>{appointment.name}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default Dashboard
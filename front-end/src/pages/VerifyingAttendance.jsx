import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function VerifyingAttendance() {

  const [approved, setApproved] = useState(false)

  const {isLoggedin, getAuthState, backendUrl} = useContext(AppContext)
  const {id} = useParams();

  const naviagtor = useNavigate()

  const getLoggedIn = async () => {

    axios.defaults.withCredentials = true

    try {
      
      const {data} = await axios.post(backendUrl+'/attendance/mark/:id', {id})
      console.log(data)
      if (data.success) {
        setApproved('approved')
      }else {
        setApproved('notApproved')
      }

    } catch (error) {
      toast.error(error.message)
    }
    
   
  }

  useEffect(() => {
    getLoggedIn()
  },[id])

  return (
    <div>
      {
        !approved &&
        <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-10">
            Verifying Attendance...
          </h1>

          {/* Loading Circle Animation */}
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 border-8 border-blue-400 rounded-full border-t-transparent animate-spin"></div>
          </div>

          {/* Subtext */}
          <p className="mt-10 text-gray-500 text-lg">
            Please wait while we process your scan.
          </p>
        </div>
      }

      {
        approved == 'approved' &&
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          <h1 className="text-3xl font-semibold text-green-600 mb-6">
            Attendance Marked Successfully!
          </h1>

          <div className="w-36 h-36 bg-blue-400 rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <p className="text-gray-700 mt-6 text-center text-lg">
            You have been marked present for today&apos;s lecture.
          </p>
        </div>
      }

      { approved == 'notApproved' &&
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          {/* Heading */}
          <h1 className="text-3xl font-semibold text-red-600 mb-6">
            Attendance Not Approved
          </h1>

          {/* Large Red X */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-full h-full text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
            >
              <line x1="20" y1="20" x2="80" y2="80" />
              <line x1="80" y1="20" x2="20" y2="80" />
            </svg>
          </div>

          {/* Message */}
          <p className="text-gray-700 mt-6 text-center text-lg">
            QR code expired. Contact your lecturer.
          </p>
        </div>
      }
    </div>
    
  );
}
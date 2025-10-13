import { useContext, useState, useEffect  } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import QRCode from "react-qr-code";

function QRCodeGenarate() {
    
    const [course, setCourse] = useState("");
    const [lectureTitle, setLectureTitle] = useState("");
    const [qrTime, setQrTime] = useState("");
    const [date, setDate] = useState("");
    const [sessionId, setSessionId] = useState(false)
    
    const courses = ["Artificial Intelligence", "Software Engineering", "Database Managament", "Web Technologies"]; // example courses

    const {backendUrl, isSelected, setIsSelected} = useContext(AppContext);

  const handleSubmit = async (e) => {

    e.preventDefault();
    
    axios.defaults.withCredentials = true

    try {
       
        const {data} = await axios.post(backendUrl + '/session/add' , {course, lectureTitle, qrTime, date})
        
        if(data.success) {
            toast.success(data.message)
            isSelected ? setIsSelected(false) : setIsSelected(true)

            setSessionId(data.sessionId)
        }

    } catch (error) {
        toast.error(error.message)
        console.log(error)
    }

  };

  const handle = (e) => {
    
    setIsSelected(false)
    
  }

  return (
    <div>

        {
            !isSelected &&
            <div className=" mt-10 p-6 min-h-screen">
                <h2 className="text-2xl font-bold mb-6 text-gray-700">
                    Create New Attendance Session
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded shadow">
                    {/* Course Name */}
                    <div>
                    <label className="block text-gray-700 mb-1">Course Name</label>
                    <select
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Select Course</option>
                        {courses.map((c, idx) => (
                        <option key={idx} value={c}>
                            {c}
                        </option>
                        ))}
                    </select>
                    </div>

                    {/* Lecture Title & QR Valid Time */}
                    <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-gray-700 mb-1">Lecture Title</label>
                        <input
                        type="text"
                        value={lectureTitle}
                        onChange={(e) => setLectureTitle(e.target.value)}
                        placeholder="Enter Lecture title"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 mb-1">QR Valid Time</label>
                        <input
                        type="time"
                        value={qrTime}
                        onChange={(e) => setQrTime(e.target.value)}
                        placeholder="Enter valid time"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    </div>

                    {/* Date */}
                    <div>
                    <label className="block text-gray-700 mb-1">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    {/* Submit Button */}
                    <button
                    type="submit"
                    className="mt-4 bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700 transition-colors duration-200"
                    >
                    Generate QR Code
                    </button>
                </form>
            </div>
        }

        {
            isSelected &&
            <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-10 text-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Scan QR code to Mark Attendance</h1>

                {/* <QRCodeComponent/> */}
                <div className="flex flex-col items-center justify-center  bg-gray-100">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <QRCode value={ `http://localhost:5173/attendent/${sessionId}`} size={180} />
                    </div>
                </div>

                <div className="text-left mb-6 mt-6">
                    <div className="mb-2">
                    <span className="font-semibold">Course Name</span>
                    <span className="ml-4">{course}</span>
                    </div>
                    <div className="mb-2">
                    <span className="font-semibold">Lecture Title</span>
                    <span className="ml-4">{lectureTitle}</span>
                    </div>
                    <div className="mb-2">
                    <span className="font-semibold">Date</span>
                    <span className="ml-4">{date}</span>
                    </div>
                    <div>
                        <span className="font-semibold">Time</span>
                        <span className="ml-4">{qrTime}</span>
                    </div>
                </div>

                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition" onClick={() => handle()}>
                    Close QR Code
                </button>
            </div>
        }
      
    </div>
  );
}

export default QRCodeGenarate



{/*  */}
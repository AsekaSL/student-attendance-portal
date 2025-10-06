import React, { useState } from "react";

const ProfessorForm = () => {
  const [department, setDepartment] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    department: "",
    subject: "",
    uniID: "",
    designation: "",
    contactNumber: "",
    dateofjoin: "",
    address: "",
    email: "",
    nicNO: "",
    status: "Active",
  });

  const departmentSubjects = {
    CS: ["Data Structures", "Algorithms", "DBMS"],
    SE: ["Software Design", "Testing", "DevOps"],
    IS: ["Information Security", "ERP Systems", "Business Analytics"],
  };

  const handleDepartmentChange = (e) => {
    const dept = e.target.value;
    setDepartment(dept);
    setSubjects(departmentSubjects[dept] || []);
    setFormData({ ...formData, department: dept, subject: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // backend submit logic here
  };

  return (
    <div className="professor-container">
      <div className="right-section">
        <div className="all-form-controller">
          {/* Form 1 */}
          <form onSubmit={handleSubmit} className="first-form-container">
            <div className="input-container">
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="full-name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="department">Department</label>
              <select
                name="department"
                id="department"
                required
                value={formData.department}
                onChange={handleDepartmentChange}
              >
                <option value="">Select</option>
                <option value="CS">Computer Science</option>
                <option value="SE">Software Engineering</option>
                <option value="IS">Information Systems</option>
              </select>
            </div>

            <div className="input-container">
              <label htmlFor="subject">Subject</label>
              <select
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {subjects.map((sub, index) => (
                  <option key={index} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-container">
              <label htmlFor="uniID">University ID Number</label>
              <input
                type="text"
                name="uniID"
                id="uniID"
                value={formData.uniID}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                name="designation"
                id="designation"
                required
                value={formData.designation}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                required
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="dateofjoin">Date of Join</label>
              <input
                type="date"
                name="dateofjoin"
                id="dateofjoin"
                required
                value={formData.dateofjoin}
                onChange={handleChange}
              />
            </div>
          </form>

          {/* Form 2 */}
          <form onSubmit={handleSubmit} className="second-form-container">
            <div className="input-container">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="nicNO">NIC Number</label>
              <input
                type="text"
                name="nicNO"
                id="nicNO"
                required
                value={formData.nicNO}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                required
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Retired">Retired</option>
                <option value="Resigned">Resigned</option>
              </select>
            </div>

            <button type="submit">Submit</button>
            <button type="button">Update</button>
            <button type="button">Delete</button>
          </form>
        </div>

        {/* Search */}
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              name="search"
              className="search-bar"
              placeholder="Enter Professor Name"
            />
            <img
              src="../../assets/admin/student-managment/search.png"
              alt="search"
              className="search-img"
            />
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <table border="1">
            <thead>
              <tr>
                <th>University ID Number</th>
                <th>Name</th>
                <th>Department</th>
                <th>Subject</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>00001</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
              <tr>
                <td>00002</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
              <tr>
                <td>00003</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfessorForm;


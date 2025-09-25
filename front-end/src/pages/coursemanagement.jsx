export default function CourseManagement() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Course Management</h2>
      <form>
        <input type="text" placeholder="Course Code" /><br /><br />
        <input type="text" placeholder="Course Name" /><br /><br />
        <input type="text" placeholder="Department" /><br /><br />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

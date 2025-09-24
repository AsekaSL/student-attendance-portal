export default function StudentManagement() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Management</h2>
      <form>
        <input type="text" placeholder="Full Name" /><br /><br />
        <input type="text" placeholder="Index Number" /><br /><br />
        <input type="text" placeholder="Year" /><br /><br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

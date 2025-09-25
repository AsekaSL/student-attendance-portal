export default function ProfessorManagement() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Professor Management</h2>
      <form>
        <input type="text" placeholder="Full Name" /><br /><br />
        <input type="text" placeholder="NIC" /><br /><br />
        <input type="text" placeholder="Email" /><br /><br />
        <button type="submit">Add Professor</button>
      </form>
    </div>
  );
}

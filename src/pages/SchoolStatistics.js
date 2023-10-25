import { useSelector } from "react-redux";
export default function SchoolStatistics() {
  const { students } = useSelector((state) => state.students);

  const avgAttendance =
    students.reduce((acc, curr) => acc + curr.attendance, 0) / students.length;
  const avgMarks =
    students.reduce((acc, curr) => acc + curr.marks, 0) / students.length;
  const sortStudents = [...students]
    .sort((a, b) => b.marks - a.marks)
    .slice(0, 3);

  return (
    <div>
      <h2>School Statistics</h2>
      <p>Total Number of Students: {students.length} </p>
      <p>Average Attendance: {avgAttendance}</p>
      <p>Average amrks: {avgMarks}</p>
      <p>
        Top performing Students:{" "}
        {sortStudents.map((student) => {
          return <li>{student.name}</li>;
        })}
      </p>
    </div>
  );
}

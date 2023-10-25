import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editStudentAction } from "../features/students/studentSlice";
import { useState } from "react";

export default function StudentDetails() {
  const { students } = useSelector((state) => state.students);
  const { studentName } = useParams();
  const studentDetails = students.find(
    (student) => student.name === studentName
  );

  const { name, age, grade, attendance, marks, gender } = studentDetails;
  const [editStudent, setEditStudent] = useState({
    name: name,
    age: age,
    grade: grade,
    attendance: attendance,
    marks: marks,
    gender: gender,
  });
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <span className="heading">{studentName}</span>
        <button onClick={() => setShow(true)}>edit</button>
      </div>
      <div>
        <li>
          age:{" "}
          {!show ? (
            age
          ) : (
            <input
              type="text"
              value={editStudent.age}
              onChange={(e) => {
                e.preventDefault();
                setEditStudent((editStudent) => ({
                  ...editStudent,
                  age: e.target.value,
                }));
              }}
            />
          )}
        </li>
        <li>
          grade:{" "}
          {!show ? (
            grade
          ) : (
            <select
              value={editStudent.grade}
              onChange={(e) => {
                e.preventDefault();
                setEditStudent((editStudent) => ({
                  ...editStudent,
                  grade: e.target.value,
                }));
              }}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          )}
        </li>
        <li>
          attendance:{" "}
          {!show ? (
            attendance
          ) : (
            <input
              type="number"
              value={editStudent.attendance}
              onChange={(e) => {
                e.preventDefault();
                setEditStudent((editStudent) => ({
                  ...editStudent,
                  attendance: e.target.value,
                }));
              }}
            />
          )}
        </li>
        <li>
          marks:{" "}
          {!show ? (
            marks
          ) : (
            <input
              type="number"
              value={editStudent.marks}
              onChange={(e) => {
                e.preventDefault();
                setEditStudent((editStudent) => ({
                  ...editStudent,
                  marks: e.target.value,
                }));
              }}
            />
          )}
        </li>
        <li>
          gender:{" "}
          {!show ? (
            gender
          ) : (
            <select
              value={editStudent.gender}
              onChange={(e) => {
                e.preventDefault();
                setEditStudent((editStudent) => ({
                  ...editStudent,
                  gender: e.target.value,
                }));
              }}
            >
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          )}
        </li>
      </div>
      {show && (
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(editStudentAction(editStudent));
            setShow(false);
          }}
        >
          Update
        </button>
      )}
    </div>
  );
}

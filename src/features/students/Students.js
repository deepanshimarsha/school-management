import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  addStudent,
  deleteStudent,
  classView,
  filterByGender,
} from "./studentSlice";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Students() {
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    grade: "",
    gender: "",
    attendance: "",
    marks: "",
  });
  const { filteredStudents } = useSelector((state) => {
    console.log(state);
    return state.students;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <NavLink to="/teachers">View teachers</NavLink>
      </div>
      <div>
        <NavLink to="/statistics">View School statistics</NavLink>
      </div>

      <h2>List of students in school</h2>
      <div>
        <select
          onChange={(e) => {
            dispatch(classView(e.target.value));
          }}
        >
          <option selected disabled>
            Class View
          </option>
          <option value="A">Class A</option>
          <option value="B">Class B</option>
          <option value="C">Class C</option>
          <option value="all">View All</option>
        </select>
        <select
          onChange={(e) => {
            dispatch(filterByGender(e.target.value));
          }}
        >
          <option selected disabled>
            Filter by Gender
          </option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
          <option value="all">View All</option>
        </select>
      </div>
      <form>
        <input
          placeholder="name"
          type="text"
          onChange={(e) =>
            setNewStudent((newStudent) => ({
              ...newStudent,
              name: e.target.value,
            }))
          }
        />
        <input
          placeholder="age"
          type="number"
          min="3"
          max="30"
          onChange={(e) =>
            setNewStudent((newStudent) => ({
              ...newStudent,
              age: e.target.value,
            }))
          }
        />
        <select
          onChange={(e) =>
            setNewStudent((newStudent) => ({
              ...newStudent,
              grade: e.target.value,
            }))
          }
        >
          <option disabled selected>
            Select grade
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <select
          onChange={(e) =>
            setNewStudent((newStudent) => ({
              ...newStudent,
              gender: e.target.value,
            }))
          }
        >
          <option disabled selected>
            Select gender
          </option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>

        <input
          placeholder="attendance"
          min="0"
          max="100"
          type="number"
          onChange={(e) =>
            setNewStudent((newStudent) => ({
              ...newStudent,
              attendance: e.target.value,
            }))
          }
        />
        <input
          placeholder="marks"
          type="number"
          min="0"
          max="100"
          onChange={(e) =>
            setNewStudent((newStudent) => ({
              ...newStudent,
              marks: e.target.value,
            }))
          }
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addStudent(newStudent));
          }}
        >
          Add
        </button>
      </form>

      <ol>
        {filteredStudents.map((student) => {
          return (
            <li key={student.name}>
              <NavLink to={`/${student.name}`}>{student.name}</NavLink>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deleteStudent(student.name));
                }}
              >
                remove
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { addTeacher, deleteTeacher } from "./teacherSlice";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Teachers() {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    subject: "",
    email: "",
  });
  const { teachers } = useSelector((state) => {
    return state.teachers;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h2>List of teachers in school</h2>

      <form>
        <input
          placeholder="name"
          type="text"
          onChange={(e) =>
            setNewTeacher((newTeacher) => ({
              ...newTeacher,
              name: e.target.value,
            }))
          }
        />
        <input
          placeholder="subject"
          type="text"
          onChange={(e) =>
            setNewTeacher((newTeacher) => ({
              ...newTeacher,
              subject: e.target.value,
            }))
          }
        />

        <input
          placeholder="email"
          type="email"
          onChange={(e) =>
            setNewTeacher((newTeacher) => ({
              ...newTeacher,
              email: e.target.value,
            }))
          }
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addTeacher(newTeacher));
          }}
        >
          Add
        </button>
      </form>

      <ol>
        {teachers.map((teacher) => {
          return (
            <li key={teacher.name}>
              <NavLink to={`/${teacher.name}`}>{teacher.name}</NavLink>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deleteTeacher(teacher.name));
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

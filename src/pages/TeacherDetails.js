import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editTeacher as editTeacherAction } from "../features/teachers/teacherSlice";
import { useState } from "react";

export default function TeacherDetails() {
  const { teachers } = useSelector((state) => state.teachers);
  const { teacherName } = useParams();
  const teacherDetails = teachers.find(
    (teacher) => teacher.name === teacherName
  );

  const { name, subject, email } = teacherDetails;
  const [editTeacher, setEditTeacher] = useState({
    name: name,
    subject: subject,
    email: email,
  });
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <span className="heading">{teacherName}</span>
        <button onClick={() => setShow(true)}>edit</button>
      </div>
      <div>
        <li>
          subject:{" "}
          {!show ? (
            subject
          ) : (
            <input
              type="text"
              value={editTeacher.age}
              onChange={(e) => {
                e.preventDefault();
                setEditTeacher((editTeacher) => ({
                  ...editTeacher,
                  subject: e.target.value,
                }));
              }}
            />
          )}
        </li>
        <li>
          email:{" "}
          {!show ? (
            email
          ) : (
            <input
              type="emai"
              value={editTeacher.email}
              onChange={(e) => {
                e.preventDefault();
                setEditTeacher((editTeacher) => ({
                  ...editTeacher,
                  email: e.target.value,
                }));
              }}
            />
          )}
        </li>
      </div>
      {show && (
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(editTeacherAction(editTeacher));
            setShow(false);
          }}
        >
          Update
        </button>
      )}
    </div>
  );
}

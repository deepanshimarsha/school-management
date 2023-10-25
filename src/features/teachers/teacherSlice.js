import { createSlice } from "@reduxjs/toolkit";
const staticData = [
  {
    name: "gurjeet sinha",
    subject: "social science",
    email: "gurjeet@gmail.com",
  },
  {
    name: "shampa ghosh",
    subject: "maths",
    email: "shampa@gmail.com",
  },
  {
    name: "varsha sharma",
    subject: "physics",
    email: "varsha@gmail.com",
  },
  {
    name: "reena justine",
    subject: "english",
    email: "reena@gmail.com",
  },
];

export const teacherSlice = createSlice({
  name: "teachers",
  initialState: {
    status: "idle",
    error: null,
    teachers: staticData,
  },
  reducers: {
    addTeacher: (state, action) => {
      state.teachers.push(action.payload);
    },
    deleteTeacher: (state, action) => {
      const teacherIdx = state.teachers.findIndex(
        (teacher) => teacher.name === action.payload
      );

      state.teachers.pop(teacherIdx);
    },
    editTeacher: (state, action) => {
      const teacherIdx = state.teachers.findIndex(
        (teacher) => teacher.name === action.payload.name
      );

      state.teachers[teacherIdx] = action.payload;
    },
  },
});
export const { addTeacher, deleteTeacher, editTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;

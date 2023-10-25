import { createSlice } from "@reduxjs/toolkit";

const staticData = [
  {
    name: "deepanshi",
    age: 21,
    grade: "A",
    attendance: 30,
    gender: "female",
    marks: 80,
    section: "A",
  },
  {
    name: "vaibhav",
    age: 23,
    grade: "A",
    attendance: 50,
    gender: "male",
    marks: 70,
    section: "B",
  },
  {
    name: "aanchal",
    age: 22,
    grade: "A",
    attendance: 70,
    gender: "female",
    marks: 40,
    section: "C",
  },
  {
    name: "anushka",
    age: 20,
    attendance: 30,
    gender: "female",
    grade: "A",
    marks: 60,
    section: "A",
  },
];
export const studentSlice = createSlice({
  name: "students",
  initialState: {
    status: "idle",
    error: null,
    students: staticData,
    filteredStudents: staticData,
  },
  reducers: {
    addStudent: (state, action) => {
      console.log(action);
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      console.log(action);
      const studentIdx = state.students.findIndex(
        (student) => student.name === action.payload
      );
      console.log(studentIdx);
      state.students.pop(studentIdx);
    },
    editStudentAction: (state, action) => {
      const studentIdx = state.students.findIndex(
        (student) => student.name === action.payload.name
      );
      console.log(action, studentIdx);
      state.students[studentIdx] = action.payload;
    },
    classView: (state, action) => {
      const section = action.payload;
      if (section !== "all") {
        const studentsInSection = state.students.filter(
          (student) => student.section === section
        );
        state.filteredStudents = studentsInSection;
      } else {
        state.filteredStudents = state.students;
      }
    },
    filterByGender: (state, action) => {
      const gender = action.payload;
      if (gender !== "all") {
        const studentsByGender = state.students.filter(
          (student) => student.gender === gender
        );
        state.filteredStudents = studentsByGender;
      } else {
        state.filteredStudents = state.students;
      }
    },
  },
});

export const {
  addStudent,
  deleteStudent,
  editStudentAction,
  classView,
  filterByGender,
} = studentSlice.actions;
export default studentSlice.reducer;

import "./App.css";
import Students from "./features/students/Students";
import { Routes, Route } from "react-router-dom";
import StudentDetails from "./pages/StudentDetails";
import Teachers from "./features/teachers/Teachers";
import TeacherDetails from "./pages/TeacherDetails";
import SchoolStatistics from "./pages/SchoolStatistics";

function App() {
  return (
    <div className="App">
      <h1>School Management App</h1>

      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/:studentName" element={<StudentDetails />} />
        <Route path="/:teacherName" element={<TeacherDetails />} />
        <Route path="/statistics" element={<SchoolStatistics />} />
      </Routes>
    </div>
  );
}

export default App;

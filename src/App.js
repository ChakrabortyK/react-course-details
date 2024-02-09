import "./App.css";
import CourseListingPage from "./pages/CourseListingPage";
import NavbarX from "./components/Navbar";
import CourseDetails from "./pages/CourseDetails";
import Favorites from "./pages/Favorites";
import Page404 from "./pages/Page404";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarX />
      <div className='App main-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <CourseListingPage />
              </>
            }
          />
          <Route path='/favorites' element={<Favorites />} />

          <Route path='/details/:courseId' element={<CourseDetails />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

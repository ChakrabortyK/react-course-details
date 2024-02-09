import React, { useEffect } from 'react'
import CourseCard from '../components/CourseCard'
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../redux/courses'
import appServiceObj from './../services/course.service';


const CourseListingPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        appServiceObj.getAllCourses().then(value => dispatch(getCourses(value)));
    }, [dispatch])

    let array = useSelector((state) => state.coursesReducer.courses);

    return (
        <div>
            <h1 className="mb-4 h2 text-bold">Available Courses</h1>
            <div className="container d-grid justify-content-center ">
                {array ? (array.map(course => { return (<CourseCard key={course.id} course={course} />) })) : (<>Something went wrong!</>)}
            </div>
        </div>
    )
}

export default CourseListingPage
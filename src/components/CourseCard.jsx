import React from 'react'
import { Link } from 'react-router-dom'
import { toggleFavorite } from '../redux/favorites';
import { useDispatch, useSelector } from 'react-redux';

const CourseCard = (props) => {
    const { course } = props;
    const dispatch = useDispatch();
    let favs = useSelector((state) => state.favoritesReducer.courses);

    return (
        <div className="container m-1 border border border-1 rounded">


            <div className="row justify-content-center width">
                <div className="">
                    <div className="course-card text-center justify-content-around align-items-center">
                        <img src="https://dummyimage.com/350x350/a3dfe0/313ab5.jpg" className="card-img-top card-img" alt="Course Thumbnail" />
                        <div className='card-details'>
                            <Link className='linkTo' to={`/details/${course.id}`}>

                                <h1 className="card-title m-2"><strong>{course.name}</strong></h1>
                            </Link>

                            <h6 className="card-subtitle mb-2 text-muted m-2">By: {course.instructor}</h6>
                            <p className="card-text m-2">{course.description}</p>
                            <p className="card-text m-2">{course.duration}</p>
                            <a href="/404" className="btn btn-primary m-1">Enroll Now</a>
                            <Link onClick={() => {
                                dispatch(toggleFavorite(course))
                            }} className="btn btn-outline-primary m-1 d-block">
                                {favs && favs.length > 0 && favs.findIndex((item) => item.id === course?.id) !== -1
                                    ? "Remove from favorites"
                                    : "Add to favorites"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourseCard
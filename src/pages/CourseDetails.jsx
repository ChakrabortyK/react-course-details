import React from 'react'

import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/favorites';




const CourseDetails = () => {

    const { courseId } = useParams();
    const id = Number(courseId)
    const dispatch = useDispatch();


    let s = useSelector((state) => state.coursesReducer.courses);
    let favs = useSelector((state) => state.favoritesReducer.courses);

    // eslint-disable-next-line
    let thisCourse = s.find((element) => {
        if (element.id === id) {
            return element;
        }
    })


    return (
        <div className=' container accordion' style={{ background: `url("https://dummyimage.com/350x350/a3dfe0/313ab5.jpg") no-repeat`, backgroundSize: `cover` }} >
            <div className='card' >
                <div className='card-header'>
                    <h2 className='mb-0 h2'>{thisCourse?.name}</h2>
                </div>

                <div className='card-body'>
                    <p>
                        <strong>Description:</strong> {thisCourse?.description}
                    </p>
                    <p>
                        <strong>Enrollment Status:</strong> {thisCourse?.enrollmentStatus}
                    </p>
                    <p>
                        <strong>Duration:</strong> {thisCourse?.duration}
                    </p>
                    <p>
                        <strong>Schedule:</strong> {thisCourse?.schedule}
                    </p>
                    <p>
                        <strong>Location:</strong> {thisCourse?.location}
                    </p>
                    <hr />
                    <p>
                        <strong>Prerequisites:</strong>
                    </p>
                    <ol>
                        {thisCourse?.prerequisites.map((e, k) => {
                            return <li key={k}>{e}</li>
                        })}
                    </ol>
                    <hr />
                    <h4>Syllabus:</h4>
                    Syllabus Items
                    <Link onClick={() => {
                        dispatch(toggleFavorite(thisCourse))
                    }}
                        className="btn btn-outline-primary m-1 d-block">


                        {favs && favs.length > 0 && favs.findIndex((item) => item.id === thisCourse?.id) !== -1
                            ? "Remove from favorites"
                            : "Add to favorites"}
                    </Link>
                </div>
            </div>
        </div >

    );
};

export default CourseDetails;

import React from 'react'
import CourseCard from '../components/CourseCard'
import { useSelector } from 'react-redux';

const Favorites = () => {

    const array = useSelector((state) => state.favoritesReducer.courses);

    // console.log(array)
    return (<>
        <div>
            <h1 className='h1'>
                Favourites
            </h1>
        </div>
        <div className='container d-grid justify-content-center '>
            {array && array.map(course => { return (<CourseCard key={course.id} course={course} />) })}
        </div>
    </>
    )
}

export default Favorites
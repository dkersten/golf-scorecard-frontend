import React, { Component } from 'react';
import CourseCard from '../components/CourseCard.js';

class CourseContainer extends Component {

    render() {

        return(
            <div className="courses">
                <main>
                    <div className="inner-container">
                        <h1>Courses</h1>
                        <div className="course-container">
                            {
                                this.props.courses.map(course => <CourseCard key={course.id} name={course.name} holes={this.props.holes} />)
                            }
                        </div>
                    </div>
                </main>
            </div>
        )
    }

}

export default CourseContainer
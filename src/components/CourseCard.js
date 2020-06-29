import React, { Component } from 'react';


class CourseCard extends Component {

    courseNameFormatted = () => {
        let courseName = this.props.name.toLowerCase();
        courseName = courseName.split(" ")
        courseName = courseName[0]
        return courseName
    }

    renderCoursePar = () => {
        let courseName = this.props.name.toLowerCase();
        courseName = courseName.split(" ")
        courseName = courseName[0]
        if (this.props.holes.length > 0) {
            let holes = this.props.holes
            let parArr = []
            if (holes.length > 0) {
                for (const hole of holes) {
                    let nameArr = hole.name.split(" ")
                    let nameStr = nameArr[0].toLowerCase()
                    if (nameStr === courseName) {
                        parArr.push(hole.par)
                    }
                }
                const add = (a,b) => a + b
                const sum = parArr.reduce(add)
                return sum
            }
        }
    }

    render() {
        return(
            <section className="course-card card">
                <a href="#">{ this.courseNameFormatted() }</a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M631 8.6l-14.4-6.9c-8-3.9-17.5-.5-21.4 7.4L465.5 279.3 75.8 206.2C36 198.7 0 229.5 0 269.1V448c0 35.3 28.6 64 64 64h302.7c24.6 0 47-14.1 57.7-36.3l214-445.8c3.8-7.9.5-17.5-7.4-21.3zM434.9 342.9l-53.8 112c-2.7 5.5-8.3 9.1-14.4 9.1H64c-19.1 0-16-23-16-24h72c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H48v-48h72c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H48v-26.9c0-9.6 8.6-17.7 18.9-15.7l356.5 66.9c10.4 1.9 16 13.1 11.5 22.6z"/></svg>
                <h2>{this.props.name}</h2>
                <p>Par: <span>
                    { this.renderCoursePar() }
                    </span></p>
            </section>
        )
    }
}

export default CourseCard
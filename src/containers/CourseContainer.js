import React, { Component } from 'react';
import HoleCard from '../components/HoleCard.js';

class CourseContainer extends Component {

    state = {
        id: '',
        name: '',
        holes: []
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`http://localhost:3000/courses/${id}`)
            .then(resp => resp.json())
            .then((course) => this.updateState(course))
    }

    updateState = (course) => {
        this.setState({
            id: course.id,
            name: course.name,
            holes: course.holes
        })
    }

    coursePar = () => {
        let parArr = []
        if (this.state.holes.length > 0) {
            const holes = this.state.holes
            for (const hole of holes) {
                parArr.push(hole.par)
            }
            const add = (a,b) => a + b
            const sum = parArr.reduce(add)
            return sum
        }
    }

    render() {
        
        return(
            <div className="individual-course">
                <main>
                    <div className="inner-container">
                        <h1>{this.state.name}</h1>
                        <section className="stats">
                            <p>Number of Holes: <span>{ this.state.holes.length }</span></p>
                            <p>Par: <span>{this.coursePar()}</span></p>
                        </section>
                        <div className="hole-container">
                            {
                                this.state.holes.map(hole => <HoleCard key={hole.id} {...hole} />)
                            }
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default CourseContainer
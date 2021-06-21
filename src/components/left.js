import React from 'react'
import css from '../assets/css/app.css'


class Left extends React.Component {

    render() {
        return(
                <section id="section-left">
                    <div className="alert alert-primary" role="alert">
                        A simple primary alert—check it out!
                    </div>
                    <div className="alert alert-secondary" role="alert">
                        A simple secondary alert—check it out!
                    </div>
                    <div className="alert alert-success" role="alert">
                        A simple success alert—check it out!
                    </div>
                    <div className="alert alert-danger" role="alert">
                        A simple danger alert—check it out!
                    </div>
                </section>
        )
    }
}

export default Left;
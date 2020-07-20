import React from 'react'

class imageCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = { span : 0 }
        this.imageRef = React.createRef();
    }

    componentDidMount () {
        this.imageRef.current.addEventListener( 'load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight

        const span = Math.ceil(height / 10)
        this.setState({ span })
    }
     render() {
         const { urls , description } = this.props.image
         return (
             <div style = {{ gridRowEnd : ` span ${this.state.span}` }}>
                <img  ref = { this.imageRef } src = { urls.regular } alt = { description } />
             </div>
         )
     }
}

export default imageCard
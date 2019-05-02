import React from 'react';
import API from '../../utils/API';
import './blogtile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class BlogTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            id: props.id,
            name: props.name,
            location: props.location,
            date: props.date, 
            img: props.img
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   updateEvent = (id) => {
       const { name, location, date, img } = this.state;
        API.updateEvent(id, { name, location, date, img })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    render() {
        const { id } = this.props;
        const { name, location, date, img } = this.state;

        return (
                    <div class="blogtile" id={id}>
                        <input onChange={e => this.change(e)} name="name" value={name} /> 
                        <input onChange={e => this.change(e)} name="location" value={location} />
                        <input onChange={e => this.change(e)} name="date" value={date} />
                        <input onChange={e => this.change(e)} name="img" value={img} />
                        
                        
                        <button onClick={() => { this.updateEvent(id) }}>Update Event</button>
                        <FontAwesomeIcon icon={faTrash} onClick={() => { this.props.delete(id)}} />
                    </div>

        );
    }
}

export default BlogTile;

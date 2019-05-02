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
            img: props.img,
            editEvent: false
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   updateEvent = (id) => {
    //this.toggleEdit();
       const { name, location, date, img } = this.state;
        API.updateEvent(id, { name, location, date, img })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
        this.toggleEdit();
    };

    toggleEdit = () => {
        this.setState({
            editEvent: !this.state.editEvent
        })
    }

    render() {
        const { id } = this.props;
        const { name, location, date, img } = this.state;

        return (
                    <div className="blogtile" id={id}>
                
                    { this.state.editEvent ? 
                    <div className='editForm'>
                        <input onChange={e => this.change(e)} name="name" value={name} /> 
                        <input onChange={e => this.change(e)} name="location" value={location} />
                        <input onChange={e => this.change(e)} name="date" value={date} />
                        <input onChange={e => this.change(e)} name="img" value={img} />
                        
                        
                        <button onClick={() => { this.updateEvent(id) }}>Save Edit</button>
                        <FontAwesomeIcon style={{'font-size': '30px'}} icon={faTrash} onClick={() => { this.props.delete(id)}} />
                        </div>
                   : <div>
                        <img className='eventImg' src={this.props.img} alt='event'/>
                           <div>Event: {this.props.name}</div>
                           <div>Location: {this.props.location}</div>
                           <div>{this.props.date}</div>
                           <button onClick={this.toggleEdit}> Update </button>
                    </div>  }
                        </div>

        );
    }
}

export default BlogTile;

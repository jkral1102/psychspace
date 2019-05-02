import React from 'react';
import API from '../../utils/API';
import BlogTile from '../BlogTile';
import './blog.css';

class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            // users: '',
            name: '',
            location: '',
            date: '',
            img: '',

            articlebody: '',
            articletitle: '',
            savedEvents: [],
            showHistory: true,
            showUpcoming: false,
            showAdd: false
        }
        this.getEvents();
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveEvent = () => {
        const newEvent = {
            name: this.state.name,
            location: this.state.location,
            date: this.state.date,
            img: this.state.img
        }
        API.saveEvent(newEvent)
            .then(res => {
                this.setState({
                    savedEvents: [...this.state.savedEvents, res.data]
                });
                console.log(this.state.savedEvents)
            })
            .catch(err => console.log(err));
    };

    getEvents = () => {
        API.getEvents()
            .then(res => {
                this.setState({
                    savedEvents: res.data
                })
            })
            .catch(err => console.log(err));
    };

    deleteEvent = (id) => {
        // slice article with the id from state 
        this.setState((prevState) => ({
            savedEvents: prevState.savedEvents.filter((item) => item._id !== id)
        }));
        API.deleteEvent(id)
            .catch(err => console.log(err));
    };

    toggleHistory = () => {
        this.setState({
            showHistory: true,
            showUpcoming: false,
            showAdd: false
        })
    }

    toggleUpcoming = () => {
        this.setState({
            showUpcoming: true,
            showHistory: false,
            showAdd: false
        })
    }

    toggleAdd = () => {
        this.setState({
            showUpcoming: false,
            showHistory: false,
            showAdd: true
        })
    }

    render() {
        const { savedEvents } = this.state;
        return (
            <div id='main'>
                <div id='mainNavbar'>
                    <div id='historyDiv' onClick={this.toggleHistory}>Events History</div>
                    <div id='upcomingDiv' onClick={this.toggleUpcoming}>Upcoming</div>
                    <div id='addEventDiv' onClick={this.toggleAdd}>Add Event</div>
                </div>
                <div id='mainBody'>
                    {this.state.showHistory &&

                        <div>
                            {savedEvents && savedEvents.map((item, index) => (
                                <BlogTile
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    location={item.location}
                                    date={item.date}
                                    img={item.img}
                                    delete={this.deleteEvent} />
                            ))
                            } </div>}

                    {this.state.showAdd &&
                        <div id='eventForm'>
                            <label>Add New Event</label>
                            <input onChange={e => this.change(e)} name="name" placeholder='Event name' />
                            <input onChange={e => this.change(e)} name="location" placeholder='Event location' />
                            <input onChange={e => this.change(e)} name="date" placeholder='Event date' />
                            <input onChange={e => this.change(e)} name="img" placeholder='Event img' />


                            <button onClick={() => { this.saveEvent() }}>Save Event</button>
                        </div>
                    }
                    <div id='yearCol'>

                        <div>2020</div>
                        <div>2019</div>
                        <div>2018</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Blog;

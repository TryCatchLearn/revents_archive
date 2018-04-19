import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {
    const {events, onEventOpen, deleteEvent} = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {events.map((event) => (
        <EventListItem deleteEvent={deleteEvent} onEventOpen={onEventOpen} key={event.id} event={event}/>
        ))}
      </div>
    )
  }
}

export default EventList
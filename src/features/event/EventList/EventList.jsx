import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    return (
      <div>
        {events.map(event => (
          <EventListItem
            deleteEvent={deleteEvent}
            key={event.id}
            event={event}
          />
        ))}
      </div>
    );
  }
}

export default EventList;

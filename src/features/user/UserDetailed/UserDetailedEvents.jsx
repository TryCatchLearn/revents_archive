import React from 'react'
import { Card, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react';

const UserDetailedEvents = () => {
  return (
    <Grid.Column width={12}>
    <Segment attached>
      <Header icon="calendar" content="Events" />
      <Menu secondary pointing>
        <Menu.Item name="All Events" active />
        <Menu.Item name="Past Events" />
        <Menu.Item name="Future Events" />
        <Menu.Item name="Events Hosted" />
      </Menu>

      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src={'/assets/categoryImages/drinks.jpg'} />
          <Card.Content>
            <Card.Header textAlign="center">Event Title</Card.Header>
            <Card.Meta textAlign="center">28th March 2018 at 10:00 PM</Card.Meta>
          </Card.Content>
        </Card>

        <Card>
          <Image src={'/assets/categoryImages/drinks.jpg'} />
          <Card.Content>
            <Card.Header textAlign="center">Event Title</Card.Header>
            <Card.Meta textAlign="center">28th March 2018 at 10:00 PM</Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
    </Segment>
  </Grid.Column>
  )
}

export default UserDetailedEvents

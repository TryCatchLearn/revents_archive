import React from 'react';
import { Grid, Header, Item, Segment } from 'semantic-ui-react';
import differenceInYears from 'date-fns/difference_in_years';

const UserDetailedHeader = ({ profile }) => {
  const age = differenceInYears(Date.now(), profile.dateOfBirth);
  return (
    <Grid.Column width={16}>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image avatar size="small" src={profile.photoURL || '/assets/user.png'} />
            <Item.Content verticalAlign="bottom">
              <Header as="h1">{profile.displayName}</Header>
              <br />
              <Header as="h3">{profile.occupation}</Header>
              <br />
              <Header as="h3">
                {age || 'Unknown age'}, Lives in {profile.city || 'Unknown city'}
              </Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedHeader;

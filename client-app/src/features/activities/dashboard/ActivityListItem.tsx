import { Segment, Item, Icon, Button } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

import { Link } from "react-router-dom";

interface Props {
  activity: Activity;
}

const ActivityListItem = ({ activity }: Props) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              circular
              src="/assets/user.png"
              style={{ marginBottom: 3 }}
            />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </Item.Header>
              <Item.Description>Some description goes here...</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {activity.date}
          <Icon name="marker" /> {activity.venue}, {activity.city}
        </span>
      </Segment>
      <Segment secondary>
        <Icon name="user" /> attendees
      </Segment>
      <Segment clearing>
        <span>{activity.description}</span>

        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color="teal"
          content="View"
          floated="right"
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;

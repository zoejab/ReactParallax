import React from 'react';
import Button from '../Button/Button';
import { Card, Image } from 'semantic-ui-react';

class FriendsCard extends React.Component {
  setIcon() {
    return this.props.icon;
  }

  render() {
    return (
      <Card>
        <Image src={this.setIcon()} ui={false} />
        <Card.Content>
          <Card.Header>{this.props.header}</Card.Header>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={this.props.url}> 
            <Button
              className='ui big button'
              cta={this.props.cta}
            ></Button>
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default FriendsCard;

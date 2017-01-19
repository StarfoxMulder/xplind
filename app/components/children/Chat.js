import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const chatList = () => (
  <div>
    <List>
      <Subheader>Current Chats</Subheader>
      <ListItem
        primaryText={this.props.users.otherUsers.userName}
        leftAvatar={<Avatar src={this.props.users.otherUsers.userImage}
        secondaryText={this.props.} />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
  </div>
);

export default chatList;

import React, { Fragment } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet } from 'react-native';

const messages = [
  { id: 1, name: 'Diego Fernandes', avatar_url: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4', last_message: 'Lorem ipsum', time: '18:20 PM' },
  { id: 2,name: 'Claudio Orlandi', avatar_url: 'https://secure.gravatar.com/avatar/4a75e363796021a2bc2b9f805bacc2da?s=500&d=mm&r=g', last_message: 'Lorem ipsum', time: '10:12 AM' },
];

const blogList = [
  { id: 1, title: 'Implementando Shimmer Effect no React Native', author: 'Claudio Orlandi', author_avatar: 'https://secure.gravatar.com/avatar/4a75e363796021a2bc2b9f805bacc2da?s=500&d=mm&r=g', cover_image_url: 'https://blog.rocketseat.com.br/wp-content/uploads/2018/06/capa_react-native-shimmer-868x488.png', likes: 1290, comments: 129, time: '21 de Junho' },
  { id: 2,title: 'Utilizando mapas no React Native com Mapbox', author: 'Higo Ribeiro', author_avatar: 'https://secure.gravatar.com/avatar/8834a7ccea235ca4cca9c970d95e27f3?s=500&d=mm&r=g', cover_image_url: 'https://blog.rocketseat.com.br/wp-content/uploads/2060/06/react-native-map-mapbox-868x488.png', likes: 1290, comments: 129, time: '20 de Junho' },
];

const Home = ({ blogList }) => (
  <Content>
   {blogList.map(blog => (
   <Card key={blog.id}>
     <CardItem>
       <Left>
         <Thumbnail source={{ uri: blog.author_avatar}} />
         <Body>
           <Text>{blog.title}</Text>
           <Text note>{blog.author}</Text>
         </Body>
       </Left>
     </CardItem>
     <CardItem cardBody>
       <Image source={{ uri: blog.cover_image_url}} style={{height: 200, width: null, flex: 1}}/>
     </CardItem>
     <CardItem>
       <Left>
         <Button transparent>
           <Icon active name="thumbs-up" />
           <Text>{blog.likes}</Text>
         </Button>
       </Left>
       <Body>
         <Button transparent>
           <Icon active name="chatbubbles" />
           <Text>{blog.comments}</Text>
         </Button>
       </Body>
       <Right>
         <Text note>{blog.time}</Text>
       </Right>
     </CardItem>
   </Card>))}
 </Content>
);

const Messages = ({ messages }) => (
  <Fragment>
    <List>
      {messages.map( message => (
        <ListItem avatar key={message.id}>
          <Left>
            <Thumbnail source={{ uri: message.avatar_url}} />
          </Left>
          <Body>
            <Text>{message.name}</Text>
            <Text note>{message.last_message}</Text>
          </Body>
          <Right>
            <Text note>{message.time}</Text>
          </Right>
        </ListItem>
      ))}
    </List>
    <Fab
      direction="up"
      position="bottomRight"
      style={{ backgroundColor: "#7159C1"}}
    >
      <Icon type="FontAwesome" name="plus" />
    </Fab>
  </Fragment>
);
const Notification = () => null;

const logo_url = 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4';

const App = () => (
  <Container>
    <Header androidStatusBarColor="#573ea8" style={styles.header} hasTabs>
      <Left>
        <Thumbnail small source={{ uri: logo_url }} />
      </Left>
      <Body>
        <Title>Rocketseat</Title>
      </Body>
    </Header>
    <View style={styles.container}>
    <Tabs>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="home" /></TabHeading>}>
        <Home blogList={blogList}/>
      </Tab>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="bell-o" /></TabHeading>}>
        <Notification />
      </Tab>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="envelope-o" /></TabHeading>}>
        <Messages messages={messages}/>
      </Tab>
    </Tabs>
    </View>
  </Container>
);

export default App;

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#7159C1",
  },
  header: { 
    backgroundColor: "#7159C1",
  },
  container: {
    flex: 1,
  }
});
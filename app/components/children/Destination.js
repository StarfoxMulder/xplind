var React = require("react"),
    Header = require("./children/Header.js"),
    isEqual = require("lodash.isequal"),
    helper = require("./utils/helpers.js");
    import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
    import IconButton from 'material-ui/IconButton';
    import ActionHome from 'material-ui/svg-icons/action/home';
    import {indigo300, redA700, greenA700} from 'material-ui/styles/colors';

var Destination = React.createClass({

  getInitialState: function() {
    return {
      destinations: {}
    };
  },

  likeClick: function() {

  },

  neutralClick: function() {

  },

  dislikeClick: function() {

  },

  render: function() {
    return(

      {this.state.destinations.map(function(destination, i) {
        <Card>
          <CardHeader
            id={destination._id}
            key={i}
            title={destination.category}
            subtitle={destination.location.city}
            avatar="https://static1.squarespace.com/static/572a0badd210b85d25f13e9d/t/573b32e6356fb08a016e4216/1463497447405/Drinking-alcohol-can-alter-your-personality-591155.jpg?format=1500w"
          >
          </ CardHeader>
          <CardMedia>
            <img src={destination.imgUrl} />
          </ CardMedia>
          <CardTitle title={destination.title} subtitle={destination.source} />
          <CardText>
            <p>{destination.description}</p>
          </ CardText>
          <CardActions>
            <IconButton
              color={greenA700}
              iconStyle={styles.mediumIcon}
              style={styles.medium}
            >
              <FontIcon className="material-icons" style={iconStyles} color={greenA700}>sentiment_very_satisfied</FontIcon>
            </IconButton>

            <IconButton
              color={indigo300}
              iconStyle={styles.mediumIcon}
              style={styles.medium}
            >
              <FontIcon className="material-icons" style={iconStyles} color={indigo300}>low_priority</FontIcon>
            </IconButton>

            <IconButton
              color={redA700}
              iconStyle={styles.mediumIcon}
              style={styles.medium}
            >
              <FontIcon className="material-icons" style={iconStyles} color={redA700}>sentiment_dissatisfied</FontIcon>
            </IconButton>

          </CardActions>
        </Card>
      })}
  )};

module.exports = Destination;


// render: function() {
//     return (
//       <section className="panel-body eventCard">
//         {this.props.results.map(function(result, i) {
//           return (
//             <section id={result.id} key={i} className="text-left well">
//               <h3>{result.title}</h3>
//               <h5>{result.description}</h5>
//             </section>
//           );
//         }, this)}

//       </section>
//     )
//   }

// });

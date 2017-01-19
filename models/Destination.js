var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create schema for Destination
var DestinationSchema = new Schema({

  title: {
    type: String,
    required: true,
    //unique: true
  },
  link: {
    type: String,
    required: true
  },
  location: {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  imgUrl: {
    type: String,
    required: false
  },
  source: {
    type: String,
    required: false
  },
  rating: {
    type: Number,
    required: false
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }],
  users: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

// Create the Destination model with the DestinationSchema
var Destination = mongoose.model("Destination", DestinationSchema);

// Export the Note model
module.exports = Destination;

/*//// NOTE
I put unique: true within the title because I had the thought that eventually I would like for a two-step process to take place when users add a Destination -- if the Destination title is new, add it to the db; if it is not, add the user as an assocaited document.
This way I can later help users find others who have a shared interest in exploring a particualr destination!
*//////////

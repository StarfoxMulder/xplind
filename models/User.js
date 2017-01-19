var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Creating schema
var UserSchema = new Schema({

  userName: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false,
    validate: [
      function(input) {
        return input.length >= 1 && input.length <= 311;
      },
      "You're wonderful and I appreciate how difficult it can be to constrain a vibrant personality into a tiny space (you should see my dating profiles...), but bios are limited to 310 characters. For a frame of reference I made this message exactly 310 characters long to help you visualize the size of your canvas."
    ]
  },
  destinations: [{
    type: Schema.Types.ObjectId,
    ref: "Destination"
  }],
  conversations: [{
    type: Schema.Types.ObjectId,
    ref: "Conversation"
  }],
  interests: [{
    type: Schema.Types.ObjectId,
    ref: "Interest"
  }]
});

// Create the Article model with the ArticleSchema
var User = mongoose.model("User", UserSchema);

// Export the model
module.exports = User;

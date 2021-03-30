const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    trim: true,
    required: "current day"
  },

  excersices: [{
    type: {
      type: String,
      trim: true,
      required: "Exercise type"
    },
    name: {
      type: String,
      trim: true,
      required: "Add exercise name"
    },
    distance: {
      type: String,
      trim: true,
      required: "Add distance"
    },
    duration: {
      type: Number,
      trim: true,
      required: "Add duration"
    },
    weight: {
      type: Number,
      trim: true,
      required: "Add weight"
    },
    sets: {
      type: Number,
      trim: true,
      required: "Add number of sets"
    },
    reps: {
      type: Number,
      trim: true,
      required: "Add reps"
    },
  }]

});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
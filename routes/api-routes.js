
const Workout = require("../models/Workout");
const router = require("express").Router();

router.get('/api/workouts', async (req, res) => {
  Workout.find({})
  .then( data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
  
});

router.post('/api/workouts', async (req, res) => {
  console.log("POST")
  Workout.create()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err);
    });

});

router.put('/api/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/api/workouts/range', async (req, res) => {
  Workout.find({})
  .limit(7)
  .then( data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;  


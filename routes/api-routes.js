
const router = require("express").Router();
const Workout = require("../models/Workout.js");


router.get('/api/workouts', async (req, res) => {
  
  
  const allWorkouts = await Workout.aggregate([{
    $addFields: {
      totalDuration: {$sum: '$exercises.duration'},
    }
  }])
  Workout.find({})
  .then( data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
  
});

router.post('/api/workouts', async ({body}, res) => {
  
//  try{
//    const newWorkout =  await Workout.create(req.body)
//   res.send(newWorkout);
   
//  }
 Workout.create(body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });

});

router.put('/api/workouts/:id', async (req, res) => {
  console.log( req.params.id);
  await Workout.findByIdAndUpdate(
    {__id: req.params.id},
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
 await Workout.find({})
  .limit(7)
  .then( data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;  


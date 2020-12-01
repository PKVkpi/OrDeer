const router = require('express').Router();
let Restaraunt = require('../models/restaraunt.model');

router.route('/').get((req, res) => {
  Restaraunt.find()
    .then(restaraunts => res.json(restaraunts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;

  const newRestaraunt = new Restaraunt({
    username,
    description,
  });

  newRestaraunt.save()
  .then(() => res.json('Restaraunt added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Restaraunt.findById(req.params.id)
    .then(restaraunt => res.json(restaraunt))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Restaraunt.findByIdAndDelete(req.params.id)
    .then(() => res.json('Restaraunt deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
  Restaraunt.findById(req.params.id)
    .then(restaraunt => {
      restaraunt.username = req.body.username;
      restaraunt.description = req.body.description;

      restaraunt.save()
        .then(() => res.json('Restaraunt updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

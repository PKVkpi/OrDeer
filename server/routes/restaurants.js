const router = require('express').Router();
let Restaurant = require('../models/restaurant.model');

router.route('/').get((req, res) => {
  Restaurant.find()
    .then(restaurants => res.json(restaurants))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const address = req.body.address;
  const imageURLs = req.body.imageURLs;
  const menuId = req.body.menuId;

  const newRestaurant = new Restaurant({
    name,
    description,
    address,
    imageURLs,
    menuId
  });

  newRestaurant.save()
  .then(() => res.json('Restaurant added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Restaurant.findById(req.params.id)
    .then(restaurant => res.json(restaurant))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Restaurant.findByIdAndDelete(req.params.id)
    .then(() => res.json('Restaurant deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
  Restaurant.findById(req.params.id)
    .then(restaurant => {
      restaurant.name = req.body.name || restaurant.name;
      restaurant.description = req.body.description || restaurant.description;
      restaurant.address = req.body.address || restaurant.address;
      restaurant.imageURLs = req.body.imageURLs || restaurant.imageURLs;
      restaurant.menuId = req.body.menuId || restaurant.menuId;

      restaurant.save()
        .then(() => res.json('Restaurant updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

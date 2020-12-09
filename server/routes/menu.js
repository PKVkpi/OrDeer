const router = require('express').Router();
let Menu = require('../models/menu.model');

router.route('/').get((req, res) => {
  Menu.find()
    .then(menus => res.json(menus))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const dishIDs = req.body.dishIDs;

  const newMenu = new Menu({
    dishIDs
  });

  newMenu.save()
  .then(() => res.json('Menu added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Menu.findById(req.params.id)
    .then(menu => {
        res.json(menu);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Menu.findByIdAndDelete(req.params.id)
    .then(() => res.json('Menu deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
  Menu.findById(req.params.id)
    .then(menu => {
      menu.dishIDs = req.body.dishIDs;

      menu.save()
        .then(() => res.json('Menu updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
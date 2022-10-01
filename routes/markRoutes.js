const router = require('express').Router();
const { Mark, brand, brandMark} = require('../models');

router.get('/:id', (req, res) => {
  Mark.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {model: brand},
    ]
  })
  .then(brandData => {
    res.json(brandData)
  })
  .catch(err => {
    res.json(err)
  })
});

router.get('/', (req, res) => {
    Mark.findAll({
      include: [
        {model: brand}
      ]
    })
    .then(categoryData => {
      res.json(categoryData)
    })
    .catch(err => {
      res.json(err)
    })
  });

router.put('/:id', (req, res) => {
    Mark.update(req.body, {
      where: {
        id: req.params.id
    }
    })
    .then(MarkData => {
      res.json(MarkData)
    })
    .catch(err => {
      res.json(err)
    })
  });

router.post('/', (req, res) => {
  Mark.create(req.body)
  .then(MarkData => {
    res.json(MarkData)
  })
  .catch(err => {
    res.json(err)
  })
});

router.delete('/:id', (req, res) => {
  Mark.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(MarkData => {
    res.json(MarkData)
})
.catch(err => {
  res.json(err)
})
});

module.exports = router;
const router = require('express').Router();
const { classification, Product } = require('../../models');


router.get('/:id', (req, res) => {
    classification.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {model: Product}
      ]
    })
    .then(classificationData => {
      res.json(classificationData)
    })
    .catch(err => {
      res.json(err)
    })
  });

router.get('/', (req, res) => {
  classification.findAll({
    include: [
      {model: Product}
    ]
  })
  .then(classificationData => {
    res.json(classificationData)
  })
  .catch(err => {
    res.json(err)
  })
});


router.put('/:id', (req, res) => {
    classification.update(req.body, {
      where: {
        id: req.params.id
    }
    })
    .then(classificationData => {
      res.json(classificationData)
    })
    .catch(err => {
      res.json(err)
    })
  });

router.post('/', (req, res) => {
  classification.create(req.body)
  .then(classificationData => {
    res.json(classificationData)
  })
  .catch(err => {
    res.json(err)
  })
});



router.delete('/:id', (req, res) => {
  classification.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(classificationData => {
    res.json(classificationData)
})
.catch(err => {
  res.json(err)
})
});

module.exports = router;
const router = require('express').Router();
const { brand, classification, mark, brandmark } = require('../../models');
const { classification } = require('../../models');

router.get('/', (req, res) => {
 
  brand.findAll({
    include: [
      {model: classification},
      {model: mark}
    ]
  })
  .then(brandData => {
    res.json(brandData)
  })
  .catch(err => {
    res.json(err)
  })
});

router.get('/:id', (req, res) => {

  brand.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {model: classification},
      {model: mark}
    ]
  })
  .then(brandData => {
    res.json(brandData)
  })
  .catch(err => {
    res.json(err)
  })
});


router.put('/:id', (req, res) => {
  brand.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((brand) => {
      return brandmark.findAll({ where: { brand_id: req.params.id } });
    })
    .then((brandmarks) => {
      const brandmarkIds = brandmarks.map(({ mark_id }) => mark_id);
      const newbrandmarks = req.body.markIds
        .filter((mark_id) => !brandmarkIds.includes(mark_id))
        .map((mark_id) => {
          return {
            brand_id: req.params.id,
            mark_id,
          };
        });
      const brandmarksToRemove = brandmarks
        .filter(({ mark_id }) => !req.body.markIds.includes(mark_id))
        .map(({ id }) => id);

      return Promise.all([
        brandmark.destroy({ where: { id: brandmarksToRemove } }),
        brandmark.bulkCreate(newbrandmarks),
      ]);
    })
    .then((updatedbrandmarks) => res.json(updatedbrandmarks))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/', (req, res) => {
    brand.create(req.body)
      .then((brand) => {
        if (req.body.markIds.length) {
          const brandmarkIdArr = req.body.markIds.map((mark_id) => {
            return {
              brand_id: brand.id,
              mark_id,
            };
          });
          return brandmark.bulkCreate(brandmarkIdArr);
        }
        res.status(200).json(brand);
      })
      .then((brandmarkIds) => res.status(200).json(brandmarkIds))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  

router.delete('/:id', (req, res) => {
  brand.destroy({
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
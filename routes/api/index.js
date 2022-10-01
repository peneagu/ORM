const router = require('express').Router();
const classificationRoutes = require('./classification-routes');
const brandRoutes = require('./brand-routes');
const markRoutes = require('./mark-routes');

router.use('/categories', classificationRoutes);
router.use('/brands', brandRoutes);
router.use('/marks', markRoutes);

module.exports = router;
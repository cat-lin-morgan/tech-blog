const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-route.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);

router.use('/dashboard', dashboardRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => { //this is so if the api endpoint doesn't exist they get an error code
    res.status(404).end();
});

module.exports = router;
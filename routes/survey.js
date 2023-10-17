const express = require('express');
const router = express.Router();

// main survey route
router.get('/survey', (req, res) =>
{
    res.render('survey');
})

// page not found
router.get('/', (req, res) =>
{
    let pt = "Page Not Found";
    let subTitle = "Try Again"
    let from = "";
    res.render('notFound',
        {
            title: pt,
            subTitle: subTitle,
            from: from
        });
})

// example, using the colon appends the id var to the URL
// router.get('/:id', (req, res) =>
// {
//     res.render('Get User with ID ${req.params.id}');
// })
// this should go last, or it will overwrite other routes

module.exports = router;
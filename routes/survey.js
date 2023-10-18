const express = require('express');
const router = express.Router();

let categories = [
    { catId : 0, cat : "Intuitive",  desc : "Intuitives pay attention to their intuition, instinct, and ability to draw meaning from seemingly disconnected facts. They are good at reading between the lines and recognizing connections between random groups of facts. People with this preference are abstract and theoretical."},
    { catId : 1, cat : "Analytical", desc : "The Analytical Personality Type People who have the Analytical personality type usually appear to be very intelligent, nerdy or systematical. They normally have little to no emotion and make decisions slowly and with much second thought."},
    { catId: 2, cat : "Feeler", desc :  "Feelers tend to be sensitive to what is important to others. They make decisions on what matters to them and their system of values and how the outcome affects the connections between people, often expressing concern for others."}
]
const MAX_PTS = 6;
let questions = [
    { id: 'q1', q: "Are you naturally observant?", cat: 0},
    { id: 'q2', q: "Do you like to work puzzles?", cat: 1},
    { id: 'q3', q: "Is Authenticity important to you?", cat: 2},
    { id: 'q4', q: "Do you use personal values to make decisions?", cat: 2},
    { id: 'q5', q: "Do you find it easy to trust your gut instinct?", cat: 0},
    { id: 'q6', q: "Do you know how things work?", cat: 1},
    { id: 'q7', q: "Are you a good judge of character?", cat: 0},
    { id: 'q8', q: "Do you think you are naturally Curious?", cat: 1},
    { id: 'q9', q: "Are you a good judge of character?", cat: 2}
]

// main survey route
router.get('/survey', (req, res) =>
{
    res.render('survey' ,
        {
            from: 'survey',
            questions: questions
        });
})
router.get('/about', (req, res) =>
{
    res.render('about',
        {
            from: 'about'
        });
})
router.post('/surveyResults', (req, res) =>
{
   // loop through each question
   // look for id in the request
    let catPoints = [0,0,0];
    let percentages = [0,0,0];
    let q1 = parseInt(req.body.q1);
    let q2 = parseInt(req.body.q2);
    let q3 = parseInt(req.body.q3);
    let q4 = parseInt(req.body.q4);
    let q5 = parseInt(req.body.q5);
    let q6 = parseInt(req.body.q6);
    let q7 = parseInt(req.body.q7);
    let q8 = parseInt(req.body.q8);
    let q9 = parseInt(req.body.q9);
    catPoints[0] = q1 + q5 + q7;
    catPoints[1] = q2 + q6 + q8;
    catPoints[2] = q3 + q4 + q9;
    percentages[0] = (catPoints[0] / 6).toFixed(2) * 100;
    percentages[1] = (catPoints[1] / 6).toFixed(2) * 100;
    percentages[2] = (catPoints[2] / 6).toFixed(2) * 100;
    console.log(catPoints);
    console.log(percentages);
    res.render('surveyResults',
        {
            from: "survey",
            questions: questions,
           categories: categories,
            percentages: percentages,
            catPoints: catPoints
        })
});

router.get('/results', (req, res) =>
{
    res.render('surveyResults',
        {
            questions: questions,
            categories: categories
        });
})


// example, using the colon appends the id var to the URL
// router.get('/:id', (req, res) =>
// {
//     res.render('Get User with ID ${req.params.id}');
// })
// this should go last, or it will overwrite other routes

module.exports = router;



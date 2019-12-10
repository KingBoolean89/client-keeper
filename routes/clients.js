const express = require('express');
const router = express.Router();

//@route    GET api/clients

//@desc     Get all clients

//@access   Private

router.get('/', (req, res) => {
    res.send('Get all clients')
});

//@route    POST api/clients

//@desc     Add new clients

//@access   Private

router.post('/', (req, res) => {
    res.send('Add new clients')
});

//@route    PUT api/clients/:id

//@desc     Update client

//@access   Private

router.put('/:id', (req, res) => {
    res.send('Update client')
});

//@route    DELETE api/clients/:id

//@desc     Delete client

//@access   Private

router.delete('/:id', (req, res) => {
    res.send('Delete client')
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/test', function(req, res) {
    return res.json({msg: "Berhasil"})
    console.log("GET");
});

router.post('/test', function(req, res) {
    return res.json({msg: "POST Berhasil"})
    console.log("GET");
});

router.put('/test', function(req, res) {
    return res.json({msg: "PUT Berhasil"})
    console.log("GET");
});

router.delete('/test', function(req, res) {
    return res.json({msg: "Delete Berhasil"})
    console.log("GET");
});

module.exports = router;
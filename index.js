// Langkah -langkah git push dan git pull
// ----- untuk push ke github ------
// git add .
// git commit -m "Masukkan Pesan"
// git push


// ------ untuk ambil dari github  (git pull) -----
// git pull




// express
const express = require('express');
const app = express();
const router = require('./routes/index')


app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/', router)

app.listen(3000, () => {
    console.log('Server running in port 3000');
})
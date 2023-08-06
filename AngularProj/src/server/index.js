const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, () =>
console.log(`It's alive on http://localhost:${PORT}`)
)


app.get('/hello', (req,res) => {

    try{
        res.send("First custom api endpoint") 

    }catch(e){
        console.log(e)
    }
});



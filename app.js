const express=require('express');
const app=express();
app.get('/',(req,res) => {
res.send('Application is running');

});

app.listen(PORT);
console.log('server running on port: 3000');
const express=require('express');
const app=express();
const PORT = 3000
app.get('/',(req,res) => {
res.send('Application is running on adeyemi porter ok ' );

});

app.listen(3000);
console.log('server running on port: 3000');
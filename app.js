const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRoute = require('./routes/index/index.route');
const userRoute = require('./routes/user/user.route');
const adminRoute = require('./routes/admin/admin.route');

const session = require('express-session');

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const staticfile= path.join(__dirname,"public");
app.use(express.static(staticfile));

app.use(session(
    {
       secret : 'fcv123' 
    }
));

app.use(indexRoute);
app.use('/user',userRoute);
app.use('/admin',adminRoute);

app.listen(3000,()=>{
    console.log("---------Server Started----------");
});
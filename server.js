const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
const HomeRouter = require('./routes/home.routes');
const POSTROUTER = require('./routes/post.routes');

require('./dal');



//koa application
const app = new Koa();

//registering the bodyparser
app.use(bodyParser());

//registering routes with methods
app.use(HomeRouter.routes()).use(HomeRouter.allowedMethods());
app.use(POSTROUTER.routes()).use(POSTROUTER.allowedMethods());


app.listen(3000, err =>{
    if(err){
        console.error(err);
        return;
    }
});



console.log('Application is running on port 3000');
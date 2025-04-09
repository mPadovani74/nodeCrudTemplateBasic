const express =  require("express");
const app = express();
const router = require("./routers/index");

router(app);

app.listen(3000, (error) => {
    if(error){
        console.log("Erro");
        return;
    }
    console.log("Sucesso");
})
const Router = require("express").Router;
const router = Router();

router.get("/atendimentos",(req, res) => {
    res.send("atendimento get ok")
})
router.post("/atendimentos", (req, res)=> {
    res.send("Chegou aqui post")
})
router.put("/atendimento:id", (req, res)=> {
    const {id} = req.params;
    res.send(`Chegou aqui  put, ${id}`)
})
router.delete("/atendimento:id", (req, res)=> {
    const {id} = req.params;
    res.send(`Chegou aqui  delete, ${id}`)
})

module.exports = router;
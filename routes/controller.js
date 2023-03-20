import {Router} from 'express';
const router = Router();

router.post('/payment/recieved', (req,res)=>{
    let body = req.body;
    console.log(body)

    res.send('test')

    // const result = {test:"test"}
    // res.write(`data: ${{
    //     status:200,
    //     msg: "Payment has been Recieved"
    // }}`)
    // res.write(`data2: ${{
    //     status:200,
    //     msg: "Payment has been processed"
    // }}`)
    // res.end();
})

router.get('/payment/processed', (req,res)=>{
    res.json({
        status:200,
        msg: "Payment has been processed"
    })
})

router.get('/registered/webhook', (req,res)=>{
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
    });    

    setInterval(() => sendStatusToClient(req, res), 1000);
})


function sendStatusToClient(req, res) {
    // console.log(req.body)

    const time = new Date().toTimeString();
    res.write(`data: Webhook accepted:${time} \n\n`);
}

export default router;
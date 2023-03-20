import {Router} from 'express';
const router = Router();

router.post('/payment/recieved', (req,res)=>{
    res.writeHead(200,{
        'content-type': 'application/json',
        'cache-control': 'no-cache',
        'connection': 'keep-alive',
    })
    recievePayment(req,res)


    res.end();
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

function recievePayment(req,res){
    console.log("Do some important payment stuff...");

    const recieveObject = {
        msg : 'payment received',
        success : true
    }

    if(recieveObject.success){
        res.write(`{"recieved" : ${JSON.stringify(recieveObject)},`)
        proceedPayment(req,res)
    }else{
        res.write(`{"recieved" : ${JSON.stringify(recieveObject)}}`)
    }
}

function proceedPayment(req,res){
    console.log("Do some importent proceeding stuff...")
    
    const proceedObject = {
        msg : 'payment received',
        success : true
    }
    res.write(`"proceeded" : ${JSON.stringify(proceedObject)}}`)

}



function sendStatusToClient(req, res) {
    // console.log(req.body)

    const time = new Date().toTimeString();
    res.write(`data: Webhook accepted:${time} \n\n`);
}

export default router;
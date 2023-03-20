import {Router} from 'express';
const router = Router();


// DONE
router.post('/payment/recieved', (req,res)=>{
    res.writeHead(200,{
        'content-type': 'application/json',
        'cache-control': 'no-cache',
        'connection': 'keep-alive',
    })
    recievePayment(req,res)


    res.end();
})

router.get('/registered/webhook', (req,res)=>{
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
    });    

    setInterval(() => sendStatusToClient(req, res), 1000);
})

// TODO ==> MOVE TO SERVICE FOLDER
function recievePayment(req,res){
    console.log("Do some important payment stuff...");
    const body = req.body;

    const recieveObject = {
        msg : 'payment received',
        success : body.success
    }

    if(recieveObject.success){
        res.write(`{"recieved" : ${JSON.stringify(recieveObject)},`)
        proceedPayment(req,res)
    }else{
        res.write(`{"recieved" : ${JSON.stringify(recieveObject)}}`)
    }
}

// TODO ==> MOVE TO SERVICE FOLDER
function proceedPayment(req,res){
    console.log("Do some importent proceeding stuff...")
    
    const proceedObject = {
        msg : 'payment received',
        success : true
    }
    res.write(`"proceeded" : ${JSON.stringify(proceedObject)}}`)

}


// TODO ==> MOVE TO SERVICE FOLDER
function sendStatusToClient(req, res) {

    const time = new Date().toTimeString();
    res.write(`data: Webhook accepted:${time} \n\n`);
}

export default router;
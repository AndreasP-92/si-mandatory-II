import {Router} from 'express';
import PaymentService from '../services/paymentServices.js';
const router = Router();


// DONE
router.post('/payment/recieved', (req,res)=>{
    res.writeHead(200,{
        'content-type': 'application/json',
        'cache-control': 'no-cache',
        'connection': 'keep-alive',
    })
    PaymentService.recievePayment(req,res)


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
function sendStatusToClient(req, res) {

    const time = new Date().toTimeString();
    res.write(`data: Webhook accepted:${time} \n\n`);
}

export default router;
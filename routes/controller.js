import {Router} from 'express';
import PaymentService from '../services/paymentServices.js';
const router = Router();


// ======== PAYMENT RECIEVED ========
router.post('/payment/recieved', (req,res)=>{
    res.writeHead(200,{
        'content-type': 'application/json',
        'cache-control': 'no-cache',
        'connection': 'keep-alive',
    })
    PaymentService.recievePayment(req,res)


    res.end();
});

// ======== REGISTER SSE FROM EXTERNAL CLIENTS ========
router.get('/registered/webhook', (req,res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    });    

    setInterval(() => PaymentService.sendStatusToClient(req, res), 1000);
});

export default router;
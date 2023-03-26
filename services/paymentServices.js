


class PaymentService{
    recievePayment = (req,res) => {
        console.log("Do some important payment stuff...");
        const body = req.body;
    
        const recieveObject = {
            msg : 'payment received',
            success : body.success
        }
    
        if(recieveObject.success){
            res.write(`{"recieved" : ${JSON.stringify(recieveObject)},`)
            this.proceedPayment(req,res)
        }else{
            res.write(`{"recieved" : ${JSON.stringify(recieveObject)}}`)
        }
    }

    proceedPayment = (req,res) => {
        console.log("Do some importent proceeding stuff...")
    
        const proceedObject = {
            msg : 'payment received',
            success : true
        }
        res.write(`"proceeded" : ${JSON.stringify(proceedObject)}}`)
    
    }
}

export default new PaymentService
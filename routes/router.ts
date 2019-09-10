import {Router, Request, Response} from 'express';
import bodyParser from 'body-parser';

export const router = Router();

//Handler
router.get('/mensajes', (req:Request, res:Response)=> {

    res.json({
        ok:true,
        mensaje: 'Todo está bien!!!'
    });

});

//Handler
router.post('/mensajes', (req:Request, res:Response)=> {

    const da = req.body.da;
    console.log(`Cuerpo  ${da}`);
    const de     = req.body.de;
    console.log(`Cuerpo  ${da}`);
    res.json({
        ok:true,
        da,
        de
    });

});




//Handler
router.post('/mensajes/:id', (req:Request, res:Response)=> {

    const da = req.body.da;
    const de     = req.body.de;
    const id = req.params.id; 
    res.json({
        ok:true,
        da,
        de,
        id
    });

});




export default router;
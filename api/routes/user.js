import express from 'express'

const router = express.Router();

router.get("/get-data", (req,res)=>{
    res.status(200).json({
        success: true,
    });
})

export default router;
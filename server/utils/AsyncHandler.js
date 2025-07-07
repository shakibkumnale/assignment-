const AsyncHandler = (fn)=>async(req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message,
            errors: error.errors || [],
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        })
    }
}
export {AsyncHandler}

// -------------------- IMPORTING OTHER FILES --------------------
import statusCodeUtility from "./statusCodeUtility.js"

const ResponseHandler = (statusCode=statusCodeUtility.Success, message = "Request Completed Successfully", data=null, res)=>{
    return res.status(statusCode).send({
        message,
        data: data
    });
}

export default ResponseHandler
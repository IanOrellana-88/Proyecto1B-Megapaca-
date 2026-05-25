import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 5 * 60 *1000, //5 minutos
    max: 6, //máximo de solicitudes HTTP
    message: {
        status: 429,
        error: "Too many request"
    }
})

export default limiter
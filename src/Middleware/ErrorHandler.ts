
import { Request, Response, NextFunction } from 'express'
import { AppError } from '../AppError/AppError';

export const ErrorHandlerMiddleware = async (err: AppError, req: Request, res: Response) => {
    console.error(err);

    return res.status(err.code || 500).json({
        message: err.message || 'server error',
    });
}

//module.exports = ErrorHandlerMiddleware
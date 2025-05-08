
import { Request, Response, NextFunction } from 'express'
import { AppError } from '../AppError/AppError';

export const ErrorHandlerMiddleware = async (err: AppError | Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    const statusCode = err instanceof AppError ? err.code : 500;  
    const message = err.message || 'Server error';
    return res.status(statusCode).json({
        message,
    });
}


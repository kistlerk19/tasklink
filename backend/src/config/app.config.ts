import { getEnv } from "../utils/get-env";

const appConfig = () = ({
    NODE_ENV: getEnv('NODE_ENV', 'development'),
    PORT: getEnv('PORT', '5000'),
    BASE_PATH: getEnv('BASE_PATH', '/api'),
    MONGODB_URI: getEnv('MONGODB_URI','mongodb://localhost:27017/mydb'),
    
    SECRET_KEY: getEnv('SECRET_KEY', 'your-secret-key'),

    SESSION_SECRET_KEY: getEnv('SESSION_SECRET'),
    SESSION_EXPIRES_IN: getEnv('SESSION_EXPIRES_IN'),

    GOOGLE_CLIENT_ID: getEnv('GOOGLE_CLIENT_ID'),
    GOOGLE_CLIENT_SECRET: getEnv('GOOGLE_CLIENT_SECRET'),
    GOOGLE_CALLBACK_URL: getEnv('GOOGLE_CALLBACK_URL'),

    FRONTEND_ORIGIN: getEnv('FRONTEND_ORIGIN', 'localhost'),
    FRONTEND_GOOGLE_CALLBACK_URL: getEnv('FRONTEND_GOOGLE_CALLBACK_URL'),
})
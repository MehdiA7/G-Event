import express from 'express';
import cors from 'cors';
import user from './routes/users';

const PORT = 30125;

const app = express();
app.use(express.json());

// Use cors middleware with specific options
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/user", user);

// Bind to all network interfaces
app.listen(PORT, '0.0.0.0', () => 
    console.log(`Server running on port ${PORT}`)
);

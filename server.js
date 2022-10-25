import usersRoutes from './routes/users.js';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello From Homepage.');
})

app.listen(PORT, () => {
    console.log(`SERVER ON : PORT NUM - http://localhost:${PORT}`);
})


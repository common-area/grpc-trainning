import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
	res.send("<h1>Hello World</h1>")
});

app.get('/html/index', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname + '/../src/html/index.html'));
});

app.get('/html/blogpost-page', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname + '/../src/html/blogpost-page.html'));
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
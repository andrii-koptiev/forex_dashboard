import express, { Express } from 'express';

const app: Express = express();
const PORT = 8080;

// app.use(cors());

app.get('/api/home', (req, res) => {
  res.json({
    message: 'Server implemented with Next.js App Router',
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

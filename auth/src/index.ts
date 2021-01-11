import Express from "express";
import { json } from 'body-parser';

const app = Express();
// app.use(json());

app.get('/api/users/me', (req, res) => {
  res.send('Hi there!!');
})

app.listen(3000, () => {
  console.log('Listening on PORT 3000!!!');
})
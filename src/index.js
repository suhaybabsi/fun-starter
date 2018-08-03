import express from 'express';
import path from 'path';
import cool from 'cool-ascii-faces';
import { Pool } from 'pg';

const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL || "postgres://gcjuicgvegumkj:255df182ea008cf276fd385ed95b3b62c3ea9e6705d4406d15ce38ba47443b10@ec2-54-217-235-16.eu-west-1.compute.amazonaws.com:5432/d7gq1ntf5g2vb";

const app = express()
  .use(express.static(path.join(__dirname, '../public')))
  .set('views', path.join(__dirname, '../views'))
  .set('view engine', 'ejs');

app.listen(PORT, () => {

  console.log(`Server is listening on port ${PORT}`)
});


app.get('/', (req, res) => res.render('pages/index'));

app.get("/cool", (reg, res) => res.send(cool()));

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: true
});

app.get('/db', async (req, res) => {

  try {

    const result = await pool.query('SELECT * FROM test_table');
    res.render('pages/db', result);

  } catch (err) {
    
    console.error(err);
    res.send("Error " + err);
  }
});




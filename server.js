const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

let votes = { palestine: 0, israel: 0 };
const file = 'votes.json';

if(fs.existsSync(file)) votes = JSON.parse(fs.readFileSync(file));

app.get('/vote', (req, res) => {
  const side = req.query.side;
  if(!['palestine','israel'].includes(side)) return res.json({error:'Vote invalide'});

  votes[side]++;
  fs.writeFileSync(file, JSON.stringify(votes));
  res.json(votes);
});

app.get('/votes', (req,res) => res.json(votes));

app.use(express.static('.'));
app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));

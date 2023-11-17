const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/recentRecipes', async (req, res) => {
    console.log('TRYING TO FETCH RECENT RECIPES');
    try {
      const recentRecipes = [
        {
            title: "Pancakes"
        },
        {
            title: "Tofu bowl"
        }
      ]
      res.status(200).json({
        recentRecipes: recentRecipes
      });
      console.log('FETCHED RECENT RECIPES');
    } catch (err) {
      console.error('ERROR FETCHING RECENT RECIPES');
      console.error(err.message);
      res.status(500).json({ message: 'Failed to load Recent recipes.' });
    }
  });


  app.listen(80);
import 'restaurant.js'
import 'orders.json'
import 'items.json'

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));


app.post('/submit', (req, res) => {

    const qty1 = req.body.quantity1;
    const qty2 = req.body.quantity2;
    const qty3 = req.body.quantity3;
    const cName = req.body.Name;

  function update(cName,qty1,qty2,qty3) 
    update(cName,qty1,qty2,qty3)

});

//to print at link myorders

app.post('/myorders', (req, res) => {

    fetch('orders.json')
    .then(response => response.json())
    .then(data => {
      const jsonContainer = document.getElementById('the orders printed');
      jsonContainer.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.log('Error:', error);
    });
    
  }
);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
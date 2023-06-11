

//When a new order is placed through menu
//if cName is found,means increase the quantities and update the items
//if cName is not found create a new order

//Create a new Order for a new Customer

function update(cName,qty1,qty2,qty3)
{
   

  const ordersData = fs.readFileSync('/orders.json', 'utf8');
const orders = JSON.parse(ordersData);
const  menuD= fs.readFileSync('/items.json', 'utf8');
const  menu= JSON.parse(menuD);
 const qty=[qty1,qty2,qty3];
  // Read the JSOn file and parse it
// here ordersData is unparsed and orders is parsed.


// Find the order for the specified customer name
const orderToUpdate = orders.find(order => order.Name === cName);
// check order found,update qty
if (orderToUpdate) 
{
//Update the quantity for existing items
    //find  item is there in the menu
    const item = orderToUpdate.items;
    const foundItems = menu.filter(mnu => item.some(ite => ite.name === mnu.name));
    if (foundItems)
     {
      for(j in orderToUpdate)
      {
        if(foundItems.find(fd => fd.name === orderToUpdate.items[j].name))
            orderToUpdate.items[j].quantity += qty[j]; 
      }
    }
    else {
      const newOrd={...menu.find(menue => menue.name=== nme)}
      orderToUpdate.items.push(newOrd)
    } 
  

  // Recalculate the total cost based on the updated quantities
  orderToUpdate.totalCost = orderToUpdate.items.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  // Convert the updated orders data back to JSON string
  const updatedOrdersData = JSON.stringify(orders, null, 2);

  // Write the updated JSON data back to the file
  fs.writeFileSync('/orders', updatedOrdersData);
  console.log("Order quantities updated successfully!");
}
else 
{
  orde = orders.map( ecId => ecId.orderId)
  const newOrder = {
    orderId: Math.max(...orde)+1,
    customerName: cName,
    items: [],
    totalCost: 0,
    orderDate: new Date()
 };
 orders.push(newOrder);
  console.log("Order not found for the specified customer ID.");
  update(cName,qty1,qty2,qty3)

  // Convert the updated orders data back to JSON string
  const updatedOrdersData = JSON.stringify(orders, null, 2);

  // Write the updated JSON data back to the file
  fs.writeFileSync('/orders', updatedOrdersData);
  console.log("Order quantities updated successfully!");
}



}


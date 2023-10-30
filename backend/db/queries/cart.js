const getOrdersByID = (id) => {
  return client
    .query(
      "SELECT order_items.* FROM orders JOIN order_items ON order_id = orders.id WHERE order_id = $1",
      [id]
    )
    .then((order) => {
      console.log("getOrders function", order.rows);
      return order.rows;
    });
};

//test
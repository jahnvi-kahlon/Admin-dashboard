import { useState } from "react";
import "./Orders.css";

function Orders() {
  const [showForm, setShowForm] = useState(false);

  const [orderId, setOrderId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState("");

  const [orders, setOrders] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Add Order
  const handleAddOrder = () => {
    const newOrder = {
      orderId,
      customerName,
      product,
      status,
    };

    setOrders([...orders, newOrder]);

    setOrderId("");
    setCustomerName("");
    setProduct("");
    setStatus("");
    setShowForm(false);
  };

  // Edit Order
  const handleEdit = (index) => {
    setOrderId(orders[index].orderId);
    setCustomerName(orders[index].customerName);
    setProduct(orders[index].product);
    setStatus(orders[index].status);

    setEditIndex(index);
    setShowForm(true);
  };

  // Update Order
  const handleUpdateOrder = () => {
    const updatedOrders = [...orders];

    updatedOrders[editIndex] = {
      orderId,
      customerName,
      product,
      status,
    };

    setOrders(updatedOrders);

    setOrderId("");
    setCustomerName("");
    setProduct("");
    setStatus("");
    setEditIndex(null);
    setShowForm(false);
  };

  // Delete Order
  const handleDelete = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);

    setOrders(updatedOrders);
  };

  return (
    <div className="orders-page">
      <h1>Orders</h1>

      <button
        onClick={() => {
          setShowForm(true);
          setEditIndex(null);
          setOrderId("");
          setCustomerName("");
          setProduct("");
          setStatus("");
        }}
      >
        Add Order
      </button>

      {showForm && (
        <div className="order-form">
          <h2>
            {editIndex !== null ? "Edit Order" : "Add New Order"}
          </h2>

          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Product Name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Delivered">Delivered</option>
          </select>

          {editIndex !== null ? (
            <button onClick={handleUpdateOrder}>
              Update
            </button>
          ) : (
            <button onClick={handleAddOrder}>
              Add
            </button>
          )}
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Product</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.product}</td>
              <td>{order.status}</td>

              <td>
                <button onClick={() => handleEdit(index)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
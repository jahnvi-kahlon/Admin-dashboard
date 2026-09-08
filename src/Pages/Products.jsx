import { useState } from "react"
import "./Products.css";
function Product() {
    const [showForm, setshowForm] = useState(false)
    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [products, setProducts] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const handleAddProduct = () => {
        const newProduct = {
            productName: productName,
            price: price,
            category: category,
        }
        setProducts([...products, newProduct]);
        setPrice("");
        setCategory("");
        setshowForm(false)
    }
    const handleEdit = (index) => {
        setProductName(products[index].productName);
        setPrice(products[index].price);
        setCategory(products[index].category);
        setEditIndex(index);
        setshowForm(true);
    }

    const handleUpdateProduct = () => {
        const updateProducts = [...products]
        updateProducts[editIndex] = {
            productName: productName,
            price: price,
            category: category,
        }
        setProducts(updateProducts)
        setProductName("");
        setPrice("");
        setCategory("");
        setEditIndex(null);
        setshowForm(false)
    }

     const handleDelete =(index)=>{
      const updateProducts=products.filter((product, i) =>i !== index);
    
    setProducts(updateProducts)
  }

    return (

        <div className="product-page">
            <h1>Products</h1>
            <button onClick={() => setshowForm(true)}>Add Product</button>
            {showForm && (
                <div>
                    <h2>Add New Products</h2>
                    <input type="text" placeholder="Enter Product Name"
                        value={productName}
                        onChange={(e) =>
                            setProductName(e.target.value)}
                    />
                    <input type="text" placeholder="Enter Price"
                        value={price}
                        onChange={(e) =>
                            setPrice(e.target.value)}
                    />
                    <input type="text" placeholder="Enter Category"
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)}
                    />
                    {editIndex !== null ? (
                        <button onClick={handleUpdateProduct}>update</button>
                    ) : (
                        <button onClick={handleAddProduct}>Add</button>
                    
                    )}
                </div>
            )}

            <table>
                <thead>
                    <tr>
                        <th>Product Name </th>
                        <th>Price </th>
                        <th>Category </th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                 <button onClick={()=>handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Product;
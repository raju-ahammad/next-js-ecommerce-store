import axios from "axios"
import { useState } from "react"
import baseUrl from "../../../uttils/baseUrl"

const intialState = {
    name: "",
    price: "",
    desc: "", 
}
const CreateProduct = () => {
    const [products, setProducts] = useState(intialState)
    const [image, setImage] = useState("")

    const {name, price, desc} = products 

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(value);
        setProducts({...products, [name]:value});
    }
    const imageUpload = (e) => {
        setImage(e.target.files[0])
    }
    const imageFileUpload = async () => {
        const data = new FormData();
        data.append('file', image)
        data.append("upload_preset", "mystore")
        data.append("cloud_name", "dlywsncdd ");
        const res = await axios.post("https://api.cloudinary.com/v1_1/dlywsncdd/image/upload", data)
        return await res.data.url;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const mediaUrl = await imageFileUpload()
        const res = await axios.post(`${baseUrl}/api/product`, {name, price, mediaUrl, desc})
        console.log(res);
        if (res.err) {
            console.log("Error",res.error);
        } 
        setProducts({...products, res})
        setProducts(intialState)
        setImage("")
        
    }
    
    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" value={name} onChange={handleChange} id="exampleFormControlInput1" placeholder="Enter name..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1"  className="form-label">Price</label>
                <input type="text" className="form-control" name="price" value={price} onChange={handleChange} id="exampleFormControlInput1" placeholder="Enter Price ..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">File</label>
                <input className="form-control" type="file" accept="image/*" onChange={imageUpload} id="formFile"/>
            </div>
            <img src={image ? URL.createObjectURL(image): ""} className="img-fluid" alt="..."></img>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" name="desc" value={desc} onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-lg btn-info" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateProduct

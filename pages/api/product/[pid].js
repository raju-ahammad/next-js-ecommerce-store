import Product from "../../../models/product";

export default async (req, res) => {
    try {
        const {pid} = req.query;
        const product = await Product.findOne({_id:pid})
        res.status(200).json(product)
    } catch (err) {
        return res.status(500).json({msg: err.message}) 
    }
}
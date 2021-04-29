import Product from '../../models/Product';
import initDB from '../../uttils/initDB';
initDB()

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getAllproduct(req, res);
      break;
    case "POST":
      await creteProduct(req, res);
      break;  
  }
}

const getAllproduct = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (err) {
    return res.status(500).json({msg: err.message}) 
  }
}

const creteProduct = async (req, res) => {
  const {name, price, desc, mediaUrl} = req.body;
  if (!name || !price || !desc || !mediaUrl) {
    return res.status(422).json({err: "please add all the fields"})
  }
  const product = await new Product({
    name,
    price,
    desc,
    mediaUrl
  }).save()
  res.status(201).json(product) //status 201 mean new product create response
}
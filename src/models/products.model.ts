import IProduct from "@/interfaces/product.interface"
import { model, Schema } from "mongoose"

const productSchema: Schema<IProduct> = new Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    imageUrl: {
        type: String,
        required: false
    },
    currency: {
        type: String,
        defualt: "Naira"
    },
    countInStock: {
        type: Number,
        required: true,
        default: 1
    },
    price: {
        type: Number,
        required: true,
        defualt: 0.00
    },
    rating: {
        type: Number,
        required: false,
        defualt: 1
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    createdAt: {
        type: Date,
        defualt: Date.now()
    },
    UpdatedAt: {
        type: Date,
        defualt: Date.now()
    }
});

const ProductModel = model<IProduct>("Product", productSchema);

export default ProductModel;

import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

const chuyenMucSchema = new Schema(
    {
        name: { type: String, trim: true, required: true },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    },
    { timestamps: true, versionKey: false }
);

chuyenMucSchema.plugin(paginate);
export default mongoose.model("ChuyenMuc", chuyenMucSchema);
import mongoose from "mongoose";

const supportSchema = new mongoose.Schema({
  supportCount: { type: Number },
})

const supportModel = mongoose.model("supporter", supportSchema)
export default supportModel
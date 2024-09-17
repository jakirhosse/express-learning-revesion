import mongoose from "mongoose";
const { Schema } = mongoose;
// Define the Category schema
const CategorySchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      index: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    parentCategory: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
      default: null,
      index: true,
    },
    description: {
      type: String,
      index: "text",
    },
  },
  {
    timestamps: true,
  }
);
CategorySchema.index({ category: 1, slug: 1 }, { unique: true });
// Create the Category model
const CategoryModel = mongoose.model("categories", CategorySchema);

export default CategoryModel;

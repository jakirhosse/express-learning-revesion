import mongoose from "mongoose";
import { createResponse } from "../../util/response";
/**
 * Reusable function to get a single document using a dynamic query
 * @param {mongoose.Model} model - The Mongoose model to query.
 * @param {Object} query - The query object (e.g., { _id: id } or { slug: slugValue }).
 * @param {Object} [projection={}] - Optional projection to select specific fields.
 * @param {Object} [options={}] - Additional query options.
 * @returns {Promise<Object>} - Custom response object.
 */
const getSingleItem = async (model, query, projection = {}, options = {}) => {
  try {
    const result = await model.findOne(query, projection, options).exec();
    if (result) {
      return createResponse(true, result, "Blog post retrieved successfully");
    } else {
      return createResponse(false, null, "Blog post not found");
    }
  } catch (error) {
    return createResponse(
      false,
      null,
      `Error retrieving data: ${error.message}`
    );
  }
};

export default getSingleItem;

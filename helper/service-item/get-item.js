import mongoose from "mongoose";
import { createResponse } from "../../util/response";
/**
 * Reusable function to get documents using aggregation
 * @param {mongoose.Model} model - The Mongoose model to query.
 * @param {Array} pipeline - The aggregation pipeline stages.
 * @param {Object} [options={}] - Additional query options.
 * @returns {Promise<Object>} - Custom response object with query results.
 */
async function getAllItems(model, pipeline) {
  try {
    const result = await model
      .aggregate(pipeline, { allowDiskUse: true })
      .exec();

    if (result.length > 0) {
      return createResponse(true, result, "Data retrieved successfully");
    } else {
      return createResponse(false, [], "No data found");
    }
  } catch (error) {
    return createResponse(
      false,
      null,
      `Error retrieving data: ${error.message}`
    );
  }
}

export default getAllItems;

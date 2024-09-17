import mongoose from "mongoose";
/**
 * Helper function to determine if the input is an ObjectId or a slug.
 * @param {string} identify - The input string to evaluate.
 * @returns {Object} - An object containing the query type and the appropriate query.
 */
const identifyQueryType = (identify) => {
  if (mongoose.Types.ObjectId.isValid(identify)) {
    return {
      type: "id",
    };
  } else {
    return {
      type: "slug",
    };
  }
};

export default identifyQueryType;

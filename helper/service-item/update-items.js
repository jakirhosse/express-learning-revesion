import mongoose from "mongoose";
import { createResponse } from "../../util/response.js";

export const updateItem = async (model, id, data) => {
  try {
    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return createResponse(false, null, "Invalid Blog ID");
    }
    const updatedItem = await model.findByIdAndUpdate(id, data, { new: true });

    if (updatedItem) {
      return createResponse(true, updatedItem, "Item updated successfully.");
    } else {
      return createResponse(
        true,
        null,
        "Failed to update item. Item not found."
      );
    }
  } catch (error) {
    return createResponse(true, null, `Error updating item: ${error.message}`);
  }
};

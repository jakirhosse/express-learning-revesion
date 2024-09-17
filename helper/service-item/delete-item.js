import mongoose from "mongoose";
import { createResponse } from "../../util/response";

export const deleteItem = async (model, id) => {
  try {
    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return createResponse(false, null, "Invalid Blog ID");
    }
    const deletedItem = await model.findByIdAndDelete(id);

    if (deletedItem) {
      return createResponse(true, deletedItem, "Item deleted successfully.");
    } else {
      return createResponse(
        false,
        null,
        "Failed to delete item. Item not found."
      );
    }
  } catch (error) {
    return createResponse(true, null, `Error deleting item: ${error.message}`);
  }
};

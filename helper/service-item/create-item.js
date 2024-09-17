import { createResponse } from "../../util/response";
export const createItem = async (model, data) => {
  try {
    const item = new model(data);
    const savedItem = await item.save();

    if (savedItem) {
      return createResponse(true, savedItem, "Item created successfully.");
    } else {
      return createResponse(false, null, "Failed to create item.");
    }
  } catch (error) {
    return createResponse(false, null, `Error creating item: ${error.message}`);
  }
};

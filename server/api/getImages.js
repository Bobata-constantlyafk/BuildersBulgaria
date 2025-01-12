import { promises as fs } from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  const { houseType } = getQuery(event); // Get the houseType from the query parameter

  if (!houseType) {
    throw createError({
      statusCode: 400,
      statusMessage: "House type is required.",
    });
  }

  try {
    // Get the absolute path to the house folder
    const folderPath = path.resolve(`public/${houseType}`);

    // Read the directory contents
    const files = await fs.readdir(folderPath);

    // Filter the files for valid image extensions
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    // Map the files to public URLs
    return imageFiles.map((file) => `/${houseType}/${file}`);
  } catch (error) {
    // Log the error and return an appropriate response
    console.error("Error in getImages API:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to load images.",
    });
  }
});

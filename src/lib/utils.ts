

import mongoose from "mongoose";
import config from "../../config";

export const connectToDb = async () => {
  try {
    if(mongoose.connection.readyState) {
      // if you are using this in local, everytime you will refresh it will create a new instance
      console.log("Connection has already established!", mongoose.connection.readyState);
      return;
    }
    const db = await mongoose.connect(config.MONGO);
  } catch (error) {
    console.log(error);
    throw new Error("error");
  }
};
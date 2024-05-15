const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://FeelFoody:Password@cluster0.ndxgtag.mongodb.net/FeelFoodyMern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database connected...");

    const fetched_data = await mongoose.connection.db.collection("food_Data");
    const data = await fetched_data.find({}).toArray();
    const food_Category = await mongoose.connection.db.collection(
      "food_Category"
    );
    const catData = await food_Category.find({}).toArray();
    // console.log(data);
    global.food_Data = data;
    global.food_Category = catData;
    // console.log(global.food_Data);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

module.exports = mongoDB;
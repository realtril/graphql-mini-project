const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const colors = require("colors");
const port = process.env.PORT || 8000;
const connectDB = require("./config/db");

const app = express();

//connect to db
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, console.log(`Server is running on port ${port}`));

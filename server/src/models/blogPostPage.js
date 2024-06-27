import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const BlogPostPage = sequelize.define(
  "BlogPostPage",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    featuredImageURL: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.JSON,
    },
  },
  {
    timestamps: false,
  }
);

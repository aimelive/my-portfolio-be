import { Sequelize, Model, DataTypes, UUIDV4 } from "sequelize";
import dbConnection from "../config/db";

class BlogModel extends Model {}

const BlogConnect = (sequelize: Sequelize) => {
  BlogModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
      },
      title: DataTypes.STRING,
      intro: DataTypes.STRING,
      body: DataTypes.TEXT,
      slug: { type: DataTypes.STRING, unique: true },
      createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date(),
        onUpdate: "SET DEFAULT",
      },
      imgUrl: DataTypes.STRING,
      tags: DataTypes.STRING,
    },
    {
      tableName: "blogs",
      timestamps: true,
      sequelize,
    }
  );
  return BlogModel;
};

const Blog = BlogConnect(dbConnection);

export default Blog;

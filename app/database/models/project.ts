import { Sequelize, Model, DataTypes, UUIDV4 } from "sequelize";
import dbConnection from "../config/db";

class ProjectModel extends Model {}

const ProjectConnect = (sequelize: Sequelize) => {
  ProjectModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
      },
      title: DataTypes.STRING,
      stars: DataTypes.INTEGER,
      rate: DataTypes.INTEGER,
      imgUrl: DataTypes.STRING,
      tools: DataTypes.STRING,
      platforms: DataTypes.STRING,
      stack: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date(),
        onUpdate: "SET DEFAULT",
      },
    },
    {
      tableName: "projects",
      timestamps: true,
      sequelize,
    }
  );
  return ProjectModel;
};

const Project = ProjectConnect(dbConnection);

export default Project;

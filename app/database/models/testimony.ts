import { Sequelize, Model, DataTypes, UUIDV4 } from "sequelize";
import dbConnection from "../config/db";

class TestimonyModel extends Model {}

const TestimonyConnect = (sequelize: Sequelize) => {
  TestimonyModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
      },
      username: DataTypes.STRING,
      message: DataTypes.STRING,
      email: DataTypes.STRING,
      link: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date(),
        onUpdate: "SET DEFAULT",
      },
      imgUrl: DataTypes.STRING,
    },
    {
      tableName: "testimonials",
      timestamps: true,
      sequelize,
    }
  );
  return TestimonyModel;
};

const Testimony = TestimonyConnect(dbConnection);

export default Testimony;

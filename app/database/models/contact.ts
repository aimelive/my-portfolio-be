import { Sequelize, Model, DataTypes, UUIDV4 } from "sequelize";
import dbConnection from "../config/db";

class ContactModel extends Model {}

const ContactConnect = (sequelize: Sequelize) => {
  ContactModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
      },
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.TEXT,
      responded: { type: DataTypes.STRING, defaultValue: "on going" },
      createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date(),
        onUpdate: "SET DEFAULT",
      },
    },
    {
      tableName: "contacts",
      timestamps: true,
      sequelize,
    }
  );
  return ContactModel;
};

const Contact = ContactConnect(dbConnection);

export default Contact;

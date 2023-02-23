"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // 스태틱 메소드 : 테이블에 대한 설정
    static associate(models) {}
  }
  User.init(
    {
      // 첫 번째 객체 인수는 테이블 필드에 대한 설정
      // id: { primaryKey: true, type: DataTypes.INTEGER },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
      },
      point: {
        type: DataTypes.INTEGER,
      },
    },
    {
      // 두 번째 객체 인수는 테이블 자체에 대한 설정
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

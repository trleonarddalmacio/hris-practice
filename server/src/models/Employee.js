module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Song', {
    employee_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    employee_fName: DataTypes.String,
    employee_lName: DataTypes.String
  })
}
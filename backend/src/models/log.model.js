module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Log', {
    userId: DataTypes.INTEGER,
    action: DataTypes.STRING,
    metadata: DataTypes.JSONB,
    ip: DataTypes.STRING,
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  });
};

'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentSubject = sequelize.define('StudentSubject', {
    SubjectId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    score:DataTypes.INTEGER
  });
  StudentSubject.associate = (models) => {
    StudentSubject.belongsTo(models.Student);
    StudentSubject.belongsTo(models.Subject);
  }


  return StudentSubject;
};

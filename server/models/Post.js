const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
    const Posts = sequelize.define("Posts",{
        title :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        postText :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        username :{
            type : DataTypes.STRING,
            allowNull: false,
        },
    });
// one to many associate of foreign key and primary key

Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
        onDelete : "cascade"
    })
}

    return Posts
}
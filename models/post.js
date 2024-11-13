module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
    return Post;
};

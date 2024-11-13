module.exports = (sequelize, DataTypes) => {
    const Page = sequelize.define('Page', {
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
    return Page;
};

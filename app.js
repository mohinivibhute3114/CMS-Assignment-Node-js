const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models'); // Sequelize setup
const postRoutes = require('./routes/postRoutes');
const pageRoutes = require('./routes/pageRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database Sync
db.sequelize.sync()
    .then(() => console.log('Database connected and tables synced'))
    .catch(error => console.error('Failed to sync database:', error));

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/pages', pageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

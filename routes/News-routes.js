const express = require('express');
const router = express.Router();
// const swaggerUi = require('swagger-ui-express');
const { uploadNews, fetchAllNews, updateNews, deleteNews } = require('../controllers/controllers');

router.get('/summary', fetchAllNews)
router.post('/upload', uploadNews)
router.patch('/update/:newsId', updateNews)
router.delete('/delete/:newsId', deleteNews)

// router.use('/api-doc', swaggerUi.serveFiles(require('../../../v1/swagger/news/news.json'), {}));
// router.get('/api-doc', swaggerUi.setup(require('../../../v1/swagger/news/news.json')));

module.exports = router;
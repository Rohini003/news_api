
// const { errFunc, isEmpty, checkValidationError } = require("../../Utility/common");
// const { createRespHeader } = require("../../Utility/createresponseheader");
// const { newsValidationSchema } = require('../../validation/news/index');
const { news } = require('../../models/News_Models');
// const syslog = require('../../common _logger');
// const {performance} = require('perf_hooks');


const uploadNews = async (_req, _res, next) => {

    try {
        
        const startTime = performance.now();
        const { error } = await newsValidationSchema.validate(_req.body);

        if (error) {
            const errorMessage = checkValidationError(error);
            errFunc(errorMessage, statusCode.Bad_Request.errorCode)
        }

        _res.body = createRespHeader()

        const widgetId = _req.body.widget_id;
        const requestUser = {
            name: _req.userInfo.username,
            email: _req.userInfo.email
        }

        const newsArticles = [];
        _req.body.news.forEach((newsArticle, idx) => {
            newsArticles.push(newsArticle);
            newsArticles[idx].created_by = requestUser
            newsArticles[idx].updated_by = requestUser
            newsArticles[idx].widget_id = widgetId;
        })

        if (!isEmpty(news)) {
            const insertResult = await news.insertMany(newsArticles)

            const uploadedArticles = [];
            insertResult.forEach((insertResult) => {
                uploadedArticles.push({
                    newsId: insertResult._id,
                    heading: insertResult.heading,
                    createdBy: insertResult.created_by,
                    createdAt: insertResult.created_at,
                })
            });

            _res.body.statusCode = 1;
            _res.body.message = "Created Successfully";
            _res.body.data = uploadedArticles;
        }
        _res.send(_res.body).status(201);

        const endTime = performance.now();
        const proctime = endTime - startTime;
        syslog.log('info', { message: `${__function} executed.`, data: { objectId: 'internal', function: __function, file: __filename, proctime: proctime } });
        
        return next();

    } catch (apiException) {
        throw apiException
    }
}

module.exports = { uploadNews }
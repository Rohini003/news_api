const { news } = require('../../models/News_Models');
// const { createRespHeader } = require("../../Utility/createresponseheader");
// const { updateNewsValidationSchema } = require('../../validation/news/index');
// const { errFunc, checkValidationError } = require("../../Utility/common");
// const syslog = require('../../common _logger/index');
// const {performance} = require('perf_hooks');

/**
* @author : Omkar Bhoir
* @desc : Update the existing news articles using article id
* @param {object} _req : Express request object
* @param {object} _res : Express response object
* @param {object} next : Express next function handler
* @return {function} next : Call to next middleware function in sequence
*/
const updateNews = async (_req, _res, next) => {
    try {
       
        const startTime = performance.now();
        const newsId = _req.params.newsId;
        const { error } = await updateNewsValidationSchema.validate(_req.body);

        if (error) {
            const errorMessage = checkValidationError(error);
            errFunc(errorMessage, statusCode.Bad_Request.errorCode);
        }

        _res.body = createRespHeader();
        const requestData = _req.body;
        const userRequest = {
            name: _req.userInfo.username,
            email: _req.userInfo.email
        }

        const updateResult = await news.findByIdAndUpdate(newsId,
            {
                "$set": {
                    'heading': requestData.heading,
                    'url': requestData.url,
                    'is_active': requestData.is_active,
                    'news_item': requestData.news_item,
                    'updated_by': userRequest
                }
            }, { new: true }
        ).exec();

        if (updateResult) {
            _res.body.statusCode = 1;
            _res.body.message = 'Success'
            _res.body.data = {
                newsId: updateResult._id,
                heading: updateResult.heading,
                newsItem: updateResult.news_item,
                url: updateResult.url,
                isActive: updateResult.is_active,
                updatedAt: updateResult.updated_at
            }
            _res.status(200).send(_res.body);
        } else {
            _res.body.statusCode = 0;
            _res.body.message = 'Not Found'
            _res.status(200).send(_res.body);
        }
        const endTime = performance.now();
        const proctime = endTime - startTime;
        syslog.log('info', { message: `${__function} executed.`, data: { objectId: 'internal', function: __function, file: __filename, proctime: proctime } });
        
        return next();

    } catch (apiException) {
        throw apiException
    }
}

module.exports = { updateNews };
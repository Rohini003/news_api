// const { createRespHeader } = require("../../Utility/createresponseheader");
const { news } = require('../../models/News_Models');
// const { isEmpty } = require("../../Utility/common");
// const syslog = require('common-logger');
// const {performance} = require('perf_hooks');

/**
* @author : Omkar Bhoir
* @desc : Delete the existing article (marking it as in active)
* @param {object} _req : Express request object
* @param {object} _res : Express response object
* @param {object} next : Express next function handler
* @return {function} next : Call to next middleware function in sequence
*/
const deleteNews = async (_req, _res, next) => {
    try {

        const startTime = performance.now();
        const newsId = _req.params.newsId;
        _res.body = createRespHeader()

        if (!isEmpty(newsId)) {
            const deleteResult = await news.findByIdAndDelete(newsId);

            if (deleteResult) {
                _res.body.statusCode = 1;
                _res.body.message = 'Success'
                _res.body.data = {
                    newsId: newsId,
                    message: "News deleted successfully."
                }
                _res.status(200).send(_res.body);
            } else {
                _res.body.message = 'Not Found'
                _res.status(200).send(_res.body);
            }
        }

        const endTime = performance.now();
        const proctime = endTime - startTime;
        syslog.log('info', { message: `${__function} executed.`, data: { objectId: 'internal', function: __function, file: __filename, proctime: proctime } });
        
        return next();

    } catch (apiException) {
        throw apiException;
    }
}

module.exports = { deleteNews }
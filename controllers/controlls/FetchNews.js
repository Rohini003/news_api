const { news } = require('../../models/News_Models');
// const { createRespHeader } = require("../../Utility/createresponseheader");
// const syslog = require('../../common _logger/index');
// const {performance} = require('perf_hooks');

/**
* @author : Omkar Bhoir
* @desc : Fetch all news articles max articles per page is three
* @param {object} _req : Express request object
* @param {object} _res : Express response object
* @param {object} next : Express next function handler
* @return {function} next : Call to next middleware function in sequence
*/
const fetchAllNews = async (_req, _res, next) => {

    try {
        const page = _req.query.page || 1;
        const limit = 3;

        const startTime = performance.now()

        _res.body = createRespHeader();

        const result = await news.find(
            {
                widget_id: 'tess-news',
                is_active: true
            }
        ).
            sort({ _id: "desc" }).
            limit(limit * 1).
            skip((page - 1) * limit).
            exec();

        if (result) {
            let articleList = [];
            result.forEach((value) => {
                articleList.push({
                    newsId: value._id,
                    heading: value.heading,
                    newsItem: value.news_item,
                    url: value.url,
                    createdAt: value.created_at
                });
            });

            if (articleList.length > 0) {
                _res.body.statusCode = 1;
                _res.body.message = 'Success'
                _res.body.data = {
                    widgetId: 'tess-news',
                    newsList: articleList
                }
                _res.status(200).send(_res.body);
            } else {
                _res.body.statusCode = 0;
                _res.body.message = 'Files Not Found'
                _res.status(200).send(_res.body);
            }
        }

        const proctime = performance.now() - startTime;
        syslog.log('info', { message: `${__function} executed.`, data: { objectId: 'internal', function: __function, file: __filename, proctime: proctime } });
        return next();
    } catch (apiException) {
        throw apiException
    }

}

module.exports = { fetchAllNews }
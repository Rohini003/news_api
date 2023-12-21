// const Joi = require('joi');

// const urlPattern = new RegExp(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/);

// const newsValidationSchema = Joi.object().keys({
// 	widget_id: Joi.string().required(),
// 	news: Joi.array().items({
// 		heading: Joi.string().required().max(80),
// 		news_item: Joi.string().required().max(500),
// 		url: Joi.string().pattern(urlPattern).required()
// 	})
// });

// const updateNewsValidationSchema = Joi.object().keys({
// 	heading: Joi.string().required().max(80),
// 	news_item: Joi.string().required().max(500),
// 	url: Joi.string().pattern(urlPattern).required(),
// 	is_active : Joi.boolean()
// })

// module.exports = { newsValidationSchema, updateNewsValidationSchema }
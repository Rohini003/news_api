const {fetchAllNews} = require('./controlls/FetchNews');
const {uploadNews} = require('./controlls/UploadNews');
const {updateNews} = require('./controlls/UpdateNews');
const {deleteNews} = require('./controlls/DeleteNews');


module.exports = {fetchAllNews, uploadNews, updateNews, deleteNews}
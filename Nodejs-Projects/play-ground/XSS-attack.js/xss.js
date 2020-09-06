const xss = require('xss');

const title = xss(blogData.title);
const content = xss(blogData.content);
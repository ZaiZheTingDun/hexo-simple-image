/**
 * Simple test of function
 */

const plugin = require('../lib/index');

let data = { content: "" }

/**
 * 1. happy path
 */
data.content = '![alt](./test/test.js \"title\")'
plugin(data)
if (data.content !== '{% asset_img test.js \'"title" "alt"\' %}')
    throw "failed"

/**
 * 2. chinese
 */
data.content = '![描述](./测试/测试.js \"标题\")'
plugin(data)
if (data.content !== '{% asset_img 测试.js \'"标题" "描述"\' %}')
    throw "failed"

console.log("success.")
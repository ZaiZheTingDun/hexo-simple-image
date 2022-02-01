/**
 * Simple test of function
 */

const plugin = require('../lib/index')

let data = { content: "" }

/**
 * 1. happy path
 */
data.content = '![alt](./test/test.png "title")'
plugin(data)
if (data.content !== '{% asset_img "test.png" \'"title" "alt"\' %}')
    throw "failed."

/**
 * 2. chinese
 */
data.content = '![描述](./测试/测试.png "标题")'
plugin(data)
if (data.content !== '{% asset_img "测试.png" \'"标题" "描述"\' %}')
    throw "failed."

/**
 * 3. another file path
 */
 data.content = '![alt](test/test.png "title")'
 plugin(data)
 if (data.content !== '{% asset_img "test.png" \'"title" "alt"\' %}')
     throw "failed."

/**
 * 4. no title
 */
 data.content = '![alt](test/test.png)'
 plugin(data)
 if (data.content !== '{% asset_img "test.png" \'"" "alt"\' %}')
     throw "failed."

/**
 * 5. path with whitespace
 */
data.content = '![alt](test/this is test.png)'
plugin(data)
if (data.content !== '{% asset_img "this is test.png" \'"" "alt"\' %}')
    throw "failed."

console.log("success.")
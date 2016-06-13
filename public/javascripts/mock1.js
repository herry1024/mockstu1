/**
 * Created by guoyi on 2016-6-3.
 */
var Mock=require('mockjs')
// var data=Mock.mock({
//     'list|1-10':[{
//         'id|+1':1
//     }]
// })

// console.log(JSON.stringify(data,null,4))

var a=Mock.mock({
    name: {
        first: '@FIRST',
        middle: '@FIRST',
        last: '@LAST',
        full: '@first @middle @last'
    }
})
var Random = Mock.Random
Random.email()
/*数据模版定义
console.log(Mock.mock( { email: {'email|1-10':200 }} ))
// 重复生成字符串，重复的次数在1-10之间，*/
// console.log(Mock.mock( { name: {'name|1-10':'Are you OK?' }} ))
// 重复生成字符串，重复3次
// console.log(Mock.mock({name:{'name|3':'Are you OK?'}}))
/*{ name: { name: 'Are you OK?Are you OK?Are you OK?Are you OK?' } }
{ name: { name: 'Are you OK?Are you OK?Are you OK?' } }*/

// 属性值是number
console.log(Mock.mock({'name|+1':'200'}))
console.log(Mock.mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    })
)

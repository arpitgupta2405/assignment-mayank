let groupObjectsBy = function (jsonArr, key) {
    let finalObj = {}
    if (Array.isArray(jsonArr) && key) {
        for (let i = 0; i < jsonArr.length; i++) {
            if (jsonArr[i][key]) {
                if (!finalObj[jsonArr[i][key]]) {
                    finalObj[jsonArr[i][key]] = []
                }
                finalObj[jsonArr[i][key]].push(jsonArr[i])
            }
        }
    } else {
        throw 'Invalid arguments'
    }
    return finalObj
}

console.log(groupObjectsBy([
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
}, {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ], 'channel'))

// -----  2nd approach using lodash  --------------------------
// import _ from "loadash";

// let groupObjectsBy = function (jsonArr, key) {
//     if (Array.isArray(jsonArr) && key) {
//         return _.groupBy(jsonArr, key)
//     } else {
//         throw 'Invalid arguments'
//     }
// }

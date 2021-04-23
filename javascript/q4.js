let SortArray = function(...originalArray) {
    this.originalArray = originalArray
    
    let sortArray = function(arr) {

        arr.sort((a,b)=>{
            return a - b
        })
    }

    this.getSortedArray = function() {
        sortArray(this.originalArray)
        return this.originalArray
    }
        
}

let sortArr = new SortArray(1,5,3,2,33,43,11,22)

console.log(sortArr.getSortedArray())

// Implementing inheritance

let SortObjectArray = function(key, ...originalArray){
    this.key = key
    SortArray.call(this, ...originalArray)
    
    let sortArray = function(arr, key){

        arr.sort(function(a, b){
            return a[key] - b[key]
        })

    }

    this.getSortedArray = function() {
        sortArray(this.originalArray, this.key)
        return this.originalArray
    }
}

//SortObjectArray.prototype = Object.create(SortArray.prototype)
SortObjectArray.prototype = new SortArray()
let objArr = new SortObjectArray( 'abc', {'abc': 34}, {'abc': 356}, {'abc': 11}, {'abc': 300})

console.log(objArr.getSortedArray())


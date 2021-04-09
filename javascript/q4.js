let SortArray = function(originalArray) {
    this.originalArray = originalArray
    
    let arr = originalArray
    let sortArray = function() {

        arr.sort((a,b)=>{
            return a - b
        })
    }

    this.getSortedArray = function() {
        sortArray()
        return this.originalArray
    }
        
}

let sortArr = new SortArray([1,5,3,2,33,43,11,22])
console.log(sortArr)

console.log(sortArr.getSortedArray())

// Implementing inheritance

let SortObjectArray = function(originalArray, key){
    this.key = key
    SortArray.call(this, originalArray)
    
    let arr = originalArray
    let ki = key
    
    let sortArray = function(){

        arr.sort(function(a, b){
            return a[ki] - b[ki]
        })

    }

    this.getSortedArray = function() {
        sortArray()
        return this.originalArray
    }
}

SortObjectArray.prototype = Object.create(SortArray.prototype)

let objArr = new SortObjectArray([{'abc': 34}, {'abc': 356}, {'abc': 11}], 'abc')

console.log(objArr.getSortedArray())


function lowerCaseWords(array) {
    result = [];
    return new Promise((resolve, reject) => {
        if(array.length == 0) { 
            reject(new Error("Array can't be empty"))
        } else {
            for (item of array) {
                if (typeof(item) == "string") {
                    result.push(item.toLowerCase())
                }
            }
            resolve(result)
        }
    })
}

lowerCaseWords(["PIZZA", 10, true, 25, false, "Wings"])
    .then(result => console.log(result))
    .catch(error => console.log(error))

lowerCaseWords([])
    .then(result => console.log(result))
    .catch(error => console.log(error))
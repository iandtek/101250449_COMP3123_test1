const delayedSuccess = () => {
    setTimeout(() => {
        let success = {message: 'delayed success!'}
        console.log(success);
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception')
        } catch (e) {
            console.error(e)
        }
        
    }, 500)
}

// const resolvedPromise = () => {
//     setTimeout(() => {
//         let message = {message: 'delayed success!'}
//         return new Promise((resolve, reject) => {
//             resolve(message)
//         })
//     }, 500)
// }

// const rejectedPromise = () => {
//     setTimeout(function() {
//         let message = "delayed exception!"
//         return new Promise((resolve, reject) => {
//             reject(message)
//         })
//     }, 500)
// }

const resolvedPromise = () => {
    let message = {message: 'delayed success!'}
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(message)
        }, 500)
    })
}

const rejectedPromise = () => {
    let message = {message: 'delayed exception!'}
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject(message)
        }, 500)
    })
}

resolvedPromise()
    .then(message => console.log(message))

rejectedPromise()
    .catch(error => console.log(error))
// sync:
// async: setTimeout, seterval, fetch,event
//callback, promises, async await --> converts asynchronous data in synchronous
//object creation methods: object literal, functional constructor, class, object.create()
// web api-fetch, settimeout, call stack, event loop, microtask queue,macrotask queue


console.log("start");


function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("use data....");
            resolve();
        },3000);
    });
}

function getUserBankDetail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log("user bank details")
            resolve()
        },1000);
    });
}

function getUserInsurance(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log("user Insurance")
            resolve()
        },2000);
    });
}



// async await 
async function call(){
    await getUser();
    await getUserBankDetail();
    await getUserInsurance();
}
call()



console.log("end");

// callback

//callback Hell (nested callback functions)--------> thats why we use promises to avoid callback hell
// getUser(()=> {
//     getUserBankDetail(()=>{
//         getUserInsurance()
//     });
// });


//Promise chaining
// getUser()
// .then(()=>{
//     return getUserBankDetail();
// }).then(()=>{
//     return getUserInsurance();
// }).then(()=>{
//     console.log("process....end")
// }).catch((err)=>{
//     console.log(err)
// })



//PROMISE --> object to resolve insynchronous tasks

// let mypromise = new Promise((resolve,reject)=>{
//     let age=25;
//     if(age>18){
//         resolve("age is valid")
//     }else{
//         reject("age is invalid")
//     }

// });

// mypromise
// .then((msg)=>{               //resolve
//     console.log(msg)
// })

// .catch((err)=>{              //reject
//     console.log(err)
// })
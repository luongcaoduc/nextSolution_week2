
//Bai1
let deals = []

for (i = 0; i < 100; i++) {
    deals.push(i)
}


//Bai2
let handlingDealCallBack = (dealId, callback) => {
    let timeToHandleDeal = Math.floor(Math.random()* (1000 - 100 + 1) + 100)
    setTimeout(() => {
        callback(dealId)
    }, timeToHandleDeal)
}


// handlingDealCallBack(1 ,deal => {
//     console.log("Đã xử lý xong " + deal)
// })


//Bai3
let handlingDealPromise = (dealid) => {
    let timeToHandleDeal = Math.floor(Math.random()*1000)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(dealid)
        }, timeToHandleDeal)
    })
}

//handlingDealPromise(2).then(deal => console.log("Đã xử lý xong " + deal))



//Bai4
let handlingDeal = (dealid) => {
    let timeToHandleDeal = Math.floor(Math.random()*(1000 - 100) + 100)
    //let timeToHandleDeal = 0;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dealid)
        }, timeToHandleDeal)
    })
}


let handlingDealAsyncAwait = async (dealid) => {
    try {
        let deal = await handlingDeal(dealid)
        console.log("Đã xử lý xong " + deal)
    } catch (e) {
        console.log(e)
    }
}



//handlingDealAsyncAwait(deals[5])

// function handleAllDeals(deals) {
//     let i = 0
//     let n = deals.length
//     handlingDealPromise(deals[i]).then(deal => {
//         if(i !== n) {
//             deals.shift()
//             handleAllDeals(deals)
//             console.log("done " + deal)
//         } else {
//             console.log("welcome")
//         }
//     }) 
// }
//console.log(deals)

//bai5
async function handleAllDeals(deals) {
    
    
    let deal = deals.shift()
    await handlingDealAsyncAwait(deal)
     
    
    if (deals.length !== 0) {    
        
        await handleAllDeals(deals)
    } 
}

//handleAllDeals(deals).then(() => console.log("DONE"))

//bai6
function handleAllDealsLImit2(deals) {
    Promise.all([handleAllDeals(deals), handleAllDeals(deals)]).then(() => console.log("DONE"))
}

//handleAllDealsLImit2(deals)



//bai7
function handleAllDealsConfig(deals, limit) {
    dealArray = []
    for (let i = 0; i < limit; i++) {
        dealArray.push(handleAllDeals(deals))
    }
    Promise.all(dealArray).then(() => console.log("DONE"))
}

//handleAllDealsConfig(deals, 10)


















function showRatings(rating){
    let ratings = ``
    for (let i = 0; i < Math.floor(rating); i++){
        ratings += `*`
        if (i !== Math.floor(rating) - 1){
            ratings += ` `
        }
    }

    if (!Number.isInteger(rating)){
        ratings += ` .`
    }
    return ratings
}

console.log(showRatings(4.5));
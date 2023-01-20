function showRating(rating){
    let ratings = ``
    for (let i = 0; i < rating; i++){
        ratings = ratings + `*`
        if (i !== rating - 1){
            ratings = ratings + ` `
        }
    }
    return ratings
}

console.log(showRating(4));
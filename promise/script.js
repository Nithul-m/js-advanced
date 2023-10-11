let worldCup = false

function Reporter(){
    let promise = new Promise(function(resolve,reject){

        if(worldCup === true){
        resolve("Messi has got it all. The GOAT debate is over")
        }
        else{
            reject("Sorry,technical error")
        }

    })
    return promise

}

let editor = Reporter()

editor.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})
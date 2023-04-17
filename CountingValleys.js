function countingValleys(steps, path) {
    let lvlArr = [0]

    path.split('').forEach((el, idx)=> {
        console.log(el);


        if(el === 'U'){
            lvlArr.push(lvlArr[lvlArr.length-1]+1)
        } else {
            lvlArr.push(lvlArr[lvlArr.length-1]-1)
        }

    })
   
    let valleys = 0;

    for(var i = 1; i < lvlArr.length; i++){
       
        if(lvlArr[i-1] === -1 && lvlArr[i] === 0){
            valleys++
        }

    }

    return valleys;
}

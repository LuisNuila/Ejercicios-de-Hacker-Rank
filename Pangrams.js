function pangrams(s) {
    let final = Array.from(new Set(s.toLowerCase().split(' ').join('').split('').sort(function(a,b){return a === b ? 0 : a < b ? -1 : 1})))
    
    if(final.length === 26){
        return 'pangram'
    } else {
        return 'not pangram'
    }

}

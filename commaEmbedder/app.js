const toomanConventor = (raw) => {
    let rawString = raw.toString();
    let rawArray = rawString.split("");
    let edited;
    let j = (rawArray.length % 2) === 0 ? 0 : 1;
    console.log(j);
    rawArray.forEach((c,i) => {
        if ( (i === 0) && (rawArray.length % 2 !== 0 ) ) {
            edited = c + ",";
        } else if (i === 0) {
            edited = c ;
        }else if (
            ((i + 1 - j) % 3 === 0) && ((i + 1) !== rawArray.length + j)
        ) {
            edited += c + ","
        } else {
            edited += c
        }


    })

    edited = edited[edited.length -1] === "," ? edited.substring(0, edited.length - 1) : edited

    return edited
}

console.log(toomanConventor(5000000000000000000))
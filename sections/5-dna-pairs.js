// Please do not change the name of this function
function dnaPairs(dna) {

  if(dna.length === 0){
    return [];
  }

  let dnaPairsArr = []

  for(let i = 0; i < dna.length; i++){
    if(dna[i] === "G"){
      dnaPairsArr.push(["G", "C"]);
    }
    if(dna[i] === "C"){
      dnaPairsArr.push(["C", "G"]);
    }
    if(dna[i] === "A"){
      dnaPairsArr.push(["A", "T"]);
    }
    if(dna[i] === "T"){
      dnaPairsArr.push(["T", "A"]);
    }
  }
  return dnaPairsArr;
}
module.exports = dnaPairs;

// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const newCat = [...cats, name];
    return newCat;
}

function prependCat(name){
    const myCats =[name, ...cats];
    return myCats;
}
function removeLastCat(){
    const rmLast = [...cats.slice(0,-1)]
    return rmLast;
}
function removeFirstCat(){
    const rmFirst = [...cats.slice(1)]
    return rmFirst;
}

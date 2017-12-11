function removeEle(ele){
    if(ele) document.getElementById(ele).remove();
}

function mediePlay(ele){
    if(ele) document.getElementById(ele).play();
}

export {
    removeEle,
    mediePlay
}

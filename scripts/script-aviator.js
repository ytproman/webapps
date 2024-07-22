const timer = 3000

const sleep = async (millsecs)=>{
    await new Promise(resolve=>{
        return setTimeout(resolve,millsecs)
    })
}

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(
      decimals,
    );
    return parseFloat(str);
  }

const hide = ()=>{
    document.getElementById('printSignal').style.display='none';
}

const change = async (path)=>{
    document.getElementById('image2').style.display='none';
    document.getElementById('image1').style.display='none';
    document.getElementById('image3').style.marginTop="0.5px";
    document.getElementById('back').style.backgroundColor="black";
    document.getElementById('image3').style.display='inline-block';
    await sleep(timer);
    document.getElementById('image3').style.display='none';
    document.getElementById('back').style.backgroundColor="#4C0705";
    document.getElementById('image2').style.marginTop=0;
    document.getElementById('printSignal').style.display='inline-block';
    document.getElementById('image2').style.display='inline-block';
    document.getElementById('btn0').style.display='inline-block';
    document.getElementById('image2').src=path;
}

const generate = async ()=>{
    hide()
    document.getElementById('btn0').style.display='none';
    let receivingSignal = getRandomFloat(1.00, 3.99, 2);
    if ((receivingSignal.toString().length == 3)) {
        receivingSignal += "0";
    } if ((receivingSignal.toString().length == 1)) {
        receivingSignal += ".00";
    }
    printSignal.innerHTML = `${receivingSignal}${"x"}`;
    path = "../img/aviator-img/circle.png"
    change(path)
}


// const signal3 = async ()=>{
//     hide()
//     path = "img/3/"+Math.floor(Math.random() * 48)+".jpg"
//     change(path)
// }

// const signal5 = async ()=>{
//     hide()
//     path = "img/5/"+Math.floor(Math.random() * 48)+".jpg"
//     change(path)
// }

// const signal7 = async ()=>{
//     hide()
//     path = "img/7/"+Math.floor(Math.random() * 48)+".jpg"
//     change(path)
// }
const timer = 3000

const sleep = async (millsecs)=>{
    await new Promise(resolve=>{
        return setTimeout(resolve,millsecs)
    })
}

const generate = ()=>{
    document.getElementById('btn0').style.display='none';
    document.getElementById('btn00').style.display='none';
    document.getElementById('btn1').style.display='inline-block';
    document.getElementById('btn3').style.display='inline-block';
    document.getElementById('btn5').style.display='inline-block';
    document.getElementById('btn7').style.display='inline-block';
    document.getElementById('text').style.display='inline-block';
}

const hide = ()=>{
    document.getElementById('btn1').style.display='none';
    document.getElementById('btn3').style.display='none';
    document.getElementById('btn5').style.display='none';
    document.getElementById('btn7').style.display='none';
    document.getElementById('text').style.display='none';
}

const signal1 = async ()=>{
    hide()
    path = "../img/mines-img/1/"+Math.floor(Math.random() * 40)+".jpg"
    document.getElementById('image2').style.display='none';
    document.getElementById('image1').style.display='none';
    document.getElementById('image3').style.marginTop="83px";
    document.getElementById('image3').style.display='inline-block';
    await sleep(timer);
    document.getElementById('image3').style.display='none';
    document.getElementById('image2').style.marginTop=0;
    document.getElementById('image2').style.display='inline-block';
    document.getElementById('btn0').style.display='inline-block';
    document.getElementById('image2').src=path;
}

const signal3 = async ()=>{
    hide()
    path = "../img/mines-img/3/"+Math.floor(Math.random() * 48)+".jpg"
    document.getElementById('image2').style.display='none';
    document.getElementById('image1').style.display='none';
    document.getElementById('image3').style.marginTop="83px";
    document.getElementById('image3').style.display='inline-block';
    await sleep(timer);
    document.getElementById('image3').style.display='none';
    document.getElementById('image2').style.marginTop=0;
    document.getElementById('image2').style.display='inline-block';
    document.getElementById('btn0').style.display='inline-block';
    document.getElementById('btn00').style.display='inline-block';
    document.getElementById('image2').src=path;
}

const signal5 = async ()=>{
    hide()
    path = "../img/mines-img/5/"+Math.floor(Math.random() * 40)+".jpg"
    document.getElementById('image2').style.display='none';
    document.getElementById('image1').style.display='none';
    document.getElementById('image3').style.marginTop="83px";
    document.getElementById('image3').style.display='inline-block';
    await sleep(timer);
    document.getElementById('image3').style.display='none';
    document.getElementById('image2').style.marginTop=0;
    document.getElementById('image2').style.display='inline-block';
    document.getElementById('btn0').style.display='inline-block';
    document.getElementById('btn00').style.display='inline-block';
    document.getElementById('image2').src=path;
}

const signal7 = async ()=>{
    hide()
    path = "../img/mines-img/7/"+Math.floor(Math.random() * 39)+".jpg"
    document.getElementById('image2').style.display='none';
    document.getElementById('image1').style.display='none';
    document.getElementById('image3').style.marginTop="83px";
    document.getElementById('image3').style.display='inline-block';
    await sleep(timer);
    document.getElementById('image3').style.display='none';
    document.getElementById('image2').style.marginTop=0;
    document.getElementById('image2').style.display='inline-block';
    document.getElementById('btn0').style.display='inline-block';
    document.getElementById('btn00').style.display='inline-block';
    document.getElementById('image2').src=path;
}
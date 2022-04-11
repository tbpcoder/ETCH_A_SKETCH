
let siz;

do{
    siz=prompt("Enter 2 to 64:","16");
}while(siz<2||siz>64);


buildGrid(siz);

function buildGrid(siz){
    for(let i=0;i<siz;i++){
        const p=document.createElement('div');
        p.setAttribute('class','par');
        const mpart=document.querySelector('.mpart');
        mpart.append(p);
        p.style.display='flex';
        p.style.flexDirection='row';
        p.style.flex='1';
        for(let j=0;j<siz;j++){
            const ele=document.createElement("div");
            ele.setAttribute('class','sub');
            ele.setAttribute('onmouseover',"changeBack(this)");
            p.append(ele);
            ele.style.flex='1';
            ele.style.backgroundColor='white';
            ele.style.border='1px solid black';

        }
    }
}
let ran = false;
let b='black';

const rainbow=document.querySelector('.rainbow');
rainbow.addEventListener('click',function(e){
    if(ran==false)
        ran = true;
    else
        ran = false;
})


function changeBack(t){
    if(ran==false)
        t.style.backgroundColor=b;
    else{
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        t.style.backgroundColor='#'+randomColor;
    }
}

const clear=document.querySelector('.clear');
clear.addEventListener('click',function(e){
    document.querySelectorAll('.sub').forEach(element => {
        element.style.backgroundColor='white';
    })    
})

const resize=document.querySelector('.resize');
resize.addEventListener('click',function(e){
    window.location.reload();
})
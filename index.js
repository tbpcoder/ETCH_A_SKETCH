let siz=prompt("Enter 2 t0 64:","16");

buildGrid(siz);

function buildGrid(siz){
    for(let i=0;i<siz;i++){
        for(let j=0;j<siz;j++){
            const ele=document.createElement("div");
            ele.setAttribute('class','sub');
            ele.style.width='20px';
            ele.style.height='20px';
            document.mpart.appendChild(ele);
        }
    }
}
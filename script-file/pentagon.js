function pentagonArea(){
    const pentagonBase=document.getElementById('pentagon-base');
    const pentagonBaseText=pentagonBase.value;
    const base=parseFloat(pentagonBaseText);
    console.log(base);
    const pentagonHeight=document.getElementById('pentagon-height');
    const pentagonHeightText=pentagonHeight.value;
    const height=parseFloat(pentagonHeightText);
    console.log(height);
    const pentagonArea=.5*base*height;
    console.log(pentagonArea);
    const areaCalculate= document.getElementById('shape-area');
    const p=document.createElement('p')
   p.innerText='  Pentagon Area :' + pentagonArea;
   areaCalculate.appendChild(p);
   pentagonBase.value='';
   pentagonHeight.value='';
}
function rhombusArea(){
    const rhombusBase=document.getElementById('rhombus-base');
    const rhombusBaseText=rhombusBase.value;
    const base=parseFloat(rhombusBaseText);
    console.log(base);
    const rhombusHeight=document.getElementById('rhombus-height');
    const rhombusHeightText=rhombusHeight.value;
    const height=parseFloat(rhombusHeightText);
    console.log(height);
    const rhombusArea=.5*base*height;
    console.log(rhombusArea);
    const areaCalculate= document.getElementById('shape-area');
    const p=document.createElement('p')
   p.innerText='  Rhombus Area :' + rhombusArea;
   areaCalculate.appendChild(p);
   rhombusBase.value='';
   rhombusHeight.value='';
}
function ellipseArea(){
    const ellipseBase=document.getElementById('ellipse-base');
    const ellipseBaseText=ellipseBase.value;
    const base=parseFloat(ellipseBaseText);
    console.log(base);
    const ellipseHeight=document.getElementById('ellipse-height');
    const ellipseHeightText=ellipseHeight.value;
    const height=parseFloat(ellipseHeightText);
    console.log(height);
    const ellipseArea=3.1416*base*height;
    console.log(ellipseArea);
    const areaCalculate= document.getElementById('shape-area');
    const p=document.createElement('p')
   p.innerText='  Ellipse Area :' + ellipseArea;
   areaCalculate.appendChild(p);
   ellipseBase.value='';
   ellipseHeight.value='';
}
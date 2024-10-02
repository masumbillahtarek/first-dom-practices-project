function rectangleArea(){
    const rectangleBase=document.getElementById('rectangle-base');
    const rectangleBaseText=rectangleBase.value;
    const base=parseFloat(rectangleBaseText);
    console.log(base);
    const rectangleHeight=document.getElementById('rectangle-height');
    const rectangleHeightText=rectangleHeight.value;
    const height=parseFloat(rectangleHeightText);
    console.log(height);
    const rectangleArea=base*height;
    console.log(rectangleArea);
    const areaCalculate= document.getElementById('shape-area');
    const p=document.createElement('p')
   p.innerText='  Rectangle Area :' + rectangleArea;
   areaCalculate.appendChild(p);
   rectangleBase.value='';
   rectangleHeight.value='';
}
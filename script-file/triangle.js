function triangleArea(){
    const triangleBase=document.getElementById('triangle-base');
    const triangleBaseText=triangleBase.value;
    const base=parseFloat(triangleBaseText);
    console.log(base);
    const triangleHeight=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeight.value;
    const height=parseFloat(triangleHeightText);
    console.log(height);
    const triangleArea=.5*base*height;
    console.log(triangleArea);
    const areaCalculate= document.getElementById('shape-area');
    const p=document.createElement('p')
   p.innerText='  Triangle Area :' + triangleArea;
   areaCalculate.appendChild(p);
   triangleBase.value='';
   triangleHeight.value='';
}
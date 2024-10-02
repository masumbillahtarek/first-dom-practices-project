function parallelogramArea(){
    const parallelogramBase=document.getElementById('parallelogram-base');
    const parallelogramBaseText=parallelogramBase.value;
    const base=parseFloat(parallelogramBaseText);
    console.log(base);
    const parallelogramHeight=document.getElementById('parallelogram-height');
    const parallelogramHeightText=parallelogramHeight.value;
    const height=parseFloat(parallelogramHeightText);
    console.log(height);
    const parallelogramArea=base*height;
    console.log(parallelogramArea);
    const areaCalculate= document.getElementById('shape-area');
    const p=document.createElement('p')
   p.innerText='  Parallelogram Area :' + parallelogramArea;
   areaCalculate.appendChild(p);
   parallelogramBase.value='';
   parallelogramHeight.value='';
}
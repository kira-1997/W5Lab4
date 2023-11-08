/* Calculator */

const conatinDiv= document.querySelector('.containerCal')
const buttons=conatinDiv.querySelector('.cal')
const input=document.querySelector('.input')
const preKeyVal=conatinDiv.dataset.preKeyVal

buttons.addEventListener('click', element =>{
    const btn=element.target
    const typeData=btn.dataset.action
    const btnValue=btn.textContent
    const currentDisplay=input.textContent

    if(!typeData){
        if(currentDisplay==='0' || preKeyVal==='operator'){
            input.textContent=btnValue
        }else{
            input.textContent=currentDisplay+btnValue
        }
    }
    if ( typeData === 'divide' || typeData === 'substract' ||typeData === 'multiply' ||typeData === 'add'){
        btn.classList.add('is-depressed')
        conatinDiv.dataset.preKeyVal='operator'
        conatinDiv.dataset.firstNum=currentDisplay
        conatinDiv.dataset.operator=typeData
        input.textContent=" "
    }
    if(typeData==='decimal'){
           input.textContent=currentDisplay+'.'
    }
    if(typeData==='clear'){
        input.textContent=" "
    }
    if(typeData==='equal'){
        const firstNum=conatinDiv.dataset.firstNum
        const operator=conatinDiv.dataset.operator
        const SecVal=currentDisplay

        if (operator === 'add') {
            input.textContent=addNum(parseFloat(firstNum), parseFloat(SecVal))
          } else if (operator === 'substract') {
            input.textContent=minusNum( parseFloat(firstNum), parseFloat(SecVal))
          } else if (operator === 'multiply') {
            input.textContent=multiNum(parseFloat(firstNum), parseFloat(SecVal))
          } else if (operator === 'divide') {
            input.textContent=divNum(parseFloat(firstNum), parseFloat(SecVal))
          }
    }
    if(element.target.matches('button')){
        Array.from(btn.parentNode.children).forEach(b => b.classList.remove('is-depressed'))
    }
})




function multiNum(a,b){

    return a*b;

}
function addNum(a,b){

    return a+b;
    
}
function minusNum(a,b){
     
    return a-b;
    
}
function divNum(a,b){
    return a/b;
    
}

function updateProduct(product, price, isIncresing){

    const productInput=document.getElementById(product +'-number');
   
    let productNumber = productInput.value;
    
    if(isIncresing==true){
         productNumber= parseInt(productNumber) +1;  
    }
    else if(productNumber>0){
        productNumber= parseInt(productNumber) -1;
    }
    productInput.value=productNumber;

    const productTotal= document.getElementById(product + '-total');
    productTotal.innerText= productNumber* price; 
    calculateTotal();   
}

// document.body.style.background='tmatoo';
// document.getElementById('title-head').color='yellow';
// last part

function getInputValue(product){
    const productInput=document.getElementById(product + '-number');
    const productNumber= parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal= getInputValue('phone') * 1259;
    const caseTotal= getInputValue ('case')* 59;
    const subTotal= phoneTotal+ caseTotal; 
    const tax= subTotal/10;
    const totalPrice= subTotal + tax;
   document.getElementById('sub-total').innerText=subTotal;
   document.getElementById('tax-amount').innerText=tax;
   document.getElementById('total-price').innerText=totalPrice;
}

// handle phone function

document.getElementById("phone-plus").addEventListener('click',function(){
    updateProduct("phone",1219,true); 

})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProduct('phone',1219,false);     

})
// handle case function
document.getElementById('case-plus').addEventListener('click',function(){
    updateProduct('case', 59, true);   
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateProduct('case', 59, false);

})
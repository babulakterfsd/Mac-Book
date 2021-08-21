//all target html elements
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('extra-memory-cost');
const storageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const allCost = document.getElementById('total-price');
const discountedTotal = document.getElementById('total-with-discount');


// function for Total Price 
function updateTotalPrice(){
    const totalCost = parseInt(bestPrice.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCharge.innerText);
    allCost.innerText = totalCost;
    return totalCost;
}


// event linstener for Memory
document.getElementById('free-memory').addEventListener('click',function(){
    memoryCost.innerText = '0';
    updateTotalPrice();
    grandTotalWithDiscount();
})

document.getElementById('cost-memory').addEventListener('click',function(){
    memoryCost.innerText = '180';
    updateTotalPrice();
    grandTotalWithDiscount();
})


// event linstener for Storage
document.getElementById('ssd-256gb').addEventListener('click',function(){
    storageCost.innerText = '0'
    updateTotalPrice();
    grandTotalWithDiscount();
})

document.getElementById('ssd-512gb').addEventListener('click',function(){
    storageCost.innerText = '100'
    updateTotalPrice();
    grandTotalWithDiscount();
})

document.getElementById('ssd-1tb').addEventListener('click',function(){
    storageCost.innerText = '180'
    updateTotalPrice();
    grandTotalWithDiscount();
})


// event linstener for delivery option
document.getElementById('free-delivery').addEventListener('click',function(){
    deliveryCharge.innerText = '0';
    updateTotalPrice();
    grandTotalWithDiscount();
})

document.getElementById('cost-delivery').addEventListener('click',function(){
    deliveryCharge.innerText = '20';
    updateTotalPrice();
    grandTotalWithDiscount();
})


// Function for updating Grand Total price without discount
function grandTotalWithDiscount() {
   discountedTotal.innerText = updateTotalPrice()
}


//Grand total with discount
function promoCode(){
    const promoCode = document.getElementById('promocode');
    const promoValue = promoCode.value;
    if(promoValue == 'stevekaku'){
        const discountRate = (updateTotalPrice() / 100) * 20;
        discountedTotal.innerText = updateTotalPrice() - discountRate;
        promoCode.value = '';
    }else{
        alert('Please Enter Correct Promo Code')
    }
}
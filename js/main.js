const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('extra-memory-cost');
const storageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const allCost = document.getElementById('total-price');
const discountButton = document.getElementById('discountButton');
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
    totalWithDiscount();
})

document.getElementById('cost-memory').addEventListener('click',function(){
    memoryCost.innerText = '180';
    updateTotalPrice();
    totalWithDiscount();
})


// event linstener for Storage
document.getElementById('ssd-256gb').addEventListener('click',function(){
    storageCost.innerText = '0'
    updateTotalPrice();
    totalWithDiscount();
})

document.getElementById('ssd-512gb').addEventListener('click',function(){
    storageCost.innerText = '100'
    updateTotalPrice();
    totalWithDiscount();
})

document.getElementById('ssd-1tb').addEventListener('click',function(){
    storageCost.innerText = '180'
    updateTotalPrice();
    totalWithDiscount();
})


// event linstener for delivery option
document.getElementById('free-delivery').addEventListener('click',function(){
    deliveryCharge.innerText = '0';
    updateTotalPrice();
    totalWithDiscount();
})

document.getElementById('cost-delivery').addEventListener('click',function(){
    deliveryCharge.innerText = '20';
    updateTotalPrice();
    totalWithDiscount();
})


//total price without discount
function totalWithDiscount() {
   discountedTotal.innerText = updateTotalPrice()
}


// total with discount
const userInput = document.getElementById('discount');
const targetButton = document.getElementById('discountButton');

userInput.addEventListener('keyup', (event) => {
    console.log(event.target.value);
    if(event.target.value == 'stevekaku') {
        targetButton.removeAttribute('disabled');
        targetButton.addEventListener('click', function() {
            const discountRate = (updateTotalPrice() / 100) * 20;
            discountedTotal.innerText = updateTotalPrice() - discountRate;
        })
    } else {
        targetButton.setAttribute('disabled', true);
        discountedTotal.innerText = updateTotalPrice()
    }
})
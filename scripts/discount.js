

function snowWhiteCart() {
    // console.log('button clicked');
    const snowWhitePriceValue = document.getElementById('snow-white-price');
    const snowWhitePriceString = snowWhitePriceValue.innerText;
    const snowWhitePrice = parseFloat(snowWhitePriceString);

    const totalPriceValue = document.getElementById('code-hero-total');
    const previousTotalPriceValueString = totalPriceValue.innerText;
    const previousTotalPriceValue = parseFloat(previousTotalPriceValueString);
    const currentTotalPriceValue = snowWhitePrice + previousTotalPriceValue;
    totalPriceValue.innerText = currentTotalPriceValue;

    const grandTotalPriceValueElement = document.getElementById('code-hero-grand');
    const previousGrandTotalPriceValueString = grandTotalPriceValueElement.innerText;
    const previousGrandTotalPriceValue = parseFloat(previousGrandTotalPriceValueString);
    const currentGrandTotalPriceValue = snowWhitePrice + previousGrandTotalPriceValue;
    grandTotalPriceValueElement.innerText = currentGrandTotalPriceValue;

    



    const codeHeroContainer = document.getElementById('code-hero-container');
    const p = document.createElement('p');
    // p.innerText = snowWhitePrice;
    // codeHeroContainer.appendChild(p);
    p.innerHTML = `<p>Snow white price: ${snowWhitePrice}$</p>`
    codeHeroContainer.appendChild(p);
}

function blackWhiteCart() {
    // console.log('button clicked');
    const blackWhitePriceValue = document.getElementById('black-white-price');
    const blackWhitePriceString = blackWhitePriceValue.innerText;
    const blackWhitePrice = parseFloat(blackWhitePriceString);

    const totalPriceValue = document.getElementById('code-hero-total');
    const previousTotalPriceValueString = totalPriceValue.innerText;
    const previousTotalPriceValue = parseFloat(previousTotalPriceValueString);
    const currentTotalPriceValue = blackWhitePrice + previousTotalPriceValue;
    totalPriceValue.innerText = currentTotalPriceValue;

    const grandTotalPriceValueElement = document.getElementById('code-hero-grand');
    const previousGrandTotalPriceValueString = grandTotalPriceValueElement.innerText;
    const previousGrandTotalPriceValue = parseFloat(previousGrandTotalPriceValueString);
    const currentGrandTotalPriceValue = blackWhitePrice + previousGrandTotalPriceValue;
    grandTotalPriceValueElement.innerText = currentGrandTotalPriceValue;

    const codeHeroContainer = document.getElementById('code-hero-container');
    const p = document.createElement('p');
    // p.innerText = snowWhitePrice;
    // codeHeroContainer.appendChild(p);
    p.innerHTML = `<p>Black white price: ${blackWhitePrice}$</p>`
    codeHeroContainer.appendChild(p);
}

function blueRoseCart() {
    // console.log('button clicked');
    const blueRosePriceValue = document.getElementById('blue-rose-price');
    const blueRosePriceString = blueRosePriceValue.innerText;
    const blueRosePrice = parseFloat(blueRosePriceString);

    const totalPriceValue = document.getElementById('code-hero-total');
    const previousTotalPriceValueString = totalPriceValue.innerText;
    const previousTotalPriceValue = parseFloat(previousTotalPriceValueString);
    const currentTotalPriceValue = blueRosePrice + previousTotalPriceValue;
    totalPriceValue.innerText = currentTotalPriceValue;

    const grandTotalPriceValueElement = document.getElementById('code-hero-grand');
    const previousGrandTotalPriceValueString = grandTotalPriceValueElement.innerText;
    const previousGrandTotalPriceValue = parseFloat(previousGrandTotalPriceValueString);
    const currentGrandTotalPriceValue = blueRosePrice + previousGrandTotalPriceValue;
    grandTotalPriceValueElement.innerText = currentGrandTotalPriceValue;

    const codeHeroContainer = document.getElementById('code-hero-container');
    const p = document.createElement('p');
    // p.innerText = snowWhitePrice;
    // codeHeroContainer.appendChild(p);
    p.innerHTML = `<p>Blue rose price: ${blueRosePrice}$</p>`
    codeHeroContainer.appendChild(p);
}

// document.getElementById('code-hero-discount').addEventListener('click', function(){
    // const inputFieldValue = document.getElementById('code-hero-input');
    // const inputFieldValueDiscount = inputFieldValue.value;
    // const grandPriceValue = document.getElementById('code-hero-grand');
    // const grandPriceTotal = grandPriceValue.innerText;
    // grandPriceTotal.innerText = snowWhiteCart() + blackWhiteCart() + blueRoseCart();
    // console.log(grandPriceTotal);


    // let totalPriceValue = document.getElementById('code-hero-total');
    // let grandTotalPriceValue = document.getElementById('code-hero-grand');
    // let grandTotalPriceValue = totalPriceValue.innerText;

    // if(inputFieldValueDiscount === "DISC30"){
        //  currentGrandTotalPriceValue = currentGrandTotalPriceValue * 0.3;
    // }
    // else{
        //  currentGrandTotalPriceValue;
    // }
//
// })

function oddDisc(){
    console.log('discount!!!');
}
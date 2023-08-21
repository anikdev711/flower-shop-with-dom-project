let total = 0;
function handleCLikBtn(target) {
    // console.log(target.parentNode.parentNode.childNodes);
    const selectedItemsContainer = document.getElementById('selected-items');
    const itemName = target.parentNode.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    // console.log(selectedItemsContainer.children);
    // console.log(selectedItemsContainer.children.length);
    selectedItemsContainer.appendChild(li);

    const price = target.parentNode.parentNode.childNodes[5].innerText.split(" ")[1];
    // console.log(price);
    total = parseInt(total) + parseInt(price);
    // console.log(total);
    document.getElementById('code-hero-total').innerText = total;


    // const inputFieldValue = document.getElementById('code-hero-input');
    // const inputFieldString = inputFieldValue.value;
    // console.log('disc30');

    const grandTotalValue = document.getElementById('code-hero-grand');
    const grandTotalString = grandTotalValue.innerText;
    let grandTotal = parseInt(grandTotalString);

    // discount 
    document.getElementById('code-hero-discount').addEventListener('click', function () {
        const inputFieldValue = document.getElementById('code-hero-input');
        const inputFieldString = inputFieldValue.value;
        const discountCoupon = 'DISC30';
        if (inputFieldString === discountCoupon) {
            grandTotal = total - (total * 0.3);
            grandTotalValue.innerText = grandTotal;
        }
        else {
            grandTotalValue.innerText = total;
        }
    })

}
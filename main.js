let bidArray = [];

function addOneBid(event) {
    if(event.type === "keydown" && event.keyCode !== 13) return;
    let bidderName = "Bidder One";
    let bidderBid = document.getElementById("bidderOne").value;
    bidArray.push({
        bidderName: bidderName,
        bid: bidderBid,
    });
    document.getElementById("bidderOne").value = "";
    console.log(bidArray);
    localStorageSave();
    render();
}

function addTwoBid(event) {
    if(event.type === "keydown" && event.keyCode !== 13) return;
    let bidderName = "Bidder Two";
    let bidderBid = document.getElementById("bidderTwo").value;
    bidArray.push({
        bidderName: bidderName,
        bid: bidderBid,
    });
    document.getElementById("bidderTwo").value = "";
    localStorageSave();
    render();
}

function localStorageSave() {
    localStorage.setItem("bidsArray", JSON.stringify(bidArray));
}

function localStorageBringBack() {
    let bidData = JSON.parse(localStorage.getItem("bidsArray"));
    if (bidData !== null) {
        bidArray = bidData;
    }
    render();
}

function render() {
    let bidHTML = "";
    bidArray.forEach(bid => {
        bidHTML += `
            <div class="eachBid">
                <div class="bidderName">${bid.bidderName}</div>
                <div class="bidderBid">$${bid.bid}</div>
            </div>
        `
    });
    document.getElementById("allBids").innerHTML = bidHTML;
};

localStorageBringBack();
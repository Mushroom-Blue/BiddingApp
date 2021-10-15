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
    localStorageSave();
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
}

function localStorageSave() {
    localStorage.setItem("bidsArray", JSON.stringify(bidArray));
}

function localStorageBringBack() {
    JSON.parse(localStorage.getItem("bidsArray"));
}

localStorageBringBack();
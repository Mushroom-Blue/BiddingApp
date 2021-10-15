let bidArray = [];

function addOneBid() {
    let bidderName = "Bidder One";
    let bidderBid = document.getElementById("bidderOne").value;
    bidArray.push({
        bidderName: bidderName,
        bid: bidderBid,
    });
    document.getElementById("bidderOne").value = "";
}

function addTwoBid() {
    let bidderName = "Bidder Two";
    let bidderBid = document.getElementById("bidderTwo").value;
    bidArray.push({
        bidderName: bidderName,
        bid: bidderBid,
    });
    document.getElementById("bidderTwo").value = "";
}
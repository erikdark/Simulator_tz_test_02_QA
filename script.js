let initialBids = [
    { participant: 1, amount: 100 },
    { participant: 2, amount: 1000 },
    { participant: 3, amount: 5000 }
];

let negotiationBids = [];

function startNegotiation() {
    document.getElementById('negotiation-stage').style.display = 'block';
    document.getElementById('start-negotiation').style.display = 'none';
}

function submitNegotiationBids() {
    negotiationBids = [
        { participant: 1, amount: parseFloat(document.getElementById('participant1-bid').value) },
        { participant: 2, amount: parseFloat(document.getElementById('participant2-bid').value) },
        { participant: 3, amount: parseFloat(document.getElementById('participant3-bid').value) }
    ];

    displayFinalResults();
}

function displayFinalResults() {
    let allBids = initialBids.concat(negotiationBids);
    let minInitialBid = Math.min(...initialBids.map(bid => bid.amount));
    let minNegotiationBid = Math.min(...negotiationBids.map(bid => bid.amount));
    let minBid = Math.min(minInitialBid, minNegotiationBid);

    let winner = negotiationBids.reduce((prev, current) => (prev.amount < current.amount) ? prev : current);

    document.getElementById('final-stage').style.display = 'block';
    document.getElementById('negotiation-stage').style.display = 'none';

    document.getElementById('winner-info').textContent = `Победитель: Участник ${winner.participant} с заявкой ${winner.amount} денежных единиц`;

    if (minBid < winner.amount) {
        document.getElementById('not-lowest-price-info').textContent = 'Победитель с не наименьшей ценой: Да';
    } else {
        document.getElementById('not-lowest-price-info').textContent = 'Победитель с не наименьшей ценой: Нет';
    }
}

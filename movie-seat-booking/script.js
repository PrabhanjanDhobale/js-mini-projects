const container = document.querySelector('.container');
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticket_price = +movieSelect.value;

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    console.log(selectedSeats);
    
    const seatsIndex = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat);
    });

    console.log(seatsIndex);

    const selectedSeatCount = selectedSeats.length;
    
    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount * ticket_price;
}

movieSelect.addEventListener('change', (e) => {
    ticket_price = +e.target.value;
    updateSelectedCount();

})

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        console.log(e.target);
    }{
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});


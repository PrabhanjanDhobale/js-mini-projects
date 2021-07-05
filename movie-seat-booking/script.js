const container = document.querySelector('.container');
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticket_price = +movieSelect.value;
let bookedSeats = [];

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    console.log(selectedSeats);
    
    selectedSeats.forEach(el => {
        if (bookedSeats.length > 0) {
            bookedSeats.forEach(id => {
                if (bookedSeats.indexOf(el.id) === -1) {
                    bookedSeats.push(el.id);
                }
            });
        } else {
            bookedSeats.push(el.id);
       }
    });

    console.log(bookedSeats);

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
        // console.log(e.target);
    }{
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});


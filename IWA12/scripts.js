const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line

let status_ = document.querySelectorAll(".status");
let reserve = document.querySelectorAll(".reserve");
let checkOut = document.querySelectorAll(".checkout");
let checkIn = document.querySelectorAll(".checkin");

const reserveHandler1 = () => {
  status_[0].innerText = "reserved";
};

const checkOutHandler1 = () => {
  status_[0].innerText = "checked out";
};

const checkInHandler1 = () => {
  status_[0].innerText = "shelf";
};
// set color of all checkIn button text to black
for (let i = 0; i < checkIn.length; i++) {
  checkIn[i].style.color = "black";
}

// set color of status to corresponding color in STATUS_MAP

if (status_[0].innerText === "overdue") {
  status_[0].style.color = STATUS_MAP.overdue.color;
  reserve[0].disabled = true;
  checkOut[0].disabled = true;
  checkIn[0].disabled = false;
}

if (status_[0].innerText === "shelf") {
  status_[0].style.color = STATUS_MAP.shelf.color;
  reserve[0].disabled = false;
  checkOut[0].disabled = false;
  checkIn[0].disabled = true;
}
if (status_[0].innerText === "reserved") {
  status_[0].style.color = STATUS_MAP.reserved.color;
  reserve[0].disabled = true;
  checkOut[0].disabled = false;
  checkIn[0].disabled = true;
}
if (status_[0].innerText === "checked out") {
  status_[0].style.color = STATUS_MAP.checkedOut.color;
  reserve[0].disabled = true;
  checkOut[0].disabled = true;
  checkIn[0].disabled = false;
}

if (status_[1].innerText === "overdue") {
  status_[1].style.color = STATUS_MAP.overdue.color;
  reserve[1].disabled = true;
  checkOut[1].disabled = true;
  checkIn[1].disabled = false;
} else if (status_[1].innerText === "shelf") {
  status_[1].style.color = STATUS_MAP.shelf.color;
  reserve[1].disabled = false;
  checkOut[1].disabled = false;
  checkIn[1].disabled = true;
} else if (status_[1].innerText === "reserved") {
  status_[1].style.color = STATUS_MAP.reserved.color;
  reserve[1].disabled = true;
  checkOut[1].disabled = false;
  checkIn[1].disabled = true;
} else if (status_[1].innerText === "checked out") {
  status_[1].style.color = STATUS_MAP.checkedOut.color;
  reserve[1].disabled = true;
  checkOut[1].disabled = true;
  checkIn[1].disabled = false;
}

if (status_[2].innerText === "overdue") {
  status_[2].style.color = STATUS_MAP.overdue.color;
} else if (status_[2].innerText === "shelf") {
  status_[2].style.color = STATUS_MAP.shelf.color;
} else if (status_[2].innerText === "reserved") {
  status_[2].style.color = STATUS_MAP.reserved.color;
} else if (status_[2].innerText === "checked out") {
  status_[2].style.color = STATUS_MAP.checkedOut.color;
}

// enable/disable buttons

reserve[0].addEventListener("click", reserveHandler1);
checkOut[0].addEventListener("click", checkOutHandler1);
checkIn[0].addEventListener("click", checkInHandler1);
// reserve[0] = STATUS_MAP.shelf.canReserve ? "enabled" : "disabled";
// checkout[0] = STATUS_MAP.shelf.canCheckout ? "enabled" : "disabled";
// checkin[0] = STATUS_MAP.shelf.canCheckIn ? "enabled" : "disabled";

// // reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// // checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// // checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

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

checkIn[0].style.color = "black";
status_[0].style.color = STATUS_MAP.overdue.color;
reserve[0].disabled = STATUS_MAP.overdue.canReserve ? false : true;
checkOut[0].disabled = STATUS_MAP.overdue.canCheckout ? false : true;
checkIn[0].disabled = STATUS_MAP.overdue.canCheckIn ? false : true;

checkIn[1].style.color = "black";
status_[1].style.color = STATUS_MAP.reserved.color;
reserve[1].disabled = STATUS_MAP.reserved.canReserve ? false : true;
checkOut[1].disabled = STATUS_MAP.reserved.canCheckout ? false : true;
checkIn[1].disabled = STATUS_MAP.reserved.canCheckIn ? false : true;

checkIn[2].style.color = "black";
status_[2].style.color = STATUS_MAP.shelf.color;
reserve[2].disabled = STATUS_MAP.shelf.canReserve ? false : true;
checkOut[2].disabled = STATUS_MAP.shelf.canCheckout ? false : true;
checkIn[2].disabled = STATUS_MAP.shelf.canCheckIn ? false : true;

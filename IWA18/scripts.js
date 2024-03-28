import {
  updateDragging,
  createOrderData,
  state,
  COLUMNS,
  TABLES,
} from "./data.js";
import {
  createOrderHtml,
  html,
  moveToColumn,
  updateDraggingHtml,
} from "./view.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

const handleDragStart = (event) => {};
const handleDragEnd = (event) => {};

// Handler to open help overlay when the ? is clicked
const handleHelpToggle = (event) => {
  const { target } = event;
  const isCancel = target === html.help.cancel;

  if (isCancel) {
    html.help.overlay.open = false;
  } else {
    html.help.overlay.open = true;
  }

  html.other.add.focus();
};

/**
 * A handler to define the functionality of the 'add order' button.
 * The button should open the add order overlay
 * @param {event} event
 */
const handleAddToggle = (event) => {
  const { target } = event;
  const isAddButton = target === html.other.add;

  if (isAddButton) {
    html.add.overlay.open = true;
  } else {
    html.add.overlay.open = false;
    html.add.form.reset();
  }
};

/**
 * Handler for the functionality of the 'add' button on the add order overlay.
 * Once the button is clicked the information for the order should be shown
 * in the ordered column
 */
const handleAddSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(html.add.form);
  const orderData = Object.fromEntries(formData.entries());
  const newOrder = createOrderData(orderData); // Create order object using form data
  const orderElement = createOrderHtml(newOrder); // Create HTML element for the new order
  html.columns.ordered.appendChild(orderElement); // Add the new order to the "Ordered" column
  html.add.overlay.removeAttribute("open"); // Close the add overlay
  html.add.title.value = ""; // Clear input fields
  html.add.table.value = ""; // Clear input fields
};

/**
 * Once the order is submitted and then clicked, the edit order overlay
 * should pop up and populate with the order data.
 */
const handleEditToggle = (event) => {
  const { target } = event;
  const isCancel = target === html.edit.cancel;
  if (isCancel) {
    html.edit.overlay.removeAttribute("open");
  } else {
    html.edit.overlay.open = true;
  }
};

const handleEditSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(html.edit.form);
  //   const orderData = Object.fromEntries(formData.entries());
  //   const { id } = html.edit.form.dataset;
  //   const column = html.columns[orderData.column];
  //   const orderElement = column.querySelector(`[data-id="${id}"]`);
  //   if (orderElement) {
  //     orderElement.querySelector("[data-order-title]").textContent =
  //       orderData.title;
  //     orderElement.querySelector("[data-order-table]").textContent =
  //       orderData.table;
  //   }
  //   html.edit.overlay.removeAttribute("open");
};

const handleDelete = (event) => {};

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}

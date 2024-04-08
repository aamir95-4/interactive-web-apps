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

const { add, other, edit, help, columns } = html;

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

const handleDragStart = (event) => {
  state.dragging.source = event.target;
};

const handleDragEnd = (event) => {
  const { id } = state.dragging.source.dataset;
  const { over } = state.dragging;
  const order = state.orders[id];

  // update state of order
  order.column = over;

  // move order to the relevant column
  moveToColumn(id, over);

  updateDragging({ over: null });
  updateDraggingHtml({ over: null });
};

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
  const { form, overlay, title, table } = add;

  const orderData = createOrderData({
    title: title.value,
    table: table.value,
    column: COLUMNS[0],
  });
  // add the order to state
  state.orders[orderData.id] = orderData;

  // Generate order HTML
  const orderHtml = createOrderHtml(orderData);
  columns[COLUMNS[0]].appendChild(orderHtml);

  // Reset form and close overlay
  form.reset();
  overlay.open = false;
  other.add.focus();
};

/**
 * Once the order is submitted and then clicked, the edit order overlay
 * should pop up and populate with the order data.
 */
const handleEditToggle = (event) => {
  const { target } = event;
  const { overlay, title, table, column } = edit;
  const isOrder = target.className === "order";

  if (isOrder) {
    const { id } = target.dataset;
    const orderFromState = state.orders[id];

    overlay.open = true;
    title.value = orderFromState.title;
    table.value = orderFromState.table;
    column.value = orderFromState.column;
    edit.id.value = orderFromState.id;
  } else {
    overlay.open = false;
    other.add.focus();
  }
};
const handleEditSubmit = (event) => {
  event.preventDefault();

  // Retrieve form elements
  const { form, overlay, title, table, column, id } = edit;

  // Get the order ID from the form
  const orderId = id.value;

  // Retrieve the order from the state using its ID
  const orderToUpdate = state.orders[orderId];

  // Update order data with the new values from the form
  orderToUpdate.title = title.value;
  orderToUpdate.table = table.value;
  orderToUpdate.column = column.value;

  // Generate updated order HTML
  const updatedOrderHtml = createOrderHtml(orderToUpdate);

  // Find the existing order HTML in the DOM using its ID
  const existingOrderHtml = document.querySelector(`[data-id="${orderId}"]`);

  // Replace existing order HTML with the updated one
  existingOrderHtml.replaceWith(updatedOrderHtml);

  // Close the edit overlay
  overlay.open = false;

  // Optionally, you might want to reset the form
  form.reset();
};

const handleDelete = (event) => {
  const { target } = event;
  const isDeleteButton = target === html.edit.delete;

  if (isDeleteButton) {
    // Retrieve the order ID from the edit form
    const orderId = edit.id.value;

    // Remove the order from the state
    delete state.orders[orderId];

    // Remove the order from the DOM
    const orderToDelete = document.querySelector(`[data-id="${orderId}"]`);
    orderToDelete.remove();

    // Close the edit overlay
    edit.overlay.open = false;
  }
};

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

other.grid.addEventListener("click", handleEditToggle);
edit.cancel.addEventListener("click", handleEditToggle);
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

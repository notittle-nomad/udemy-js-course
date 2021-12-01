const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  // now we need to clear the box.empty
  setTimeout(() => this.className = 'invisible', 0);
}
function dragEnd() {
  this.className = 'fill';
}
// by default - Reset the current drag operation to "none". we need to prevent it
function dragOver(e) {
  e.preventDefault();
}
// by default - Reject immediate user selection as potential target element.
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
function dragLeave() {
  this.className = 'empty';
}
function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
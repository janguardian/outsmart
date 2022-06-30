let textarea = document.querySelector('.get-in-touch__form-item_type_textarea')

textarea.oninput = function() {
  this.style.height = '68px'
  this.style.height = (this.scrollHeight) + 'px'
}
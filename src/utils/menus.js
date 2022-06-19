const showSearch = () => {
  const box = document.getElementById('search-box')
  box.classList.remove('scale-0')
  box.classList.add('scale-100')
  box.focus()
  window.onclick = (event) => {
    if (event.target !== box && event.target !== document.getElementById('search-button')) {
      box.classList.remove('scale-100')
      box.classList.add('scale-0')
  }
};
}

const submitSearch = (e) => {
  e.preventDefault()

}

export { showSearch, submitSearch }
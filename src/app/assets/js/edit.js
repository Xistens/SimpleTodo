document.addEventListener('click', (evnt) => {
  if (evnt.target && evnt.target.matches('button.delete')) {
    console.log(evnt.target.id);
  }
});
const OverflowToggles = document.querySelectorAll('.column-card a');

const enableOverflow = () => {
  document.body.classList.add('overflow');
}

const disableOverflow = () => {
  document.body.classList.remove('overflow');
}

OverflowToggles.forEach((OverflowToggle) => {
  OverflowToggle.addEventListener('click', () => {
    if (!document.body.classList.contains('overflow')) {
      enableOverflow();
    } else {  
      disableOverflow(); 
    }
  });
});

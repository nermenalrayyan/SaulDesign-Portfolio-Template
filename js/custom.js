// Start Menu bar 
const toggleButton = document.querySelector('#toggleMenu');
const navigation = document.querySelector('#navBar');

toggleButton.addEventListener('click', () => {
  navigation.style.display = navigation.style.display === 'block' ? 'none' : 'block';
});
// End Menu bar 
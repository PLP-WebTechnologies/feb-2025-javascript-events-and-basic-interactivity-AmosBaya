const changeTextButton = document.getElementById('changeTextButton');
changeTextButton.addEventListener('click', () => {
  changeTextButton.textContent = changeTextButton.textContent === 'Are you' ? 'Alive?' : 'Are you';
});

const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('mouseover', () => {
  hoverButton.style.backgroundColor = 'lightblue';
});
hoverButton.addEventListener('mouseout', () => {
  hoverButton.style.backgroundColor = '';
});

let currentImageIndex = 0;
const images = ['https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHwy'
    , 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHwy', 
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHwy'];
const galleryImage = document.getElementById('galleryImage');

document.getElementById('next').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  galleryImage.src = images[currentImageIndex];
});

document.getElementById('prev').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  galleryImage.src = images[currentImageIndex];
});

document.getElementById('tab1').addEventListener('click', () => {
  document.getElementById('content1').style.display = 'block';
  document.getElementById('content2').style.display = 'none';
});

document.getElementById('tab2').addEventListener('click', () => {
  document.getElementById('content1').style.display = 'none';
  document.getElementById('content2').style.display = 'block';
});


const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  const requiredField = document.getElementById('requiredField');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  if (!requiredField.value) {
    event.preventDefault();  
    alert('This field is required!');
  }

  if (!emailPattern.test(emailInput.value)) {
    event.preventDefault();
    alert('Please enter a valid email!');
  }

  if (passwordInput.value.length < 8) {
    event.preventDefault();
    alert('Password must be at least 8 characters long!');
  }
});


const passwordFeedback = document.createElement('p');
passwordFeedback.id = 'passwordFeedback';
document.body.appendChild(passwordFeedback);

passwordInput.addEventListener('input', () => {
  passwordFeedback.textContent = passwordInput.value.length >= 8 ? 'Password is strong' : 'Password is too short';
});

$(document).ready(function() {
    $('#slider').slick({
        infinite: true,
        prevArrow: '<div class="slick-btn-own slick-prev">&#8592;</div>',
        nextArrow: '<div class="slick-btn-own slick-next">&#8594;</div>'
    });
});

$(document).ready(function() {
    let modal = $('#user-modal');
    let btn = $('#create-user-btn');
    let span = $('.close');
    
    btn.click(function() {
      modal.css({display: 'block'});
    });
    
    span.click(function() {
      modal.css({display: 'none'});
    });
    
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.css({display: 'none'});
      }
    }
    
    // Валидация формы
    let userForm = document.getElementById('user-form');
    let fullnameInput = document.getElementById('fullname');
    let phoneInput = document.getElementById('phone');
    let emailInput = document.getElementById('user-email');
    let usernameInput = document.getElementById('username');
    let generatedPasswordInput = document.getElementById('generated-password');
    let userGroupInput = document.getElementById('user-group');
    
    userForm.addEventListener('submit', function(event) {
      let isValid = true;
    
      if (fullnameInput.value.trim() === '') {
          showError(fullnameInput, 'Пожалуйста, введите ФИО');
          isValid = false;
      } else {
          hideError(fullnameInput);
      }
    
      if (phoneInput.value.trim() === '') {
          showError(phoneInput, 'Пожалуйста, введите номер телефона');
          isValid = false;
      } else {
          hideError(phoneInput);
      }
    
      if (emailInput.value.trim() === '') {
          showError(emailInput, 'Пожалуйста, введите Email');
          isValid = false;
      } else {
          hideError(emailInput);
      }
    
      if (usernameInput.value.trim() === '') {
          showError(usernameInput, 'Пожалуйста, введите логин');
          isValid = false;
      } else {
          hideError(usernameInput);
      }
    
      if (generatedPasswordInput.value.trim() === '') {
          showError(generatedPasswordInput, 'Пожалуйста, введите пароль');
          isValid = false;
      } else {
          hideError(generatedPasswordInput);
      }
    
      if (userGroupInput.value === '') {
          showError(userGroupInput, 'Пожалуйста, выберите группу пользователя');
          isValid = false;
      } else {
          hideError(userGroupInput);
      }
    
      if (!isValid) {
          event.preventDefault();
      }
    });
    
    function showError(input, message) {
      let errorElement = document.createElement('div');
      errorElement.className = 'error';
      errorElement.innerHTML = message;
      input.parentNode.appendChild(errorElement);
    }
    
    function hideError(input) {
      let errorElement = input.parentNode.querySelector('.error');
      if (errorElement) {
          errorElement.parentNode.removeChild(errorElement);
      }
    }
    

});
$(document).ready(function() {
  $('#registerForm').on('submit', function(e) {
    e.preventDefault();
    
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const email = $('#email').val();
    const password = $('#password').val();
    
    $.ajax({
      url: '/api/auth/register',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        firstName,
        lastName,
        email,
        password
      }),
      success: function(response) {
        $('#message').text(response.msg).css('color', 'green');
      },
      error: function(xhr) {
        $('#message').text(xhr.responseJSON.msg).css('color', 'red');
      }
    });
  });
  
  $('#loginForm').on('submit', function(e) {
    e.preventDefault();
    
    const email = $('#loginEmail').val();
    const password = $('#loginPassword').val();
    
    $.ajax({
      url: '/api/auth/login',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        email,
        password
      }),
      success: function(response) {
        window.location.href = '/greeting'; 
      },
      error: function(xhr) {
        $('#message').text(xhr.responseJSON.msg).css('color', 'red');
      }
    });
  });
});

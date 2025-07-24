document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('메시지가 성공적으로 전송되었습니다!');
    form.reset();
  });
}); 
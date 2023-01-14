<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function(){
  $(document).on('click','a[href^="#"]',function(event){
    event.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
    } else {
      // Handle the case when the section is not present
    }
  });
});
</script>

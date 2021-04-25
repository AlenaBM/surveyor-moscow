document.addEventListener('DOMContentLoaded', function (){
  const form = document.getElementById('feedback-form');
  form.addEventListener('submit', formSend);


    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);


      if (error === 0){
        let response = await fetch('sendmail.php', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          let result = await response.json();
          modalThanks();
          modalThanksClose();
          formPreview.innerHTML = '';
          form.reset();
        }
        else {
          alert("Ошибка");
          form.classList.remove('__sending');
        }
      } else {
        alert('Заполните обязательные поля');
      }
    }
    function modalThanks(){
      var modalDialog = $(".modal-thanks");
      var modalOverlayCl = $(".modal__overlay");
      var modalDialogCl = $(".modal__request");
      var modalOverlayThanks = $(".modal-thanks__overlay");
      modalDialog.addClass("modal-thanks__active");
      modalOverlayThanks.addClass("modal-thanks__overlay--visible");
      modalOverlayCl.removeClass("modal__overlay--visible");
      modalDialogCl.removeClass("modal__request--visible");
    }
    function modalThanksClose(){
      var closeModalOverlay = $(".modal-thanks__overlay--visible");
      closeModalOverlay.on('click', closeModal);
      var closeButton = $(".modal-thanks__close");
      closeButton.on('click', closeModal);
    }
    function closeModal(event) {
        event.preventDefault();
        var modalDialog = $(".modal-thanks");
        var closeOverlay = $(".modal-thanks__overlay");
        var closeButton = $(".modal-thanks__close");
        modalDialog.removeClass("modal-thanks__active");
        closeOverlay.removeClass("modal-thanks__overlay--visible");
    }
    function formValidate(form){
      let error = 0;
      let formReq = document.querySelectorAll('.__req');

      for (let index = 0; index < formReq.length; index++){
        const input = formReq[index];
        formRemoveError(input);

        if(input.classList.contains('_email')){
          if (emailTest(input)){
            formAddError(input);
            error++;
          } else{
            if (input.value === ''){
              formAddError(input);
              error++;
            }
          }
        }
      }
      return error;
    }
    function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    }
    function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
    }
    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+])*(\.\w{2,8})+$/.test(input.value);
    }
});
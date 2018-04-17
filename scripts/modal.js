const modalController = {
  showSuccessModal: () => {
    showModal($(".success"));
  },

  showFailedModal: () => {
    showModal($(".failed"));
  }
};

function showModal(status) {
  status.show();
  const modal = $(".modal");

  modal.slideDown();

  // close it on X
  $(".close").click(function() {
    modal.slideUp();
  });

  //close it when clicking on dark area
  $(window).click(function(e) {
    if ($(e.target).is(modal)) {
      modal.slideUp();
    }
  });
}

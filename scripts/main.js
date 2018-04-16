const API_URL = "http://www.memeking.co.il/api/upload-suggested-new-meme";

$(document).ready(function() {
  const submitButton = $("button");
  const modal = $(".modal");

  submitButton.click(() => {
    submitButton.html('<div id="loading"></div>');
    const uploaderName = $('input[name="name"]').val();
    const uploaderEmail = $('input[name="email"]').val();
    const description = $('input[name="description"]').val();
    const uploadedFile = $(".file")[0].files[0];

    blobToString(uploadedFile).then(blobAsString => {
      const formData = {
        name: uploaderName,
        email: uploaderEmail,
        description: description,
        urlPath: blobAsString
      };

      $.post(API_URL, formData, function() {
        submitButton.html("<span>שליחה</span>");
        if ((status = 200)) {
          modalController.success();
        } else {
          modalController.failed();
        }
      });
    });

    function blobToString(blob) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = event => {
          resolve(event.target.result);
        };
        reader.readAsDataURL(blob);
      });
    }
  });
});

/* TODO:
* clear input fields after sending img off */

$(document).ready(function(){

	if(document.addEventListener) {
	  document.addEventListener('paste', onPasteTriggered, false);
	}

	/*Called whenever a paste event has occured*/
    function onPasteTriggered(e) {
      if(typeof e.clipboardData != 'undefined') {
        var copiedData = e.clipboardData.items[0]; //Get the clipboard data
        console.log(copiedData);
        /*If the clipboard data is of type image, read the data*/
        if(copiedData.type.indexOf("image") == 0) {
          var imageFile = copiedData.getAsFile(); 
          /*We will use HTML5 FileReader API to read the image file*/
          var reader = new FileReader();
          
            reader.onload = function (evt) {
                var result = evt.target.result; //base64 encoded image
                /*Create an image element and append it to the content editable div*/
                var img = document.createElement("img");
                img.src = result;
                img.id = 'img-' + i;
                gen_img = $('#img-' + i)
                console.log(img);
                $("#canvas").append('<div id="image-' + i + '" contenteditable></div>').draggable();
                document.getElementById('image-' + i).appendChild(img);
                gen_img.css({
                    'height': '300px',
                    'width' : 'auto'
                })
            };
            /*Read the image file*/
            reader.readAsDataURL(imageFile);
        }
      }
    }

    document.addEventListener('keydown', function(event){
        event.preventDefault();
        if (event.keyCode == 91){
            console.log('command key and v pressed');
        }
    })

}) // Closing Document Ready Brackets
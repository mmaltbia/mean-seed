$(document).ready(function() {

$.get('/api/wireframes/:id', function(data){
    console.log('hello');
});

var rectangleBtn = $('#rectangle-btn'),
    circleBtn = $('#circle-btn'),
    lineBtn = $('#line-btn'),
    textBtn = $('#text-btn'),
    font = $('#font-dropdown'),
    selectedFont = 'Raleway',
    colorPicker = $('#color-picker');

var hex;
var currentColor;
var hexQuoted;

var selectedId;
var id;

$('.container').on('click', '.ui-draggable', function(event){
    event.preventDefault();
    selectedId = event.target.id;
    var el = event.target;
    selectedDivStyling();
})

var selectedDivStyling = function(){
    $('.container').on('click', '.ui-draggable', function(event){
    if(selectedId === event.target.id){
        console.log('they match!');
        id = document.getElementById(event.target.id);
        console.log(id);
        $('div').removeClass("selected-div");
        $(id).addClass("selected-div");
        $(document).keydown(function(event){
          if(event.keyCode === 8){
                event.preventDefault();
                console.log(id);
                id = $(this).find(id);
                $(id).remove();
            }
    });
};
});
};

// Toggle Toolbar buttons & get Color
rectangleBtn.on('click', function(){
    rectangleBtn.toggleClass( "focused", rectangleBtn.is( ":focus" ) );
    circleBtn.removeClass();
    lineBtn.removeClass();
    textBtn.removeClass();
    toggleShape();
    // var currentColor = $("#picker").spectrum("get");
    // var hex = currentColor.toHexString(); 
    // var hexQuoted = "'" + hex + "'";
    // console.log(hexQuoted);
})

circleBtn.on('click', function(){
    circleBtn.toggleClass( "focused", circleBtn.is( ":focus" ) );
    rectangleBtn.removeClass();
    lineBtn.removeClass();
    textBtn.removeClass();
    toggleShape();
})

lineBtn.on('click', function(){
    lineBtn.toggleClass( "focused", lineBtn.is( ":focus" ) );
    rectangleBtn.removeClass();
    circleBtn.removeClass();
    textBtn.removeClass();
    toggleShape();
})

textBtn.on('click', function(){
    textBtn.toggleClass( "focused", textBtn.is( ":focus" ) );
    rectangleBtn.removeClass();
    circleBtn.removeClass();
    lineBtn.removeClass();
    toggleShape();
})

colorPicker.on('click', function(){
    colorPicker.toggleClass( "focused", colorPicker.is( ":focus" ) );
    rectangleBtn.removeClass();
    circleBtn.removeClass();
    lineBtn.removeClass();
    textBtn.removeClass();
    toggleShape();
})

i = 1;
var rectArr = [];
var circArr = [];

var toggleShape = function() {
    if(rectangleBtn.hasClass('focused')){
        var currentColor = $("#picker").spectrum("get");
        var hex = currentColor.toHexString(); 
        var hexQuoted = "'" + hex + "'";
        console.log(hexQuoted);

        // Draws Rectangles
        jQuery(function($) {

            var main_content = $('.container'),
                css_module = $('.inner_col_one'),
                gen_box = null;
                // i  = 1;
                // divArr = [];

            //make .container selectable and...
            main_content.selectable({ 
                        start: function(e) {
                                
                                //get the mouse position on start
                                x_begin = e.pageX,
                                y_begin = e.pageY;

                            },
                        stop: function(e) {
                                
                                //get the mouse position on stop
                                x_end = e.pageX,
                                y_end = e.pageY;

                                /***  if dragging mouse to the right direction, calcuate width/height  ***/

                                if( x_end - x_begin >= 1 ) {
                                    width  = x_end - x_begin,
                                    height = y_end - y_begin;
                                
                                /***  if dragging mouse to the left direction, calcuate width/height (only change is x) ***/
                                
                                } else {
                                    
                                    width  = x_begin - x_end,
                                    height =  y_end - y_begin;
                                    var drag_left = true;
                                }
                                
                                //append a new div and increment the class and turn it into jquery selector
                                $(this).append('<div id="div-'+ i +'" class="gen_box_' + i + '"></div>');
                                gen_box = $('.gen_box_' + i);
                                div_id = $('#gen_box_' + i);
                                div_details = {'x': x_begin, 'y': y_begin, 'color': '#fff', 'stroke': '', 'width': width, 'height': height};

                                console.log(div_details);
                                rectArr.push(div_details);
                                console.log(hexQuoted);
                                var index = $('#gen_box_' + i);
                                
                                //add css to generated div and make it resizable & draggable
                                $(gen_box).css({
                                     'background-color' : hexQuoted,
                                     'width'     : width,
                                     'height'    : height,
                                     'position'  : 'absolute',
                                     'left'      : x_begin,
                                     'top'       : y_begin
                                })
                                .draggable({
                                  stop: function(event, ui) {
                                    var coordinates = $(this).css(["top", "left"]);
                                    console.log(coordinates);
                                    div_details = {'id': $(this).id, 'x': $(this).css('top'), 'y': $(this).css('left')};
                                  }
                                })
                                .resizable();

                                //if the mouse was dragged left, offset the gen_box position 
                                drag_left ? $(gen_box).offset({ left: x_end, top: y_begin }) : false;
                                console.log( 'width: ' + width + 'px');
                                console.log( 'height: ' + height + 'px' );                       
                                //add the styles of generated div into .inner_col_one
                                i++;
                        }});
        });
    }
    else if(circleBtn.hasClass('focused')){
        console.log('circle has the focus');

        var currentColor = $("#picker").spectrum("get");
        var hex = currentColor.toHexString(); 
        var hexQuoted = "'" + hex + "'";
        console.log(hexQuoted);
        // Draws Circles
        jQuery(function($) {

            var main_content = $('.container'),
                css_module = $('.inner_col_one'),
                gen_box = null;
                // i  = 1;
                // divArr = [];

            //make .container selectable and...
            main_content.selectable({ 
                        start: function(e) {
                                
                                //get the mouse position on start
                                x_begin = e.pageX,
                                y_begin = e.pageY;

                            },
                        stop: function(e) {
                                
                                //get the mouse position on stop
                                x_end = e.pageX,
                                y_end = e.pageY;

                                /***  if dragging mouse to the right direction, calcuate width/height  ***/

                                if( x_end - x_begin >= 1 ) {
                                    width  = x_end - x_begin,
                                    height = y_end - y_begin;
                                
                                /***  if dragging mouse to the left direction, calcuate width/height (only change is x) ***/
                                
                                } else {
                                    
                                    width  = x_begin - x_end,
                                    height =  y_end - y_begin;
                                    var drag_left = true;
                                }
                                
                                //append a new div and increment the class and turn it into jquery selector
                                $(this).append('<div id="div-'+ i +'" class="gen_circ_' + i + '"></div>');
                                gen_box = $('.gen_circ_' + i);
                                div_id = $('#gen_circ_' + i);
                                div_details = {'x': x_begin, 'y': y_begin, 'color': '#fff', 'stroke': '', 'width': width, 'height': height};

                                console.log(div_details);
                                circArr.push(div_details);
                                var index = $('#gen_circ_' + i);
                                
                                //add css to generated div and make it resizable & draggable
                                $(gen_box).css({
                                     'background-color' : hexQuoted,
                                     'width'        : width,
                                     'height'       : width,
                                     'position'     : 'absolute',
                                     'left'         : x_begin,
                                     'top'          : y_begin,
                                     'border-radius': width
                                })
                                .draggable({
                                  stop: function(event, ui) {
                                    var coordinates = $(this).css(["top", "left"]);
                                    console.log(coordinates);
                                    div_details = {'id': $(this).id, 'x': $(this).css('top'), 'y': $(this).css('left')};
                                  }
                                })
                                .resizable();

                                //if the mouse was dragged left, offset the gen_box position 
                                drag_left ? $(gen_circ).offset({ left: x_end, top: y_begin }) : false;
                                console.log( 'width: ' + width + 'px');
                                console.log( 'height: ' + height + 'px' );                       
                                //add the styles of generated div into .inner_col_one
                                i++;
                        }});
        });
    }
    else if(lineBtn.hasClass('focused')){
        console.log('line has the focus');

        var currentColor = $("#picker").spectrum("get");
        var hex = currentColor.toHexString(); 
        var hexQuoted = "'" + hex + "'";
        console.log(hexQuoted);
        // Draws Lines
        jQuery(function($) {

            var main_content = $('.container'),
                css_module = $('.inner_col_one'),
                gen_box = null;
                // i  = 1;
                // divArr = [];

            //make .container selectable and...
            main_content.selectable({ 
                        start: function(e) {
                                
                                //get the mouse position on start
                                x_begin = e.pageX,
                                y_begin = e.pageY;

                            },
                        stop: function(e) {
                                
                                //get the mouse position on stop
                                x_end = e.pageX,
                                y_end = e.pageY;

                                /***  if dragging mouse to the right direction, calcuate width/height  ***/

                                if( x_end - x_begin >= 1 ) {
                                    width  = x_end - x_begin;
                                    // height = y_end - y_begin;
                                
                                /**  if dragging mouse to the left direction, calcuate width/height (only change is x) **/
                                
                                } else {
                                    
                                    width  = x_begin - x_end;
                                    // height =  y_end - y_begin;
                                    var drag_left = true;
                                }
                                
                                //append a new div and increment the class and turn it into jquery selector
                                $(this).append('<div id="div-'+ i +'" class="gen_line_' + i + '"><hr></div>');
                                gen_box = $('.gen_line_' + i);
                                // div_id = $('#gen_line_' + i);
                                div_details = {'x': x_begin, 'y': y_begin, 'color': '#fff', 'stroke': '', 'width': width};

                                console.log(div_details);
                                circArr.push(div_details);
                                var index = $('#gen_line_' + i);
                                
                                //add css to generated div and make it resizable & draggable
                                $(gen_box).css({
                                     'background-color' : hexQuoted,
                                     'width'        : width,
                                     'position'     : 'absolute',
                                     'left'         : x_begin,
                                     'top'          : y_begin,
                                     'color'        : 'red'
                                })
                                .draggable({
                                  containment: ".container",  
                                  stop: function(event, ui) {
                                    var coordinates = $(this).css(["top", "left"]);
                                    console.log(coordinates);
                                    div_details = {'id': $(this).id, 'x': $(this).css('top'), 'y': $(this).css('left')};
                                  }
                                })
                                .resizable();

                                //if the mouse was dragged left, offset the gen_box position 
                                drag_left ? $(gen_line).offset({ left: x_end, top: y_begin }) : false;
                                console.log( 'width: ' + width + 'px');
                                console.log( 'height: ' + height + 'px' );                       
                                //add the styles of generated div into .inner_col_one
                                i++;
                        }});
        });
    }
    else if(textBtn.hasClass('focused')){
        console.log('text btn has the focus');

        var currentColor = $("#picker").spectrum("get");
        var hex = currentColor.toHexString(); 
        var hexQuoted = "'" + hex + "'";
        console.log(hexQuoted);
        // Draws Textarea
        jQuery(function($) {

            var main_content = $('.container'),
                css_module = $('.inner_col_one'),
                gen_box = null;
                // i  = 1;
                // divArr = [];

            //make .container selectable and...
            main_content.selectable({ 
                        start: function(e) {
                                
                                //get the mouse position on start
                                x_begin = e.pageX,
                                y_begin = e.pageY;

                            },
                        stop: function(e) {
                                
                                //get the mouse position on stop
                                x_end = e.pageX,
                                y_end = e.pageY;

                                /***  if dragging mouse to the right direction, calcuate width/height  ***/

                                if( x_end - x_begin >= 1 ) {
                                    width  = x_end - x_begin,
                                    height = y_end - y_begin;
                                
                                /***  if dragging mouse to the left direction, calcuate width/height (only change is x) ***/
                                
                                } else {
                                    
                                    width  = x_begin - x_end,
                                    height =  y_end - y_begin;
                                    var drag_left = true;
                                }
                                
                                //append a new div and increment the class and turn it into jquery selector
                                $(this).append('<div id="div-'+ i +'" class="gen_text_' + i + '" onClick="editShape(event)"><textarea class="text-box-'+ i + '"></textarea></div>');
                                gen_box = $('.gen_text_' + i);
                                text_box = $('.text-box-' + i);
                                div_id = $('#gen_text_' + i);
                                div_details = {'x': x_begin, 'y': y_begin, 'color': '#fff', 'stroke': '', 'width': width, 'height': height};

                                console.log(div_details);
                                circArr.push(div_details);
                                var index = $('#gen_circ_' + i);
                                
                                //add css to generated div and make it resizable & draggable
                                $(gen_box).css({
                                     'background'    : 'transparent',
                                     'width'        : width,
                                     'height'       : height,
                                     'position'     : 'absolute',
                                     'left'         : x_begin,
                                     'top'          : y_begin,
                                })
                                .draggable({
                                  stop: function(event, ui) {
                                    var coordinates = $(this).css(["top", "left"]);
                                    console.log(coordinates);
                                    div_details = {'id': $(this).id, 'x': $(this).css('top'), 'y': $(this).css('left')};
                                  }
                                })
                                .resizable();

                                //if the mouse was dragged left, offset the gen_box position 
                                drag_left ? $(gen_text).offset({ left: x_end, top: y_begin }) : false;
                                console.log( 'width: ' + width + 'px');
                                console.log( 'height: ' + height + 'px' );                       
                                //add the styles of generated div into .inner_col_one
                                i++;

                                font.on('click', function(){
                                    var f = document.getElementById("font-dropdown");
                                    selectedFont = f.options[f.selectedIndex].text;
                                    console.log(selectedFont);
                                    return selectedFont;
                                })

                                $(text_box).css({
                                    'background'    : 'transparent',
                                     'width'        : '90%',
                                     'height'       : '90%',
                                     'position'     : 'absolute',
                                     'font-family'  :  "'" + selectedFont + "'"
                                })
                        }});
        });
    }
    else {
        console.log('no btn has the focus');
    }
};

// $('body').not($('.selected-div')).on('click', function (event) {
//     toggleHighlight.removeClass('selected-div');
// });

// Add Wireframe button

$('#wireframe-btn').on('click', function(event){
    event.preventDefault();
    console.log('hello');
    var wireframeDiv = $("<div id=\'div-"+ i +"\'><img src=\'/images/wireframe-full.svg\'></div>").draggable({}).resizable({});
    $('.container').append(wireframeDiv);
});

// Color Picker
$("#picker").spectrum({
    color: "#ECC",
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "hex",
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
        
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});

// Save button
$('#save-btn').on('click', function(e){
    e.preventDefault();
    console.log(rectArr);
    console.log(circArr);

    $.ajax({
      method: "POST",
      url: "/api/wireframes/55ec921f6349957378ad183e/rectangles",
      data: {"rectangleDivs": rectArr, "circleDivs": circArr}, 
      dataType: "json",
      success: function (data) {
          alert(data.success);
      }
    });
})

}); // Closing brackets for document.ready function

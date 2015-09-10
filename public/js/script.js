$(document).ready(function() {

$.get('/api/wireframes/:id', function(data){
    console.log('hello');
});

var rectangleBtn = $('#rectangle-btn'),
    circleBtn = $('#circle-btn'),
    lineBtn = $('#line-btn'),
    textBtn = $('#text-btn'),
    font = $('#font-dropdown'),
    selectedFont = 'Raleway';


rectangleBtn.on('click', function(){
    rectangleBtn.toggleClass( "focused", rectangleBtn.is( ":focus" ) );
    circleBtn.removeClass();
    lineBtn.removeClass();
    textBtn.removeClass();
    toggleShape();
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

i = 1;
var rectArr = [];
var circArr = [];

var toggleShape = function() {
    if(rectangleBtn.hasClass('focused')){
        console.log('rect has the focus')
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
                                var index = $('#gen_box_' + i);
                                
                                //add css to generated div and make it resizable & draggable
                                $(gen_box).css({
                                    'background' : '#fff',
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
        console.log('circle has the focus')
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
                                    'background'    : '#fff',
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
        console.log('line has the focus')
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
                                    'background'    : '#fff',
                                     'width'        : width,
                                     'position'     : 'absolute',
                                     'left'         : x_begin,
                                     'top'          : y_begin,
                                     'color'        : 'red'
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
                                drag_left ? $(gen_line).offset({ left: x_end, top: y_begin }) : false;
                                console.log( 'width: ' + width + 'px');
                                console.log( 'height: ' + height + 'px' );                       
                                //add the styles of generated div into .inner_col_one
                                i++;
                        }});
        });
    }
    else if(textBtn.hasClass('focused')){
        console.log('text btn has the focus')
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
    var wireframeDiv = $("<div id=\'div-"+ i +"\'><img src=\'/images/wireframe.svg\'></div>")
    $('.container').append(wireframeDiv);
});

var selectedId;

$('.container').on('click', '.ui-draggable', function(event){
    event.preventDefault();
    selectedId = event.target.id;
    var el = event.target;
    selectedDivStyling();
})

var id;

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



// // Edit Shape Button 
// $('body').on('click', '.ui-draggable', function (event) {
//     var el = event.target;
//     var targetId = '\'#' + el.id + "'";
//     $('.selected-div').removeClass();
//     var selectedId = targetId;
//     console.log(selectedId);
//     $(document).keydown(function(event){
//       if (event.keyCode == 8){
//         event.preventDefault();
//         $(el).remove();
//         }
//     });
//     $(this).addClass('selected-div');
// });


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

//Color Picker

}); // Closing brackets for document.ready function

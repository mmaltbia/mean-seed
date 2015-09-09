$(document).ready(function() {

$.get('/api/wireframes/:id', function(data){
    console.log('hello');
});

var rectangleBtn = $('#rectangle-btn');
var circleBtn = $('#circle-btn');
var lineBtn = $('#line-btn');
var textBtn = $('#text-btn');
var font = $('#font-dropdown');


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

font.on('click', function(){
    console.log('font button clicked');
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
                                $(this).append('<div class="gen_box_' + i + '" onClick="editShape()"></div>');
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
                                $(this).append('<div class="gen_circ_' + i + '" onClick="editShape()"></div>');
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
                                $(this).append('<div class="gen_line_' + i + '" onClick="editShape()"><hr></div>');
                                gen_box = $('.gen_line_' + i);
                                div_id = $('#gen_line_' + i);
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
                                $(this).append('<div class="gen_text_' + i + '" onClick="editShape()"><textarea class="text-box-'+ i + '"></textarea></div>');
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
                                drag_left ? $(gen_circ).offset({ left: x_end, top: y_begin }) : false;
                                console.log( 'width: ' + width + 'px');
                                console.log( 'height: ' + height + 'px' );                       
                                //add the styles of generated div into .inner_col_one
                                i++;

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
    else{
        console.log('no btn has the focus')
    }
}

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

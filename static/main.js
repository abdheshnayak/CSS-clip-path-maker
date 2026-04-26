// Gloab Var
var clipPath="";
var svgPath = "";
var clipPathPoint="";
var handles = new Map();
var curptr = "";
var deviceWidth = $("body").outerWidth();
var var_select=".s1";
var svgPrefix = `<?xml version="1.0" standalone="no"?>
<svg width="`;
var svgPrefix1= `" height="`;
var svgPrefix2= `" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="`;
var svgPostfix = `"
       fill="black" />
</svg>
`;

function updateScSize(){
  var w = $(".box").outerWidth();
  var h = $(".box").outerHeight();
  var ratio = formatNumb(h/w)*100;
  $("#demoWidth").val(w.toFixed(0));
  $("#demoHeight").val(h.toFixed(0));
  $("textarea.whRatio.short").val("100/"+ratio);
  $("textarea.whRatio.lg").val("W/H : 100/"+ratio);
}
function updateWhRatio(){
  var w = $(".box").outerWidth();
  var h = $(".box").outerHeight();
  var ratio = formatNumb(h/w)*100;
  $("textarea.whratio.short").val("100/"+ratio);
  $("textarea.whRatio.lg").val("W/H : 100/"+ratio);
}

function drowShape(shape){
  $(".box").css("width","20em");
  var w = $(".box").outerWidth();
  $("#image").css("height",w);
  if (shape=='tringle') {

    handles.set('1',{x:50,y:0});

    handles.set('2',{x:0,y:100});

    handles.set('3',{x:100,y:100});

  }else if (shape=="trapezoid") {

    handles.set('1',{x:20,y:0});
    handles.set('2',{x:80,y:0});
    handles.set('3',{x:100,y:100});
    handles.set('4',{x:0,y:100});

  }else if (shape=="parallelogram") {

    handles.set('1',{x:25,y:0});
    handles.set('2',{x:100,y:0});
    handles.set('3',{x:75,y:100});
    handles.set('4',{x:0,y:100});

  }else if (shape=="rhombus") {

    handles.set('1',{x:50,y:0});
    handles.set('2',{x:100,y:50});
    handles.set('3',{x:50,y:100});
    handles.set('4',{x:0,y:50});

  }else if (shape=="pentagon") {

    handles.set('1',{x:50,y:0});
    handles.set('2',{x:100,y:38});
    handles.set('3',{x:82,y:100});
    handles.set('4',{x:18,y:100});
    handles.set('5',{x:0,y:38});

  }else if (shape=="hexagon") {

    handles.set('1',{x:50,y:0});
    handles.set('2',{x:100,y:25});
    handles.set('3',{x:100,y:75});
    handles.set('4',{x:50,y:100});
    handles.set('5',{x:0,y:75});
    handles.set('6',{x:0,y:25});

  }else if (shape=="heptagon") {

    handles.set('1',{x:50,y:0});
    handles.set('2',{x:90,y:20});
    handles.set('3',{x:100,y:60});
    handles.set('4',{x:75,y:100});
    handles.set('5',{x:25,y:100});
    handles.set('6',{x:0,y:60});
    handles.set('7',{x:10,y:20});

  }
  else if (shape=="octagon") {

    handles.set('1',{x:30,y:0});
    handles.set('2',{x:70,y:0});
    handles.set('3',{x:100,y:30});
    handles.set('4',{x:100,y:70});
    handles.set('5',{x:70,y:100});
    handles.set('6',{x:30,y:100});
    handles.set('7',{x:0,y:70});
    handles.set('8',{x:0,y:30});
  }
  else if (shape=="nanagon") {

    handles.set('1',{x:50,y:0});
    handles.set('2',{x:83,y:12});
    handles.set('3',{x:100,y:43});
    handles.set('4',{x:94,y:78});
    handles.set('5',{x:68,y:100});
    handles.set('6',{x:32,y:100});
    handles.set('7',{x:6,y:78});
    handles.set('8',{x:0,y:43});
    handles.set('9',{x:17,y:12});

  }
  else if (shape=="decagon") {

    handles.set('1',{x:50,y:0});
    handles.set('2',{x:80,y:10});
    handles.set('3',{x:100,y:35});
    handles.set('4',{x:100,y:70});
    handles.set('5',{x:80,y:90});
    handles.set('6',{x:50,y:100});
    handles.set('7',{x:20,y:90});
    handles.set('8',{x:0,y:70});
    handles.set('9',{x:0,y:35});
    handles.set('10',{x:20,y:10});

  }
  else if (shape=="bevel") {

    handles.set('1',{x:20,y:0});
    handles.set('2',{x:80,y:0});
    handles.set('3',{x:100,y:20});
    handles.set('4',{x:100,y:80});
    handles.set('5',{x:80,y:100});
    handles.set('6',{x:20,y:100});
    handles.set('7',{x:0,y:80});
    handles.set('8',{x:0,y:20});

  }
  else if (shape=="rabbet") {

    handles.set('1',{x:0,y:15});
    handles.set('2',{x:15,y:15});
    handles.set('3',{x:15,y:0});
    handles.set('4',{x:85,y:0});
    handles.set('5',{x:85,y:15});
    handles.set('6',{x:100,y:15});
    handles.set('7',{x:100,y:85});
    handles.set('8',{x:85,y:85});
    handles.set('9',{x:85,y:100});
    handles.set('10',{x:15,y:100});
    handles.set('11',{x:15,y:85});
    handles.set('12',{x:0,y:85});

  }
  else if (shape=="leftarrow") {

    handles.set('1',{x:40,y:0});
    handles.set('2',{x:40,y:20});
    handles.set('3',{x:100,y:20});
    handles.set('4',{x:100,y:80});
    handles.set('5',{x:40,y:80});
    handles.set('6',{x:40,y:100});
    handles.set('7',{x:0,y:50});

  }
  else if (shape=="rightarrow") {

    handles.set('1',{x:0,y:20});
    handles.set('2',{x:60,y:20});
    handles.set('3',{x:60,y:0});
    handles.set('4',{x:100,y:50});
    handles.set('5',{x:60,y:100});
    handles.set('6',{x:60,y:80});
    handles.set('7',{x:0,y:80});

  }
  else if (shape=="leftPoint") {

    handles.set('1',{x:25,y:0});
    handles.set('2',{x:100,y:1});
    handles.set('3',{x:100,y:100});
    handles.set('4',{x:25,y:100});
    handles.set('5',{x:0,y:50});

  }
  else if (shape=="rightPoint") {

    handles.set('1',{x:0,y:0});
    handles.set('2',{x:75,y:0});
    handles.set('3',{x:100,y:50});
    handles.set('4',{x:75,y:100});
    handles.set('5',{x:0,y:100});

  }else if (shape=="leftChevron") {

    handles.set('1',{x:100,y:0});
    handles.set('2',{x:75,y:50});
    handles.set('3',{x:100,y:100});
    handles.set('4',{x:25,y:100});
    handles.set('5',{x:0,y:50});
    handles.set('6',{x:25,y:0});

  }else if (shape=="rightChevron") {

    handles.set('1',{x:75,y:0});
    handles.set('2',{x:100,y:50});
    handles.set('3',{x:75,y:100});
    handles.set('4',{x:0,y:100});
    handles.set('5',{x:25,y:50});
    handles.set('6',{x:0,y:0});

  }else if (shape=="leftChevron") {

    handles.set('1',{x:100,y:0});
    handles.set('2',{x:75,y:50});
    handles.set('3',{x:100,y:100});
    handles.set('4',{x:25,y:100});
    handles.set('5',{x:0,y:50});
    handles.set('6',{x:25,y:0});

  }else if (shape=="star") {

    handles.set('1',{x:50,y:0});
    handles.set('2',{x:61,y:35});
    handles.set('3',{x:98,y:35});
    handles.set('4',{x:68,y:57});
    handles.set('5',{x:79,y:91});
    handles.set('6',{x:50,y:70});
    handles.set('7',{x:21,y:91});
    handles.set('8',{x:32,y:57});
    handles.set('9',{x:2,y:35});
    handles.set('10',{x:39,y:35});

  }else if (shape=="cross") {

    handles.set('1',{x:10,y:25});
    handles.set('2',{x:35,y:25});
    handles.set('3',{x:35,y:0});
    handles.set('4',{x:65,y:0});
    handles.set('5',{x:65,y:25});
    handles.set('6',{x:90,y:25});
    handles.set('7',{x:90,y:50});
    handles.set('8',{x:65,y:50});
    handles.set('9',{x:65,y:100});
    handles.set('10',{x:35,y:100});
    handles.set('11',{x:35,y:50});
    handles.set('12',{x:10,y:50});

  }else if (shape=="message") {

    handles.set('1',{x:0,y:0});
    handles.set('2',{x:100,y:0});
    handles.set('3',{x:100,y:75});
    handles.set('4',{x:75,y:75});
    handles.set('5',{x:75,y:100});
    handles.set('6',{x:50,y:75});
    handles.set('7',{x:0,y:75});

  }else if (shape=="close") {

    handles.set('1',{x:20,y:0});
    handles.set('2',{x:0,y:20});
    handles.set('3',{x:30,y:50});
    handles.set('4',{x:0,y:80});
    handles.set('5',{x:20,y:100});
    handles.set('6',{x:50,y:70});
    handles.set('7',{x:80,y:100});
    handles.set('8',{x:100,y:80});
    handles.set('9',{x:70,y:50});
    handles.set('10',{x:100,y:20});
    handles.set('11',{x:80,y:0});
    handles.set('12',{x:50,y:30});

  }else if (shape=="frame") {

    handles.set('1',{x:0,y:0});
    handles.set('2',{x:0,y:100});
    handles.set('3',{x:10,y:100});
    handles.set('4',{x:10,y:10});
    handles.set('5',{x:90,y:10});
    handles.set('6',{x:90,y:90});
    handles.set('7',{x:10,y:90});
    handles.set('8',{x:10,y:100});
    handles.set('9',{x:100,y:100});
    handles.set('10',{x:100,y:0});

  }else if (shape=="inset") {

    handles.set('1',{x:10,y:10});
    handles.set('2',{x:90,y:10});
    handles.set('3',{x:90,y:90});
    handles.set('4',{x:10,y:90});
  }

}

function loadShape(shape) {
  handles.clear();
  // console.log(shape.id);

  $(var_atvbg).removeClass("atv_bg");
  $(var_atvbg).removeClass("atv_bg");

  var_atvbg = shape;

  drowShape(shape.id);


  $(shape).addClass("atv_bg");
  $(shape).addClass("atv_bg");
  refreshPoint();
  refreshHandles();

}

var var_atvbg='tringle';
function initialize(){
  updateScSize();
  var w = $(".box").outerWidth();
  var h = $(".box").outerHeight();


  var parentOffset = $(this).parent().offset();

  handles.clear();

  drowShape(var_atvbg);

  $(".shapes.short#"+var_atvbg).addClass("atv_bg");
  $(".shapes.lg#"+var_atvbg).addClass("atv_bg");
  refreshPoint();
  refreshHandles();

  var draggable = document.getElementById("1");
  draggable.addEventListener('touchmove', dragFun, false);

  var draggable = document.getElementById("2");
  draggable.addEventListener('touchmove', dragFun, false);

  var draggable = document.getElementById("3");
  draggable.addEventListener('touchmove', dragFun, false);

}
initialize();

function updateImagePreview(str){
    $("#image").css("height","auto");
    if (str.substring(0,4)=="http") {
      $("#image").attr("src",str);
    }else {
      $("#image").attr("src","Morning_Brew.jpeg");
    }
    updateWhRatio();
}
function updateDemoHeight(str){
    if (str<200) {
      $("#image").css("height",200+"px");
      $("#demoHeight").val(200);
    }else {
      $("#image").css("height",str+"px");
    }
    updateWhRatio();
}
function updateDemoWidth(str){
  var h = $(".box").outerHeight();
  $("#image").css("height",h+"px");

  if (str<200) {
    $(".box").css("width",200+"px");
    $("#demoWidth").val(200);
  }else {
    $(".box").css("width",str+"px");
  }
  updateWhRatio();
}

function MovePoints(value, key, map) {
  // clipPathPoint="\n<span id="+key+" style=\"left:"+value.x+"%; top:"+value.y+"%\"></span>";
  // $(".points").append(clipPathPoint);
  clipPath=clipPath+", "+value.x+"% "+value.y+"% ";
  svgPath=svgPath+" "+value.x+" "+value.y;

}

function refreshPoint(){

  clipPath = "";
  svgPath = "";
  handles.forEach(MovePoints);

  if (clipPath[0] == ",") {
   clipPath=clipPath.substring(1);
  }


  $(var_select).css("clip-path","polygon("+clipPath+")")
  $("#output").val("clip-path : polygon("+clipPath+");");

  var w = $(".box").outerWidth();
  var h = $(".box").outerHeight();
  $("#svgOutput").val(svgPrefix+w+svgPrefix1+h+svgPrefix2+svgPath+svgPostfix);
}

function formatNumb(myNumber){
  var dec = myNumber - Math.floor(myNumber);
  myNumber = myNumber - dec;
  if(myNumber>99.99){
    return("99.99");
  }else if(myNumber<0){
    return("00.00");
  }
  dec = dec.toFixed(2);
  var formattedNumber = ("0" + myNumber).slice(-2) + dec.toString().substr(1);
  // console.log(formattedNumber);

  return formattedNumber;
}

function logMapElements(value, key, map) {
  clipPathPoint="\n<span id="+key+" style=\"left:"+value.x+"%; top:"+value.y+"%\"></span>";
  $(".points").append(clipPathPoint);

  dragElement(document.getElementById(key));

  var draggable = document.getElementById(key);
  draggable.addEventListener('touchmove', dragFun, false);

  clipPath=clipPath+", "+value.x+"% "+value.y+"% ";
  svgPath=svgPath+" "+value.x+" "+value.y;

}


function refreshHandles(){
  clipPath = "";
  svgPath = "";
  $('.points>span').remove();
  var kk = handles.entries().length;
  handles.forEach(logMapElements);

  if (clipPath[0] == ",") {
   clipPath=clipPath.substring(1);
 }

  $(var_select).css("clip-path","polygon("+clipPath+")")
  $("#output").val("clip-path : polygon("+clipPath+");");

  var w = $(".box").outerWidth();
  var h = $(".box").outerHeight();
  $("#svgOutput").val(svgPrefix+w+svgPrefix1+h+svgPrefix2+svgPath+svgPostfix);
}

  function dragFun(event) {

    var touch = event.targetTouches[0];
    // Place element where the finger is
    var w = $(".box").outerWidth();
    var h = $(".box").outerHeight();

    var parentOffset = $(".box").offset();
    //  or $(this).offset(); if you really just want the current element's offset
    var relX = touch.pageX - parentOffset.left;
    var relY = touch.pageY - parentOffset.top;
    var posx=((relX/w)*100);
    var posy=((relY/h)*100);

    posx = formatNumb(posx);
    posy = formatNumb(posy);

    // var_key = posx+posy;
    var_value = {x:posx,y:posy};
    // var_key = var_key.split(".").join("");



    // console.log(event.target.id);

    if(event.target.tagName=="SPAN"){
      handles.set(event.target.id,var_value);
      $("#"+event.target.id).css("left",posx+"%").css("top",posy+"%");
    }
    refreshPoint();
    // refreshHandles();


    event.preventDefault();



  }

// when click at any point
$(".box").click(function(e){
  if(e.target.id && e.target.id == "ptr"){
    // console.log("hello");
    var w = $(".box").outerWidth();
    var h = $(".box").outerHeight();
    var parentOffset = $(this).offset();

    //  or $(this).offset(); if you really just want the current element's offset
    // console.log(e.pageX+" : "+testOff.left);
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    var posx=((relX/w)*100);
    var posy=((relY/h)*100);

    posx = formatNumb(posx)
    posy = formatNumb(posy)

    var_key = posx+posy;
    var_value = {x:posx,y:posy};
    var_key = var_key.split(".").join("");
    handles.set(var_key,var_value);

    // refreshHandles();



    clipPath=clipPath+", "+posx+"% "+posy+"% ";
    svgPath=svgPath+" "+posx+" "+posy;

    clipPathPoint="\n<span id="+var_key+" style=\"left:"+posx+"%; top:"+posy+"%\"></span>";
    if (clipPath[0] == ",") {
      clipPath=clipPath.substring(1);
    }
    $(var_select).css("clip-path","polygon("+clipPath+")")
    $("#output").val("clip-path : polygon("+clipPath+");");
    $(".points").append(clipPathPoint);

    $("#svgOutput").val(svgPrefix+w+svgPrefix1+h+svgPrefix2+svgPath+svgPostfix);

    dragElement(document.getElementById(var_key));

    var draggable = document.getElementById(var_key);
    draggable.addEventListener('touchmove', dragFun, false);

  }
});
// when click at any point
function mouseMoveControl(e){
 var w = $(".box").outerWidth();
 var h = $(".box").outerHeight();
 var parentOffset = $(".box").offset();
//  or $(this).offset(); if you really just want the current element's offset
 var relX = e.pageX - parentOffset.left;
 var relY = e.pageY - parentOffset.top;
 var posx=((relX/w)*100);
 var posy=((relY/h)*100);

 posx = formatNumb(posx);
 posy = formatNumb(posy);

 var_key = posx+posy;
 var_value = {x:posx,y:posy};
 var_key = var_key.split(".").join("");


// console.log(handles);
if(posx>0 && posy>0 && posx<100 && posy<100){
 $("#ptr").css("left",posx+"%").css("top",posy+"%");
  if(handles.has(var_key)){
    $("#ptr").css("display","none");
   $("#ptr").css("left",posx+"%").css("top",posy+"%");
  }else{
    $("#ptr").css("display","inline-block");
  }
}

}


$("#undo").click(function(){
  var var_id = $('.points>span').last()[0].id;
  // console.log(var_id);
  // $('.points>span#'+id).last().remove();
  handles.delete(var_id);
  refreshHandles();
});

$("#clear").click(function(){

  handles.clear();
  refreshHandles();
  $(var_select).css("clip-path","none");
});



$("#zoomplus").click(function(){
  var w = $(".box").outerWidth();
  var h = $(".box").outerHeight();
  var w2 = $(".boxOverFlow").outerWidth();

  if ((w*1.2)>w2-5) {
    $(".boxOverFlow").css("display","inline-block");
  }

  $(".box").css("width",(w*1.2)+"px");
  $("#image").css("height",(h*1.2)+"px");
  updateScSize();

  var w = $(".box").outerWidth();
  var h = $(".box").outerHeight();
  $("#svgOutput").val(svgPrefix+w+svgPrefix1+h+svgPrefix2+svgPath+svgPostfix);


});
$("#zoomminus").click(function(){
  var w = $(".box").outerWidth();
  var h = $(".box").outerHeight();

  var w2 = $(".boxOverFlow").outerWidth();
  if ((w*0.8)<w2) {
    $(".boxOverFlow").css("display","flex");
  }

  $(".box").css("width",(w*0.8)+"px");
  $("#image").css("height",(h*0.8)+"px");
  updateScSize();

  var w = $(".box").outerWidth();
  var h = $(".box").outerHeight();
  $("#svgOutput").val(svgPrefix+w+svgPrefix1+h+svgPrefix2+svgPath+svgPostfix);

});


document.getElementById("files").onchange = function () {
    $("#image").css("height","auto");

    var reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById("image").src = e.target.result;
    };
    reader.readAsDataURL(this.files[0]);
};



function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
document.getElementById(elmnt.id).onmousedown = dragMouseDown;

function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  // get the mouse cursor position at startup:
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  // call a function whenever the cursor moves:
  document.onmousemove = elementDrag;
}

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  // calculate the new cursor position:
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;

  var w = $(".box").outerWidth();
  var h = $(".box").outerHeight();

  var parentOffset = $(".box").offset();

  var posx=(((elmnt.offsetLeft - pos1)/w)*100);
  var posy=(((elmnt.offsetTop - pos2)/h)*100);

  posx = formatNumb(posx);
  posy = formatNumb(posy);


  // set the element's new position:
  elmnt.style.top = posy + "%";
  elmnt.style.left = posx + "%";

  var_value = {x:posx,y:posy};

  handles.set(elmnt.id,var_value);
  refreshPoint();
}


function closeDragElement() {
  /* stop moving when mouse button is released:*/
  document.onmouseup = null;
  document.onmousemove = null;
}
}

myButton = document.getElementById("myBtn");
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
  if (($('body').outerHeight() - document.documentElement.scrollTop) < 1100) {
      myButton.style.display= "none";
  }else {
      myButton.style.display= "block";
  }
}

function downloadSVG() {
  let svgData = $("#svgOutput").val();

  /// Create a fake <a> element
  let fakeLink = document.createElement("a");
  /// Add image data as href
  fakeLink.setAttribute('href', 'data:image/svg+xml;base64,' + window.btoa(svgData));
  /// Add download attribute
  fakeLink.setAttribute('download', 'kamla_clippy_image.svg');
  /// Simulate click
  fakeLink.click();

}

updateScSize();

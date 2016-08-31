
document.addEventListener("DOMContentLoaded", function(){

var popup = document.querySelector(".x");
var popupPlus = document.querySelector(".xPlus");
var rodzic = document.querySelector(".rodzic");
var middlebox1 = document.querySelector(".middle-box1");   
var middlebox2 = document.querySelector(".middle-box2");      
var white1 = document.querySelector(".white1");
var white2 = document.querySelector(".white2");    
  
    
    // dodatkowe menu "x" wyskakuje po najechaniu na menu FIRMA:
   
rodzic.addEventListener("mouseover", func0, false);
rodzic.addEventListener("mouseout", func1, false);

function func0()
{  
   popup.setAttribute("style", "display:block;")
   popupPlus.setAttribute("style", "display:block;")
}

function func1()
{  
   popup.setAttribute("style", "display:none;")
   popupPlus.setAttribute("style", "display:none;")
}
    
    
    // znikaja elementy ze srodkowych banerow po najechaniu na nie myszką:
    
middlebox1.addEventListener("mouseover", func2, false);
middlebox1.addEventListener("mouseout", func3, false);

function func2()
{  
   white1.setAttribute("style", "display:none;")
}

function func3()
{  
  white1.setAttribute("style", "display:block;")
}    
    
    
    
middlebox2.addEventListener("mouseover", func4, false);
middlebox2.addEventListener("mouseout", func5, false);

function func4()
{  
   white2.setAttribute("style", "display:none;")
}

function func5()
{  
  white2.setAttribute("style", "display:block;")
}        
    
   
    
    // slider    - nie wiem jak podpiac pod przyciski before-after < > 
    
var index = 0;  
var buttons = $('.buttons');
var span1 = buttons.find('span').eq(0);
var span2 = buttons.find('span').eq(1);
var list = document.querySelectorAll('.images'); 
    

  list[index].classList.add("visible"); 

    

    span1.on('click', function(e){

        list[index].classList.remove("visible");
        index++;    
        
        if(index>= list.length) {
           index=0; 
        }
        list[index].classList.add("visible");
        
    });  
    
    
        span2.on('click', function(e){

        list[index].classList.remove("visible");
        index--;    
        
        if(index < 0) {
           index=list.length-1; 
        }
        list[index].classList.add("visible");
        
    });  
    
    
    
    
    // SEKCJA PRZED FORMULARZEM czyli WYBÓR KRZESEŁ  //
    


var list_panel = $('.list_panel');
var list_label = $('.list_label');   
var list_arrow = $('.list_arrow');      
var drop_down_list = $('.drop_down_list');  
var allLi = $('.list_panel li');
    
    
    list_arrow.on('click', function(){
//      console.log("kliknieto strzałkę");
        var lista = $(this).next('.list_panel');
//      console.log(lista);
            
        lista.toggle('show')
          
    });

   
    

var title = $('.title');
var color = $('.color');
var pattern = $('.pattern');
var transport_wynik = $('.transport');   
    
var title_value = $('.title_value');
var color_value = $('.color_value');
var pattern_value = $('.pattern_value');
var transport_value = $('.transport_value');      
var checkbox = $('.checkbox');  

var allLi0 = $(list_panel[0].children);
var allLi1 = $(list_panel[1].children);
var allLi2 = $(list_panel[2].children);    
    
var green_button = $('.green_button');
var sum = $('.sum');    
var transport = $('#transport');  
var total = 0; 
var totalRodzaj = 0;
var totalKolor = 0;
var totalTkanina = 0;
var totalTransport = 0;    
    
       
         // tutaj zmieniamy kolor zaznaczonej opcji
    
    allLi.on('click', function(){
//      console.log($(this));
        allLi.removeClass('option selected');
        $(this).toggleClass('option selected').change();
        $(this).parent().toggle('show')
//        console.log($(this).text());
        
   
    });
                    // wyswietlamy wybrany MODEL fotela i cene
    
    allLi0.on('change', function(){
        
        var text0 =  $(this).text();
        var val0 = $(this).val();
        $(this).parent().parent().find('.list_label').text($(this).text());
//        console.log(text0);
//        console.log(val0);
        title.text(text0);
        title_value.text(val0);
        totalRodzaj = val0;
//        return total;
//        $(sum).val(total); 
//        console.log(totalRodzaj);
        $(sum).val(totalRodzaj+totalKolor+totalTkanina+totalTransport);
    });          
    
   

    // wyswietlamy wybrany KOLOR fotela i cene
    
   allLi1.on('change', function(){
        
        var text1 =  $(this).text();
        var val1 = $(this).val();
        $(this).parent().parent().find('.list_label').text($(this).text());
//        console.log(text1);
//        console.log(val1);
        color.text(text1);
        color_value.text(val1);
        totalKolor = val1;
//        return total;
//       console.log(totalKolor);
        
        $(sum).val(totalRodzaj+totalKolor+totalTkanina+totalTransport);
    });         
    
    
    // wyswietlamy wybrany MATERIAŁ fotela i cene
    
   allLi2.on('change', function(){
        
        var text2 =  $(this).text();
        var val2 = $(this).val();
       $(this).parent().parent().find('.list_label').text($(this).text());
//        console.log(text2);
//        console.log(val2);
        pattern.text(text2);
        pattern_value.text(val2);
        totalTkanina = val2;

        $(sum).val(totalRodzaj+totalKolor+totalTkanina+totalTransport);
    });      



     
    //checkbox checked or not ?   
    //sumowanie wartosci
    
 $(transport).removeAttr("checked");
    
transport.on('click', function(){
        
        totalTransport = 0;
    
    
    if (transport.attr('checked')) {
        $(transport).removeAttr("checked");
        } else {
        $(transport).attr('checked', 'true');                  
                          } 
    
    if ( $(transport).is(':checked')) {
        var val3 = transport.val();
            transport_wynik.text('Transport');
            transport_value.text(val3);
            totalTransport += parseInt(val3);
//            console.log(total);
        } else {
            
        var val3 = 0;    
            transport_wynik.text('Transport');
            transport_value.text(val3);
        } 

  
         console.log(totalTransport)
         $(sum).val(totalRodzaj+totalKolor+totalTkanina+totalTransport);
    });
    
 
 



    
});   // koncowy    
    
    
    
    
    
    

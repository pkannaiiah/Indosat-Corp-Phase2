
    $( ".nextBtn" ).click(function(e) {
       goRight();
   });
   $( ".backBtn" ).click(function(e) {
       goLeft();
   });
   
   function goRight(){ // inner stuff slides left
       var initalLeftMargin = $( ".innerLiner" ).css('margin-left').replace("px", "")*1;
       var newLeftMargin = (initalLeftMargin - 324); // extra 2 for border
       $( ".innerLiner" ).animate({marginLeft: newLeftMargin}, 500);
   }
   function goLeft(){ // inner stuff slides right
       var initalLeftMargin = $( ".innerLiner" ).css('margin-left').replace("px", "")*1;
       var newLeftMargin = (initalLeftMargin + 324); // extra 2 for border
       $( ".innerLiner" ).animate({marginLeft: newLeftMargin}, 500);
   }
   
   if (window.matchMedia("(max-width: 576px)").matches) {
       function goRight(){ // inner stuff slides left
       var initalLeftMargin = $( ".innerLiner" ).css('margin-left').replace("px", "")*1;
       var newLeftMargin = (initalLeftMargin - 380); // extra 2 for border
       $( ".innerLiner" ).animate({marginLeft: newLeftMargin}, 500);
   }
   function goLeft(){ // inner stuff slides right
       var initalLeftMargin = $( ".innerLiner" ).css('margin-left').replace("px", "")*1;
       var newLeftMargin = (initalLeftMargin + 380); // extra 2 for border
       $( ".innerLiner" ).animate({marginLeft: newLeftMargin}, 500);
   }
   } 
  /*  if (window.matchMedia("(max-width: 375px)").matches) {
       function goRight(){ // inner stuff slides left
       var initalLeftMargin = $( ".innerLiner" ).css('margin-left').replace("px", "")*1;
       var newLeftMargin = (initalLeftMargin - 328); // extra 2 for border
       $( ".innerLiner" ).animate({marginLeft: newLeftMargin}, 500);
   }
   function goLeft(){ // inner stuff slides right
       var initalLeftMargin = $( ".innerLiner" ).css('margin-left').replace("px", "")*1;
       var newLeftMargin = (initalLeftMargin + 328); // extra 2 for border
       $( ".innerLiner" ).animate({marginLeft: newLeftMargin}, 500);
   } 
   } */
   
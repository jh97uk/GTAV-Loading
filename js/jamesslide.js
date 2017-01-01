var JamesSlide = function(div){
  this.scenes = [];
  this.currentScene = 0;
  var self = this;
  this.addSlide = function(bg, character, characterSize){
    if(!characterSize) characterSize = 35;
    this.scenes.push({background:bg, character:character, characterSize:characterSize});
  };

  this.initSlides = function(){
    for(var i = 0; i < this.scenes.length; i++){
      $("#slides").append("<div class='slide' index="+ i +"><img id='artwork' src='"+ this.scenes[i]["background"] +"' /><img id='character' src='"+ this.scenes[i]["character"] +"' style='width:"+ this.scenes[i]["characterSize"] +"%' /></div>");
      if(i == 0){
        $("#slides .slide[index="+ 0 +"]").css("display", "block");
      }
    }
    $("#"+ div +" .slide #artwork").bind("transitionend", function(){
      $("#"+ div +" .slide[index="+ self.currentScene +"]").fadeOut(1200, function(){
        $("#"+ div +" .slide[index="+ self.currentScene +"] #artwork").removeClass("trans");
        $("#"+ div +" .slide[index="+ self.currentScene +"] #character").removeClass("trans");
        self.currentScene = self.currentScene + 1;
        if(self.currentScene >= self.scenes.length){
          self.currentScene = 0;
        }
        $("#"+ div +" .slide[index="+ self.currentScene +"]").fadeIn(1200, function(){
          $("#"+ div +" .slide[index="+ self.currentScene +"] #artwork").toggleClass("trans");
          $("#"+ div +" .slide[index="+ self.currentScene +"] #character").toggleClass("trans");
        });
      });
    });
  };
};

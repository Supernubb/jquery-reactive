var State = {
  num: 0,
  firstName: "",
  lastName: "",
  titleColor: "black",
  updateState: function(key, value){
    this[key] = value;
        
    $("[data-text]").each(function(index, elem){
      var tag = $(elem).attr("data-tag");
      $(elem).text(State[tag]);
    });
    
    $("[data-color]").each(function(index, elem){
      var tag = $(elem).attr("data-tag");
      $(elem).attr("data-color", State[tag]);
    });
  }
};

$(document).ready(function(){
  State.updateState();
});

$("#inc").on("click", function(){
  State.updateState("num", State.num + 1)
});

$("#dec").on("click", function(){
  State.updateState("num", State.num - 1)
});

$("#firstNameInput").on("input", function(){
  State.updateState("firstName", $(this).val() )
});

$("#lastNameInput").on("input", function(){
  State.updateState("lastName", $(this).val() )
});

$('[class^=button]').on("click", function(e) {
  State.updateState('titleColor', e.target.innerText);
});
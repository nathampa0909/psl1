$(document).ready(function() {
  $("#experiencia").click(function() {
    //$("#conteudo").html("Este é o novo texto heehe!");
    removeAllActive();
    $("#experiencia").addClass("active");
  });

  $("#home").click(function() {
    //$("#conteudo").html("Este é o novo texto heehe!");
    removeAllActive();
    $("#home").addClass("active");
  });

  $("#formacao").click(function() {
    //$("#conteudo").html("Este é o novo texto heehe!");
    removeAllActive();
    $("#formacao").addClass("active");
  });

  $("#habilidades").click(function() {
    //$("#conteudo").html("Este é o novo texto heehe!");
    removeAllActive();
    $("#habilidades").addClass("active");
  });

  function removeAllActive() {
    var id = ['#experiencia', '#home', '#habilidades', '#formacao'];
    for(var i = 0; i < id.length; i++) {
    console.log(i + " " + id[i]);
      $(id[i]).removeClass("active");
    }
  }
});

$(document).ready(function() {
  $("#experiencia").click(function() {
    //$("#conteudo").html("Este é o novo texto heehe!");
    removeAllActiveClasses();
    $("#experiencia").addClass("active");
  });

  $("#home").click(function() {
    //$("#conteudo").html("Este é o novo texto heehe!");
    removeAllActiveClasses();
    $("#home").addClass("active");
  });

  $("#formacao").click(function() {
    //$("#conteudo").html("Este é o novo texto heehe!");
    removeAllActiveClasses();
    $("#formacao").addClass("active");
  });

  $("#habilidades").click(function() {
    //$("#conteudo").html("Este é o novo texto heehe!");
    removeAllActiveClasses();
    $("#habilidades").addClass("active");
  });
});

function removeAllActiveClasses() {
  var id = ['#experiencia', '#home', '#habilidades', '#formacao'];
  for(var i = 0; i < id.length; i++) {
  console.log(i + " " + id[i]);
    $(id[i]).removeClass("active");
  }
}

function changeClassBar() {
    var x = document.getElementById("menu");
    if (x.className === "sidebar") {
        x.className += " responsive";
    } else {
        x.className = "sidebar";
    }
}

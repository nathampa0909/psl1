$(document).ready(function() {
  $("#experiencia").click(function() {
    removeAllActiveClasses();
    removeAllFadeClasses();
    $("#experiencia").addClass("active");
    $("#cexperiencia").fadeIn(1500);
  });

  $("#home").click(function() {
    removeAllActiveClasses();
    removeAllFadeClasses();
    $("#home").addClass("active");
    $("#chome").fadeIn(1500);
  });

  $("#formacao").click(function() {
    removeAllActiveClasses();
    $("#formacao").addClass("active");
    $("#formacao").fadeIn(1500);
  });

  $("#habilidades").click(function() {
    removeAllActiveClasses();
    $("#habilidades").addClass("active");
    $("#habilidades").fadeIn(1500);
  });
});

function removeAllActiveClasses() {
  var id = ['#experiencia', '#home', '#habilidades', '#formacao'];
  for(var i = 0; i < id.length; i++) {
    $(id[i]).removeClass("active");
  }
}

function removeAllFadeClasses() {
  var id = ['#cexperiencia', '#chome', '#chabilidades', '#cformacao'];
  for(var i = 0; i < id.length; i++) {
    $(id[i]).fadeOut("slow");
  }
}

function changeClassBar() {
    var element = document.getElementById("menu");
    if (element.className === "sidebar") {
        element.className += " responsive";
    } else {
        element.className = "sidebar";
    }
}

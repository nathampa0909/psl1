// Funções auxiliares a troca de menu
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
    removeAllFadeClasses();
    $("#formacao").addClass("active");
    $("#cformacao").fadeIn(1500);
  });

  $("#habilidades").click(function() {
    removeAllActiveClasses();
    removeAllFadeClasses();
    $("#habilidades").addClass("active");
    $("#chabilidades").fadeIn(1500);
  });
});

// Remover todas as classes ativas do menu
function removeAllActiveClasses() {
  var id = ['#experiencia', '#home', '#habilidades', '#formacao'];
  for(var i = 0; i < id.length; i++) {
    $(id[i]).removeClass("active");
  }
}

// Remover com fade todas as classes
function removeAllFadeClasses() {
  var id = ['#cexperiencia', '#chome', '#chabilidades', '#cformacao'];
  for(var i = 0; i < id.length; i++) {
    $(id[i]).fadeOut("slow");
  }
}

// Alterar a classe da sidebar para modo responsivo
function changeClassBar() {
  var element = document.getElementById("menu");
  if (element.className === "sidebar") {
    element.className += " responsive";
  } else {
    element.className = "sidebar";
  }
}

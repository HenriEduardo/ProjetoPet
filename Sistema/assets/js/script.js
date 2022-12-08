$(document).ready(function(){

    $("section").load("admin/agenda.html");

    $("#menu-home").click(function (){
        $("section").load("pages/home.html");
    });

    $("#agenda").click(function(){
        $("section").load("admin/agenda.html", function(){
            $("#criarAgenda").click(function(){
                $("section").load("admin/criarAgenda.html", function(){
                    $("#btn").click(function(){
                        literal();
                    });
                });
            });
        });
    });

    $("#atendimento").click(function(){
        $("section").load("admin/atendimento.html");
    });

    $("#servicos").click(function(){
        $("section").load("admin/servicos.html");
    });

    $("#clientes").click(function(){
        $("section").load("admin/clientes.html");
    });

    $("#tipoServicos").click(function(){
        $("section").load("admin/tipoServicos.html");
    });

    $("#btn").click(function(){
        $("section").load("admin/agenda.html");    
    });
  
});

function literal(){
    var agenda = {
        nome : $("#nome").val(),
        nomePet : $("#nomePet").val(),
        servico : $("#servico").val()
    }
    $("section").load("admin/agenda.html", function(){
        $("#tdNome").html(agenda.nome);
        $("#tdNomePet").html(agenda.nomePet);
        $("#tdServico").html(agenda.servico);
    });
}
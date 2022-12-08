$(document).ready(function(){

    $("section").load("pages/home.html");

    $("#menu-home").click(function (){
        $("section").load("pages/home.html");
    })

    $("#menu-componente").click(function(){
        $("section").html("<table></table>");
        $("table").html(listComponent(data));

    })

})

const listComponent = (data) => {
    return data.map((item) => {
      return (
        `
        <tr>
          <td>${ item.id }</td>
          <td>${ item.name }</td>
        </tr>
        `
      )
    }).join('')
}

const data = [
    {
      name: 'João',
      id: '1'
    },
    {
      name: 'Manuel',
      id: '2'
    },
    {
      name: 'Pedro',
      id: '3'
    },
    {
      name: 'José',
      id: '4'
    }
  ]
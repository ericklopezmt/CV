function trarInformacionCuatrimotos(){
    $.ajax({
        url:"https://ga6cc87df47e8c0-gp43i4w14frinx47.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/quadbike/quadbike",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCuatrimotos(respuesta.items);
        }
    });
}

function pintarRespuestaCuatrimotos(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}

/////////////////////////get clientes/////////////////////
function traerInformacionClientes(){
    $.ajax({
        url:"https://ga6cc87df47e8c0-gp43i4w14frinx47.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta.items);
        }
    });
}

function pintarRespuestaClientes(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").append(myTable);
}
///////////////////get mensajes/////////////////////////////////
function traerInformacionMensajes(){
    $.ajax({
        url:"https://ga6cc87df47e8c0-gp43i4w14frinx47.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta.items);
        }
    });
}

function pintarRespuestaMensajes(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").append(myTable);
}
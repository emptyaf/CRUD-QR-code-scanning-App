
$("#add_laptop").submit(function(event){
    alert("Data inserted successfully");
})

$("#update_laptop").submit(function(event){
    event.preventDefault();

    var unindexed_array = $("#update_laptop").serializeArray();
    var data = {}
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
    console.log(data);

    var request = {
        "url" : `http://localhost:3000/api/laptop/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data update successfully");
    })
})


if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id");
        var request = {
            "url" : `http://localhost:3000/api/laptop/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this laptop?")){
            $.ajax(request).done(function(response){
                alert("Data deleted successfully!");
                location.assign('http://localhost:3000');
            })
        }
    })
  
}

if(window.location.pathname == "/get_laptop"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id");
        var request = {
            "url" : `http://localhost:3000/api/laptop/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this laptop?")){
            $.ajax(request).done(function(response){
                alert("Data deleted successfully!");
                location.assign('http://localhost:3000');
            })
        }
    })
  
}

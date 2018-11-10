$("#newBurgerSubmit").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burgerField").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function(){
            console.log("New burger added");
            location.reload();
        }
    );
});


    $(".devourButton").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function(){
                console.log("Munched", id);
                location.reload();
            }
        );
    });
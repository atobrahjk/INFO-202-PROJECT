
var searchBtn = document.getElementById("searchBtn");

if (searchBtn) {
    searchBtn.addEventListener("click", function() {
        var recipe = document.getElementById("recipeInput").value;
        var results = document.getElementById("results");

        if (recipe == "") {
            results.textContent = "Please enter a recipe name.";
        } else {
            results.textContent = "You searched for: " + recipe;
        }
    });
}

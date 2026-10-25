
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
var clearBtn = document.getElementById("clearBtn");

if (clearBtn) {
    clearBtn.addEventListener("click", function() {
        document.getElementById("recipeInput").value = "";
        document.getElementById("results").textContent = "";
    });
}
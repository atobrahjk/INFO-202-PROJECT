const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {
  searchBtn.addEventListener("click", async function () {
    const recipe = document.getElementById("recipeInput").value.trim();
    const results = document.getElementById("results");

    if (recipe === "") {
      results.textContent = "Please enter a recipe name.";
      return;
    }

    results.textContent = "Searching for recipes...";

    try {
      const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + encodeURIComponent(recipe);
      const response = await fetch(url);

      if (!response.ok) throw new Error("Search failed");

      const data = await response.json();
      results.replaceChildren();

      if (!data.meals) {
        results.textContent = "No recipes found.";
        return;
      }

      data.meals.forEach(function (meal) {
        const card = document.createElement("div");
        card.className = "card p-3 mb-3";

        const title = document.createElement("h3");
        title.textContent = meal.strMeal;

        const image = document.createElement("img");
        image.src = meal.strMealThumb;
        image.alt = meal.strMeal;
        image.className = "img-fluid rounded mb-3";

        const heading = document.createElement("h4");
        heading.textContent = "Ingredients";

        const list = document.createElement("ul");
        list.className = "text-start";

        for (let i = 1; i <= 20; i++) {
          const ingredient = meal["strIngredient" + i];
          const measure = meal["strMeasure" + i];

          if (ingredient && ingredient.trim()) {
            const item = document.createElement("li");
            item.textContent = (measure || "") + " " + ingredient;
            list.appendChild(item);
          }
        }

        const instructions = document.createElement("p");
        instructions.className = "text-start";
        instructions.textContent = meal.strInstructions;

        card.append(title, image, heading, list, instructions);
        results.appendChild(card);
      });
    } catch (error) {
      results.textContent = "Unable to load recipes. Please try again.";
    }
  });
}
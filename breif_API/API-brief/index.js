var food = document.querySelector("#pr");
var s = document.querySelector("#show");

async function search(){
var res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
data = await res.json();
food.innerHTML = `
    <select onchange="getfood(this.value)">
    ${
        data.categories.map(categories =>
        `
        <option>${categories.strCategory}</option>
            `
        )
    }
    </select>`
}
async function getfood(categorie){

    var res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`);
    var data = await res.json();
   console.log(data);
s.innerHTML = "";
data.meals.forEach(meal => {
    s.innerHTML += `
        <div id="meal" class="meal card col-6 col-md-4 col-lg-3 my-5">
            <img class="pics" src="${meal.strMealThumb}"alt="${meal.strMeal}"/>
            <div class="meal-info" data-mealID="${meal.idMeal}"
                 <h3>${meal.strMeal}</h3>
            </div> 
        </div> `
})

}

// async function loadOn()
// {
//       var res =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
//       var data = await res.json();
            
//                 s.innerHTML = data.meals.map(
//                     (meal)=>`
//                     <div class="meal col-6 col-md-4 col-lg-3 my-5">
//                     <img src="${meal.strMealThumb}"alt="${meal.strMeal}"/>
//                     <div class="meal-info" data-mealID="${meal.idMeal}">
//                     <h3>${meal.strMeal}</h3>
//                      </div> </div> `
//                 ).join("");
// }
// loadOn();
search()


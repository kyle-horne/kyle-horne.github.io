$(document).ready(function() {
	$(".navbar-nav a").on("click", function(){
	   $(".navbar-nav").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	});
});

SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})

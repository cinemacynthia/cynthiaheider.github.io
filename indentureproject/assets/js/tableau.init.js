//Tableau Embed function
function initViz() {
  url = "https://public.tableau.com/views/IndentureRecords-version3_0/Genderbymonthandyear",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "400px",
  };
  viz = new tableau.Viz(tabGenderMonthYear, url, options);

  url = "https://public.tableau.com/views/IndentureRecords-version3_0/Genderbymonthandyearandbytype",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "400px",
  };
  viz = new tableau.Viz(tabGenderMonthYearType, url, options);

  url = "https://public.tableau.com/views/IndentureRecords-version3_0/GenderofindentureGenderofmaster",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "400px",
  };
  viz = new tableau.Viz(tabGenderIndentureMaster, url, options);

  url = "https://public.tableau.com/views/IndentureRecords-version3_0/GenderandLocation",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "400px",
  };
  viz = new tableau.Viz(tabGenderLocation, url, options);


}
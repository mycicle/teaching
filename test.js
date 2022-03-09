//Establish what columns you will use for your app.
var countries = [(getColumn("COVID-19 Cases per Country", "Country"))];
var totalConfirmedCases = [(getColumn("COVID-19 Cases per Country", "Total Confirmed Cases"))];
var totalDeaths = [(getColumn("COVID-19 Cases per Country", "Total Deaths"))];
var totalRecovered = [(getColumn("COVID-19 Cases per Country", "Total Recovered"))];
//Set Up filtered lists to correspond to each country
var filteredCountries = [];
var filteredTotalConfirmedCases = [];
var filteredTotalDeaths = [];
var filteredTotalRecovered = [];
var selectedCountry = "Afghanistan";
var percentFatality;
var percentRec = 0;
//Call function
onEvent("calButton1", "click", function( ) {
  selectedCountry = getText("countryDropdown1");
  screenSet(selectedCountry);
  //Use these variables to keep track of the total number of each type of variable
  var totalCountries = 0;
  var allCC = 0;
  var allDeaths = 0;
  var allRecovered = 0;
  //traverse the filtered countries list by keeping track of all information starting at [i]. 
  for (var i = 0; i < filteredCountries.length; i++) {
    totalCountries = totalCountries + filteredCountries [i];
    allCC = allCC + filteredTotalConfirmedCases [i] ;
    allDeaths = allDeaths + filteredTotalDeaths [i];
    allRecovered = allRecovered + filteredTotalRecovered [i];
  }
  //calculate percent fatality
  percentFatality = Math.round(allDeaths/allCC)* 100;
  //Display the output to user
  setText("fatalityOutput", "The fatality rate from COVID-19 is " + percentFatality);
});
onEvent("calButton2", "click", function( ) {
  selectedCountry = getText("countryDropdown1");
  //Use these variables to keep track of the total number of each type of variable
  var totalCountries = 0;
  var allCC = 0;
  var allDeaths = 0;
  var allRecovered = 0;
  //traverse the filtered countries list by keeping track of all information starting at [i]. 
  for (var i = 0; i < filteredCountries.length; i++) {
    totalCountries = totalCountries + filteredCountries [i];
    allCC = allCC + filteredTotalConfirmedCases[i] ;
    allDeaths = allDeaths + filteredTotalDeaths[i];
    allRecovered = allRecovered + filteredTotalRecovered[i];
  }
  //Calculate the percent of recovery by dividing those recovered by the total of cases.
  percentRec = Math.round(allRecovered/allCC) * 100;
  //Give the user their output
  setText("recoveryOutput", "The fatality rate from COVID-19 is " + percentRec);
});
//Change screens when the recovery button is clicked
onEvent("recoveryButton", "click", function( ) {
  setScreen("recoveryRate");
});
//Change screens when the fatality button is clicked
onEvent("fatalityButton", "click", function( ) {
  setScreen("fatalityRate");
});
//Create a function
function screenSet(selectedCountry) {
  for (var i = 0; i < countries.length; i++) {
    var country = countries[i];
    if (country == selectedCountry) {
      //add the information to each filtered list if the country is the same as the user's selected country
      appendItem(filteredCountries, countries[i]);
      appendItem(filteredTotalConfirmedCases, totalConfirmedCases[i]);
      appendItem(filteredTotalDeaths, totalDeaths[i]);
      appendItem(filteredTotalRecovered, totalRecovered[i]);
    }
  }
}


//paste volunteer info
var volunteers;
var counter=0;
var person;

function useInfo() {
    document.getElementById("info-button").onclick = function() {useInfo()};
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    

    if ((name && email) == ""){

    } else {

        alert("Thank you " + name + "! We will send an email to " + email + " shortly!");
    }
}


//Atlantic County
var Atlantic = ["Shelter 1: Emergency Shelter - S 16th St", "\nShelter 2: Family Promise of Atlantic County"];
var AtlanticCounty = ["Shelter 1: Emergency Shelter - S 16th St", "\nShelter 2: Family Promise of Atlantic County"];

//Bergen County
var Bergen = ["Shelter 1: Emergency Housing / Shelter", "\nShelter 2: Motel Placement Program"];
var BergenCounty = ["Shelter 1: Emergency Housing / Shelter", "\nShelter 2: Motel Placement Program"];


//Burlington County
var Burlington = ["Shelter 1: Belmont Homes Special Services", "\nInterfaith Hospitality Network"];
var BurlingtonCounty = ["Shelter 1: Belmont Homes Special Services", "\nInterfaith Hospitality Network"];

//Camden County
var Camden = ["Shelter 1: Warming Centers", "\nShelter 2: RAIN (Reaching Adolescents In Need) Center"];
var CamdenCounty = ["Shelter 1: Warming Centers", "\nShelter 2: RAIN (Reaching Adolescents In Need) Center"];

//Capemay County
var Capemay = ["Shelter 1: Catholic Social Services Cape May", "\nShelter 2: Family Shelter"];
var CapemayCounty = ["Shelter 1: Catholic Social Services Cape May", "\nShelter 2: Family Shelter"];

//Cumberland County
var Cumberland = ["Shelter 1: Martin Luther King Academy", "\nShelter 2: Cumberland Family Shelter"];
var CumberlandCounty = ["Shelter 1: Martin Luther King Academy", "\nShelter 2: Cumberland Family Shelter"];

//Essex County
var Essex = ["Shelter 1: Goodwill Rescue Mission Inc.", "\nShelter 2: ANSWERS Moving Forward Inc."];
var EssexCounty = ["Shelter 1: Goodwill Rescue Mission Inc.", "\nShelter 2: ANSWERS Moving Forward Inc."];

//Gloucaster County
var Gloucaster = ["Together Youth Shelter", "\nShelter 2: Center for Family Services"];
var GloucasterCounty = ["Together Youth Shelter", "\nShelter 2: Center for Family Services"];

//Hudson County
var Hudson = ["Shelter 1: St. Lucy's Emergency Shelter", "\nShelter 2: Hope House"];
var HudsonCounty = ["Shelter 1: St. Lucy's Emergency Shelter", "\nShelter 2: Hope House"];

//Hunterdon County
var Hunterdon = ["Shelter 1: Hunterdon Youth Services", "\nShelter 2: Interfaith Hospitality Network"];
var HunterdonCounty = ["Shelter 1: Hunterdon Youth Services", "\nShelter 2: Interfaith Hospitality Network"];

//Mercer County
var Mercer = ["Shelter 1: Cold Weather Oveflow Shelter", "\nShelter 2: Hope House"];
var MercerCounty = ["Shelter 1: Cold Weather Oveflow Shelter", "\nShelter 2: Hope House"];

//Middlesex County
var Middlesex = ["Shelter 1: Coming Home of Middlesex County", "\nShelter 2: Homefirst Interfaith Housing & Family Services, Inc"];
var MiddlesexCounty = ["Shelter 1: Coming Home of Middlesex County", "\nShelter 2: Homefirst Interfaith Housing & Family Services, Inc"];

//Monmouth County
var Monmouth = ["Shelter 1: Family Promise of Monmouth County", "\nShelter 2: Easter Seals New Jersey"];
var MonmouthCounty = ["Shelter 1: Family Promise of Monmouth County", "\nShelter 2: Easter Seals New Jersey"];

//Morris County
var Morris = ["Shelter 1: Family Promise of Morris County", "\nShelter 2: Homeless Solutions"];
var MorrisCounty = ["Shelter 1: Family Promise of Morris County", "\nShelter 2: Homeless Solutions"];

//Passaic County
var Passaic = ["Shelter 1: Community Service Program Assistance", "\nShelter 2: Hope Through Care"];
var PassaicCounty = ["Shelter 1: Community Service Program Assistance", "\nShelter 2: Hope Through Care"];

//Salem County
var Salem = ["Shelter 1: Family Promise of Salem County", "\nShelter 2: Salem County Women's Services"];
var SalemCounty = ["Shelter 1: Family Promise of Salem County", "\nShelter 2: Salem County Women's Services"];

//Somerset County
var Somerset = ["Shelter 1: Samaritan Homeless Interim", "\nShelter 2: Naomi's Way Transitional Housing"];
var SomersetCounty = ["Shelter 1: Samaritan Homeless Interim", "\nShelter 2: Naomi's Way Transitional Housing"];

//Sussex County
var Sussex = ["Shelter 1: Family Promise of Sussex County", "\nShelter 2: Amazing Grace Mission"];
var SussexCounty = ["Shelter 1: Family Promise of Sussex County", "\nShelter 2: Amazing Grace Mission"];

//Union County
var Union = ["Shelter 1: Family Promise of Union County", "\nShelter 2: Turning Point Community Services - Support Services"];
var UnionCounty = ["Shelter 1: Family Promise of Union County", "\nShelter 2: Turning Point Community Services - Support Services"];

//Warren County
var Warren = ["Shelter 1: St Anne's Center, Grandma's House", "\nShelter 2: Safe Harbor Easton"];
var WarrenCounty = ["Shelter 1: St Anne's Center, Grandma's House", "\nShelter 2: Safe Harbor Easton"];

function findShelter() {

    document.getElementById("output").innerHTML = "";
    var output = document.getElementById("town").value;
    if(output == "Atlantic") {
        document.getElementById("output").innerHTML = Atlantic;
    } 
    else if(output == "Bergen") {

        document.getElementById("output").innerHTML = Bergen;

    } else if(output == "Burlington") {

        document.getElementById("output").innerHTML =  Burlington;
 
    } else if(output == "Camden") {

        document.getElementById("output").innerHTML =  Camden;
 
    } else if(output == "Capemay") {
 
        document.getElementById("output").innerHTML = Capemay;
 
    } else if(output == "Cumberland") {
 
        document.getElementById("output").innerHTML = Cumberland;
 
    } else if(output == "Essex") {
 
        document.getElementById("output").innerHTML = Essex;
        
    } else  if(output == "Gloucaster") {
 
        document.getElementById("output").innerHTML = Gloucaster;
        
    } else if(output == "Hudson") {
 
       document.getElementById("output").innerHTML = Hudson;
       
    } else if(output == "Hunterdon") {

        document.getElementById("output").innerHTML = Hunterdon;
 
    } else if(output == "Mercer") {
 
        document.getElementById("output").innerHTML = Mercer;
 
    } else if(output == "Middlesex" ) {
 
       document.getElementById("output").innerHTML = Middlesex;
 
    } else if(output == "Monmouth") {
     
       document.getElementById("output").innerHTML = Monmouth;
 
    } else if(output == "Morris") {
       document.getElementById("output").innerHTML = Morris;

    } else if(output == "Passaic") {

     document.getElementById("output").innerHTML = Passaic;

    } else if(output == "Salem") {

        document.getElementById("output").innerHTML = Salem;
    } else if(output == "Somerset") {

       document.getElementById("output").innerHTML = Somerset;

    } else if(output == "Sussex") {

        document.getElementById("output").innerHTML = Sussex;

    } else if(output == "Union") {

        document.getElementById("output").innerHTML = Union;

    } else if(output == "Warren") {

      document.getElementById("output").innerHTML = Warren;

    }

}    
    
    
    
    









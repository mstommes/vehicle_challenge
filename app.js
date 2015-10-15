//Declare any variables as global
var carInfo;
var carInfoArray;
var year;
var carMake;
var carModel;

//make sure the page loads and then do stuff
$(document).ready(function(){
    $('button').click(".submit", function (event){
        event.preventDefault();
        carInfo = $('.carInfo').val();
        carInfoArray = carInfo.split(" ");
        console.log(carInfoArray);
        //use a regular expression on the car data
        //add an if statement to check if year length is 2, 3, or 4 if 2 add 20 to it, if 3 remove first character and add 20 to it
        year= carInfoArray[0];
        carMake = carInfoArray[1];
        carModel = carInfoArray[2];
        //reg expression to change date format
        //function changeDate (array){
        //    return array[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        //}


        $('.clearButton').click( function(){
          $('.carResults').remove();
        });

        $.ajax({
            type: "GET",
            url:"http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&make="+carMake+"&year="+year+"&model="+carModel,
            dataType: "json",
            success: function(data) {
             callback(data);

            },
            error: function(){
                alert("Sorry, no data was found based on your search.");
            }

        });

});

function callback(data) {
    var response = data;
    var trimsArray = response.Trims;
    var car = trimsArray[0];
    console.log(car);
        var $results = $('.carResults');
        $results.append('<p>The Vehicle Make is: ' + carMake + '</p>');
        $results.append('<p>The Vehicle Model is: ' + carModel + '</p>');
        $results.append('<p>The Vehicle Year is: ' + year + '</p>');
        $results.append('<p>The Vehicle Trim is: ' + car.model_trim + '</p>');
        $results.append('<p>The Vehicle Engine Type is: ' + car.model_engine_type + '</p>');
        $results.append('<p>The Vehicle Engine Displacement (in liters)is: ' + car.displacement+ '</p>');
        $results.append('<p>The Vehicle Horsepower is: ' + car.horsepower + '</p>');
        $results.append('<p>The Vehicle Transmission Type is: ' + car.model_transmission_type + '</p>');

    }
});


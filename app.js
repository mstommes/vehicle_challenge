var carMake,
    carModel,
    inputYear;

$(document).ready(function () {
    $('button').click(".submit", function (event) {
        event.preventDefault();

        var carInfo = $('.carInfo').val();//TAKE VALUE IN INPUT FIELD FROM HTML FORM

        var carInfoArray = carInfo.split(" ");//PUT INFO IN ARRAY SO IT'S EASIER TO WORK WITH

        //get last 2 digits of year
        // if the length not 4 then
        //remove all apostrophes if there are any
        //if input is greater than last 2 digits of current year, add 19
        // else add 20

        var date = new Date();  //declare new data object
        var year = date.getFullYear().toString();//set to current year
        var shortYear = parseInt(year.replace("20", ""));//creating an abbreviated version of the year

        inputYear = carInfoArray[0];//sets the first item in the user input to inputYear
        carMake = carInfoArray[1];
        carModel = carInfoArray[2];

        if (inputYear.length < 4) {
            inputYear = inputYear.replace("'", "");  //this replaces the apostrophe if user adds one with an empty string

            if (inputYear > shortYear) {
                inputYear = "19" + inputYear;
            } else {
                inputYear = "20" + inputYear;
            }
        }

        $('.clearButton').click(function () {
            $('.carResults').remove();
        });

        $.ajax({
            type: "GET",
            url: "http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&make=" + carMake + "&model=" + carModel + "&year=" + inputYear,
            dataType: "json",
            success: function (data) {
                callback(data);
            },
            error: function () {
                alert("Sorry, no data was found based on your search.");
            }
        });
    });

    function callback(data) {
        var trimsArray = data.Trims;//original before the map function
        console.log(trimsArray);
        if (trimsArray.length <= 0){
            alert("Sorry No Vehicle was found");
        } else {
            data.Trims.map(function (trim) {//map function on the data.Trims iterates through the array full of objects
                console.log(trim);
                //if (trim == []){
                //    alert("Sorry No Vehicle was found");
                //} else {
                var results = $('.carResults');
                results.append('<p> ' + "Make: " + trim.model_make_id + " Model: " + trim.model_name + " Year: " + trim.model_year + " Trim: " + trim.model_trim + " Engine Type: " + trim.model_engine_type + " Transmission: " + trim.model_transmission_type + '</p>');
                //results.append('<p>Vehicle Model: ' + trim.model_name+ '</p>');
                //results.append('<p>Vehicle Year: ' + trim.model_year+ '</p>');
                //results.append('<p>Vehicle Trim: ' + trim.model_trim + '</p>');
                //results.append('<p>Vehicle Engine Type: ' + trim.model_engine_type + '</p>');
                //results.append('<p>Vehicle Engine Displacement (in liters): ' + "Not Available" + '</p>');
                //results.append('<p>Vehicle Horsepower: ' + "Not Available" + '</p>');
                //results.append('<p>Vehicle Transmission Type: ' + trim.model_transmission_type + '</p>');
            });
            //$('.carResults').first().addClass("active");
            //
            //$('.carResults').append("<button id='next' class='scrollButton'>Previous Item</button>");
            //$('.carResults').append("<button id='previous' class='scrollButton'>Next Item</button>");


            //    $("button").click('#next', function () {
            //        var currentClass = $(".active");
            //        var nextClass = currentClass.next();
            //        if (nextClass.length === 0) {
            //            nextClass = $('.carResults').first();
            //        }
            //        currentClass.removeClass("active");
            //        nextClass.addClass("active");
            //    });
            //
            //
            //    $("button").click('#previous', function () {
            //        var currentClass = $(".active");
            //        var previousClass = currentClass.prev();
            //        if (previousClass.length === 0) {
            //            previousClass = $('.carResults').last();
            //        }
            //        currentClass.removeClass("active");
            //        previousClass.addClass("active");
            //    });
        }
    }
});
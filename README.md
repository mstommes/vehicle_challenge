# vehicle_api_challenge

The challenge--Access the carquery api using  a search function, then returning selected data for a car's year, make and model
from that api.


#Requirements:
-Data input must be in a single text box
-A search button must initiate a query
    --Logic point w/Requirement:
                -The search logic must handle different data formats 2011, '11, and 11

--Must handle errors: if a user enters bad data or if no results are found
--Must return the following properties:
       Year, Make, Model, Trim, Engine Type, Engine Displacement in Liters, Horsepower, Transmission Type
                --> if multiple trims return all trims



#Challenges:
       The biggest challenge of this project was figuring out how to return the data.  I was able to do an AJAX call and
       return data but that data came in the format of objects, nested in an array, nested in an object.

       My mistake was the difference between using a small t and a large T when calling trims.  Once I was able to
       get the data into their individual objects I was able to append it to the page

       I used the directions on the carquery api site but when I tried them, the api said that there was no data or
       the api was not found so I used the ajax call with the url to return data.


       The second challenge was the data formatting.  I wasn't sure if I should attempt to use a regular expression
       or go the route I went with setting a new data object and calling the current year.

       The 3rd challenge and a resolution I still do not have is where the Horsepower and Engine Displacement Data lives
       as this information was not included in the API when the object was returned but does seem to be part of the query
       data on the carquery search example page.


#Fun (yes fun)  It was neat to make a call to such a data rich site and have information come back.  I also enjoyed the logic
behind separating out the individual string items when a user submitted their input as one field.  However, this project could become
even more detailed as logic could be added to changed user input of Chevy to Chevrolet, etc.
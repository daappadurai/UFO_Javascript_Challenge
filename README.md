# **UFO Javascript Challenge**

## **Overview:**

The goal of this project is to build a website on UFO sightings using HTML, CSS and javascript. The javascript is specifically used to display a table that is user defined by taking in user defined inputs. The details of the website are listed below:

## **Building a user defined table using Javascript:**

The d3 library is used to create a dynamic table on the webpage. The Javascript code has two sections. The first section deals with setting up the entire body of information that goes into the table. The second section deals with the filtering of the table based on user defined inputs.

## **Section 1: buildTable() function:**
The build table function takes in the input data which is the javascript file on various UFO sightings. Each sighting is contained within in a row of the new table that is being built. The ForEach function is called within the build table function which appends “tr” to each row and “td” to each cell that will contain each object within the object within the javascript file. 

## **Section 2: updateFilter():**
The number of filters depends upon the number of user defined inputs. In this case, it includes date, city, state, country, and shape, therefore five filters in total. Initially the filter data is set to the unfiltered table data, which is then filtered by the first filter date, then this filter is fed to the second filter that will filter for and sequentially to shape. The final filter data is given as the data input for the buildTable() function.

The d3 library is set to listen to “#filterbutton” click. Upon #filterbutton click, the updateFilter() function is activated and the user defined inputs are used to present the filtered data. Without the filter the entire table is presented. 

## **Summary:**
The website displays a dynamic table that displays UFO sightings based on user defined inputs. The drawback would be that the data is scant and all five inputs should exactly match the data in the table and it may not be possible to know all the five inputs for all sighting as fresh user of the website. Two recommendations would be to increase the amount of data. The other recommendation is to fix the filter search section to align the boxes neatly.  

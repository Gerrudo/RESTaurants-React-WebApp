# RESTaurants-React-WebApp
Frontend Web Application built on the React Framework

## Requirements/Goals

- [x] Create existing bootstrap page to pass data into, splitting different areas into the page into React Components
    - [x] Create Main Page layout (Nav, Title, Headings, Footer)
    - [x] Create Information Tab
    - [x] Create Reviews Tab
    - [x] Create Photos Tab
    - [x] Create Maps Tab
- [x] Have data fields display on button click
- [x] Replace fetch() (GET) method to a POST using Axios, XHR or Request
- [x] Create frontend get request to our Express API
- [x] Have loading spinner while getting request
- [x] Populate page with data for our 4 components, info, reviews, photos and maps
- [x] Have data from our API update the page using react
- [ ] Impliment shifting cards feature for recent request, this requires db implimentation in the backend
- [ ] Test for bugs (page spam, invalid browser, no coordinates, getCoordinates fail)
- [ ] Write catches/exceptions for any bugs found
- [ ] Import New UI 
    - [ ] Import CSS for suitable classes
    - [ ] Recreate elements if need be
    - [ ] Make sure classes on all elements are aligned with new CSS

## Bugs

- [x] Error when info.result.opening_hours.weekday_text; or any other object param is undefined
    Bug: Upon rendering a new compoment, if any object parameter is undefined, this will cause the page to crash
    Fix: Write exceptions for if any data is undefined to either not show the field, or upddate with 'No Information'
- [x] Loading Spinner stuck rendering on page render
    Bug: The loading spinner only renders once when the page is loaded and not at all when the button for the request is clicked again.
    Fix: Revise x ? y : xy in render(), we should be able to set dataReady: false to stop the comp from rendering, and setState on button click for dataReady: true, but this causes a crash, we may need to setState with info again also.
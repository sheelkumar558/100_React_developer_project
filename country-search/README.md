# Web Country Finder

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
✅ able to submit the app - 1 (default)
✅ Check if the api call made  - 2 mark
✅ Student is able to loop through the data and append in the dom - 2 marks
✅ Used grid to show 4 cards per row - 1 mark
✅ Check the Filter Part - 1 mark
✅ Check sorting Part - 1 mark
✅ Check sorting+filter - 2 mark

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

### `Instructions`

- Read entire question carefully for at-least 15 mins, understand it and then code it.
- Don’t jump directly into code.
- Commit your code every hour with proper commit message to your repository (we will monitor every commit)

# Problem Statement

- Build a Country finder app, where a user can find all countries and its info.

- Use https://restcountries.com/v3.1/all API to fetch all countries list.

- Your app will have only one page where you need to display all countries in form of cards with following information

  - Country name(h2 tag)
  - Image of flag(img tag)
  - Population(p tag)
  - Region(p tag)
  - Capital(p tag)

- In template we have a div with an id:- `all_countries`. You have to append the cards inside the div.

- Your card should look like. Please make sure you follow the tags.

  ![Screenshot 2022-09-17 at 4.03.01 PM.png](https://i.imgur.com/hxzwIG4.png)

- Your app should also have sort and filtering functionality.
- In the template we have two select tags with id:- `filter_region` & `sort_population`. Use them for filtering and sorting respectively.

  - Sort by Population
  - Filter by Region
    - All (by default all the countries from the API should be displayed)
    - Africa
    - Americas
    - Asia
    - Europe
    - Oceania

- Note that sort and filter should work simultaneously.
  - Should be able to sort the filtered results and vice versa.

## Submission

- **Push your code into `masai-repo`, don’t submit personal repo links (submitting personal repo links will lead to disqualification)**
- Make sure you follow all instructions carefully.
- Submit before deadline.

## Boilerplate

- index.html
- Please ignore all the other files except for the above mentioned file.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time

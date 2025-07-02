// Create XHR object
var xhr = new XMLHttpRequest();

// Define URL of JSON file
var url = 'https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/health.json';
//var url = './health_article.json';

// Prepare GET request to the specified URL
// The open method configures an XHR request with the following parameters:
// 'GET': Specifies the HTTP method used for the request (in this case, a GET request).
// URL: Represents the URL from where you will fetch the data.
// True: Indicates if the request is asynchronous (true) or synchronous (false). 
xhr.open('GET', url, true);

// Response type specification
// Inform the xhr object that the expected response from the server
// should be in JSON format.
xhr.responseType = 'json';

// Handling the 'onload' event
// Define what should happen when the data is successfully loaded
xhr.onload = function() {
    var articles = xhr.response.articles; // Retrieve articles array from the JSON response
    var articlesDiv = document.getElementById('articles'); // Retrieve HTML element
    
    // Iterate through articles and construct HTML
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        // Title html
        var title = document.createElement('h2');
        title.textContent = article.title;

        // Description html
        var description = document.createElement('p');
        description.textContent = article.description;

        // Ways to Achieve html
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve';
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });
        
        // Benefits html
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits'
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        // Append child nodes to articleDiv parent node (single article)
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        // Append all articleDiv nodes (all articles) to articlesDiv parent node
        articlesDiv.appendChild(articleDiv);
    });
}

// Send the request
xhr.send();


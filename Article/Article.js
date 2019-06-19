// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelector('.expandButton'); // Grabs '.expandButton' elements
    this.expandButton.textContent = "expand"; // Adds 'expand' text to btn
    this.expandButton.addEventListener('click', () => this.expandArticle()); // Adds 'click' event to 'expandButton'
  }

  expandArticle() { // Toggles '.article-open' on articles
    this.domElement.classList.toggle('article-open');
  }
}


let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));
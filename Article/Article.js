// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelector('.expandButton'); // Grabs '.expandButton' elements
    this.expandButton.textContent = "Expand"; // Adds 'expand' text to btn
    this.expandButton.addEventListener('click', () => this.expandArticle()); // Adds 'click' event to 'expandButton'
  }

  expandArticle() { // Toggles '.article-open' on articles
    this.domElement.classList.toggle('article-open');
    this.domElement.classList.toggle('scroll-effect');
    this.domElement.classList.toggle('some-animation');

    if (this.expandButton.textContent == "Expand") {
      this.expandButton.textContent = "Close";
    } else {
      this.expandButton.textContent = "Expand";
    }
  }
}


let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));
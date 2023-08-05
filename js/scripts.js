function toggleMoreText() {
  var moreText = document.querySelector('.more-text');
  var readMoreBtn = document.getElementById('read-more-btn');

  if (moreText.style.display === 'none' || moreText.style.display === '') {
      moreText.style.display = 'block';
      readMoreBtn.textContent = 'Read Less';
  } else {
      moreText.style.display = 'none';
      readMoreBtn.textContent = 'Read More';
  }
}
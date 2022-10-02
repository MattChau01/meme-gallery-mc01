var $gallery = document.querySelector('main');

var imageUrls = [
  'https://64.media.tumblr.com/a0c0275bb8e5a2cc4e6e86f84ec3e847/cf7d2df292c3ecad-78/s1280x1920/d5b514d34d08133c964dd9620c35ab43d76ceb74.png',
  'https://pbs.twimg.com/media/EfH_3inVoAEz7Po.jpg',
  'https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg',
  'https://i.pinimg.com/originals/0e/8b/7d/0e8b7d2c53195177a326670609fcb7ea.jpg',
  'https://pics.me.me/i-am-dead-inside-17515677.png',
  'https://www.21cpw.com/wp-content/uploads/2016/09/batman-blank-meme-2.jpg',
  'https://i.kym-cdn.com/editorials/icons/original/000/000/496/cover14.jpg',
  'https://pbs.twimg.com/media/Fac2xwYaMAYE29e?format=jpg&name=small',
  'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MDI3NjAwMjI4OTg0MTky/friday-hot-clicks-nba-finals-cavaliers-warriors-jr-smith-memesjpg.jpg',
  'https://media.stadiumtalk.com/1a/21/1a21fbc8e6ed402f9a1758b30a38c884.jpeg',
  'https://ih1.redbubble.net/image.907812001.1782/st,small,507x507-pad,600x600,f8f8f8.jpg'
];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput !== ' ') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = ' ';
    return updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = ' ';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();

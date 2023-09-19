const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
    caption: 'This is the first image.',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    caption: 'This is the second image.',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    caption: 'This is the third image.',
  },
];

function generateGalleryMarkup(images) {
    return images.map((image) => `
        <li class="gallery-item">
            <img src="${image.url}" alt="${image.alt}" class="gallery-image">
            <div class="caption">${image.caption}</div>
        </li>
    `).join('');
}

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', generateGalleryMarkup(images));

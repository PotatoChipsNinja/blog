/* global Fancybox */
/* 重写next主题里的third-party/fancybox.js，加入图片标题 */

document.addEventListener('page:loaded', () => {

  /**
   * Wrap images with fancybox.
   */
  document.querySelectorAll('.post-body :not(a) > img, .post-body > img').forEach(image => {
    const imageLink = image.dataset.src || image.src;
    const imageWrapLink = document.createElement('a');
    imageWrapLink.classList.add('fancybox');
    imageWrapLink.href = imageLink;
    imageWrapLink.setAttribute('itemscope', '');
    imageWrapLink.setAttribute('itemtype', 'http://schema.org/ImageObject');
    imageWrapLink.setAttribute('itemprop', 'url');

    let dataFancybox = 'default';
    if (image.closest('.post-gallery') !== null) {
      dataFancybox = 'gallery';
    } else if (image.closest('.group-picture') !== null) {
      dataFancybox = 'group';
    }
    imageWrapLink.dataset.fancybox = dataFancybox;

    const imageTitle = image.title || image.alt;
    if (imageTitle) {
      imageWrapLink.title = imageTitle;
      // Make sure img captions will show correctly in fancybox
      imageWrapLink.dataset.caption = imageTitle;
    }
    image.wrap(imageWrapLink);

    // 加入图片标题
    if (imageTitle) {
      const captionElement = document.createElement('p');
      captionElement.className = 'image-caption';
      captionElement.textContent = imageTitle;
      imageWrapLink.appendChild(captionElement);
    }
  });

  Fancybox.bind('[data-fancybox]');
});

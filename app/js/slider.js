'use strict';

function Slider (selector) {
  var that = this;

  var sliderEl = document.querySelector(selector),
      sliderImagesItem = [].slice.call(document.querySelectorAll('.slider__images-item'));

  var countImages = sliderImagesItem.length,
      currentSlide = 0;

  var sliderImagesItems = document.createElement('div');
      sliderImagesItems.className = 'slider__images-items';

  var sliderPagination = document.createElement('ul');
      sliderPagination.className = 'slider__pagination';

  var sliderPrev = document.createElement('button'),
      sliderNext = document.createElement('button');
      sliderPrev.className = 'slider__prev';
      sliderNext.className = 'slider__next';

  function wrapEl(elements, wrapper) {
    elements.forEach(function(el) {
      el.parentNode.insertBefore(wrapper, el);
      el.parentNode.removeChild(el);
      wrapper.appendChild(el);
    });
  }
  function createPagination() {
    var li, i, link;

    for (i = 0; i < countImages; i++) {
      li = document.createElement('li');
      link = document.createElement('a');
      link.href = "#";
      link.setAttribute('data_pagination_item', i);
      li.className = 'slider__pagination-item';
      sliderPagination.appendChild(li);
      li.appendChild(link);
    }
    sliderEl.appendChild(sliderPagination);
  }
  this.prevSlide = function () {
    currentSlide--;
    that._render();
  };
  this.nextSlide = function () {
    currentSlide++;
    that._render();
  };
  this._render = function() {
    sliderImagesItems.style.marginLeft = -(currentSlide * 600) + 'px';
  };
  sliderPrev.addEventListener('click', that.prevSlide, false);
  sliderNext.addEventListener('click', that.nextSlide, false);

  var init = function () {
    console.log('start');
    wrapEl(sliderImagesItem, sliderImagesItems);
    createPagination();
    sliderEl.appendChild(sliderPrev);
    sliderEl.appendChild(sliderNext);
  };

  init();
}

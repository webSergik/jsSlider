class Slider {
  constructor(selector) {
    this.sliderEl = document.querySelector(selector);
    this.sliderImages = document.querySelector('.slider__images');
    this.sliderImagesItem = [...document.querySelectorAll('.slider__images-item')];
    this.sliderImagesItems = document.createElement('div');
    this.sliderImagesItems.className = 'slider__images-items';
    this.sliderPagination = document.createElement('ul');
    this.sliderPagination.className = 'slider__pagination';
    this.countImages = this.sliderImagesItem.length;
    this.sliderPrev = document.createElement('button');
    this.sliderNext = document.createElement('button');
    this.sliderPrev.className = 'slider__direction-button slider__direction-button_prev-hor';
    this.sliderNext.className = 'slider__direction-button slider__direction-button_next-hor';
    this.currentSlide = 0;
    this.init();
    this.renderView(0);
  }
  init() {
    this.sliderImagesItem.forEach(el => {
      el.parentNode.insertBefore(this.sliderImagesItems, el);
      el.parentNode.removeChild(el);
      this.sliderImagesItems.appendChild(el);
    });
    this.createPagination();
    this.sliderImages.appendChild(this.sliderPrev);
    this.sliderImages.appendChild(this.sliderNext);
    this.sliderPrev.addEventListener('click', () => this.prevSlide(), false);
    this.sliderNext.addEventListener('click', () => this.nextSlide(), false);
    this.sliderPagination.addEventListener('click', (e) => this.selectIndex(e), false);
  }
  createPagination() {
    for (let i = 0; i < this.countImages; i++) {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('data_pagination_index', i);
      li.className = 'slider__pagination-item';
      link.className = 'slider__pagination-link';
      this.sliderPagination.appendChild(li);
      li.appendChild(link);
    }
    this.sliderEl.appendChild(this.sliderPagination);
  }
  selectIndex(e) {
    e.preventDefault();
    const target = e.target;
    if (target.tagName !== 'A') return;
    const action = target.getAttribute('data_pagination_index');
    this.renderView(action);
  }
  prevSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.countImages - 1;
      this.renderView(this.currentSlide);
      return;
    }
    this.currentSlide--;
    this.renderView(this.currentSlide);
  }
  nextSlide() {
    if (this.currentSlide === this.countImages - 1) {
      this.currentSlide = 0;
      this.renderView(this.currentSlide);
      return;
    }
    this.currentSlide++;
    this.renderView(this.currentSlide);
  }
  renderView(currentSlide) {
    const sliderPaginationLink = [...document.querySelectorAll('.slider__pagination-link')];
    for (let i = 0; i < this.countImages; i++) {
      this.sliderImagesItem[i].className = 'slider__images-item';
      sliderPaginationLink[i].classList.remove('slider__pagination-link_active');
    }
    this.sliderImagesItem[currentSlide].className = ('slider__images-item_active');
    sliderPaginationLink[currentSlide].classList.add('slider__pagination-link_active');
  }
}
const slider = new Slider('.slider');

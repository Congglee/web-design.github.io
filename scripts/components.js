// Script for Range Slider
const rangeSlider = document.getElementById('range-slider');
const rangeValue = document.getElementById('range-value');

rangeSlider.addEventListener('input', function () {
  rangeValue.textContent = this.value;
});

// Script for File Input
const fileInput = document.getElementById('file');
const fileName = document.getElementById('file-name');

fileInput.addEventListener('change', function () {
  if (this.files.length > 0) {
    fileName.textContent = this.files[0].name;
  } else {
    fileName.textContent = '';
  }
});

// Script for Custom Number Input
const numberValue = document.getElementById('number-value');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

increaseBtn.addEventListener('click', function () {
  const currentValue = parseInt(numberValue.value);
  const max = parseInt(numberValue.max);
  if (currentValue < max) {
    numberValue.value = currentValue + 1;
  }
});

decreaseBtn.addEventListener('click', function () {
  const currentValue = parseInt(numberValue.value);
  const min = parseInt(numberValue.min);
  if (currentValue > min) {
    numberValue.value = currentValue - 1;
  }
});

// Script for Tags Input
const tagsContainer = document.getElementById('tags-container');
const tagsInput = document.getElementById('tags-input');

tagsInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && this.value.trim() !== '') {
    e.preventDefault();
    const tag = document.createElement('div');
    tag.className = 'tag';
    tag.innerHTML = this.value.trim() + '<button class="tag-close">&times;</button>';
    tagsContainer.insertBefore(tag, tagsInput);
    this.value = '';

    const closeBtn = tag.querySelector('.tag-close');
    closeBtn.addEventListener('click', function () {
      tag.remove();
    });
  }
});

// Script for Color Picker
const colorInput = document.getElementById('color-input');
const colorPreview = document.getElementById('color-preview');
const colorValue = document.getElementById('color-value');

colorInput.addEventListener('input', function () {
  const color = this.value;
  colorPreview.style.backgroundColor = color;
  colorValue.textContent = color;
});

// Script for Tabs
const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach(button => {
  button.addEventListener('click', function () {
    const tabId = this.getAttribute('data-tab');

    // Remove active class from all buttons and content
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('active');
    });

    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });

    // Add active class to clicked button and corresponding content
    this.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});

// Script for Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function () {
    const accordionItem = this.parentElement;
    accordionItem.classList.toggle('accordion-active');
  });
});
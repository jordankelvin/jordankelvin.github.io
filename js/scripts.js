/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const texts = ["I'm a Web Developer", "Also IT Support"]; // Array teks yang ingin ditampilkan
const typingTextElement = document.getElementById('typing-text');
let index = 0;
let textIndex = 0;

function type() {
    if (index < texts[textIndex].length) {
        typingTextElement.textContent += texts[textIndex].charAt(index);
        index++;
        setTimeout(type, 150); // Ubah kecepatan mengetik di sini
    } else {
        setTimeout(erase, 1000); // Tunggu 1 detik sebelum menghapus
    }
}

function erase() {
    if (index > 0) {
        typingTextElement.textContent = texts[textIndex].substring(0, index - 1);
        index--;
        setTimeout(erase, 100); // Ubah kecepatan penghapusan di sini
    } else {
        textIndex = (textIndex + 1) % texts.length; // Pindah ke teks berikutnya
        setTimeout(type, 500); // Tunggu sebelum mulai mengetik teks berikutnya
    }
}

type(); // Mulai mengetik
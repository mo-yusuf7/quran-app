import { data } from "./constant";


const quran = document.getElementById('quran-container');
data.forEach((surahitem) => {
  const qurandolder = document.createElement('div')
  qurandolder.classList.add('surahitem');

  const surahtitle = document.createElement('h2')
  surahtitle.textContent = `${surahitem.chapter_id}. ${surahitem.surah_name}`;


  const audio = document.createElement('audio');
  audio.controls = true;
  audio.src = surahitem.audio_url;

  qurandolder.appendChild(surahtitle)
  qurandolder.appendChild(audio)
  quran.appendChild(qurandolder)

});
const $ = (selector) => document.querySelector(selector);

const reasons = [
  ["Твоя улыбка", "Потому что от мысли о ней и мне самому становится теплее."],
  ["Твоя доброта", "В тебе есть свет, который хочется беречь и замечать."],
  ["Твоё любопытство", "Мне нравится, что тебе интересно узнавать новое и открывать мир."],
  ["Твой характер", "Ты - не набор идеальных качеств, а целый удивительный человек."],
  ["Твой смех", "Особенно когда мы смеёмся над какой-нибудь абсолютной ерундой."],
  ["Наши разговоры", "Мне нравится делиться с тобой мыслями и слушать твои."],
  ["Твоя нежность", "В маленьких проявлениях заботы иногда больше всего любви."],
  ["Твоя индивидуальность", "Тебе не нужно быть похожей ни на кого другого."],
  ["Твои интересы", "Мне нравится узнавать, что увлекает именно тебя."],
  ["Твои маленькие привычки", "Даже незаметные для тебя мелочи могут быть для меня особенными."],
  ["Твоя искренность", "Мне дорого, когда мы можем быть настоящими друг с другом."],
  ["Твоя сила", "Даже если ты сама не всегда замечаешь, сколько в тебе сил."],
  ["Твоя уязвимость", "Тебе не нужно всегда быть сильной, чтобы быть любимой."],
  ["Твой взгляд на мир", "Ты замечаешь вещи, которые делают мир интереснее."],
  ["Твоё чувство юмора", "Спасибо за моменты, когда невозможно перестать улыбаться."],
  ["Твоё тепло", "С тобой даже обычный разговор может стать уютным."],
  ["Твои мечты", "Мне хочется слушать о них и видеть, как они постепенно сбываются."],
  ["Твоя неповторимость", "Такой, как ты, больше нет - и в этом вся прелесть."],
  ["Твоя забота", "Я замечаю даже маленькие проявления твоего внимания."],
  ["Наши общие моменты", "Из обычных дней складываются воспоминания, которые хочется хранить."],
  ["Твоё воображение", "С тобой можно придумать целую вселенную."],
  ["Твои эмоции", "Мне важно не только твоё счастье, но и всё, что ты чувствуешь."],
  ["Твоя смелость пробовать", "Необязательно всё уметь сразу, чтобы заслуживать гордости за себя."],
  ["Твоя загадочность", "Мне нравится, что в тебе всегда остаётся что-то, что хочется узнавать и открывать для себя."],
  ["То, как ты говоришь", "Есть слова и интонации, которые я узнаю среди тысячи."],
  ["То, что ты - это ты", "Тебе не нужно доказывать, что ты особенная."],
  ["Наше «мы»", "Мне нравится мысль, что у нас есть своя маленькая история."],
  ["Возможность расти вместе", "Я хочу, чтобы мы поддерживали мечты и развитие друг друга."],
  ["Просто потому, что люблю", "Не за список качеств. Ты дорога мне целиком, настоящая."]
];

const secretMessages = {
  sad: {
    icon: "☾",
    title: "Если тебе грустно",
    body: "Солнышко, тебе не обязательно сейчас улыбаться или делать вид, что всё хорошо. У тебя есть право уставать, грустить и просто переживать непростой день. Я не могу обещать, что всегда смогу всё исправить, но я хочу слушать тебя, быть рядом и напоминать: плохой день не делает плохой всю твою жизнь. Обнимаю тебя крепко-крепко. ♡"
  },
  miss: {
    icon: "♡",
    title: "Если ты скучаешь",
    body: "Представь, что я сейчас рядом и крепко тебя обнимаю. Если бы мог, то задержался бы в этом объятии подольше. А пока пусть это сообщение будет маленьким напоминанием: ты есть в моих мыслях, и мне хочется создавать с тобой ещё много счастливых моментов."
  },
  doubt: {
    icon: "✧",
    title: "Если ты сомневаешься в себе",
    body: "Пожалуйста, не измеряй свою ценность одним неудачным днём, ошибкой или чужим мнением. Тебе не нужно быть идеальной, чтобы заслуживать любовь, уважение и хорошее отношение. Ты можешь учиться, менять планы, ошибаться и начинать заново. Я верю, что в тебе гораздо больше, чем ты иногда сама в себе видишь."
  },
  future: {
    icon: "☄",
    title: "Немного о нашем будущем",
    body: "Мне хочется, чтобы впереди у нас было много всего: новых мест, общих историй, уютных вечеров, внезапных приключений и планов, которые мы будем воплощать шаг за шагом. Не обязательно, чтобы всё было идеально. Мне хочется, чтобы мы учились слышать друг друга, поддерживали друг друга и вместе создавали жизнь, в которой нам обоим хорошо."
  }
};

const grid = $("#reasonsGrid");
reasons.forEach(([title, detail], index) => {
  const card = document.createElement("button");
  card.className = "reason-card";
  card.type = "button";
  card.setAttribute("aria-expanded", "false");
  card.innerHTML = `<span class="number">${String(index + 1).padStart(2, "0")} / 29</span><span class="reason-title">${title}</span><span class="reason-hidden">${detail}</span>`;
  card.addEventListener("click", () => {
    const isOpen = card.classList.toggle("open");
    card.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) sparkleAt(card);
  });
  grid.appendChild(card);
});

const modal = $("#secretModal");
function openSecret(key) {
  const item = secretMessages[key];
  if (!item) return;
  $("#modalIcon").textContent = item.icon;
  $("#modalTitle").textContent = item.title;
  $("#modalBody").textContent = item.body;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  $("#modalClose").focus();
  document.body.style.overflow = "hidden";
}
function closeSecret() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.querySelectorAll("[data-secret]").forEach(button => button.addEventListener("click", () => openSecret(button.dataset.secret)));
$("#modalClose").addEventListener("click", closeSecret);
$("#modalOkay").addEventListener("click", closeSecret);
modal.addEventListener("click", event => { if (event.target.dataset.close) closeSecret(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeSecret(); });

$("#startButton").addEventListener("click", () => {
  $("#reasons").scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  burst(window.innerWidth * 0.5, window.innerHeight * 0.45, 14);
});

const audio = $("#audio");
const playButton = $("#playButton");
const seekBar = $("#seekBar");
const vinyl = $(".vinyl");
const musicHelp = $("#musicHelp");
const musicDescription = $("#musicDescription");
const trackName = $("#trackName");
const songLink = $("#songLink");
let audioAvailable = false;

audio.addEventListener("loadedmetadata", () => {
  audioAvailable = true;
  musicHelp.textContent = "Нажми ▶, чтобы послушать. Музыка запускается только по твоему желанию.";
  if (Number.isFinite(audio.duration)) seekBar.max = Math.floor(audio.duration);
});
audio.addEventListener("error", () => {
  audioAvailable = false;
  playButton.title = "Сначала добавь файл assets/song.mp3";
});
playButton.addEventListener("click", async () => {
  if (!audioAvailable && audio.readyState === 0) {
    audio.load();
    showToast("Добавь свою песню в assets/song.mp3 ♡");
    return;
  }
  if (audio.paused) {
    try { await audio.play(); } catch { showToast("Не удалось запустить аудио. Проверь файл song.mp3."); }
  } else {
    audio.pause();
  }
});
audio.addEventListener("play", () => { playButton.textContent = "Ⅱ"; vinyl.classList.add("playing"); });
audio.addEventListener("pause", () => { playButton.textContent = "▶"; vinyl.classList.remove("playing"); });
audio.addEventListener("timeupdate", () => {
  seekBar.value = Math.floor(audio.currentTime || 0);
  $("#timeLabel").textContent = `${formatTime(audio.currentTime)}${Number.isFinite(audio.duration) ? " / " + formatTime(audio.duration) : ""}`;
});
audio.addEventListener("loadedmetadata", () => { seekBar.max = Math.floor(audio.duration || 100); });
seekBar.addEventListener("input", () => { if (audioAvailable) audio.currentTime = Number(seekBar.value); });
audio.addEventListener("ended", () => { playButton.textContent = "▶"; vinyl.classList.remove("playing"); });
function formatTime(value) {
  if (!Number.isFinite(value)) return "0:00";
  const mins = Math.floor(value / 60);
  const secs = Math.floor(value % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

// To add a streaming link, set SONG_URL below to a public, direct audio URL or a song page.
const SONG_URL = "";
const SONG_TITLE = "Наша песня";
const SONG_DESCRIPTION = "Песня, которая напоминает мне о тебе.";
if (SONG_URL) {
  songLink.href = SONG_URL;
  songLink.hidden = false;
  musicDescription.textContent = SONG_DESCRIPTION;
}
trackName.textContent = SONG_TITLE;

$("#wishButton").addEventListener("click", () => {
  $("#wishMessage").textContent = "Пусть твоё желание найдёт дорогу к исполнению. А я буду болеть за тебя. ✨";
  burst(window.innerWidth / 2, window.innerHeight * 0.68, 35);
  $("#wishButton").textContent = "Желание отправлено во вселенную ✦";
  $("#wishButton").disabled = true;
});

let soundEnabled = false;
$("#soundToggle").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  $("#soundToggle").innerHTML = soundEnabled ? "♪ <span>вкл.</span>" : "♪ <span>звук</span>";
  showToast(soundEnabled ? "Небольшие звуки включены ♡" : "Звуки выключены");
  // No sound is played unless a user explicitly enables this toggle.
});

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

function sparkleAt(element) {
  const rect = element.getBoundingClientRect();
  burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 7);
}
function burst(x, y, count) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;
  const symbols = ["✦", "♡", "✧", "⋆"];
  for (let i = 0; i < count; i++) {
    const particle = document.createElement("span");
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.cssText = `position:fixed;left:${x}px;top:${y}px;z-index:250;pointer-events:none;color:${Math.random() > .5 ? "#ffc4e5" : "#d4c2ff"};font-size:${10 + Math.random() * 15}px;`;
    document.body.appendChild(particle);
    const angle = Math.random() * Math.PI * 2;
    const distance = 35 + Math.random() * 100;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    particle.animate([
      { transform: "translate(-50%,-50%) scale(.4)", opacity: 1 },
      { transform: `translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(1.2)`, opacity: 0 }
    ], { duration: 700 + Math.random() * 500, easing: "cubic-bezier(.2,.8,.2,1)" }).onfinish = () => particle.remove();
  }
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  $("#progress").style.width = `${amount}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) document.body.classList.add("reduce-motion");


const volumeSlider = document.getElementById("volumeSlider");
const volumeIcon = document.getElementById("volumeIcon");

if (audio && volumeSlider) {
  audio.volume = 0.5;

  volumeSlider.addEventListener("input", () => {
    const volume = Number(volumeSlider.value) / 100;

    audio.volume = volume;

    if (volumeIcon) {
      volumeIcon.textContent =
        volume === 0 ? "🔇" :
        volume < 0.5 ? "🔉" : "🔊";
    }
  });
}

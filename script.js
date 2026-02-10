/**
 * MoodQuotes Generator
 * =====================
 * Random quotes based on mood and selected language
 */

// ==========================================
// QUOTES DATA
// ==========================================
const QUOTES = {
  id: {
    sad: [
      "Terkadang air mata adalah kata-kata yang tidak bisa diucapkan hati.",
      "Kesedihan adalah cara hidup memberikanmu waktu untuk menghargai kebahagiaan.",
      "Dalam kegelapan, bintang-bintang terlihat lebih terang.",
      "Setiap air mata yang jatuh mengajarkan kita untuk lebih kuat.",
      "Rasa sakit hari ini adalah kekuatan esok hari.",
      "Hujan tidak akan selamanya, begitu juga dengan kesedihanmu.",
      "Luka yang sembuh meninggalkan bekas yang mengingatkan kita betapa kuatnya kita.",
      "Kadang kita harus hancur agar bisa membangun diri yang lebih baik.",
      "Di balik setiap kesedihan, ada pelajaran yang menunggu dipetik.",
      "Biarkan dirimu merasakan, kemudian biarkan dirimu sembuh."
    ],
    happy: [
      "Kebahagiaan bukan tentang memiliki segalanya, tapi mensyukuri apa yang ada.",
      "Senyum adalah bahasa universal yang dipahami semua orang.",
      "Hari ini adalah hadiah, itulah mengapa disebut 'present'.",
      "Kebahagiaan berlipat ganda ketika kita berbagi.",
      "Setiap hari adalah kesempatan baru untuk bahagia.",
      "Hidup terlalu singkat untuk tidak dinikmati setiap momennya.",
      "Kebahagiaan datang dari dalam, bukan dari luar.",
      "Tertawa adalah obat terbaik yang tidak perlu resep dokter.",
      "Syukuri prosesnya, nikmati hasilnya.",
      "Bahagia itu sederhana, yang rumit itu orangnya."
    ],
    neutral: [
      "Hidup adalah perjalanan, bukan tujuan.",
      "Setiap hari membawa peluang yang berbeda.",
      "Waktu terus berjalan, terlepas dari apa yang kita rasakan.",
      "Perubahan adalah satu-satunya yang konstan dalam hidup.",
      "Apa yang terjadi, terjadilah untuk alasan tertentu.",
      "Kita tidak bisa mengontrol segalanya, tapi bisa mengontrol respons kita.",
      "Kadang jalan terbaik adalah terus melangkah.",
      "Hidup tidak harus selalu bermakna, kadang cukup dijalani saja.",
      "Setiap detik berlalu membawa kita ke momen berikutnya.",
      "Kesederhanaan adalah keindahan tersendiri."
    ],
    angry: [
      "Marah itu wajar, tapi jangan biarkan ia mengendalikanmu.",
      "Tarik napas dalam-dalam, hembuskan pelan-pelan.",
      "Amarah yang tidak dikelola akan melukai diri sendiri.",
      "Tenang adalah kekuatan terbesar di tengah badai emosi.",
      "Orang yang marah-marah seperti memegang bara api untuk dilempar ke orang lain.",
      "Kekuatan sejati bukan tentang meledak, tapi tetap tenang.",
      "Lepaskan yang tidak bisa kau ubah, fokus pada yang bisa.",
      "Kadang diam adalah jawaban terkuat saat marah.",
      "Amarah adalah asam yang merusak wadahnya sendiri.",
      "Emosi negatif adalah tamu, jangan jadikan ia penghuni tetap."
    ]
  },
  en: {
    sad: [
      "Sometimes tears are words the heart can't express.",
      "Sadness is life's way of giving you time to appreciate happiness.",
      "In darkness, the stars shine brightest.",
      "Every tear that falls teaches us to be stronger.",
      "Today's pain is tomorrow's strength.",
      "Rain doesn't last forever, neither does your sadness.",
      "Healed wounds leave scars that remind us how strong we are.",
      "Sometimes we must break to rebuild ourselves better.",
      "Behind every sadness, there's a lesson waiting to be learned.",
      "Let yourself feel, then let yourself heal."
    ],
    happy: [
      "Happiness isn't about having everything, but being grateful for what we have.",
      "A smile is a universal language everyone understands.",
      "Today is a gift, that's why it's called the present.",
      "Happiness multiplies when we share it.",
      "Every day is a new opportunity to be happy.",
      "Life is too short not to enjoy every moment.",
      "Happiness comes from within, not from outside.",
      "Laughter is the best medicine that needs no prescription.",
      "Be grateful for the process, enjoy the results.",
      "Happiness is simple, people make it complicated."
    ],
    neutral: [
      "Life is a journey, not a destination.",
      "Every day brings different opportunities.",
      "Time keeps moving, regardless of how we feel.",
      "Change is the only constant in life.",
      "What happens, happens for a reason.",
      "We can't control everything, but we can control our response.",
      "Sometimes the best path is to keep walking.",
      "Life doesn't always have to be meaningful, sometimes it's enough to just live it.",
      "Every passing second brings us to the next moment.",
      "Simplicity is its own beauty."
    ],
    angry: [
      "Anger is normal, but don't let it control you.",
      "Take a deep breath, exhale slowly.",
      "Unmanaged anger will hurt yourself.",
      "Calm is the greatest strength in an emotional storm.",
      "Being angry is like holding a hot coal to throw at someone else.",
      "True strength isn't about exploding, but staying calm.",
      "Let go of what you can't change, focus on what you can.",
      "Sometimes silence is the strongest answer when angry.",
      "Anger is an acid that damages its own container.",
      "Negative emotions are guests, don't make them permanent residents."
    ]
  }
};

// UI TRANSLATIONS
const TRANSLATIONS = {
  id: {
    subtitle: "Sesuai Mood-mu",
    description: "Temukan kata-kata yang tepat untuk setiap suasana hati. <span class=\"text-purple-600 dark:text-purple-400 font-medium\">Bilingual</span>, <span class=\"text-blue-600 dark:text-blue-400 font-medium\">instant</span>, dan <span class=\"text-pink-600 dark:text-pink-400 font-medium\">gratis</span>.",
    startBtn: "Mulai Sekarang",
    howItWorksTitle: "Cara Pakai",
    step1Title: "Pilih Mood",
    step1Desc: "Sedang sedih, senang, netral, atau lagi badmood? Pilih yang sesuai!",
    step2Title: "Pilih Bahasa",
    step2Desc: "Indonesia atau English? Quotes tersedia dalam dua bahasa.",
    step3Title: "Generate & Copy",
    step3Desc: "Klik generate, dapatkan quote random, dan copy untuk dibagikan!",
    featuresTitle: "Fitur Unggulan",
    feature1Title: "Dark/Light Mode",
    feature1Desc: "Nyaman di mata",
    feature2Title: "Bilingual",
    feature2Desc: "ID & EN",
    feature3Title: "Smart Random",
    feature3Desc: "Tidak berulang",
    feature4Title: "One-Click Copy",
    feature4Desc: "Langsung share",
    generatorTitle: "Generate Quote",
    selectMoodLabel: "Pilih Mood",
    moodSad: "Sedih",
    moodHappy: "Senang",
    moodNeutral: "Netral",
    moodAngry: "Marah",
    moodError: "⚠️ Pilih mood terlebih dahulu",
    selectLangLabel: "Pilih Bahasa",
    generateBtn: "Generate Quote",
    footerText: "Made with 💜 by <span class=\"font-medium text-purple-600 dark:text-purple-400\">MHR Developer</span> • 2026",
    modalMood: "Mood",
    modalLang: "Bahasa",
    btnGenerateAgain: "Generate Lagi",
    btnCopy: "Copy",
    toastSuccess: "Quote berhasil disalin! 📋",
    toastFail: "Gagal menyalin quote 😢"
  },
  en: {
    subtitle: "Based on Your Mood",
    description: "Find the right words for every mood. <span class=\"text-purple-600 dark:text-purple-400 font-medium\">Bilingual</span>, <span class=\"text-blue-600 dark:text-blue-400 font-medium\">instant</span>, and <span class=\"text-pink-600 dark:text-pink-400 font-medium\">free</span>.",
    startBtn: "Start Now",
    howItWorksTitle: "How It Works",
    step1Title: "Select Mood",
    step1Desc: "Feeling sad, happy, neutral, or angry? Pick what suits you!",
    step2Title: "Select Language",
    step2Desc: "Indonesian or English? Quotes available in both languages.",
    step3Title: "Generate & Copy",
    step3Desc: "Click generate, get a random quote, and copy to share!",
    featuresTitle: "Key Features",
    feature1Title: "Dark/Light Mode",
    feature1Desc: "Eye-friendly",
    feature2Title: "Bilingual",
    feature2Desc: "ID & EN",
    feature3Title: "Smart Random",
    feature3Desc: "No repeats",
    feature4Title: "One-Click Copy",
    feature4Desc: "Instant share",
    generatorTitle: "Generate Quote",
    selectMoodLabel: "Select Mood",
    moodSad: "Sad",
    moodHappy: "Happy",
    moodNeutral: "Neutral",
    moodAngry: "Angry",
    moodError: "⚠️ Please select a mood first",
    selectLangLabel: "Select Language",
    generateBtn: "Generate Quote",
    footerText: "Made with 💜 by <span class=\"font-medium text-purple-600 dark:text-purple-400\">MHR Developer</span> • 2026",
    modalMood: "Mood",
    modalLang: "Language",
    btnGenerateAgain: "Generate Again",
    btnCopy: "Copy",
    toastSuccess: "Quote copied successfully! 📋",
    toastFail: "Failed to copy quote 😢"
  }
};

const LANG_LABELS = {
  id: 'Indonesia',
  en: 'English'
};

// ==========================================
// STATE MANAGEMENT
// ==========================================
const state = {
  theme: 'dark',
  mood: null,
  lang: 'en', // Default to English
  currentQuote: '',
  lastIndexMap: {}
};

// ==========================================
// DOM ELEMENTS
// ==========================================
const DOM = {
  themeToggle: null,
  moodGroup: null,
  langGroup: null,
  generateBtn: null,
  moodError: null,
  quoteModal: null,
  modalOverlay: null,
  closeModalBtn: null,
  quoteText: null,
  quoteMeta: null,
  generateAgainBtn: null,
  copyBtn: null,
  toast: null,
  toastMessage: null
};

// ==========================================
// THEME FUNCTIONS
// ==========================================
function initTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    state.theme = savedTheme;
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    state.theme = prefersDark ? 'dark' : 'light';
  }

  applyTheme();
}

function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem('theme', theme);
  applyTheme();
}

function applyTheme() {
  const html = document.documentElement;

  if (state.theme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}

function toggleTheme() {
  const newTheme = state.theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// ==========================================
// LOCALIZATION FUNCTIONS
// ==========================================
function updateUILanguage(lang) {
  state.lang = lang;

  const texts = TRANSLATIONS[lang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (texts[key]) {
      if (el.tagName === 'P' || el.tagName === 'SPAN' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4') {
        el.innerHTML = texts[key];
      } else {
        el.textContent = texts[key];
      }
    }
  });

  // Update specific elements if needed
  if (state.currentQuote && !DOM.quoteModal.classList.contains('hidden')) {
    updateModalMeta();
  }
}

// ==========================================
// FORM FUNCTIONS
// ==========================================
function getSelectedMood() {
  const selected = document.querySelector('input[name="mood"]:checked');
  return selected ? selected.value : null;
}

function validateForm() {
  const mood = getSelectedMood();

  if (!mood) {
    DOM.moodError.classList.remove('hidden');
    return false;
  }

  DOM.moodError.classList.add('hidden');
  return true;
}

// ==========================================
// QUOTE FUNCTIONS
// ==========================================
function pickRandomQuote(lang, mood) {
  const quotes = QUOTES[lang][mood];
  const key = `${lang}:${mood}`;
  const lastIndex = state.lastIndexMap[key];

  let newIndex;
  const maxAttempts = 10;
  let attempts = 0;

  do {
    newIndex = Math.floor(Math.random() * quotes.length);
    attempts++;
  } while (newIndex === lastIndex && quotes.length > 1 && attempts < maxAttempts);

  state.lastIndexMap[key] = newIndex;
  return quotes[newIndex];
}

function generateQuote() {
  if (!validateForm()) return;

  const mood = getSelectedMood();
  const lang = state.lang;

  state.mood = mood;

  const quote = pickRandomQuote(lang, mood);
  state.currentQuote = quote;

  openModal(quote);
}

// ==========================================
// MODAL FUNCTIONS
// ==========================================
function updateModalMeta() {
  const moodKey = state.mood;
  if (!moodKey) return;

  const lang = state.lang;
  const texts = TRANSLATIONS[lang];

  let moodLabel = texts[`mood${moodKey.charAt(0).toUpperCase() + moodKey.slice(1)}`];

  // Fallback if not found directly
  if (!moodLabel) {
    if (moodKey === 'sad') moodLabel = texts.moodSad;
    else if (moodKey === 'happy') moodLabel = texts.moodHappy;
    else if (moodKey === 'neutral') moodLabel = texts.moodNeutral;
    else if (moodKey === 'angry') moodLabel = texts.moodAngry;
  }

  const langLabel = LANG_LABELS[lang];

  DOM.quoteMeta.textContent = `${texts.modalMood}: ${moodLabel} • ${texts.modalLang}: ${langLabel}`;
}

function openModal(quote) {
  DOM.quoteText.textContent = quote;
  updateModalMeta();

  DOM.quoteModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    DOM.generateAgainBtn.focus();
  }, 100);
}

function closeModal() {
  DOM.quoteModal.classList.add('hidden');
  document.body.style.overflow = '';
  DOM.generateBtn.focus();
}

function handleGenerateAgain() {
  const quote = pickRandomQuote(state.lang, state.mood);
  state.currentQuote = quote;

  DOM.quoteText.style.opacity = '0';
  DOM.quoteText.style.transform = 'translateY(10px)';

  setTimeout(() => {
    DOM.quoteText.textContent = quote;
    DOM.quoteText.style.opacity = '1';
    DOM.quoteText.style.transform = 'translateY(0)';
  }, 150);
}

// ==========================================
// CLIPBOARD & TOAST
// ==========================================
async function copyToClipboard(text) {
  const texts = TRANSLATIONS[state.lang];
  try {
    await navigator.clipboard.writeText(text);
    showToast(texts.toastSuccess);
    return true;
  } catch (err) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
      showToast(texts.toastSuccess);
      return true;
    } catch (e) {
      showToast(texts.toastFail);
      return false;
    } finally {
      document.body.removeChild(textArea);
    }
  }
}

function handleCopy() {
  copyToClipboard(state.currentQuote);
}

function showToast(message, duration = 2500) {
  DOM.toastMessage.textContent = message;
  DOM.toast.classList.remove('hidden');

  setTimeout(() => {
    DOM.toast.classList.add('hidden');
  }, duration);
}

// ==========================================
// INITIALIZATION
// ==========================================
function bindEvents() {
  DOM.themeToggle.addEventListener('click', toggleTheme);
  DOM.generateBtn.addEventListener('click', generateQuote);
  DOM.closeModalBtn.addEventListener('click', closeModal);
  DOM.modalOverlay.addEventListener('click', closeModal);
  DOM.generateAgainBtn.addEventListener('click', handleGenerateAgain);
  DOM.copyBtn.addEventListener('click', handleCopy);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !DOM.quoteModal.classList.contains('hidden')) {
      closeModal();
    }
  });

  document.querySelectorAll('input[name="mood"]').forEach(input => {
    input.addEventListener('change', () => {
      DOM.moodError.classList.add('hidden');

      document.querySelectorAll('.mood-pill').forEach(p => p.classList.remove('active'));
      const pill = input.closest('.mood-pill');
      if (pill) pill.classList.add('active');
    });
  });

  // Language Change Logic
  document.querySelectorAll('input[name="lang"]').forEach(input => {
    input.addEventListener('change', (e) => {
      const newLang = e.target.value;
      updateUILanguage(newLang);
    });
  });

  DOM.quoteText.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
}

function init() {
  DOM.themeToggle = document.getElementById('themeToggle');
  DOM.moodGroup = document.getElementById('moodGroup');
  DOM.langGroup = document.getElementById('langGroup');
  DOM.generateBtn = document.getElementById('generateBtn');
  DOM.moodError = document.getElementById('moodError');
  DOM.quoteModal = document.getElementById('quoteModal');
  DOM.modalOverlay = document.getElementById('modalOverlay');
  DOM.closeModalBtn = document.getElementById('closeModalBtn');
  DOM.quoteText = document.getElementById('quoteText');
  DOM.quoteMeta = document.getElementById('quoteMeta');
  DOM.generateAgainBtn = document.getElementById('generateAgainBtn');
  DOM.copyBtn = document.getElementById('copyBtn');
  DOM.toast = document.getElementById('toast');
  DOM.toastMessage = document.getElementById('toastMessage');

  initTheme();
  bindEvents();

  // Set default language to English (or whatever is selected in HTML)
  // Ensure DOM matches state
  const currentLang = document.querySelector('input[name="lang"]:checked').value;
  updateUILanguage(currentLang);

  console.log('🎭 MoodQuotes initialized successfully!');
}

document.addEventListener('DOMContentLoaded', init);

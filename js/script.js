// Sample tasks data
const tasksData = [
  // JADWAL PELAJARAN KELAS XI-3
  {
    id: 'sched-1',
    subject: 'schedule',
    title: 'Jadwal Pelajaran Kelas XI-3 (Semester Ganjil 2026/2027)',
    category: 'Jadwal',
    date: '29 Juli 2026',
    teacher: 'Guru Wali & Pengajar XI-3',
    shortDesc: 'Jadwal resmi mata pelajaran kelas XI-3 SMA Cinta Kasih Tzu Chi mencakup jam pelajaran, nama guru pengajar, dan waktu istirahat.',
    coverImg: 'assets/images/info_cover.png',
    isPopular: true,
    actionLink: "javascript:closeModal(); switchTab('schedule')",
    richContent: `
      <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
        <h5 class="text-base font-extrabold text-gray-800 border-b border-pastel-pink-100 pb-2">Jadwal Pelajaran Kelas XI-3 SMA Cinta Kasih Tzu Chi</h5>
        
        <p>Berikut adalah ringkasan jadwal mata pelajaran untuk kelas XI-3 Semester Ganjil TP 2026/2027:</p>
        
        <div class="overflow-x-auto space-y-3">
          <!-- SENIN -->
          <div class="p-3 bg-pastel-pink-50/60 rounded-xl border border-pastel-pink-100">
            <h6 class="font-extrabold text-pastel-pink-600 text-xs uppercase mb-1.5 flex items-center gap-1">📌 SENIN</h6>
            <div class="text-xs space-y-1">
              <div>• 06.30 - 07.30 : Upacara / Pendampingan Wali Kelas</div>
              <div>• 07.30 - 09.00 (JP 1-2) : <strong class="text-gray-800">Sosiologi</strong> (Cornel Kaban - KD 3)</div>
              <div>• 09.00 - 09.30 : <em class="text-amber-700">Istirahat I</em></div>
              <div>• 09.30 - 10.50 (JP 3-4) : <strong class="text-gray-800">Bahasa Mandarin</strong> (Junaidi - KD 25)</div>
              <div>• 10.50 - 11.30 (JP 5) : <strong class="text-gray-800">Budi Pekerti</strong> (Suwarni - KD 26)</div>
              <div>• 11.30 - 12.10 (JP 6) : <strong class="text-gray-800">Budaya Humanis</strong> (Iriwaty Japutra - KD 9)</div>
              <div>• 12.10 - 12.40 : <em class="text-amber-700">Istirahat II</em></div>
              <div>• 12.40 - 13.20 (JP 7) : <strong class="text-gray-800">Matematika Wajib</strong> (Jefry Corpry YH - KD 10)</div>
              <div>• 13.20 - 14.40 (JP 8-9) : <strong class="text-gray-800">Ekonomi</strong> (Debie Lola - KD 4)</div>
            </div>
          </div>

          <!-- SELASA -->
          <div class="p-3 bg-pastel-purple-50/60 rounded-xl border border-pastel-purple-100">
            <h6 class="font-extrabold text-pastel-purple-600 text-xs uppercase mb-1.5 flex items-center gap-1">📌 SELASA</h6>
            <div class="text-xs space-y-1">
              <div>• 06.30 - 06.45 : Pembiasaan Awal</div>
              <div>• 06.45 - 08.15 (JP 1-2) : <strong class="text-gray-800">Agama</strong> (Suwarni - KD 26)</div>
              <div>• 08.15 - 09.45 (JP 3-4) : <strong class="text-gray-800">Bahasa Indonesia</strong> (Ruly Mediana - KD 17)</div>
              <div>• 09.45 - 10.05 : <em class="text-amber-700">Istirahat I</em></div>
              <div>• 10.05 - 11.35 (JP 5-6) : <strong class="text-gray-800">Geografi</strong> (Nur Fajar Sidik - KD 14)</div>
              <div>• 11.35 - 12.00 : <em class="text-amber-700">Istirahat II</em></div>
              <div>• 12.00 - 13.20 (JP 7-8) : <strong class="text-gray-800">Ekonomi</strong> (Debie Lola - KD 4)</div>
              <div>• 13.20 - 14.30 (JP 9-10) : <strong class="text-gray-800">Sosiologi</strong> (Cornel Kaban - KD 3)</div>
            </div>
          </div>

          <!-- RABU -->
          <div class="p-3 bg-pastel-blue-50/60 rounded-xl border border-pastel-blue-100">
            <h6 class="font-extrabold text-pastel-blue-600 text-xs uppercase mb-1.5 flex items-center gap-1">📌 RABU</h6>
            <div class="text-xs space-y-1">
              <div>• 06.30 - 06.45 : Pembiasaan Awal</div>
              <div>• 06.45 - 08.15 (JP 1-2) : <strong class="text-gray-800">Formatif</strong> (Yahya Yanuardi - KD 22)</div>
              <div>• 08.15 - 09.00 (JP 3) : <strong class="text-gray-800">Bahasa Mandarin</strong> (Junaidi - KD 25)</div>
              <div>• 09.00 - 09.30 : <em class="text-amber-700">Istirahat I</em></div>
              <div>• 09.30 - 10.10 (JP 4) : <strong class="text-gray-800">Matematika Wajib</strong> (Ihwan Arif P - KD 7)</div>
              <div>• 10.10 - 10.50 (JP 5) : <strong class="text-gray-800">Sosiologi</strong> (Cornel Kaban - KD 3)</div>
              <div>• 10.50 - 11.30 (JP 6) : <strong class="text-gray-800">Bahasa Indonesia</strong> (Ruly Mediana - KD 17)</div>
              <div>• 11.30 - 12.10 (JP 7) : <strong class="text-gray-800">Penguatan Kurikulum</strong> (Debie Lola - KD 4)</div>
              <div>• 12.10 - 12.40 : <em class="text-amber-700">Istirahat II</em></div>
              <div>• 12.40 - 14.00 (JP 8-9) : <strong class="text-gray-800">Sejarah</strong> (Cornel Kaban - KD 3)</div>
              <div>• 14.00 - 15.20 (JP 10-11) : <strong class="text-gray-800">Seni Budaya</strong> (Diyana - KD 5)</div>
            </div>
          </div>

          <!-- KAMIS -->
          <div class="p-3 bg-pastel-peach-50/60 rounded-xl border border-pastel-peach-100">
            <h6 class="font-extrabold text-pastel-peach-600 text-xs uppercase mb-1.5 flex items-center gap-1">📌 KAMIS</h6>
            <div class="text-xs space-y-1">
              <div>• 06.30 - 06.45 : Pembiasaan Awal</div>
              <div>• 06.45 - 08.15 (JP 1-2) : <strong class="text-gray-800">Formatif</strong> (Yahya Yanuardi - KD 22)</div>
              <div>• 08.15 - 09.00 & 09.30 - 10.15 (JP 3-4) : <strong class="text-gray-800">Matematika Wajib</strong> (Jefry Corpry YH - KD 10)</div>
              <div>• 09.00 - 09.30 : <em class="text-amber-700">Istirahat I</em></div>
              <div>• 10.15 - 11.45 (JP 5-6) : <strong class="text-gray-800">PKN</strong> (Agus Salim - KD 2)</div>
              <div>• 11.45 - 12.30 : <em class="text-amber-700">Istirahat II</em></div>
              <div>• 12.30 - 14.35 (JP 7-9) : <strong class="text-gray-800">Bahasa Inggris</strong> (Yuli Hastuti - KD 27)</div>
              <div>• 14.35 - 15.15 (JP 10) : <strong class="text-gray-800">Ekonomi</strong> (Debie Lola - KD 4)</div>
            </div>
          </div>

          <!-- JUMAT -->
          <div class="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
            <h6 class="font-extrabold text-emerald-600 text-xs uppercase mb-1.5 flex items-center gap-1">📌 JUMAT</h6>
            <div class="text-xs space-y-1">
              <div>• 06.30 - 07.15 : Jumat Bersih / Sehat / Literasi / Ekspresi</div>
              <div>• 07.15 - 08.45 (JP 1-2) : <strong class="text-gray-800">PKWU</strong> (Debie Lola - KD 4)</div>
              <div>• 08.45 - 09.15 : <em class="text-amber-700">Istirahat I</em></div>
              <div>• 09.15 - 10.45 (JP 3-4) : <strong class="text-gray-800">PJOK</strong> (Sopyan - KD 20)</div>
              <div>• 10.45 - 11.30 (JP 5) : <strong class="text-gray-800">Bimbingan Konseling</strong> (Katarina - KD 11)</div>
              <div>• 11.30 - 12.30 : <em class="text-indigo-700 font-semibold">Jumat Ibadah</em></div>
              <div>• 12.30 - 13.00 : <em class="text-amber-700">Istirahat II</em></div>
              <div>• 13.00 - 14.30 (JP 6-7) : <strong class="text-gray-800">Geografi</strong> (Nur Fajar Sidik - KD 14)</div>
            </div>
          </div>
        </div>

        <div class="pt-3 text-center">
          <button onclick="closeModal(); switchTab('schedule')" class="px-5 py-2.5 bg-pastel-pink-500 hover:bg-pastel-pink-600 text-white font-bold text-xs rounded-xl shadow-md transition-all">
            📅 Buka Halaman Schedule Interaktif
          </button>
        </div>
      </div>
    `
  },

  // INFORMATIKA
  {
    id: 'infor-5',
    subject: 'informatika',
    title: 'Artikel Informatika: Sinergi HTML, CSS, dan Antigravity',
    category: 'Teori',
    date: '29 Juli 2026',
    teacher: 'Pak Yhaya Yanuardi, S.Kom.',
    shortDesc: 'Artikel ilmiah-populer mengenai peran HTML, CSS, dan teknologi AI Agentic Antigravity dalam rekayasa web modern.',
    coverImg: 'assets/images/info_cover.png',
    isPopular: true,
    actionLink: '#',
    richContent: `
      <div class="space-y-6 text-sm text-gray-600 leading-relaxed">
        
        <!-- Header Artikel -->
        <div class="bg-gradient-to-r from-pastel-pink-50 via-white to-pastel-purple-50 p-5 rounded-2xl border border-pastel-pink-100/60 shadow-sm">
          <h5 class="text-lg font-extrabold text-gray-800 tracking-tight mb-1">Transformasi Rekayasa Web Modern: Sinergi HTML, CSS, dan Teknologi AI Agentic Antigravity</h5>
          <p class="text-xs text-pastel-pink-600 font-medium">Artikel Ilmiah-Populer Informatika &bull; SMA Cinta Kasih Tzu Chi &bull; Oleh Alin Khoiriyah</p>
        </div>

        <!-- SEKSI 1: HTML (HYPERTEXT MARKUP LANGUAGE) -->
        <div class="space-y-3.5 pt-2">
          <h6 class="text-base font-extrabold text-pastel-pink-600 flex items-center gap-2 border-b border-pastel-pink-100 pb-2">
            <span class="w-6 h-6 rounded-lg bg-pastel-pink-500 text-white flex items-center justify-center text-xs shadow-sm">1</span>
            HTML (HyperText Markup Language) — Struktur Semantik Utama
          </h6>

          <p>
            HyperText Markup Language atau yang lebih dikenal sebagai <strong>HTML</strong> merupakan fondasi paling mendasar dalam pembuatan seluruh halaman web di dunia digital. Tanpa keberadaan HTML, sebuah situs web tidak akan memiliki kerangka kerja untuk menampilkan elemen-elemen informasi seperti teks, heading, paragraf, gambar, formulir interaktif, maupun media audiovisual. HTML berfungsi memberikan makna (semantics) serta penataan hierarki struktur dokumen sehingga informasi dapat dipahami secara teratur oleh peramban web (browser).
          </p>

          <p>
            Pada standar modern yaitu <strong>HTML5</strong>, elemen-elemen dokumen dirancang secara eksplisit menggunakan tag semantik seperti <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, dan <code>&lt;footer&gt;</code>. Penggunaan tag semantik ini tidak sekadar merapikan sintaksis kode program, melainkan sangat vital untuk Search Engine Optimization (SEO) dan standar Aksesibilitas Web (WCAG). Mesin pencari seperti Google dapat dengan mudah memahami konteks serta bobot informasi yang disampaikan dalam setiap bagian halaman web secara presisi.
          </p>

          <p>
            Selain itu, HTML bertindak sebagai penghubung data dinamis dengan JavaScript serta antarmuka pemrosesan Document Object Model (DOM). Setiap dokumen HTML membentuk struktur pohon objek yang dapat diakses, dimodifikasi, dan dimanipulasi secara real-time. Dengan penataan struktur HTML yang bersih dan efisien, kinerja pemrosesan render oleh browser menjadi sangat optimal, mengurangi latensi waktu muat (load time), serta mencegah kegagalan struktur tata letak (layout shift).
          </p>

          <p>
            Dalam lanskap teknologi modern yang didorong oleh kecerdasan buatan, keberadaan struktur HTML yang bersih juga memudahkan agen AI seperti Antigravity dalam membaca, mengurai, serta merekayasa ulang komponen web secara otomatis. HTML yang tertata sesuai standar industri memastikan bahwa kode tersebut aman dari risiko aksesibilitas yang buruk serta mudah dipelihara (maintainable) dalam jangka panjang oleh tim pengembang software.
          </p>

          <!-- Foto / Gambar Section HTML -->
          <div class="my-4 p-3 bg-white rounded-2xl border border-pastel-pink-100 shadow-sm text-center">
            <img src="assets/images/html_structure.png" alt="Konsep Struktur HTML Modern" class="w-full max-h-64 object-cover rounded-xl mb-2">
            <span class="text-xs text-gray-500 font-medium italic">Gambar 1.1: Ilustrasi visual kerangka struktur semantik HTML5 dalam rekayasa web modern.</span>
          </div>
        </div>

        <!-- SEKSI 2: CSS (CASCADING STYLE SHEETS) -->
        <div class="space-y-3.5 pt-4">
          <h6 class="text-base font-extrabold text-pastel-pink-600 flex items-center gap-2 border-b border-pastel-pink-100 pb-2">
            <span class="w-6 h-6 rounded-lg bg-pastel-pink-500 text-white flex items-center justify-center text-xs shadow-sm">2</span>
            CSS (Cascading Style Sheets) — Estetika Visual & Desain Interaktif
          </h6>

          <p>
            <strong>CSS (Cascading Style Sheets)</strong> adalah bahasa desain yang digunakan untuk mengontrol tata letak, gaya visual, dan presentasi antarmuka pengguna pada dokumen HTML. Konsep fundamental dalam CSS adalah <em>Separation of Concerns</em> (Pemisahan Peran), di mana HTML bertanggung jawab atas konten dan struktur, sementara CSS sepenuhnya menangani aspek keindahan visual seperti pewarnaan, tipografi, jarak (margin/padding), hingga animasi interaktif.
          </p>

          <p>
            Perkembangan teknologi CSS modern memperkenalkan fitur tata letak canggih seperti <strong>CSS Grid Layout</strong> dan <strong>Flexible Box (Flexbox)</strong>. Kedua mekanisme ini memungkinkan pengembang membangun antarmuka web yang sepenuhnya responsif (Responsive Web Design), sehingga halaman web dapat menyesuaikan tampilan secara otomatis di berbagai perangkat layar—mulai dari smartphone genggam, tablet, laptop, hingga monitor komputer berresolusi tinggi tanpa merusak estetika visual.
          </p>

          <p>
            Di samping sistem tata letak, estetika antarmuka web masa kini banyak mengadopsi tren desain modern seperti <em>glassmorphism</em> (efek kaca transparan dengan efek blur), gradasi warna halus berbasis HSL, tokonisasi variabel CSS (CSS Custom Properties), serta framework utility-first seperti Tailwind CSS. Penggunaan tokonisasi ini memastikan konsistensi sistem desain di seluruh bagian aplikasi, menciptakan pengalaman pengguna (User Experience/UX) yang intuitif, konsisten, dan terkesan sangat premium.
          </p>

          <p>
            Sentuhan akhir yang membedakan antarmuka biasa dengan antarmuka kelas dunia terletak pada implementasi <em>micro-animations</em> dan efek interaktif (hover states & transitions). Ketika pengguna mengarahkan kursor atau mengetuk tombol, umpan balik visual yang responsif dan halus memberikan kesan bahwa aplikasi web tersebut hidup dan ramah pengguna. CSS modern memberikan daya pengubah visual yang luar biasa tanpa membebani performa pemroses perangkat keras pengguna.
          </p>

          <!-- Foto / Gambar Section CSS -->
          <div class="my-4 p-3 bg-white rounded-2xl border border-pastel-pink-100 shadow-sm text-center">
            <img src="assets/images/css_styling.png" alt="Konsep Desain CSS dan UI/UX" class="w-full max-h-64 object-cover rounded-xl mb-2">
            <span class="text-xs text-gray-500 font-medium italic">Gambar 1.2: Visualisasi desain sistem CSS, pewarnaan pastel, dan komponen antarmuka glassmorphism.</span>
          </div>
        </div>

        <!-- SEKSI 3: ANTIGRAVITY -->
        <div class="space-y-3.5 pt-4">
          <h6 class="text-base font-extrabold text-pastel-pink-600 flex items-center gap-2 border-b border-pastel-pink-100 pb-2">
            <span class="w-6 h-6 rounded-lg bg-pastel-pink-500 text-white flex items-center justify-center text-xs shadow-sm">3</span>
            Antigravity — Agentic AI & Revolusi Pemrograman Berpasangan
          </h6>

          <p>
            <strong>Antigravity</strong> adalah platform AI Agentic revolusioner yang dikembangkan oleh tim Google DeepMind untuk mentransformasi alur kerja pengkodean perangkat lunak modern. Berbeda dengan asisten AI konvensional yang hanya memberikan saran potongan kode pasif, Antigravity dirancang sebagai agen otonom yang bertindak sebagai <em>Pair Programmer</em> cerdas yang mampu menganalisis konteks keseluruhan proyek secara mendalam dan proaktif.
          </p>

          <p>
            Kelebihan utama Antigravity terletak pada kemampuannya mengintegrasikan alur kerja perencanaan (planning mode), pengisian kode otomatis, pengujian runtime, hingga verifikasi log secara mandiri. Agen ini mampu mengawasi arsitektur perangkat lunak, mendeteksi potensi bug sebelum terjadi, memverifikasi kepatuhan terhadap standar keamanan, serta merekomendasikan refactoring kode agar performa aplikasi web selalu berada pada kondisi terbaik.
          </p>

          <p>
            Dalam pembuatan aplikasi web berbasis HTML dan CSS, Antigravity membantu mempercepat siklus iterasi dari konsep ide hingga menjadi aplikasi web yang siap pakai. Pengembang tidak perlu lagi menghabiskan waktu berjam-jam untuk tugas-tugas repetitive seperti perbaikan kesalahan sintaksis, penyesuaian aturan CSS yang berbenturan, atau pencarian error log yang rumit. Antigravity mengeksekusi analisis log secara silent dan memberikan solusi yang elegan dan bersih.
          </p>

          <p>
            Integrasi Antigravity dalam pembelajaran Informatika menandai era baru dalam pendidikan teknologi di mana siswa tidak hanya belajar mengetikkan sintaksis kode secara manual, melainkan dilatih menjadi arsitek solusi digital. Dengan mengkombinasikan daya nalar logis pengembang manusia dan kecepatan serta akurasi agen AI Antigravity, proses pengembangan perangkat lunak menjadi jauh lebih efisien, kreatif, dan berkualitas tinggi.
          </p>

          <!-- Foto / Gambar Section Antigravity -->
          <div class="my-4 p-3 bg-white rounded-2xl border border-pastel-pink-100 shadow-sm text-center">
            <img src="assets/images/antigravity_ai.png" alt="Teknologi Antigravity AI Agent" class="w-full max-h-64 object-cover rounded-xl mb-2">
            <span class="text-xs text-gray-500 font-medium italic">Gambar 1.3: Konsep kecerdasan AI Agentic Antigravity dalam membantu rekayasa web cerdas.</span>
          </div>
        </div>

        <!-- SEKSI 4: KESIMPULAN -->
        <div class="space-y-3.5 pt-4">
          <h6 class="text-base font-extrabold text-pastel-pink-600 flex items-center gap-2 border-b border-pastel-pink-100 pb-2">
            <span class="w-6 h-6 rounded-lg bg-pastel-pink-500 text-white flex items-center justify-center text-xs shadow-sm">4</span>
            Kesimpulan: Sinergi Tiga Pilar Rekayasa Web
          </h6>

          <p>
            Sinergi antara HTML, CSS, dan Antigravity menciptakan ekosistem rekayasa web modern yang sangat solid, harmonis, dan komprehensif. HTML hadir sebagai tulang punggung yang menyusun struktur dan makna semantik dokumen web; CSS melengkapi dengan keindahan estetika visual, tata letak responsif, serta kenyamanan interaksi pengguna; sementara Antigravity berperan sebagai otak akselerasi AI cerdas yang mengoptimalkan alur kerja, otomatisasi pengkodean, dan penjaminan kualitas program.
          </p>

          <p>
            Penguasaan ketiga komponen ini menjadi kunci utama bagi para siswa dan pengembang dalam menghadapi tantangan teknologi masa depan. Dengan memahami cara HTML, CSS, dan kecerdasan AI Antigravity berkolaborasi secara selaras, kita mampu menciptakan aplikasi web yang tidak hanya indah dipandang dan responsif di berbagai perangkat, tetapi juga memiliki arsitektur kode yang tangguh, aman, serta relevan dengan perkembangan zaman.
          </p>

          <div class="p-4 bg-pastel-pink-50/80 rounded-2xl border border-pastel-pink-200 text-xs text-pastel-pink-600 font-semibold space-y-1">
            <div class="flex items-center gap-2 text-sm font-extrabold text-pastel-pink-700">
              💡 Intisari Sinergi Informatika:
            </div>
            <p>• <strong>HTML:</strong> Struktur & Semantik Dokumen Web</p>
            <p>• <strong>CSS:</strong> Estetika Visual, Grid/Flex Layout & Micro-Animations</p>
            <p>• <strong>Antigravity:</strong> Kecerdasan AI Agentic & Otomasi Pair Programming</p>
          </div>
        </div>

      </div>
    `
  },
  {
    id: 'infor-1',
    subject: 'informatika',
    title: 'Pembuatan Halaman Web Biodata Sederhana',
    category: 'Coding',
    date: '12 April 2026',
    teacher: 'Pak Gunawan, S.Kom.',
    shortDesc: 'Tugas praktikum membuat landing page biodata pribadi menggunakan HTML5 murni dan CSS3 eksternal.',
    coverImg: 'assets/images/info_cover.png',
    isPopular: true,
    actionLink: '#',
    richContent: `
      <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p><strong>Latar Belakang:</strong> Praktikum pertama mata pelajaran Informatika untuk memahami kerangka dasar HTML (Hypertext Markup Language) dan styling dasar menggunakan CSS (Cascading Style Sheets).</p>
        <p><strong>Fitur yang dibuat:</strong></p>
        <ul class="list-disc list-inside space-y-1 ml-2">
          <li>Struktur HTML semantik (&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;)</li>
          <li>Tabel biodata interaktif</li>
          <li>Formulir kontak sederhana</li>
          <li>CSS Grid untuk layout responsif dasar</li>
        </ul>
        <p class="font-semibold text-gray-800 mt-4">Potongan Kode (HTML):</p>
        <pre class="bg-gray-800 text-pastel-pink-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
&lt;div class="biodata-card"&gt;
  &lt;img src="foto.jpg" alt="Profile"&gt;
  &lt;h2&gt;Alin Khoiriyah&lt;/h2&gt;
  &lt;p&gt;Kelas XI MIPA 3&lt;/p&gt;
&lt;/div&gt;</pre>
      </div>
    `
  },
  {
    id: 'infor-2',
    subject: 'informatika',
    title: 'Desain Antarmuka Aplikasi Edukasi Sampah',
    category: 'Desain',
    date: '28 Mei 2026',
    teacher: 'Pak Gunawan, S.Kom.',
    shortDesc: 'Desain Wireframe & Prototype UI/UX aplikasi mobile penanganan sampah rumah tangga menggunakan Figma.',
    coverImg: 'assets/images/info_cover.png',
    isPopular: true,
    actionLink: '#',
    richContent: `
      <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p><strong>Deskripsi Desain:</strong> "EcoClean" adalah rancangan aplikasi mobile untuk mengedukasi masyarakat tentang pemilahan sampah organik dan anorganik secara digital serta penukaran poin sampah menjadi saldo e-wallet.</p>
        <p><strong>Tahapan Desain:</strong></p>
        <ol class="list-decimal list-inside space-y-1 ml-2">
          <li>User Research (Wawancara teman sekelas)</li>
          <li>User Flow & Information Architecture</li>
          <li>Wireframing (Low-fidelity)</li>
          <li>High-Fidelity UI Design & Prototyping di Figma</li>
        </ol>
        <p><strong>Hasil Uji Coba:</strong> Desain dinilai sangat ramah pengguna dengan tombol navigasi melingkar di bagian bawah layar dan warna hijau-pastel dominan.</p>
      </div>
    `
  },
  {
    id: 'infor-3',
    subject: 'informatika',
    title: 'Analisis Algoritma Sorting: Bubble vs Quick',
    category: 'Teori',
    date: '5 Juni 2026',
    teacher: 'Pak Gunawan, S.Kom.',
    shortDesc: 'Laporan analisis perbandingan kompleksitas waktu dan cara kerja algoritma pengurutan Bubble Sort dan Quick Sort.',
    coverImg: 'assets/images/info_cover.png',
    isPopular: false,
    actionLink: '#',
    richContent: `
      <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p><strong>Intisari Analisis:</strong></p>
        <p>Laporan ini membahas performa algoritma pengurutan (Sorting) untuk data berskala besar. Perbandingan difokuskan pada kompleksitas waktu (Big O Notation) dan efisiensi memori.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-pastel-pink-50">
                <th class="p-2 border border-pastel-pink-100 font-bold">Algoritma</th>
                <th class="p-2 border border-pastel-pink-100 font-bold">Best Case</th>
                <th class="p-2 border border-pastel-pink-100 font-bold">Worst Case</th>
                <th class="p-2 border border-pastel-pink-100 font-bold">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border border-pastel-pink-100 font-semibold">Bubble Sort</td>
                <td class="p-2 border border-pastel-pink-100">O(n)</td>
                <td class="p-2 border border-pastel-pink-100">O(n²)</td>
                <td class="p-2 border border-pastel-pink-100">Lambat untuk n besar</td>
              </tr>
              <tr>
                <td class="p-2 border border-pastel-pink-100 font-semibold">Quick Sort</td>
                <td class="p-2 border border-pastel-pink-100">O(n log n)</td>
                <td class="p-2 border border-pastel-pink-100">O(n²)</td>
                <td class="p-2 border border-pastel-pink-100">Sangat cepat dan efisien</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><strong>Kesimpulan:</strong> Quick Sort lebih direkomendasikan untuk aplikasi dengan pengurutan data dinamis yang kompleks.</p>
      </div>
    `
  },
  {
    id: 'infor-4',
    subject: 'informatika',
    title: 'Pemrograman JS: Kalkulator Diskon Belanja',
    category: 'Coding',
    date: '20 Juni 2026',
    teacher: 'Pak Gunawan, S.Kom.',
    shortDesc: 'Program logika sederhana berbasis javascript untuk menghitung total belanja setelah diskon bertingkat.',
    coverImg: 'assets/images/info_cover.png',
    isPopular: false,
    actionLink: '#',
    richContent: `
      <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p><strong>Tujuan:</strong> Memahami logika struktur keputusan (if-else) dan fungsi (function) dalam JavaScript.</p>
        <p class="font-semibold text-gray-800">Kode JavaScript:</p>
        <pre class="bg-gray-800 text-pastel-pink-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
function hitungDiskon(totalBelanja) {
  let diskon = 0;
  if (totalBelanja >= 500000) {
    diskon = 0.2; // 20%
  } else if (totalBelanja >= 200000) {
    diskon = 0.1; // 10%
  }
  return totalBelanja - (totalBelanja * diskon);
}</pre>
        <p><strong>Hasil Output:</strong> Pengguna memasukkan total belanja via input form, sistem otomatis mengeluarkan hasil bersih setelah dipotong diskon belanja secara real-time.</p>
      </div>
    `
  },

  // BAHASA INDONESIA
  {
    id: 'indo-8',
    subject: 'bahasaindonesia',
    title: 'Artikel Bahasa Indonesia: Teks Biografi, Teks Anekdot, dan Teks LHO',
    category: 'Karya Tulis',
    date: '29 Juli 2026',
    teacher: 'Ibu Ratna, M.Pd.',
    shortDesc: 'Artikel ilmiah-populer mengenai kebahasaan, struktur, dan analisis Teks Biografi, Teks Anekdot, serta Teks Laporan Hasil Observasi (LHO).',
    coverImg: 'assets/images/indo_cover.png',
    isPopular: true,
    actionLink: '#',
    richContent: `
      <div class="space-y-6 text-sm text-gray-600 leading-relaxed">
        
        <!-- Header Artikel -->
        <div class="bg-gradient-to-r from-pastel-pink-50 via-white to-pastel-purple-50 p-5 rounded-2xl border border-pastel-pink-100/60 shadow-sm">
          <h5 class="text-lg font-extrabold text-gray-800 tracking-tight mb-1">Eksplorasi Ragam Teks Bahasa Indonesia: Analisis Teks Biografi, Teks Anekdot, dan Teks LHO</h5>
          <p class="text-xs text-pastel-pink-600 font-medium">Artikel Pembelajaran Bahasa Indonesia &bull; SMA Cinta Kasih Tzu Chi &bull; Oleh Alin Khoiriyah</p>
        </div>

        <!-- SEKSI 1: TEKS BIOGRAFI -->
        <div class="space-y-3.5 pt-2">
          <h6 class="text-base font-extrabold text-pastel-pink-600 flex items-center gap-2 border-b border-pastel-pink-100 pb-2">
            <span class="w-6 h-6 rounded-lg bg-pastel-pink-500 text-white flex items-center justify-center text-xs shadow-sm">1</span>
            Teks Biografi — Merekam Jejak dan Keteladanan Tokoh Bangsa
          </h6>

          <p>
            <strong>Teks Biografi</strong> adalah jenis teks narasi faktual yang menceritakan riwayat hidup seorang tokoh secara rinci mulai dari masa kecil, perjuangan karier, hambatan hidup, hingga pencapaian dan kontribusi terbesarnya bagi masyarakat. Teks ini ditulis oleh orang lain dengan tujuan memberikan wawasan sejarah, inspirasi moral, serta nilai-nilai keteladanan yang dapat dipetik oleh para pembaca dalam kehidupan sehari-hari.
          </p>

          <p>
            Secara generik, struktur teks biografi terdiri atas tiga tahapan utama. Pertama adalah <strong>Orientasi</strong> (pengenalan latar belakang tokoh, nama asli, tempat tanggal lahir, serta lingkungan keluarga). Kedua adalah <strong>Peristiwa dan Masalah</strong> (urutan kejadian kronologis, tantangan hidup, perjuangan diplomasi, hingga karya monumental yang dihasilkan). Ketiga adalah <strong>Reorientasi</strong> (pandangan penulis mengenai kontribusi tokoh serta simpulan keteladanan yang diwariskan).
          </p>

          <p>
            Sebagai contoh nyata, analisis biografi <strong>Ki Hajar Dewantara</strong> (Raden Mas Soewardi Soeryaningrat) menggambarkan betapa gigihnya perjuangan beliau dalam menembus barikade kolonialisme Belanda demi memberikan hak pendidikan bagi rakyat bumiputra melalui pendirian Perguruan Taman Siswa pada tahun 1922. Semboyan luhur beliau, <em>"Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani"</em>, hingga kini diabadikan sebagai pilar filosofi pendidikan nasional Indonesia.
          </p>

          <p>
            Dari segi kaidah kebahasaan, teks biografi didominasi oleh penggunaan pronomina persona (kata ganti orang ketiga seperti <em>beliau</em>, <em>ia</em>), verba kerja aksional untuk menggambarkan aktivitas fisik tokoh, verba pasif untuk melukiskan peristiwa yang dialami tokoh, serta kata hubung temporal untuk mengurutkan kejadian sejarah secara tertib, kronologis, dan logis.
          </p>

          <!-- Foto / Gambar Section Teks Biografi -->
          <div class="my-4 p-3 bg-white rounded-2xl border border-pastel-pink-100 shadow-sm text-center">
            <img src="assets/images/biografi.jpeg" alt="Ilustrasi Teks Biografi" class="w-full max-h-64 object-cover rounded-xl mb-2">
            <span class="text-xs text-gray-500 font-medium italic">Gambar 2.1: Ilustrasi penulisan Teks Biografi dan dokumentasi nilai keteladanan pahlawan nasional.</span>
          </div>
        </div>

        <!-- SEKSI 2: TEKS ANEKDOT -->
        <div class="space-y-3.5 pt-4">
          <h6 class="text-base font-extrabold text-pastel-pink-600 flex items-center gap-2 border-b border-pastel-pink-100 pb-2">
            <span class="w-6 h-6 rounded-lg bg-pastel-pink-500 text-white flex items-center justify-center text-xs shadow-sm">2</span>
            Teks Anekdot — Humor Kritis dan Media Sindiran Sosial-Politik
          </h6>

          <p>
            <strong>Teks Anekdot</strong> merupakan cerita rekaan singkat yang lucu, mengesankan, dan mengandung sindiran atau kritik terselubung mengenai fenomena sosial, politik, hukum, maupun perilaku masyarakat umum. Berbeda dengan cerita humor biasa yang sekadar menghibur tanpa makna, teks anekdot memiliki misi moral untuk menyentil kejanggalan atau ketidakadilan yang terjadi di lingkungan sekitar dengan balutan kelakar yang cerdas.
          </p>

          <p>
            Struktur sistematis dalam teks anekdot terdiri dari lima bagian terpadu: <strong>Abstraksi</strong> (gambaran awal cerita), <strong>Orientasi</strong> (latar belakang waktu dan tempat), <strong>Krisis</strong> (puncak intrik atau masalah utama yang menimbulkan kelucuan), <strong>Reaksi</strong> (tanggapan atau cara penyelesaian masalah yang mengejutkan), serta <strong>Koda</strong> (kesimpulan atau perubahan kondisi tokoh di akhir cerita).
          </p>

          <p>
            Contoh populer dari teks anekdot berjudul <em>"Baju Termahal di Indonesia"</em> mengisahkan percakapan kritis dua murid SMA di kantin sekolah. Ketika ditanya mengenai pakaian apa yang paling mahal harganya di Indonesia, alih-alih menyebut gaun desainer ternama, salah satu murid menjawab bahwa rompi oranye tahanan KPK adalah yang termahal karena untuk bisa memakainya seseorang harus mencuri uang negara hingga miliaran rupiah terlebih dahulu.
          </p>

          <p>
            Kaidah kebahasaan dalam teks anekdot ditandai dengan penggunaan kalimat imperatif, pronomina persona, verba material, pertanyaan retoris yang tidak memerlukan jawaban, serta konjungsi urutan waktu. Gaya bahasa yang lugas namun kaya akan majas sindiran (seperti ironi dan sarkasme halus) menjadikan teks anekdot sebagai sarana kritik sosial yang efektif, menyenangkan, dan berterima di tengah masyarakat.
          </p>

          <!-- Foto / Gambar Section Teks Anekdot -->
          <div class="my-4 p-3 bg-white rounded-2xl border border-pastel-pink-100 shadow-sm text-center">
            <img src="assets/images/anekdot.jpg" alt="Ilustrasi Teks Anekdot" class="w-full max-h-64 object-cover rounded-xl mb-2">
            <span class="text-xs text-gray-500 font-medium italic">Gambar 2.2: Visualisasi konsep Teks Anekdot sebagai media kritik sosial berbasis kelakar dan sindiran.</span>
          </div>
        </div>

        <!-- SEKSI 3: TEKS LAPORAN HASIL OBSERVASI (LHO) -->
        <div class="space-y-3.5 pt-4">
          <h6 class="text-base font-extrabold text-pastel-pink-600 flex items-center gap-2 border-b border-pastel-pink-100 pb-2">
            <span class="w-6 h-6 rounded-lg bg-pastel-pink-500 text-white flex items-center justify-center text-xs shadow-sm">3</span>
            Teks Laporan Hasil Observasi (LHO) — Penyajian Data Ilmiah Objektif
          </h6>

          <p>
            <strong>Teks Laporan Hasil Observasi (LHO)</strong> adalah jenis teks ilmiah faktual yang menyajikan informasi secara sistematis dan objektif berdasarkan hasil pengamatan langsung di lapangan terhadap suatu objek, baik berupa flora, fauna, ekosistem alam, fenomena sosial, maupun benda kebudayaan. Teks LHO ditulis berdasarkan fakta empiris tanpa campur tangan opini subjektif dari penulis.
          </p>

          <p>
            Struktur baku dalam susunan Teks LHO terbagi menjadi tiga komponen utama. Bagian pertama adalah <strong>Pernyataan Umum / Klasifikasi</strong> (memberikan definisi dasar, taksonomi, dan pengenalan umum objek). Bagian kedua adalah <strong>Deskripsi Bagian</strong> (menguraikan rincian fisik, morfologi, perilaku, serta karakteristik spesifik objek). Bagian ketiga adalah <strong>Deskripsi Manfaat</strong> (menjelaskan keunggulan, fungsi ekologis, maupun manfaat ekonomis dari objek bagi kehidupan manusia).
          </p>

          <p>
            Dalam studi pengamatan ekosistem pesisir, Laporan Observasi mengenai <strong>Pohon Bakau (Mangrove)</strong> mengungkapkan ciri fisik adaptif seperti akar tunjang dan pneumatofora yang berfungsi mengambil oksigen dari udara. Secara ekologis, hutan bakau bertindak sebagai benteng alami pencegah erosi pantai (abrasi), tempat pemijahan spesies fauna laut, serta penyerap gas karbon dioksida (Blue Carbon) hingga 5 kali lebih tinggi dibandingkan hutan daratan.
          </p>

          <p>
            Kaidah kebahasaan Teks LHO ditandai dengan penggunaan verba relasional (seperti <em>adalah</em>, <em>merupakan</em>, <em>termasuk</em>), istilah teknis/ilmiah sesuai disiplin ilmu (seperti <em>pneumatofora</em>, <em>vivipar</em>, <em>blue carbon</em>), kata benda (nomina) spesifik, serta kalimat definisi dan kalimat deskripsi yang terstruktur dengan baku sesuai Pedoman Umum Ejaan Bahasa Indonesia (PUEBI).
          </p>

          <!-- Foto / Gambar Section Teks LHO -->
          <div class="my-4 p-3 bg-white rounded-2xl border border-pastel-pink-100 shadow-sm text-center">
            <img src="assets/images/lho.jpeg" alt="Ilustrasi Teks LHO" class="w-full max-h-64 object-cover rounded-xl mb-2">
            <span class="text-xs text-gray-500 font-medium italic">Gambar 2.3: Visualisasi penelitian lapangan dan penulisan Teks Laporan Hasil Observasi (LHO).</span>
          </div>
        </div>

        <!-- SEKSI 4: KESIMPULAN -->
        <div class="space-y-3.5 pt-4">
          <h6 class="text-base font-extrabold text-pastel-pink-600 flex items-center gap-2 border-b border-pastel-pink-100 pb-2">
            <span class="w-6 h-6 rounded-lg bg-pastel-pink-500 text-white flex items-center justify-center text-xs shadow-sm">4</span>
            Kesimpulan: Sinergi Ragam Teks dalam Kemahiran Berbahasa Indonesia
          </h6>

          <p>
            Ketiga jenis teks—Biografi, Anekdot, dan Laporan Hasil Observasi (LHO)—merupakan pilar penting dalam membentuk kemahiran berbahasa Indonesia yang komprehensif. Teks Biografi melatih ketelitian nalar sejarah serta apresiasi terhadap keteladanan moral tokoh bangsa; Teks Anekdot mengasah daya kritis sosial dan kreativitas berbahasa melalui sindiran yang santun; sedangkan Teks LHO membangun kedisiplinan berpikir ilmiah, obyektivitas data, serta kepedulian terhadap lingkungan sekitar.
          </p>

          <p>
            Dengan menguasai struktur dan kaidah kebahasaan dari ketiga jenis teks ini, para siswa diharapkan tidak hanya mampu menyusun karya tulis yang sistematis dan menarik, tetapi juga mampu mengkomunikasikan gagasan, kritik, dan temuan ilmiah secara santun, efektif, serta bermanfaat bagi kemajuan ilmu pengetahuan dan literasi nasional.
          </p>

          <div class="p-4 bg-pastel-pink-50/80 rounded-2xl border border-pastel-pink-200 text-xs text-pastel-pink-600 font-semibold space-y-1">
            <div class="flex items-center gap-2 text-sm font-extrabold text-pastel-pink-700">
              💡 Intisari Ragam Teks Bahasa Indonesia:
            </div>
            <p>• <strong>Teks Biografi:</strong> Rekam Jejak Tokoh, Perjuangan, & Nilai Keteladanan Moral</p>
            <p>• <strong>Teks Anekdot:</strong> Humor Kritis, Sindiran Santun, & Struktur Abstraksi-Koda</p>
            <p>• <strong>Teks LHO:</strong> Pengamatan Objektif Lapangan, Istilah Ilmiah, & Deskripsi Manfaat</p>
          </div>
        </div>

      </div>
    `
  },
  {
    id: 'indo-1',
    subject: 'bahasaindonesia',
    title: 'Esai Kritis: Degradasi Bahasa Baku di Media Sosial',
    category: 'Karya Tulis',
    date: '5 Maret 2026',
    teacher: 'Ibu Ratna, M.Pd.',
    shortDesc: 'Analisis penggunaan bahasa gaul (slang) di platform media sosial seperti TikTok & dampaknya pada kaidah bahasa baku.',
    coverImg: 'assets/images/indo_cover.png',
    isPopular: true,
    actionLink: '#',
    richContent: `
      <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p><strong>Abstrak Esai:</strong></p>
        <p class="italic bg-pastel-pink-50/50 p-3 rounded-xl border-l-4 border-pastel-pink-400">"Bahasa merupakan cerminan peradaban suatu bangsa. Namun, kehadiran media sosial mendatangkan fenomena neologisme bahasa gaul yang kian mendominasi komunikasi harian remaja, menggeser peran bahasa Indonesia yang baik dan benar."</p>
        <p><strong>Argumen Utama:</strong></p>
        <ul class="list-disc list-inside space-y-1.5 ml-2">
          <li>Pencampuran bahasa asing dan slang (code-mixing) menciptakan hambatan pemahaman bagi pembaca lintas generasi.</li>
          <li>Penurunan kepedulian terhadap ejaan yang disempurnakan (EYD) dalam tulisan-tulisan formal sekolah.</li>
          <li><strong>Solusi:</strong> Sosialisasi ejaan bahasa Indonesia secara kreatif melalui media digital agar terlihat keren di mata generasi muda.</li>
        </ul>
      </div>
    `
  },
  {
    id: 'indo-2',
    subject: 'bahasaindonesia',
    title: 'Resensi Novel Sastra Terkenal: Laskar Pelangi',
    category: 'Ulasan',
    date: '20 April 2026',
    teacher: 'Ibu Ratna, M.Pd.',
    shortDesc: 'Ulasan mendalam mengenai struktur intrinsik, ekstrinsik, kelebihan, dan kelemahan novel karya Andrea Hirata.',
    coverImg: 'assets/images/indo_cover.png',
    isPopular: true,
    actionLink: '#',
    richContent: `
      <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p><strong>Detail Buku:</strong> Novel Laskar Pelangi karya Andrea Hirata menceritakan tentang perjuangan sepuluh anak di Belitung dalam menempuh pendidikan di sekolah Muhammadiyah dengan segala keterbatasan.</p>
        <p><strong>Unsur Intrinsik Pilihan:</strong></p>
        <ul class="list-disc list-inside space-y-1 ml-2">
          <li><strong>Tema:</strong> Persahabatan dan kebulatan tekad dalam dunia pendidikan.</li>
          <li><strong>Alur:</strong> Alur maju (progresif) dengan kilas balik memori tokoh Ikal dewasa.</li>
          <li><strong>Amanat:</strong> Kemiskinan tidak berhak membatasi cita-cita seorang anak.</li>
        </ul>
        <p><strong>Kelebihan:</strong> Gaya bahasa metafora yang kaya akan diksi indah dan mampu memicu imajinasi pembaca secara mendalam.</p>
        <p><strong>Kelemahan:</strong> Beberapa istilah lokal Belitung dan istilah ilmiah membutuhkan catatan kaki tambahan untuk mempermudah pembaca awam.</p>
      </div>
    `
  },
  {
    id: 'indo-3',
    subject: 'bahasaindonesia',
    title: 'Puisi Antologi: Riak Hati di Kala Senja',
    category: 'Sastra',
    date: '10 Mei 2026',
    teacher: 'Ibu Ratna, M.Pd.',
    shortDesc: 'Karya sastra puisi modern yang mengeksplorasi tema rasa syukur, keluarga, dan impian masa muda.',
    coverImg: 'assets/images/indo_cover.png',
    isPopular: false,
    actionLink: '#',
    richContent: `
      <div class="space-y-5 text-center text-sm text-gray-600 italic py-4">
        <div class="space-y-1">
          <h5 class="font-bold not-italic text-gray-800 text-base mb-4">Mentari di Balik Awan</h5>
          <p>Riak jingga di ufuk barat berseri,</p>
          <p>Menyapa raga yang lelah meniti hari,</p>
          <p>Ada mimpi yang tersemat dalam diri,</p>
          <p>Takkan kubiarkan padam ditelan sepi.</p>
        </div>
        <div class="space-y-1">
          <p>Buku tulis terbuka lebar menanti tinta,</p>
          <p>Mengukir jejak, cita-cita, dan cinta,</p>
          <p>Biar jalan terjal berliku di depan mata,</p>
          <p>Langkah kaki ini takkan ragu mendata.</p>
        </div>
        <div class="space-y-1">
          <p>Sebab mentari kan bersinar kembali,</p>
          <p>Menghapus gulita merangkul sanubari.</p>
        </div>
      </div>
    `
  },
  {
    id: 'indo-4',
    subject: 'bahasaindonesia',
    title: 'Analisis Struktur Kebahasaan Teks Prosedur',
    category: 'Karya Tulis',
    date: '14 Juni 2026',
    teacher: 'Ibu Ratna, M.Pd.',
    shortDesc: 'Tugas menganalisis struktur kalimat imperatif, deklaratif, dan kata hubung temporal dalam teks prosedur pembuatan paspor.',
    coverImg: 'assets/images/indo_cover.png',
    isPopular: false,
    actionLink: '#',
    richContent: `
      <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p><strong>Tujuan Praktik:</strong> Membedakan penggunaan jenis kalimat dalam teks instruksi agar tidak menimbulkan ambiguitas bagi pembaca.</p>
        <p><strong>Hasil Temuan:</strong></p>
        <ul class="list-disc list-inside space-y-1.5 ml-2">
          <li><strong>Kalimat Imperatif (Perintah):</strong> Ditemukan sebanyak 8 kata (contoh: <em>unggah</em>, <em>serahkan</em>, <em>lakukan</em>).</li>
          <li><strong>Verba Material:</strong> Berkaitan dengan tindakan fisik seperti menulis, memindai dokumen, dan membayar.</li>
          <li><strong>Konjungsi Temporal:</strong> Kata hubung waktu (contoh: <em>setelah itu</em>, <em>kemudian</em>, <em>selanjutnya</em>).</li>
        </ul>
      </div>
    `
  },
  {
    id: 'indo-5',
    subject: 'bahasaindonesia',
    title: 'Teks Biografi: Perjalanan Hidup Ki Hajar Dewantara',
    category: 'Karya Tulis',
    date: '25 Juli 2026',
    teacher: 'Ibu Ratna, M.Pd.',
    shortDesc: 'Analisis mendalam struktur teks biografi (Orientasi, Peristiwa/Masalah, dan Reorientasi) Ki Hajar Dewantara sebagai Bapak Pendidikan Indonesia.',
    coverImg: 'assets/images/indo_cover.png',
    isPopular: true,
    actionLink: '#',
    richContent: `
      <div class="space-y-5 text-sm text-gray-600 leading-relaxed">
        <h5 class="text-base font-extrabold text-gray-800 border-b border-pastel-pink-100 pb-2">Teks Biografi: Ki Hajar Dewantara (Bapak Pendidikan Nasional)</h5>
        
        <p><strong>1. Pengenalan dan Hakikat Teks Biografi</strong><br>
        Teks Biografi adalah teks naratif faktual yang menyajikan kisah perjalanan hidup seorang tokoh besar secara lengkap dan inspiratif. Penulisan biografi bertujuan agar generasi penerus dapat meneladani nilai-nilai perjuangan, integritas moral, serta kebulatan tekad tokoh dalam mengatasi rintangan hidup demi kepentingan bangsa.</p>

        <p><strong>2. Orientasi (Latar Belakang Tokoh)</strong><br>
        Ki Hajar Dewantara lahir di Yogyakarta pada tanggal 2 Mei 1889 dengan nama asli Raden Mas Soewardi Soeryaningrat. Beliau berasal dari lingkungan keluarga kraton Yogyakarta yang sarat akan tradisi dan kebudayaan. Meskipun dibesarkan dalam tatanan kebangsawaan, beliau memilih untuk melepas gelar kebangsawanannya agar dapat menyatu erat dengan rakyat bumiputra dalam memperjuangkan kesetaraan hak pendidikan.</p>

        <p><strong>3. Peristiwa dan Masalah (Rangkaian Perjuangan Sejarah)</strong><br>
        Pada masa pergerakan nasional, beliau aktif bergerak di jalur jurnalistik sebagai wartawan kritis di surat kabar <em>De Expres</em>, <em>Utusan Hindia</em>, dan <em>Kaoem Moeda</em>. Tulisannya yang paling legendaris, <em>"Als ik eens Nederlander was"</em> (Seandainya Aku Seorang Belanda), menyampaikan kritik pedas terhadap pemerintah kolonial Belanda. Akibat karya tulis tersebut, beliau diasingkan ke Belanda. Namun sekembalinya ke tanah air pada 3 Juli 1922, Ki Hajar Dewantara mendirikan perguruan <strong>Taman Siswa</strong> di Yogyakarta sebagai tonggak awal sistem pendidikan nasional modern.</p>

        <p><strong>4. Reorientasi dan Keteladanan Moral</strong><br>
        Setelah kemerdekaan Indonesia, beliau dipercaya menjadi Menteri Pendidikan, Pengajaran, dan Kebudayaan pertama. Semboyan luhur karya beliau: <em>"Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani"</em> diabadikan sebagai azas pendidikan Indonesia. Hari lahir beliau, 2 Mei, diperingati setiap tahun sebagai Hari Pendidikan Nasional untuk mengenang jasa besar beliau bagi bangsa.</p>

        <!-- Foto / Gambar Section -->
        <div class="my-4 p-3 bg-white rounded-2xl border border-pastel-pink-100 shadow-sm text-center">
          <img src="assets/images/biografi_text.png" alt="Teks Biografi Ki Hajar Dewantara" class="w-full max-h-60 object-cover rounded-xl mb-2">
          <span class="text-xs text-gray-500 font-medium italic">Gambar: Visualisasi studi Teks Biografi dan dokumentasi pahlawan pendidikan nasional.</span>
        </div>

        <div class="p-4 bg-pastel-pink-50 rounded-2xl border border-pastel-pink-100 text-xs text-pastel-pink-600 font-semibold">
          <strong>Kesimpulan Teks Biografi:</strong> Biografi Ki Hajar Dewantara mengajarkan bahwa pendidikan adalah senjata paling ampuh untuk memerdekakan jiwa dan pikiran suatu bangsa dari segala bentuk penjajahan.
        </div>
      </div>
    `
  },
  {
    id: 'indo-6',
    subject: 'bahasaindonesia',
    title: 'Teks Anekdot: Baju Termahal di Indonesia',
    category: 'Sastra',
    date: '26 Juli 2026',
    teacher: 'Ibu Ratna, M.Pd.',
    shortDesc: 'Teks anekdot berupa cerita humor kritis bertema sosial politik dengan struktur Abstraksi, Orientasi, Krisis, Reaksi, dan Koda.',
    coverImg: 'assets/images/indo_cover.png',
    isPopular: false,
    actionLink: '#',
    richContent: `
      <div class="space-y-5 text-sm text-gray-600 leading-relaxed">
        <h5 class="text-base font-extrabold text-gray-800 border-b border-pastel-pink-100 pb-2">Teks Anekdot: Baju Termahal di Indonesia (Humor Kritis Sosial)</h5>
        
        <p><strong>1. Pengenalan Teks Anekdot dan Fungsi Kritik Sosial</strong><br>
        Teks Anekdot adalah cerita pendek penuh humor yang dirancang tidak sekadar untuk memicu gelak tawa, melainkan menyampaikan sindiran atau kritik tajam terhadap fenomena sosial, politik, dan ketidakadilan hukum di masyarakat. Anekdot menyajikan pesan moral tersembunyi melalui kiasan yang jenaka dan santun.</p>

        <p><strong>2. Abstraksi dan Orientasi (Pembuka Cerita)</strong><br>
        Suatu hari di jam istirahat sekolah yang cerah, dua siswa SMA bernama Amar dan Budi sedang duduk santai di kantin sambil menikmati segelas es teh dan gorengan hangat. Suasana santai tersebut mendadak berubah menjadi diskusi kritis saat Amar mengajukan teka-teki tak terduga kepada Budi.</p>

        <p><strong>3. Krisis dan Reaksi (Puncak Humoris & Sindiran)</strong><br>
        "Bud, menurutmu baju merek apa yang paling mahal di Indonesia saat ini?" tanya Amar. Budi menduga baju buatan desainer Italia yang berharga ratusan juta rupiah. Amar menggeleng tersenyum, "Salah! Baju termahal di Indonesia adalah <strong>Baju Rompi Oranye Tahanan KPK</strong>!" Budi bingung mengapa rompi kain biasa bisa mahal. Amar menjelaskan, "Coba bayangkan, untuk bisa memakai rompi itu, seorang koruptor harus mencuri uang negara minimal 1 miliar rupiah dulu!"</p>

        <p><strong>4. Koda dan Makna Pembelajaran</strong><br>
        Budi terdiam sejenak lalu tertawa miris menyadari kebenaran ucapan saudaranya. Kelakar satire tersebut mengingatkan kita akan bahaya korupsi yang merugikan keuangan rakyat. Struktur anekdot ini lengkap memenuhi syarat Abstraksi, Orientasi, Krisis, Reaksi, dan Koda secara padu.</p>

        <!-- Foto / Gambar Section -->
        <div class="my-4 p-3 bg-white rounded-2xl border border-pastel-pink-100 shadow-sm text-center">
          <img src="assets/images/anekdot_text.png" alt="Teks Anekdot Humor Kritis" class="w-full max-h-60 object-cover rounded-xl mb-2">
          <span class="text-xs text-gray-500 font-medium italic">Gambar: Visualisasi Teks Anekdot sebagai media penyampaian kritik sosial secara santun dan cerdas.</span>
        </div>

        <div class="p-4 bg-pastel-pink-50 rounded-2xl border border-pastel-pink-100 text-xs text-pastel-pink-600 font-semibold">
          <strong>Kesimpulan Teks Anekdot:</strong> Melalui humor anekdot, kita diajarkan untuk bersikap kritis terhadap penyimpangan sosial tanpa harus kehilangan kesantunan dalam menyampaikan aspirasi.
        </div>
      </div>
    `
  },
  {
    id: 'indo-7',
    subject: 'bahasaindonesia',
    title: 'Teks Laporan Hasil Observasi (LHO): Ekosistem Pohon Bakau',
    category: 'Karya Tulis',
    date: '28 Juli 2026',
    teacher: 'Ibu Ratna, M.Pd.',
    shortDesc: 'Laporan hasil observasi objektif berbasis penelitian lapangan mengenai deskripsi umum, deskripsi bagian, dan manfaat Pohon Bakau (Mangrove).',
    coverImg: 'assets/images/indo_cover.png',
    isPopular: false,
    actionLink: '#',
    richContent: `
      <div class="space-y-5 text-sm text-gray-600 leading-relaxed">
        <h5 class="text-base font-extrabold text-gray-800 border-b border-pastel-pink-100 pb-2">Teks Laporan Hasil Observasi (LHO): Ekosistem Pohon Bakau</h5>
        
        <p><strong>1. Pengenalan Teks Laporan Hasil Observasi (LHO)</strong><br>
        Teks Laporan Hasil Observasi (LHO) adalah dokumen laporan ilmiah faktual yang berisi paparan hasil pengamatan langsung terhadap suatu objek alam atau sosial secara objektif dan sistematis. Teks LHO ditulis berlandaskan data empiris lapangan tanpa memuat opini subjektif dari penulis.</p>

        <p><strong>2. Pernyataan Umum / Klasifikasi Ekosistem Bakau</strong><br>
        Pohon bakau (<em>Rhizophora</em>) merupakan kelompok tumbuhan khas pesisir yang tumbuh di kawasan pasang surut air laut dan daerah muara sungai. Tumbuhan ini merupakan vegetasi utama dari ekosistem hutan mangrove yang tumbuh subur di wilayah iklim tropis. Indonesia memiliki kawasan hutan bakau terluas di dunia yang berfungsi menjaga keseimbangan biosfer pesisir.</p>

        <p><strong>3. Deskripsi Bagian Morfologi dan Adaptasi Bakau</strong><br>
        Berdasarkan pengamatan rinci di lapangan, pohon bakau memiliki ciri adaptasi fisik yang sangat unik. Akar tunjang dan akar napas (<em>pneumatofora</em>) tumbuh menjulang dari lumpur untuk mencengkeram substrat tanah dan mengambil oksigen langsung dari udara. Daun bakau berstruktur tebal, licin, dan berlapis lilin guna meminimalkan penguapan serta memiliki kelenjar ekskresi garam.</p>

        <p><strong>4. Deskripsi Manfaat Ekologis dan Ekonomis</strong><br>
        Hutan bakau memiliki fungsi perlindungan ekologis yang luar biasa. Akar bakau mampu meredam hentaman gelombang tsunami dan mencegah abrasi pantai. Selain itu, ekosistem mangrove menjadi tempat pemijahan (<em>breeding ground</em>) bagi biota laut dan bertindak sebagai penyerap emisi karbon (Blue Carbon) hingga 5 kali lebih kuat dibandingkan hutan daratan.</p>

        <!-- Foto / Gambar Section -->
        <div class="my-4 p-3 bg-white rounded-2xl border border-pastel-pink-100 shadow-sm text-center">
          <img src="assets/images/lho_text.png" alt="Teks LHO Ekosistem Pohon Bakau" class="w-full max-h-60 object-cover rounded-xl mb-2">
          <span class="text-xs text-gray-500 font-medium italic">Gambar: Dokumentasi observasi lapangan ekosistem hutan bakau dan konservasi lingkungan.</span>
        </div>

        <div class="p-4 bg-pastel-pink-50 rounded-2xl border border-pastel-pink-100 text-xs text-pastel-pink-600 font-semibold">
          <strong>Kesimpulan Teks LHO:</strong> Penulisan Laporan Hasil Observasi melatih ketelitian ilmiah serta menumbuhkan kesadaran kolektif untuk menjaga kelestarian lingkungan ekosistem alam.
        </div>
      </div>
    `
  }
];

// Master Teachers Code Data
const masterTeachers = [
  { code: 1, name: 'Adi Kristanto' },
  { code: 2, name: 'Agus Salim' },
  { code: 3, name: 'Cornel Kaban' },
  { code: 4, name: 'Debie Lola' },
  { code: 5, name: 'Diyana' },
  { code: 6, name: 'Feby Unggul' },
  { code: 7, name: 'Ihwan Arif P' },
  { code: 8, name: 'Intan Dwi Apriliani' },
  { code: 9, name: 'Iriwaty Japutra' },
  { code: 10, name: 'Jefry Corpry YH' },
  { code: 11, name: 'Katarina' },
  { code: 12, name: 'Marji' },
  { code: 13, name: 'Mulyawan' },
  { code: 14, name: 'Nur Fajar Sidik' },
  { code: 15, name: 'Purwanto' },
  { code: 16, name: 'Rina M. Yoniton' },
  { code: 17, name: 'Ruly Mediana' },
  { code: 18, name: 'Sartika' },
  { code: 19, name: 'Satibi' },
  { code: 20, name: 'Sopyan' },
  { code: 21, name: 'Toto Sunoto' },
  { code: 22, name: 'Yahya Yanuardi' },
  { code: 23, name: 'Eduardus Laot' },
  { code: 24, name: 'Siti Lola Y.' },
  { code: 25, name: 'Junaidi' },
  { code: 26, name: 'Suwarni' },
  { code: 27, name: 'Yuli Hastuti' },
  { code: 28, name: 'Aprodita Radisti W.' },
  { code: 29, name: 'Tri Rahmat Basuki' }
];

// Class XI-3 Schedule Data
const scheduleData = {
  "Senin": {
    badge: "Hari Ke-1",
    items: [
      { time: "06.30 - 07.30", jp: "-", subject: "Upacara / Pendampingan Wali Kelas / Info Day", teacher: "Guru Wali", type: "activity" },
      { time: "07.30 - 08.15", jp: "JP 1", subject: "Sosiologi", code: "KD 3", teacher: "Cornel Kaban", type: "class" },
      { time: "08.15 - 09.00", jp: "JP 2", subject: "Sosiologi", code: "KD 3", teacher: "Cornel Kaban", type: "class" },
      { time: "09.00 - 09.30", jp: "-", subject: "Istirahat Pertama", teacher: "-", type: "break" },
      { time: "09.30 - 10.10", jp: "JP 3", subject: "Bahasa Mandarin", code: "KD 1", teacher: "Adi Kristanto", type: "class" },
      { time: "10.10 - 10.50", jp: "JP 4", subject: "Bahasa Mandarin", code: "KD 1", teacher: "Adi Kristanto", type: "class" },
      { time: "10.50 - 11.30", jp: "JP 5", subject: "Budi Pekerti", code: "KD 26", teacher: "Suwarni", type: "class" },
      { time: "11.30 - 12.10", jp: "JP 6", subject: "Budaya Humanis", code: "KD 9", teacher: "Iriwaty Japutra", type: "class" },
      { time: "12.10 - 12.40", jp: "-", subject: "Istirahat Kedua", teacher: "-", type: "break" },
      { time: "12.40 - 13.20", jp: "JP 7", subject: "Matematika Wajib", code: "KD 10", teacher: "Jefry Corpry YH", type: "class" },
      { time: "13.20 - 14.40", jp: "JP 8-9", subject: "Ekonomi", code: "KD 4", teacher: "Debie Lola", type: "class" }
    ]
  },
  "Selasa": {
    badge: "Hari Ke-2",
    items: [
      { time: "06.30 - 06.45", jp: "-", subject: "Pembiasaan Awal", teacher: "-", type: "activity" },
      { time: "06.45 - 07.30", jp: "JP 1", subject: "Agama", code: "KD 26", teacher: "Suwarni", type: "class" },
      { time: "07.30 - 08.15", jp: "JP 2", subject: "Agama", code: "KD 26", teacher: "Suwarni", type: "class" },
      { time: "08.15 - 09.00", jp: "JP 3", subject: "Bahasa Indonesia", code: "KD 17", teacher: "Ruly Mediana", type: "class" },
      { time: "09.00 - 09.45", jp: "JP 4", subject: "Bahasa Indonesia", code: "KD 17", teacher: "Ruly Mediana", type: "class" },
      { time: "09.45 - 10.05", jp: "-", subject: "Istirahat Pertama", teacher: "-", type: "break" },
      { time: "10.05 - 10.50", jp: "JP 5", subject: "Geografi", code: "KD 14", teacher: "Nur Fajar Sidik", type: "class" },
      { time: "10.50 - 11.35", jp: "JP 6", subject: "Geografi", code: "KD 14", teacher: "Nur Fajar Sidik", type: "class" },
      { time: "11.35 - 12.00", jp: "-", subject: "Istirahat Kedua", teacher: "-", type: "break" },
      { time: "12.00 - 12.40", jp: "JP 7", subject: "Ekonomi", code: "KD 4", teacher: "Debie Lola", type: "class" },
      { time: "12.40 - 13.20", jp: "JP 8", subject: "Ekonomi", code: "KD 4", teacher: "Debie Lola", type: "class" },
      { time: "13.20 - 14.00", jp: "JP 9", subject: "Sosiologi", code: "KD 3", teacher: "Cornel Kaban", type: "class" },
      { time: "14.00 - 14.30", jp: "JP 10", subject: "Sosiologi", code: "KD 3", teacher: "Cornel Kaban", type: "class" }
    ]
  },
  "Rabu": {
    badge: "Hari Ke-3",
    items: [
      { time: "06.30 - 06.45", jp: "-", subject: "Pembiasaan Awal", teacher: "-", type: "activity" },
      { time: "06.45 - 07.30", jp: "JP 1", subject: "Informatika", code: "KD 22", teacher: "Yahya Yanuardi", type: "class" },
      { time: "07.30 - 08.15", jp: "JP 2", subject: "Informatika", code: "KD 22", teacher: "Yahya Yanuardi", type: "class" },
      { time: "08.15 - 09.00", jp: "JP 3", subject: "Bahasa Mandarin", code: "KD 1", teacher: "Adi Kristanto", type: "class" },
      { time: "09.00 - 09.30", jp: "-", subject: "Istirahat Pertama", teacher: "-", type: "break" },
      { time: "09.30 - 10.10", jp: "JP 4", subject: "Bahasa Mandarin", code: "KD 1", teacher: "Adi Kristanto", type: "class" },
      { time: "10.10 - 10.50", jp: "JP 5", subject: "Sosiologi", code: "KD 3", teacher: "Cornel Kaban", type: "class" },
      { time: "10.50 - 11.30", jp: "JP 6", subject: "Bahasa Indonesia", code: "KD 17", teacher: "Ruly Mediana", type: "class" },
      { time: "11.30 - 12.10", jp: "JP 7", subject: "Kokurikuler", code: "KD 4", teacher: "Debie Lola", type: "class" },
      { time: "12.10 - 12.40", jp: "-", subject: "Istirahat Kedua", teacher: "-", type: "break" },
      { time: "12.40 - 13.20", jp: "JP 8", subject: "Sejarah", code: "KD 3", teacher: "Cornel Kaban", type: "class" },
      { time: "13.20 - 14.00", jp: "JP 9", subject: "Sejarah", code: "KD 3", teacher: "Cornel Kaban", type: "class" },
      { time: "14.00 - 14.40", jp: "JP 10", subject: "Seni Budaya", code: "KD 5", teacher: "Diyana", type: "class" },
      { time: "14.40 - 15.20", jp: "JP 11", subject: "Seni Budaya", code: "KD 5", teacher: "Diyana", type: "class" }
    ]
  },
  "Kamis": {
    badge: "Hari Ke-4",
    items: [
      { time: "06.30 - 06.45", jp: "-", subject: "Pembiasaan Awal", teacher: "-", type: "activity" },
      { time: "06.45 - 07.30", jp: "JP 1", subject: "Informatika", code: "KD 22", teacher: "Yahya Yanuardi", type: "class" },
      { time: "07.30 - 08.15", jp: "JP 2", subject: "Informatika", code: "KD 22", teacher: "Yahya Yanuardi", type: "class" },
      { time: "08.15 - 09.00", jp: "JP 3", subject: "Matematika Wajib", code: "KD 10", teacher: "Jefry Corpry YH", type: "class" },
      { time: "09.00 - 09.30", jp: "-", subject: "Istirahat Pertama", teacher: "-", type: "break" },
      { time: "09.30 - 10.15", jp: "JP 4", subject: "Matematika Wajib", code: "KD 10", teacher: "Jefry Corpry YH", type: "class" },
      { time: "10.15 - 11.00", jp: "JP 5", subject: "PKN", code: "KD 2", teacher: "Agus Salim", type: "class" },
      { time: "11.00 - 11.45", jp: "JP 6", subject: "PKN", code: "KD 2", teacher: "Agus Salim", type: "class" },
      { time: "11.45 - 12.30", jp: "-", subject: "Istirahat Kedua (makan bersama)", teacher: "-", type: "break" },
      { time: "12.30 - 13.15", jp: "JP 7", subject: "Bahasa Inggris", code: "KD 27", teacher: "Yuli Hastuti", type: "class" },
      { time: "13.15 - 13.55", jp: "JP 8", subject: "Bahasa Inggris", code: "KD 27", teacher: "Yuli Hastuti", type: "class" },
      { time: "13.55 - 14.35", jp: "JP 9", subject: "Bahasa Inggris", code: "KD 27", teacher: "Yuli Hastuti", type: "class" },
      { time: "14.35 - 15.15", jp: "JP 10", subject: "Ekonomi", code: "KD 4", teacher: "Debie Lola", type: "class" }
    ]
  },
  "Jumat": {
    badge: "Hari Ke-5",
    items: [
      { time: "06.30 - 07.15", jp: "-", subject: "Jumat Bersih / Sehat / Literasi / Ekspresi / Public Speaking", teacher: "-", type: "activity" },
      { time: "07.15 - 08.00", jp: "JP 1", subject: "PKWU", code: "KD 4", teacher: "Debie Lola", type: "class" },
      { time: "08.00 - 08.45", jp: "JP 2", subject: "PKWU", code: "KD 4", teacher: "Debie Lola", type: "class" },
      { time: "08.45 - 09.15", jp: "-", subject: "Istirahat Pertama", teacher: "-", type: "break" },
      { time: "09.15 - 10.00", jp: "JP 3", subject: "PJOK", code: "KD 20", teacher: "Sopyan", type: "class" },
      { time: "10.00 - 10.45", jp: "JP 4", subject: "PJOK", code: "KD 20", teacher: "Sopyan", type: "class" },
      { time: "10.45 - 11.30", jp: "JP 5", subject: "Bimbingan Konseling", code: "KD 11", teacher: "Katarina", type: "class" },
      { time: "11.30 - 12.30", jp: "-", subject: "Jumat Ibadah", teacher: "-", type: "activity" },
      { time: "12.30 - 13.00", jp: "-", subject: "Istirahat Kedua", teacher: "-", type: "break" },
      { time: "13.00 - 13.45", jp: "JP 6", subject: "Geografi", code: "KD 14", teacher: "Nur Fajar Sidik", type: "class" },
      { time: "13.45 - 14.30", jp: "JP 7", subject: "Geografi", code: "KD 14", teacher: "Nur Fajar Sidik", type: "class" }
    ]
  }
};

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
  // Setup Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Check for saved mood in LocalStorage
  const savedMood = localStorage.getItem("user-mood");
  const savedEmoji = localStorage.getItem("user-mood-emoji");
  const moodLabel = document.getElementById("mood-label");
  if (savedMood && savedEmoji && moodLabel) {
    moodLabel.innerText = `${savedEmoji} ${savedMood}`;
  }

  // Dynamic Greeting based on time
  const dayGreeting = document.getElementById("day-greeting");
  if (dayGreeting) {
    const hour = new Date().getHours();
    let greeting = "Selamat Datang";
    if (hour >= 5 && hour < 11) {
      greeting = "Selamat Pagi 🌅";
    } else if (hour >= 11 && hour < 15) {
      greeting = "Selamat Siang ☀️";
    } else if (hour >= 15 && hour < 18) {
      greeting = "Selamat Sore 🌇";
    } else {
      greeting = "Selamat Malam 🌙";
    }
    dayGreeting.innerText = greeting;
  }

  // Check URL hash for tab switching (e.g., #schedule on index.html)
  if (window.location.hash) {
    const hashTab = window.location.hash.replace('#', '').replace('-section', '');
    if (document.getElementById(`${hashTab}-section`)) {
      switchTab(hashTab);
    }
  }

  // Render Popular Tasks
  renderPopularTasks();

  // Render All Tasks in Sub-sections
  renderInforTasks('Semua');
  renderIndoTasks('Semua');
  renderSchedule('Semua');
  renderTeacherList();
});

// Schedule Subtab Switching (Lesson Schedule vs My Schedule)
function switchScheduleSubtab(tabName) {
  const lessonSec = document.getElementById("lesson-schedule-container");
  const mySec = document.getElementById("my-schedule-container");
  const btnLesson = document.getElementById("subtab-btn-lesson");
  const btnMy = document.getElementById("subtab-btn-my");

  if (!lessonSec || !mySec) return;

  if (tabName === 'lesson') {
    lessonSec.classList.remove("hidden");
    mySec.classList.add("hidden");
    if (btnLesson) btnLesson.className = "px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 bg-pastel-pink-500 text-white shadow-md flex items-center gap-2";
    if (btnMy) btnMy.className = "px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 text-gray-600 hover:text-pastel-pink-500 bg-white/60 flex items-center gap-2";
  } else {
    lessonSec.classList.add("hidden");
    mySec.classList.remove("hidden");
    if (btnMy) btnMy.className = "px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 bg-pastel-pink-500 text-white shadow-md flex items-center gap-2";
    if (btnLesson) btnLesson.className = "px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 text-gray-600 hover:text-pastel-pink-500 bg-white/60 flex items-center gap-2";
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Tab Navigation Logic
function switchTab(tabId) {
  const targetTab = document.getElementById(`${tabId}-section`);

  // If section does not exist on current page, redirect to appropriate file
  if (!targetTab) {
    if (tabId === 'dashboard' || tabId === 'schedule') {
      window.location.href = `index.html${tabId === 'schedule' ? '#schedule-section' : ''}`;
    } else if (tabId === 'profil') {
      window.location.href = 'profil.html';
    } else if (tabId === 'informatika') {
      window.location.href = 'informatika.html';
    } else if (tabId === 'bahasaindonesia' || tabId === 'bahasa-indonesia') {
      window.location.href = 'bahasa-indonesia.html';
    }
    return;
  }

  // Hide all tabs
  document.querySelectorAll(".section-tab").forEach(tab => {
    tab.classList.remove("active-tab");
  });

  // Show targeted tab
  targetTab.classList.add("active-tab");
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Manage nav links active styling (Desktop)
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.className = "nav-btn px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 text-gray-600 hover:text-pastel-pink-500";
  });

  const activeBtn = document.getElementById(`nav-${tabId}`);
  if (activeBtn) {
    activeBtn.className = "nav-btn px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 active-nav bg-white text-pastel-pink-500 shadow-sm border border-pastel-pink-100/20";
  }
}

// Toggle Mobile Menu drawer
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon");

  if (!menu || !icon) return;

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    icon.setAttribute("data-lucide", "x");
  } else {
    menu.classList.add("hidden");
    icon.setAttribute("data-lucide", "menu");
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Mood Changer Logic
function setMood(mood, emoji) {
  const moodLabel = document.getElementById("mood-label");
  if (moodLabel) {
    moodLabel.innerText = `${emoji} ${mood}`;
  }
  localStorage.setItem("user-mood", mood);
  localStorage.setItem("user-mood-emoji", emoji);
}

// Form Submission Alert
function handleContactSubmit(event) {
  event.preventDefault();
  alert("Terima kasih! Pesan Anda telah terkirim (Ini adalah simulasi).");
  event.target.reset();
}

// Generate Single Task Card HTML
function createTaskCardHtml(task) {
  return `
    <div class="glass-card rounded-[2rem] overflow-hidden border border-white/50 hover:shadow-pastel-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
      <!-- Card Thumbnail -->
      <div class="relative h-44 overflow-hidden bg-pastel-pink-100">
        <img src="${task.coverImg}" alt="${task.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <span class="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur text-pastel-pink-500 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm border border-pastel-pink-100/20">
          ${task.category}
        </span>
      </div>
      <!-- Card Body -->
      <div class="p-6 flex flex-col flex-grow">
        <span class="text-[10px] font-bold text-pastel-pink-400 uppercase tracking-widest block mb-1">
          ${task.subject === 'informatika' ? 'Informatika' : 'Bahasa Indonesia'}
        </span>
        <h3 class="font-extrabold text-gray-800 text-base leading-snug mb-2 group-hover:text-pastel-pink-500 transition-colors line-clamp-2">
          ${task.title}
        </h3>
        <p class="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">
          ${task.shortDesc}
        </p>
        <div class="mt-auto pt-4 border-t border-pastel-pink-100/50 flex items-center justify-between">
          <span class="text-[10px] text-gray-400 flex items-center gap-1">
            <i data-lucide="calendar" class="w-3.5 h-3.5"></i> ${task.date}
          </span>
          <button onclick="openModal('${task.id}')" class="text-xs font-bold text-pastel-pink-500 hover:text-pastel-pink-600 flex items-center gap-0.5 group/btn">
            Detail <i data-lucide="chevron-right" class="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Render Popular Tasks for Dashboard
function renderPopularTasks() {
  const container = document.getElementById("popular-tasks-container");
  if (!container) return;
  const popularTasks = tasksData.filter(task => task.isPopular);

  container.innerHTML = popularTasks.map(task => createTaskCardHtml(task)).join('');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Render and Filter Informatika Tasks
function renderInforTasks(category) {
  const container = document.getElementById("infor-tasks-container");
  if (!container) return;
  const filtered = category === 'Semua'
    ? tasksData.filter(t => t.subject === 'informatika')
    : tasksData.filter(t => t.subject === 'informatika' && t.category === category);

  container.innerHTML = filtered.length > 0
    ? filtered.map(t => createTaskCardHtml(t)).join('')
    : `<div class="col-span-full py-12 text-center text-gray-400">Belum ada tugas untuk kategori ini.</div>`;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function filterInfor(category) {
  const buttons = document.querySelectorAll("#infor-filter-container button");
  buttons.forEach(btn => {
    if (btn.innerText.trim() === category) {
      btn.className = "infor-filter-btn px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border border-pastel-pink-100 bg-pastel-pink-500 text-white";
    } else {
      btn.className = "infor-filter-btn px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border border-pastel-pink-100 bg-white text-gray-600 hover:bg-pastel-pink-50 hover:text-pastel-pink-500";
    }
  });
  renderInforTasks(category);
}

// Render and Filter Bahasa Indonesia Tasks
function renderIndoTasks(category) {
  const container = document.getElementById("indo-tasks-container");
  if (!container) return;
  const filtered = category === 'Semua'
    ? tasksData.filter(t => t.subject === 'bahasaindonesia')
    : tasksData.filter(t => t.subject === 'bahasaindonesia' && t.category === category);

  container.innerHTML = filtered.length > 0
    ? filtered.map(t => createTaskCardHtml(t)).join('')
    : `<div class="col-span-full py-12 text-center text-gray-400">Belum ada tugas untuk kategori ini.</div>`;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function filterIndo(category) {
  const buttons = document.querySelectorAll("#indo-filter-container button");
  buttons.forEach(btn => {
    if (btn.innerText.trim() === category) {
      btn.className = "indo-filter-btn px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border border-pastel-pink-100 bg-pastel-pink-500 text-white";
    } else {
      btn.className = "indo-filter-btn px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border border-pastel-pink-100 bg-white text-gray-600 hover:bg-pastel-pink-50 hover:text-pastel-pink-500";
    }
  });
  renderIndoTasks(category);
}

// Render Schedule Function
function renderSchedule(selectedDay) {
  const container = document.getElementById("schedule-container");
  if (!container) return;
  let daysToRender = Object.keys(scheduleData);
  if (selectedDay !== 'Semua') {
    daysToRender = [selectedDay];
  }

  let html = '';

  daysToRender.forEach(day => {
    const data = scheduleData[day];
    html += `
      <div class="glass-card rounded-[2.5rem] p-6 sm:p-8 border border-white/60 shadow-sm relative overflow-hidden">
        <!-- Day Header -->
        <div class="flex items-center justify-between pb-5 mb-6 border-b border-pastel-pink-100">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pastel-pink-400 to-pastel-purple-400 flex items-center justify-center text-white font-extrabold shadow-sm">
              <i data-lucide="calendar" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-xl font-extrabold text-gray-800 tracking-tight">${day}</h3>
              <span class="text-xs text-pastel-pink-500 font-semibold uppercase tracking-wider">${data.badge} &bull; Kelas XI-3</span>
            </div>
          </div>
          <span class="px-3.5 py-1 bg-pastel-pink-50 text-pastel-pink-600 rounded-full text-xs font-bold border border-pastel-pink-100">
            ${data.items.filter(i => i.type === 'class').length} JP Pelajaran
          </span>
        </div>

        <!-- Items List -->
        <div class="space-y-3">
    `;

    data.items.forEach(item => {
      if (item.type === 'class') {
        html += `
          <div class="p-4 rounded-2xl bg-white/80 border border-pastel-pink-100/60 hover:border-pastel-pink-300 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
            <div class="flex items-center gap-3.5">
              <div class="w-12 py-1.5 rounded-xl bg-pastel-pink-100/80 text-pastel-pink-600 font-extrabold text-xs text-center flex-shrink-0 border border-pastel-pink-200/50">
                ${item.jp}
              </div>
              <div>
                <h4 class="font-extrabold text-gray-800 text-base group-hover:text-pastel-pink-600 transition-colors">${item.subject}</h4>
                <div class="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                  <span class="px-2 py-0.5 rounded-md bg-pastel-purple-50 text-pastel-purple-600 font-bold border border-pastel-purple-100">${item.code}</span>
                  <span>&bull;</span>
                  <span class="font-medium text-gray-700 flex items-center gap-1">
                    <i data-lucide="user" class="w-3.5 h-3.5 text-pastel-pink-400"></i> ${item.teacher}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-1.5 text-xs font-bold text-gray-600 bg-pastel-pink-50/60 px-3.5 py-1.5 rounded-full border border-pastel-pink-100/50 self-start sm:self-auto">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-pastel-pink-500"></i>
              <span>${item.time} WIB</span>
            </div>
          </div>
        `;
      } else if (item.type === 'break') {
        html += `
          <div class="p-3.5 rounded-2xl bg-gradient-to-r from-pastel-peach-50 to-amber-50/60 border border-pastel-peach-200/60 flex items-center justify-between text-xs font-semibold text-amber-800">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                <i data-lucide="coffee" class="w-4 h-4"></i>
              </div>
              <span class="font-bold text-amber-900">${item.subject}</span>
            </div>
            <span class="flex items-center gap-1 font-bold text-amber-700 bg-white/80 px-3 py-1 rounded-full border border-amber-200/50">
              <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${item.time} WIB
            </span>
          </div>
        `;
      } else {
        html += `
          <div class="p-3.5 rounded-2xl bg-gradient-to-r from-pastel-blue-50 to-indigo-50/60 border border-pastel-blue-200/60 flex items-center justify-between text-xs text-indigo-900 font-semibold">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                <i data-lucide="sparkles" class="w-4 h-4"></i>
              </div>
              <span class="font-bold text-indigo-950">${item.subject}</span>
            </div>
            <span class="flex items-center gap-1 font-bold text-indigo-700 bg-white/80 px-3 py-1 rounded-full border border-indigo-200/50">
              <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${item.time} WIB
            </span>
          </div>
        `;
      }
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function filterSchedule(day) {
  const buttons = document.querySelectorAll("#schedule-day-filter button");
  buttons.forEach(btn => {
    if (btn.innerText.trim().includes(day) || (day === 'Jumat' && btn.innerText.trim().includes("Jum'at"))) {
      btn.className = "sched-filter-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm border border-pastel-pink-100 bg-pastel-pink-500 text-white flex items-center gap-1.5";
    } else {
      btn.className = "sched-filter-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm border border-pastel-pink-100 bg-white text-gray-600 hover:bg-pastel-pink-50 hover:text-pastel-pink-500 flex items-center gap-1.5";
    }
  });
  renderSchedule(day);
}

function renderTeacherList() {
  const container = document.getElementById("teacher-list-container");
  if (!container) return;
  container.innerHTML = masterTeachers.map(t => `
    <div class="p-2.5 rounded-xl bg-white/80 border border-pastel-pink-100/60 flex items-center gap-2.5 shadow-2xs">
      <span class="w-7 h-7 rounded-lg bg-pastel-pink-100 text-pastel-pink-600 font-extrabold flex items-center justify-center flex-shrink-0 text-[11px]">
        ${t.code}
      </span>
      <span class="font-bold text-gray-700 truncate">${t.name}</span>
    </div>
  `).join('');
}

function toggleTeacherList() {
  const container = document.getElementById("teacher-list-container");
  const icon = document.getElementById("teacher-toggle-icon");
  const text = document.getElementById("teacher-toggle-text");
  if (!container) return;

  if (container.classList.contains("hidden")) {
    container.classList.remove("hidden");
    if (text) text.innerText = "Tutup Daftar";
    if (icon) icon.style.transform = "rotate(180deg)";
  } else {
    container.classList.add("hidden");
    if (text) text.innerText = "Buka Daftar";
    if (icon) icon.style.transform = "rotate(0deg)";
  }
}

// Modal Operations
function openModal(taskId) {
  const task = tasksData.find(t => t.id === taskId);
  if (!task) return;

  const modalCover = document.getElementById("modal-cover-img");
  const modalBadge = document.getElementById("modal-badge");
  const modalTitle = document.getElementById("modal-title");
  const modalDate = document.getElementById("modal-date");
  const modalTeacher = document.getElementById("modal-teacher");
  const modalDesc = document.getElementById("modal-description");
  const modalContainer = document.getElementById("modal-content-container");
  const actionBtn = document.getElementById("modal-action-btn");

  if (modalCover) modalCover.src = task.coverImg;
  if (modalBadge) modalBadge.innerText = task.category;
  if (modalTitle) modalTitle.innerText = task.title;
  if (modalDate) modalDate.innerText = task.date;
  if (modalTeacher) modalTeacher.innerText = task.teacher;
  if (modalDesc) modalDesc.innerText = task.shortDesc;
  if (modalContainer) modalContainer.innerHTML = task.richContent;

  if (actionBtn) actionBtn.href = task.actionLink;

  // Show modal
  const modal = document.getElementById("task-modal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeModal() {
  const modal = document.getElementById("task-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

/* ======================================================
   SEAMLESS PAGE NAVIGATION (Continuous Audio Stream)
   ====================================================== */
document.addEventListener('DOMContentLoaded', () => {
  setupSeamlessNavigation();
});

function setupSeamlessNavigation() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('http') || anchor.getAttribute('target') === '_blank') return;

    if (href.endsWith('.html') || href === 'index.html') {
      e.preventDefault();
      loadPageDynamically(href);
    }
  });

  window.addEventListener('popstate', () => {
    loadPageDynamically(window.location.href, false);
  });
}

async function loadPageDynamically(url, pushState = true) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      window.location.href = url;
      return;
    }
    const htmlText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');

    // Update document title
    document.title = doc.title;

    // Swap header & main content without destroying audio engine
    const newHeader = doc.querySelector('header');
    const curHeader = document.querySelector('header');
    if (newHeader && curHeader) {
      curHeader.replaceWith(newHeader);
    }

    const newMain = doc.querySelector('main');
    const curMain = document.querySelector('main');
    if (newMain && curMain) {
      curMain.replaceWith(newMain);
    } else {
      // Fallback: replace body children except floating player & audio elements
      const floatPlayer = document.getElementById('floating-music-player');
      const bodyChildren = Array.from(doc.body.children).filter(el => el.id !== 'floating-music-player' && el.tagName !== 'SCRIPT');
      
      // Clear current body except float player & scripts
      const curChildren = Array.from(document.body.children);
      curChildren.forEach(el => {
        if (el.id !== 'floating-music-player' && el.tagName !== 'SCRIPT') {
          el.remove();
        }
      });

      bodyChildren.forEach(node => {
        document.body.insertBefore(node.cloneNode(true), floatPlayer || null);
      });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pushState) {
      window.history.pushState(null, '', url);
    }

    // Re-initialize Lucide Icons & MusicPlayer UI bindings
    if (typeof lucide !== 'undefined') lucide.createIcons();
    if (window.MusicPlayer && typeof window.MusicPlayer.init === 'function') {
      window.MusicPlayer.init();
    }

    // Re-trigger page-specific init functions if available
    if (typeof renderPopularTasks === 'function') renderPopularTasks();
    if (typeof renderSchedule === 'function') renderSchedule('Senin');
  } catch (err) {
    console.warn('[SeamlessNav] Navigasi standar digunakan:', err);
    window.location.href = url;
  }
}


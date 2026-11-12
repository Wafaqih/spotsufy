import { SlideData } from '../types/presentation';

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    trackNumber: '01',
    title: 'TERAPI SAMĀ‘IY: Ketika Pendengaran Menjadi Jalan Menuju Jiwa',
    subtitle: 'Perspektif Pemikiran Imam Al-Ghazali dan Imam Al-Farabi',
    category: 'Pengantar',
    estimatedDuration: '03:00',
    theme: 'Hubungan antara pendengaran, musik, hati, dan pembinaan jiwa dalam perspektif pemikiran Islam klasik.',
    keyQuestions: 'Pernahkah sebuah lantunan membuat seseorang tiba-tiba merasa tenang, sedih, bahagia, terharu, atau bahkan merasakan kerinduan spiritual? Suara bukan sekadar gelombang yang diterima telinga, melainkan sarana yang menyentuh keadaan batin manusia.',
    mainMessage: 'Pendengaran dapat menjadi jalan untuk menyentuh keadaan batin manusia.',
    primaryReferences: ['ghazali_ihya', 'farabi_musiqa'],
    recommendedAudio: 'arabian_acoustic',
    audioLabel: 'Alunan Kontemplatif Islam Klasik'
  },
  {
    id: 2,
    trackNumber: '02',
    title: 'APA ITU TERAPI SAMĀ‘IY?',
    subtitle: 'Memahami Pendengaran sebagai Jalan Menuju Pengalaman Batin',
    category: 'Pengantar',
    estimatedDuration: '03:30',
    theme: 'Pengertian Samā‘, pengertian Terapi Samā‘iy, dan 3 unsur utama pembinaan jiwa.',
    keyQuestions: 'Bagaimana aktivitas mendengar (Samā‘) terhubung dengan hati (Qalb) dan melahirkan pengalaman batin (Wajd) menuju pembinaan jiwa?',
    mainMessage: 'Samā‘ merupakan pintu masuk, hati merupakan tempat respons batin, dan Wajd merupakan pengalaman batin yang muncul.',
    academicNote: 'Istilah Terapi Samā‘iy digunakan sebagai kerangka konseptual presentasi untuk mengembangkan pembahasan pemikiran kedua tokoh. Jangan menyatakan bahwa Al-Ghazali atau Al-Farabi secara langsung merumuskan suatu protokol klinis bernama Terapi Samā‘iy.',
    primaryReferences: ['ghazali_ihya', 'farabi_musiqa'],
    recommendedAudio: 'calm_acoustic',
    audioLabel: 'Suasana Hening Reflektif'
  },
  {
    id: 3,
    trackNumber: '03',
    title: 'DUA TOKOH, DUA SUDUT PANDANG',
    subtitle: 'Imam Al-Ghazali dan Imam Al-Farabi dalam Kajian Pendengaran, Musik, dan Jiwa',
    category: 'Sintesis & Perbandingan',
    estimatedDuration: '04:00',
    theme: 'Perbandingan dua pendekatan: Tasawuf & Pembinaan Batin vs Filsafat & Ilmu Musik.',
    keyQuestions: 'Al-Ghazali mengkaji bagaimana suara menggerakkan hati dan menghasilkan pengalaman batin, sedangkan Al-Farabi mengkaji bagaimana suara dan musik tersusun secara terstruktur.',
    mainMessage: 'Keduanya menjadi landasan untuk membangun pemahaman mengenai hubungan antara musik dan pembinaan jiwa tanpa mencampurbaurkan metodologi masing-masing.',
    academicNote: 'Kedua tokoh memberikan perhatian pada hubungan suara dan manusia, namun titik tekannya berbeda. Jangan menggambarkan kedua tokoh seolah-olah memiliki teori yang identik.',
    primaryReferences: ['ghazali_ihya', 'farabi_musiqa'],
    recommendedAudio: 'none'
  },
  {
    id: 4,
    trackNumber: '04',
    title: 'BAGAIMANA AL-GHAZALI MEMAHAMI SAMĀ‘?',
    subtitle: 'Pendengaran sebagai Jalan untuk Menggerakkan Hati',
    category: 'Al-Ghazali',
    estimatedDuration: '04:00',
    theme: 'Hati sebagai khazanah rahasia batin dan pendengaran sebagai pemantik (qawādiḥ).',
    keyQuestions: 'Hati manusia menyimpan rahasia dan permata batin. Nada-nada yang tersusun secara teratur dan menyenangkan mengeluarkan apa yang tersimpan dalam hati serta menampakkan kebaikan maupun keburukannya.',
    mainMessage: 'Pendengaran menjadi jalan untuk membangkitkan apa yang telah tersimpan di dalam hati.',
    arabicQuotes: [
      {
        title: 'Kutipan Sumber Primer (Khazanah Rahasia Batin)',
        arabic: 'فَإِنَّ الْقُلُوبَ وَالسَّرَائِرَ خَزَائِنُ الْأَسْرَارِ وَمَعَادِنُ الْجَوَاهِرِ',
        translation: 'Sesungguhnya hati dan batin merupakan tempat penyimpanan rahasia dan tambang berbagai permata.',
        source: 'Imam Al-Ghazali, Iḥyā’ ‘Ulūm al-Dīn (Kitāb Ādāb al-Samā‘ wa al-Wajd)'
      },
      {
        title: 'Kutipan Kedua (Pemantik Pendengaran)',
        arabic: 'وَلَا سَبِيلَ إِلَى اسْتِثَارَةِ خَفَايَاهَا إِلَّا بِقَوَادِحِ السَّمَاعِ',
        translation: 'Tidak ada jalan untuk membangkitkan rahasia-rahasia yang tersembunyi di dalamnya kecuali melalui pemantik-pemantik pendengaran.',
        source: 'Imam Al-Ghazali, Iḥyā’ ‘Ulūm al-Dīn (Kitāb Ādāb al-Samā‘ wa al-Wajd)'
      }
    ],
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'arabian_acoustic',
    audioLabel: 'Lantunan Kontemplasi Al-Ghazali'
  },
  {
    id: 5,
    trackNumber: '05',
    title: 'MENGAPA SUARA BISA MENYENTUH HATI?',
    subtitle: 'Munāsabah antara Nada, Suara, dan Keadaan Ruhani',
    category: 'Al-Ghazali',
    estimatedDuration: '04:30',
    theme: 'Konsep Munāsabah (kesesuaian fitriah antara nada dan jiwa) serta 4 bentuk pengaruh suara.',
    keyQuestions: 'Adanya rahasia kesesuaian antara nada berirama dengan ruh manusia, melahirkan respons emosional, psikologis, fisik, dan ruhani.',
    mainMessage: 'Karakter suara dan nada memiliki hubungan dengan respons batin manusia. Inilah salah satu landasan pemikiran Al-Ghazali mengenai pengaruh Samā‘.',
    academicNote: 'Pengaruh suara tidak selalu positif; apa yang muncul bergantung pada keadaan hati dan kecenderungan yang dominan. Suara tidak boleh dipandang otomatis menghasilkan ketenangan spiritual.',
    arabicQuotes: [
      {
        title: 'Kutipan Sumber Primer (Rahasia Munāsabah)',
        arabic: 'لِلَّهِ تَعَالَى سِرٌّ فِي مُنَاسَبَةِ النَّغَمَاتِ الْمَوْزُونَةِ لِلْأَرْوَاحِ',
        translation: "Allah Ta'ala memiliki rahasia dalam kesesuaian antara nada-nada yang tersusun secara berirama dengan ruh.",
        source: 'Imam Al-Ghazali, Iḥyā’ ‘Ulūm al-Dīn (Kitāb Ādāb al-Samā‘ wa al-Wajd)'
      },
      {
        title: 'Kutipan Pendukung (Variasi Karakter Suara)',
        arabic: 'فَمِنَ الْأَصْوَاتِ مَا يُفَرِّحُ، وَمِنْهَا مَا يُحْزِنُ، وَمِنْهَا مَا يُنَوِّمُ، وَمِنْهَا مَا يُضْحِكُ وَيُطْرِبُ',
        translation: 'Di antara suara-suara itu ada yang menggembirakan, ada yang menyedihkan, ada yang membuat tidur, dan ada yang membuat tertawa serta merasa terhibur.',
        source: 'Imam Al-Ghazali, Iḥyā’ ‘Ulūm al-Dīn (Kitāb Ādāb al-Samā‘ wa al-Wajd)'
      }
    ],
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'calm_acoustic',
    audioLabel: 'Alunan Khusyuk Ruhani'
  },
  {
    id: 6,
    trackNumber: '06',
    title: 'KONSEP SAMĀ‘IY',
    subtitle: 'Proses Terpadu antara Pendengaran, Pengalaman Batin, dan Tindakan Manusia',
    category: 'Konsep Samā‘iy',
    estimatedDuration: '03:30',
    theme: 'Pembuka pembahasan inti: pendengaran sebagai proses terstruktur yang menghubungkan stimulus suara dengan keadaan hati dan respons perilaku manusia.',
    keyQuestions: 'Bagaimana pengalaman mendengar tidak hanya berhenti pada indera telinga, melainkan dipahami, menghasilkan keadaan batin, dan memunculkan tindakan anggota tubuh?',
    mainMessage: 'Samā‘iy menghubungkan stimulus pendengaran dengan pengalaman batin dan respons perilaku manusia.',
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'arabian_acoustic',
    audioLabel: 'Alunan Pembuka Samā‘iy'
  },
  {
    id: 7,
    trackNumber: '07',
    title: 'TIGA TAHAPAN SAMA’IY',
    subtitle: 'Fahmun (Kognisi), Wajdun (Afeksi), dan Harakātun (Konasi)',
    category: 'Konsep Samā‘iy',
    estimatedDuration: '04:00',
    theme: 'Tiga tahapan berantai pengalaman mendengar menurut Imam Al-Ghazali: Fahmun (Ilmu), Wajdun (Hal), dan Harakātun (\'Amal).',
    keyQuestions: 'Bagaimana proses dari pendengaran menuju pemahaman, kemudian pengalaman batin, hingga menghasilkan tindakan nyata?',
    mainMessage: 'Samā‘ → Fahmun → Wajdun → Harakātun (Kognisi → Afeksi → Konasi).',
    academicNote: 'Kognisi, afeksi, dan konasi merupakan pendekatan interpretatif untuk menjelaskan tahapan Al-Ghazali, bukan istilah psikologi yang secara langsung beliau gunakan.',
    arabicQuotes: [
      {
        title: 'Landasan Pemikiran Imam Al-Ghazali',
        arabic: 'أَوَّلُ دَرَجَةِ السَّمَاعِ فَهْمُ الْمَسْمُوعِ، ثُمَّ يُثْمِرُ الْفَهْمُ الْوَجْدَ، وَيُثْمِرُ الْوَجْدُ الْحَرَكَةَ بِالْجَوَارِحِ',
        translation: 'Tingkatan pertama Samā\' adalah memahami sesuatu yang didengar. Kemudian pemahaman menghasilkan Wajd, dan Wajd menghasilkan gerakan melalui anggota tubuh.',
        source: 'Imam Al-Ghazali, Iḥyā’ ‘Ulūm al-Dīn'
      }
    ],
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'calm_acoustic',
    audioLabel: 'Alunan Perenungan Batin'
  },
  {
    id: 8,
    trackNumber: '08',
    title: 'DEFINISI TERAPI SAMĀ‘IY',
    subtitle: 'Pendengaran sebagai Pendekatan Utama dalam Mengondisikan Keadaan Jiwa dan Akhlak',
    category: 'Terapi Samā‘iy',
    estimatedDuration: '04:00',
    theme: 'Perumusan definisi Terapi Samā‘iy dan tiga dimensinya (Kognisi, Afeksi, Konasi) menuju pembentukan akhlak terpuji.',
    keyQuestions: 'Bagaimana pendengaran menjadi pendekatan utama dalam menata keadaan jiwa menuju perubahan akhlak?',
    mainMessage: 'Tujuan Terapi Samā‘iy bukan sekadar kenyamanan mendengar, melainkan mengarahkan pengalaman mendengar menuju perubahan hati dan pembentukan akhlak.',
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'arabian_acoustic',
    audioLabel: 'Harmoni Akhlak Al-Ghazali'
  },
  {
    id: 9,
    trackNumber: '09',
    title: 'JIWA YANG SEHAT & KEPEKAAN BATIN',
    subtitle: 'Keterbukaan Jiwa Merasakan Semilir Angin, Bunga-Bunga, dan Suara Seruling',
    category: 'Kepekaan Jiwa',
    estimatedDuration: '03:30',
    theme: 'Refleksi filosofis hubungan antara kesehatan jiwa, kepekaan batin, dan kemampuan manusia merasakan keindahan.',
    keyQuestions: 'Bagaimana kepekaan batin terhadap keindahan alam dan lantunan suara menjadi cermin keterbukaan jiwa?',
    mainMessage: 'Kepekaan batin merupakan salah satu unsur penting dalam pengalaman Samā‘iy untuk mengarahkan manusia menuju pengalaman batin yang lebih baik.',
    academicNote: 'Ungkapan filosofis ini dipertahankan sebagai ilustrasi reflektif dan tidak boleh digunakan sebagai kriteria diagnosis klinis.',
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'calm_acoustic',
    audioLabel: 'Alunan Seruling Kedamaian'
  },
  {
    id: 10,
    trackNumber: '10',
    title: 'EMPAT TINGKATAN MUSTAMI’',
    subtitle: 'Klasifikasi Pendengar Berdasarkan Orientasi dan Kesiapan Spiritual',
    category: 'Tingkatan Pendengar',
    estimatedDuration: '04:30',
    theme: 'Empat tingkatan Mustami\': dari kenikmatan musikal alami, pemahaman keindahan makhluk, hubungan spiritual dengan Allah, hingga Fanā\' & Baqā\'.',
    keyQuestions: 'Mengapa dua orang yang mendengarkan lantunan yang sama dapat mengalami respons batin yang sangat berbeda?',
    mainMessage: 'Pengalaman mendengar tidak seragam; pendekatan pembinaan jiwa harus bertahap sesuai tingkat kesiapan batin pendengar.',
    academicNote: 'Klasifikasi empat tingkatan ini mengikuti materi akademik; atribusi dan redaksi Arabnya diverifikasi terhadap tradisi keilmuan tasawuf Al-Ghazali.',
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'arabian_acoustic',
    audioLabel: 'Tangga Maqamat Mustami‘'
  },
  {
    id: 11,
    trackNumber: '11',
    title: 'TUJUAN TERAPI SAMĀ‘IY AL-GHAZALI',
    subtitle: 'Menyingkap Isi Hati, Mengarahkan Gerak Batin, dan Menuju Kedekatan kepada Allah',
    category: 'Al-Ghazali',
    estimatedDuration: '04:00',
    theme: 'Samā‘ bukan sekadar kenikmatan atau hiburan, melainkan sarana menggerakkan aḥwāl, menyingkap kecenderungan batin, dan membantu perjalanan rohani.',
    keyQuestions: 'Apa tujuan sejati samā‘ menurut Imam Al-Ghazali, dan bagaimana membedakan gejolak hawa nafsu dengan getaran batin yang ikhlas?',
    mainMessage: 'Samā‘ adalah sarana, bukan tujuan akhir; ukuran keberhasilan rohani adalah arah perubahan batin dan lahirnya amal nyata.',
    academicNote: 'Al-Ghazali membahas hukum, adab, pengalaman batin, dan pengaruh samā‘ dalam kerangka etika serta tasawuf, bukan protokol psikoterapi klinis modern.',
    arabicQuotes: [
      {
        title: 'Kutipan Sumber Primer (Khazanah Rahasia Batin)',
        arabic: 'فَإِنَّ الْقُلُوبَ وَالسَّرَائِرَ خَزَائِنُ الْأَسْرَارِ وَمَعَادِنُ الْجَوَاهِرِ',
        translation: 'Sesungguhnya hati dan rahasia batin adalah khazanah perbendaharaan rahasia dan tambang permata.',
        source: 'Iḥyā’ ‘Ulūm al-Dīn, Muqaddimah Kitāb Ādāb al-Samā‘ wa al-Wajd'
      }
    ],
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'arabian_acoustic',
    audioLabel: 'Kontemplasi Tauhid & Batin'
  },
  {
    id: 12,
    trackNumber: '12',
    title: 'BAGAIMANA AL-FARABI MEMAHAMI MUSIK?',
    subtitle: 'Al-Farabi: Musik sebagai Ilmu dan Seni yang Terstruktur',
    category: 'Al-Farabi',
    estimatedDuration: '04:00',
    theme: 'Pendekatan filosofis-musikal: Al-Farabi menelaah musik sebagai ilmu sistematis dengan unsur bunyi, tinggi-rendah nada, susunan melodi, dan irama.',
    keyQuestions: 'Bagaimana Al-Farabi mendefinisikan musik secara objektif dan apa saja unsur pokok pembentuk struktur komposisi musikal?',
    mainMessage: 'Musik memiliki struktur yang dapat dianalisis secara sistematis, bukan sekadar bunyi spontan yang menyenangkan.',
    academicNote: 'Definisi bersandar pada Kitāb al-Mūsīqā al-Kabīr dengan rujukan kajian Ro Hani & Suryo Ediyono (2019). Hindari menyamakan langsung dengan teori modern tanpa konteks historis.',
    primaryReferences: ['farabi_musiqa', 'hani_ediyono_2019'],
    recommendedAudio: 'calm_acoustic',
    audioLabel: 'Struktur Harmoni Akustik'
  },
  {
    id: 13,
    trackNumber: '13',
    title: 'MUSIK DAN PENGARUHNYA TERHADAP JIWA',
    subtitle: 'Hubungan Karakter Musik, Makna Syair, dan Kondisi Pendengar',
    category: 'Al-Farabi',
    estimatedDuration: '04:00',
    theme: 'Hubungan antara karakter musik dan respons pendengar; tiga ranah manfaat: jiwa, orientasi spiritual, dan pendamping psikosomatik.',
    keyQuestions: 'Bagaimana ragam susunan nada, irama, dan makna syair berinteraksi dengan kondisi batin pendengar untuk menghadirkan ketenteraman?',
    mainMessage: 'Pengaruh musik tidak seragam; ia bergantung pada karakter bunyi, kedalaman makna syair, dan kesiapan batin pendengar.',
    academicNote: 'Kajian Al-Farabi (Ro Hani & Ediyono 2019) bersifat deskriptif-historis. Musik dibahas sebagai sarana pendamping, bukan pengganti diagnosis atau layanan medis.',
    primaryReferences: ['farabi_musiqa', 'hani_ediyono_2019'],
    recommendedAudio: 'calm_acoustic',
    audioLabel: 'Alunan Penenteram Batin'
  },
  {
    id: 14,
    trackNumber: '14',
    title: 'AL-GHAZALI VS AL-FARABI',
    subtitle: 'Perbandingan Dua Pendekatan yang Saling Melengkapi',
    category: 'Sintesis & Perbandingan',
    estimatedDuration: '05:00',
    theme: 'Perbandingan 8 aspek komplementer: titik berangkat dari hati manusia (Al-Ghazali) versus titik berangkat dari struktur musikal (Al-Farabi).',
    keyQuestions: 'Bagaimana mempertemukan telaah batin tasawuf Al-Ghazali dengan sains musik Al-Farabi tanpa mencampurbaurkan metodologi masing-masing?',
    mainMessage: 'Al-Farabi menjawab apa itu musik dan bagaimana susunannya; Al-Ghazali menjawab apa yang terjadi pada hati dan bagaimana mengarahkannya.',
    academicNote: 'Perbandingan ini adalah sintesis analitis pemateri berdasarkan sumber primer dan rujukan sekunder, bukan klaim bahwa kedua tokoh merumuskan teori bersama.',
    primaryReferences: ['ghazali_ihya', 'farabi_musiqa', 'hani_ediyono_2019'],
    recommendedAudio: 'none'
  },
  {
    id: 15,
    trackNumber: '15',
    title: 'DI MANA TITIK TEMU KEDUANYA?',
    subtitle: 'Titik Temu Al-Ghazali dan Al-Farabi',
    category: 'Sintesis & Perbandingan',
    estimatedDuration: '04:00',
    theme: 'Tiga titik temu analitis: suara bukan pengalaman pasif, respons bergantung pada pendengar, dan peran musik yang melampaui hiburan semata.',
    keyQuestions: 'Di titik mana pemikiran tasawuf Al-Ghazali dan filsafat musik Al-Farabi saling bertemu dalam memandang keterkaitan antara suara dan jiwa manusia?',
    mainMessage: 'Titik temu keduanya adalah pengakuan bahwa pendengaran berhubungan erat dengan kehidupan jiwa dan menuntut adab serta orientasi yang tepat.',
    academicNote: 'Titik temu dirumuskan sebagai sintesis pembacaan konseptual, bukan klaim penyatuan identik istilah atau metodologi kedua tokoh.',
    primaryReferences: ['ghazali_ihya', 'farabi_musiqa', 'hani_ediyono_2019'],
    recommendedAudio: 'arabian_acoustic',
    audioLabel: 'Sintesis Reflektif'
  },
  {
    id: 16,
    trackNumber: '16',
    title: 'TERAPI SAMĀ‘IY: DARI MENDENGAR MENUJU MEMULIHKAN JIWA',
    subtitle: 'Sintesis Alur Praktis dari Mendengar Menuju Pembinaan Batin',
    category: 'Konsep Samā‘iy',
    estimatedDuration: '04:30',
    theme: 'Alur praktis 5 langkah: pemilihan musik bermakna, kesiapan pendengar, pengamatan respons, pengarahan nilai kebaikan, dan dorongan amal nyata.',
    keyQuestions: 'Bagaimana proses terpadu dari pemilihan stimulus suara menuju penataan batin dan perbaikan akhlak manusia?',
    mainMessage: 'Prinsip utama: bukan sekadar mendengar, tetapi mengolah apa yang dibangkitkan oleh pendengaran menuju perbaikan diri dan amal nyata.',
    academicNote: 'Alur lima tahap ini merupakan rancangan sintesis presentasi, bukan protokol terapi klinis yang secara eksplisit disusun dalam teks klasik.',
    primaryReferences: ['ghazali_ihya', 'farabi_musiqa', 'hani_ediyono_2019'],
    recommendedAudio: 'ambient_reflection',
    audioLabel: 'Refleksi Akhir Pembinaan Jiwa'
  }
];


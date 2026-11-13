import { SlideData, ReferenceItem } from '../types/presentation';

export const REFERENCES_DATA: ReferenceItem[] = [
  {
    id: 'ghazali_ihya',
    authors: 'Al-Ghazālī, Abū Ḥāmid Muḥammad ibn Muḥammad',
    year: 1105,
    title: 'Iḥyā’ ‘Ulūm al-Dīn — Kitāb Ādāb al-Samā‘ wa al-Wajd (Kitab Etika Mendengar dan Pengalaman Batin)',
    journal: 'Sumber Primer Tasawuf Klasik (Salinan PDF Rujukan)',
    volumeInfo: 'Juz II, Kitab ke-8 (Muqaddimah & Pembahasan Samā‘, Fahmun, Wajd, serta Tingkatan Pendengar hlm. 2, 41–45)',
    methodology: 'Analisis tasawuf normatif-etik dan fenomenologi pengalaman batiniah (aḥwāl al-qalb)',
    keyFindings: [
      'Hati dan batin manusia adalah khazanah rahasia dan tambang permata yang digerakkan oleh pemantik pendengaran (qawādiḥ al-samā‘).',
      'Terdapat rahasia kesesuaian (munāsabah) antara nada-nada yang berirama dengan ruh manusia.',
      'Proses mendengar bertahap: Fahmun (pemahaman), Wajdun (pengalaman batin), dan Harakātun (gerak anggota tubuh / amal).',
      'Terdapat empat tingkatan mustami‘ (pendengar) sesuai kejernihan hati dan orientasi spiritualnya.',
      'Samā‘ harus ditempatkan dalam bingkai ilmu, adab, niat, kesiapan tempat-waktu, dan pengendalian diri.'
    ],
    relevanceToSlide: 'Landasan primer seluruh pembahasan Samā‘, Qalb, Wajd, Munāsabah, empat tingkatan pendengar, serta etika pembinaan jiwa.'
  },
  {
    id: 'farabi_musiqa',
    authors: 'Al-Fārābī, Abū Naṣr Muḥammad ibn Muḥammad',
    year: 950,
    title: 'Kitāb al-Mūsīqā al-Kabīr (كتاب الموسيقى الكبير / Kitab Musik Besar)',
    journal: 'Sumber Primer Filsafat & Teori Musik Islam Klasik',
    volumeInfo: 'Naskah Pindai Berbahasa Arab (Teori Akustik, Naghamāt, Laḥn, dan Īqā‘)',
    methodology: 'Analisis filosofis, matematis, dan akustik terhadap struktur bunyi, interval nada, ritme, serta komposisi musikal',
    keyFindings: [
      'Musik merupakan cabang ilmu pengetahuan sistematis yang mengkaji susunan bunyi terukur, bukan sekadar hiburan spontan.',
      'Karakter musik terbentuk dari hubungan antarunsur: tinggi-rendah nada (naghamāt), susunan melodi (laḥn), dan pola irama (īqā‘).',
      'Keteraturan susunan musikal memengaruhi pengalaman jiwa dan dapat dikaji secara rasional sekaligus dipraktikkan.'
    ],
    relevanceToSlide: 'Landasan primer pendekatan filosofis-musikal mengenai struktur bunyi, melodi, ritme, dan keteraturan musikal.'
  },
  {
    id: 'rohani_ediyono_2019',
    authors: 'Ro Hani & Suryo Ediyono',
    year: 2019,
    title: 'Terapi Musik menurut Al-Farabi pada Masa Dinasti Abbasiyah (942–950 M)',
    journal: 'Jurnal CMES (Center for Middle Eastern Studies)',
    volumeInfo: 'Vol. XII, No. 1, Januari–Juni 2019, hlm. 65–75 (relevan hlm. 70–74)',
    methodology: 'Kajian pustaka deskriptif-kualitatif historis atas pemikiran musik Al-Farabi',
    keyFindings: [
      'Menjembatani pembacaan Kitāb al-Mūsīqā al-Kabīr terkait susunan lagu, perbedaan tinggi-rendah nada, dan pembentukan irama.',
      'Memaparkan pemetaan sekunder ragam maqām (Rāst, Bāyātī, Sīkāh, Ṣabā, Ḥijāz, Nahāwand, Jihārkāh, ‘Ajam, Kurd, ‘Irāqī) dan asosiasi suasana batinnya.',
      'Menguraikan tiga ranah manfaat musik: ketenteraman jiwa, dukungan orientasi spiritual melalui syair religius, serta pendamping relaksasi pada ketegangan psikosomatik.'
    ],
    relevanceToSlide: 'Sumber sekunder utama untuk menjembatani teori musik Al-Farabi, pemetaan maqāmāt, dan tiga ranah manfaat psikospiritual.'
  },
  {
    id: 'konsep_samaiy_2026',
    authors: 'Tim Penyusun Kelompok 8 (Tasawuf Psikoterapi)',
    year: 2026,
    title: 'Konsep Presentasi & Penjelasan Komprehensif Terapi Samā‘iy (Imam Al-Ghazali dan Imam Al-Farabi)',
    journal: 'Sintesis Akademik & Fasilitasi Pembelajaran Interaktif',
    volumeInfo: 'Dokumen Konsep 16 Slide & Catatan Ketelitian Metodologis',
    methodology: 'Sintesis konseptual komparatif yang membedakan sumber primer, kajian sekunder, dan kerangka aplikatif reflektif',
    keyFindings: [
      'Menegaskan istilah "Terapi Samā‘iy" sebagai kerangka konseptual pembinaan jiwa, bukan klaim protokol klinis medis.',
      'Membandingkan titik berangkat Al-Ghazali (hati dan adab) dan Al-Farabi (struktur bunyi dan komposisi) secara proporsional tanpa meleburnya secara artifisial.',
      'Merumuskan alur praktis 5 langkah: pemilihan suara bermakna, kesiapan pendengar, pengamatan respons, refleksi zikir, dan dorongan amal nyata.'
    ],
    relevanceToSlide: 'Kerangka sintesis menyeluruh yang menjaga batas ketelitian akademik antara pemikiran klasik dan konteks pendampingan jiwa.'
  }
];

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    trackNumber: '01',
    title: 'Terapi Samā‘iy: Jalan Menuju Jiwa',
    subtitle: 'Perspektif Imam Al-Ghazali dan Imam Al-Farabi',
    category: 'Pengantar',
    estimatedDuration: '02:30',
    theme: 'Pembuka kajian hubungan suara, pendengaran, hati, dan jiwa dalam pemikiran Islam klasik.',
    keyQuestions: 'Mengapa sebuah lantunan dapat membuat seseorang tenang, sedih, terharu, atau merasakan kerinduan spiritual?',
    mainMessage: 'Pendengaran dapat menjadi jalan terstruktur untuk menyentuh keadaan batin manusia.',
    academicNote: 'Slide pembuka memperkenalkan dua kutub pemikiran klasik: pendekatan tasawuf Al-Ghazali dan pendekatan filsafat-musik Al-Farabi.',
    primaryReferences: ['ghazali_ihya', 'farabi_musiqa'],
    recommendedAudio: 'arabian_acoustic',
    audioLabel: 'Feel the Healing (Seruling Ney Anatolia)'
  },
  {
    id: 2,
    trackNumber: '02',
    title: 'Apa Itu Terapi Samā‘iy?',
    subtitle: 'Alur Samā‘ → Qalb → Wajd → Pembinaan Jiwa',
    category: 'Konsep Samā‘iy',
    estimatedDuration: '03:00',
    theme: 'Memahami pendengaran sebagai gerbang pengalaman batin yang diolah menuju pembinaan jiwa.',
    keyQuestions: 'Apa perbedaan mendengar musik sebagai hiburan semata dengan Samā‘ sebagai pembinaan jiwa?',
    mainMessage: 'Samā‘ adalah pintu masuk, Qalb tempat respons, dan Wajd pengalaman batin.',
    academicNote: 'Istilah Terapi Samā‘iy digunakan sebagai kerangka konseptual presentasi untuk menjelaskan pemikiran kedua tokoh, bukan klaim protokol klinis modern yang disusun secara eksplisit oleh Al-Ghazali atau Al-Farabi.',
    primaryReferences: ['ghazali_ihya', 'konsep_samaiy_2026'],
    recommendedAudio: 'maqam_bayati',
    audioLabel: 'Māqām Bāyātī'
  },
  {
    id: 3,
    trackNumber: '03',
    title: 'Dua Tokoh, Dua Sudut Pandang',
    subtitle: 'Perbandingan Fokus Imam Al-Ghazali & Al-Farabi',
    category: 'Sintesis & Perbandingan',
    estimatedDuration: '03:00',
    theme: 'Memetakan perbedaan pertanyaan utama antara tasawuf Al-Ghazali dan teori musik Al-Farabi.',
    keyQuestions: 'Bagaimana perbedaan titik berangkat Al-Ghazali dan Al-Farabi dalam mengkaji suara dan jiwa?',
    mainMessage: 'Keduanya saling melengkapi tanpa harus dilebur menjadi teori yang identik.',
    academicNote: 'Al-Ghazali menyoroti gerak hati, wajd, dan adab; Al-Farabi menyoroti struktur akustik, nada, ritme, dan komposisi musik.',
    primaryReferences: ['ghazali_ihya', 'farabi_musiqa'],
    recommendedAudio: 'maqam_rast',
    audioLabel: 'Māqām Rāst'
  },
  {
    id: 4,
    trackNumber: '04',
    title: 'Bagaimana Al-Ghazali Memahami Samā‘?',
    subtitle: 'Khazanah Hati dan Pemantik Pendengaran (Qawādiḥ)',
    category: 'Al-Ghazali',
    estimatedDuration: '03:00',
    theme: 'Metafora api dalam batu, air di bawah tanah, dan tambang permata batin dalam Iḥyā’ ‘Ulūm al-Dīn.',
    keyQuestions: 'Mengapa Samā‘ dipahami sebagai pemantik (qawādiḥ) rahasia hati?',
    mainMessage: 'Pendengaran membangkitkan apa yang telah tersimpan di dalam relung hati.',
    academicNote: 'Kutipan primer Iḥyā’ ‘Ulūm al-Dīn menegaskan bahwa nada teratur menyingkap isi batin yang tersembunyi.',
    arabicQuote: {
      title: 'Khazanah Rahasia Batin',
      arabic: 'فَإِنَّ الْقُلُوبَ وَالسَّرَائِرَ خَزَائِنُ الْأَسْرَارِ وَمَعَادِنُ الْجَوَاهِرِ',
      translation: 'Sesungguhnya hati dan batin merupakan tempat penyimpanan rahasia dan tambang berbagai permata.',
      source: 'Iḥyā’ ‘Ulūm al-Dīn, Kitāb Ādāb al-Samā‘ wa al-Wajd'
    },
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'maqam_hijaz',
    audioLabel: 'Māqām Hījāz'
  },
  {
    id: 5,
    trackNumber: '05',
    title: 'Mengapa Suara Bisa Menyentuh Hati?',
    subtitle: 'Konsep Munāsabah Nada dan Keadaan Ruhani',
    category: 'Al-Ghazali',
    estimatedDuration: '03:00',
    theme: 'Kesesuaian fitriah (munāsabah) antara nada berirama dengan ruh manusia serta variasi pengaruhnya.',
    keyQuestions: 'Bagaimana suara memunculkan pengaruh emosional, psikologis, fisik, dan ruhani?',
    mainMessage: 'Karakter nada memiliki munāsabah dengan ruh, namun respons terikat kondisi hati.',
    academicNote: 'Suara tidak bekerja secara mekanis-seragam; ia menampakkan kecenderungan yang paling dominan dalam diri pendengar.',
    arabicQuote: {
      title: 'Rahasia Munāsabah Nada & Ruh',
      arabic: 'لِلَّهِ تَعَالَى سِرٌّ فِي مُنَاسَبَةِ النَّغَمَاتِ الْمَوْزُونَةِ لِلْأَرْوَاحِ',
      translation: 'Allah Ta‘ala memiliki rahasia dalam kesesuaian antara nada-nada yang berirama dengan ruh manusia.',
      source: 'Iḥyā’ ‘Ulūm al-Dīn, Muqaddimah Kitāb Ādāb al-Samā‘ wa al-Wajd'
    },
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'maqam_saba',
    audioLabel: 'Māqām Sābā'
  },
  {
    id: 6,
    trackNumber: '06',
    title: 'Konsep Samā‘iy',
    subtitle: 'Integrasi Pendengaran, Kalbu, dan Tindakan Nyata',
    category: 'Konsep Samā‘iy',
    estimatedDuration: '02:30',
    theme: 'Tiga pilar terpadu: indera pendengaran (Samā‘), pusat respons batin (Qalb), dan perilaku (‘Amal).',
    keyQuestions: 'Bagaimana proses dari menangkap bunyi hingga terwujud dalam tindakan nyata?',
    mainMessage: 'Mendengar yang bermakna menghubungkan stimulus suara, pengolahan kalbu, dan perwujudan akhlak.',
    academicNote: 'Menekankan bahwa pengalaman Samā‘ tidak berhenti pada sensasi akustik di telinga.',
    primaryReferences: ['ghazali_ihya', 'konsep_samaiy_2026'],
    recommendedAudio: 'maqam_sikah',
    audioLabel: 'Māqām Sīkāh'
  },
  {
    id: 7,
    trackNumber: '07',
    title: 'Tiga Tahapan Samā‘iy',
    subtitle: 'Fahmun (Kognisi), Wajdun (Afeksi), dan Harakātun (Konasi)',
    category: 'Konsep Samā‘iy',
    estimatedDuration: '03:00',
    theme: 'Kerangka tiga tahapan respons mendengar menurut Al-Ghazali dan pembacaan kognisi–afeksi–konasi.',
    keyQuestions: 'Apa urutan tahapan psikospiritual saat seseorang menyimak lantunan?',
    mainMessage: 'Pemahaman (Fahmun) melahirkan keadaan batin (Wajdun) yang terwujud dalam gerak/amal (Harakātun).',
    academicNote: 'Pemetaan ke istilah kognisi, afeksi, dan konasi adalah pendekatan interpretatif untuk memudahkan pemahaman konseptual.',
    arabicQuote: {
      title: 'Tiga Derajat Samā‘',
      arabic: 'أَوَّلُ دَرَجَةِ السَّمَاعِ فَهْمُ الْمَسْمُوعِ، ثُمَّ يُثْمِرُ الْفَهْمُ الْوَجْدَ، وَيُثْمِرُ الْوَجْدُ الْحَرَكَةَ بِالْجَوَارِحِ',
      translation: 'Tingkatan pertama Samā‘ adalah memahami apa yang didengar; lalu pemahaman menghasilkan wajd, dan wajd menghasilkan gerakan melalui anggota tubuh.',
      source: 'Iḥyā’ ‘Ulūm al-Dīn, Kitāb Ādāb al-Samā‘ wa al-Wajd'
    },
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'maqam_nahawand',
    audioLabel: 'Māqām Nāhwānd'
  },
  {
    id: 8,
    trackNumber: '08',
    title: 'Definisi Terapi Samā‘iy',
    subtitle: 'Pendekatan Utama Pengondisian Jiwa dan Akhlak',
    category: 'Terapi Samā‘iy',
    estimatedDuration: '02:30',
    theme: 'Rumusan definisi konseptual Terapi Samā‘iy melalui jalur ilmu (kognisi), ḥāl (afeksi), dan ‘amal (konasi).',
    keyQuestions: 'Apa tujuan puncak dari pengondisian jiwa melalui pendengaran?',
    mainMessage: 'Tujuan utamanya adalah tahdhīb al-akhlāq (pembentukan akhlak) dan kejernihan jiwa.',
    academicNote: 'Disajikan sebagai definisi konseptual presentasi yang merangkum proses penyadaran hingga perbaikan perilaku.',
    arabicQuote: {
      title: 'Tujuan Puncak Pembinaan Akhlak',
      arabic: 'وَالْغَايَةُ الْقُصْوَى تَهْذِيبُ الْأَخْلَاقِ وَتَزْكِيَةُ النُّفُوسِ',
      translation: 'Tujuan puncaknya adalah pembinaan akhlak dan penyucian jiwa.',
      source: 'Sintesis Konsep Tasawuf Psikoterapi'
    },
    primaryReferences: ['ghazali_ihya', 'konsep_samaiy_2026'],
    recommendedAudio: 'maqam_jiharkah',
    audioLabel: 'Māqām Jīhārkāh'
  },
  {
    id: 9,
    trackNumber: '09',
    title: 'Jiwa yang Sehat & Kepekaan Batin',
    subtitle: 'Simbolisme Keindahan Alam dan Harmoni Nada',
    category: 'Kepekaan Jiwa',
    estimatedDuration: '02:30',
    theme: 'Kepekaan jiwa terhadap keindahan musim semi, bunga, dan petikan dawai dalam ungkapan Al-Ghazali.',
    keyQuestions: 'Mengapa Al-Ghazali mengaitkan ketidakpekaan pada keindahan dengan kerusakan tabiat batin?',
    mainMessage: 'Kepekaan batin adalah syarat munculnya resonansi makna dalam pengalaman mendengar.',
    academicNote: 'Ungkapan klasik ini dipahami sebagai ilustrasi filosofis-spiritual tentang kepekaan jiwa, bukan kriteria diagnosis klinis medis.',
    arabicQuote: {
      title: 'Kalam Hikmah Kepekaan Batin',
      arabic: 'مَنْ لَمْ يُحَرِّكْهُ الرَّبِيعُ وَأَزْهَارُهُ، وَالْعُودُ وَأَوْتَارُهُ، فَهُوَ فَاسِدُ الْمِزَاجِ، لَيْسَ لَهُ عِلَاجٌ',
      translation: 'Barang siapa yang tidak tergerak oleh musim semi dan bunga-bunganya, serta petikan kecapi dan dawai-dawainya, maka tabiat batinnya telah rusak dan tiada obat baginya.',
      source: 'Iḥyā’ ‘Ulūm al-Dīn, Kitāb Ādāb al-Samā‘ wa al-Wajd'
    },
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'maqam_ajam',
    audioLabel: 'Māqām Ājām'
  },
  {
    id: 10,
    trackNumber: '10',
    title: 'Empat Tingkatan Mustami‘',
    subtitle: 'Klasifikasi Pendengar Berdasarkan Kesiapan Ruhani',
    category: 'Tingkatan Pendengar',
    estimatedDuration: '03:00',
    theme: 'Empat jenjang pendengar: Mujarrad al-Ṭabī‘iy, Bi Fahmin wa Tanzīl, Mu‘āmalah ma‘a Allāh, dan Mujāwazat al-Aḥwāl.',
    keyQuestions: 'Mengapa lantunan yang sama dapat membuahkan pengalaman batin berbeda pada tiap orang?',
    mainMessage: 'Buah pendengaran selalu selaras dengan kejernihan hati dan orientasi pendengarnya.',
    academicNote: 'Merujuk uraian Al-Ghazali mengenai perbedaan maqām dan tingkat pemahaman para mustami‘ (hlm. internal 41–45).',
    arabicQuote: {
      title: 'Kadar Pendengaran & Kejernihan Hati',
      arabic: 'السَّمَاعُ عَلَى قَدْرِ صَفَاءِ الْقُلُوبِ وَمَرَاتِبِهَا',
      translation: 'Buah pendengaran selaras dengan kadar kejernihan hati dan tingkatan spiritualnya.',
      source: 'Iḥyā’ ‘Ulūm al-Dīn, Pembahasan Tingkatan Mustami‘'
    },
    primaryReferences: ['ghazali_ihya'],
    recommendedAudio: 'maqam_kurd',
    audioLabel: 'Māqām Kûrd'
  },
  {
    id: 11,
    trackNumber: '11',
    title: 'Tujuan Terapi Samā‘iy Al-Ghazali',
    subtitle: 'Menyingkap Isi Hati & Mengarahkan Gerak Batin',
    category: 'Al-Ghazali',
    estimatedDuration: '03:00',
    theme: 'Samā‘ sebagai sarana penguji kecenderungan hati yang dituntun ilmu dan adab menuju ketaatan.',
    keyQuestions: 'Apa ukuran keberhasilan spiritual dari aktivitas Samā‘ menurut Al-Ghazali?',
    mainMessage: 'Samā‘ adalah sarana menuju kedekatan kepada Allah, bukan tujuan akhir atau sensasi emosi.',
    academicNote: 'Al-Ghazali tidak merumuskan protokol terapi klinis modern; ia membahas hukum, adab, dan transformasi ruhani dalam kerangka tasawuf.',
    arabicQuote: {
      title: 'Prinsip Penggerak Isi Hati',
      arabic: 'السَّمَاعُ لَا يُنْتِجُ فِي الْقَلْبِ مَا لَيْسَ فِيهِ، بَلْ يُحَرِّكُ مَا هُوَ كَامِنٌ فِيهِ',
      translation: 'Samā‘ tidak menciptakan sesuatu di dalam hati yang belum ada padanya, melainkan menggerakkan apa yang telah terpendam di dalamnya.',
      source: 'Iḥyā’ ‘Ulūm al-Dīn, Kitāb Ādāb al-Samā‘ wa al-Wajd'
    },
    primaryReferences: ['ghazali_ihya', 'konsep_samaiy_2026'],
    recommendedAudio: 'maqam_iraqi',
    audioLabel: 'Māqām Īrāqī'
  },
  {
    id: 12,
    trackNumber: '12',
    title: 'Bagaimana Al-Farabi Memahami Musik?',
    subtitle: 'Musik sebagai Ilmu dan Seni yang Terstruktur',
    category: 'Al-Farabi',
    estimatedDuration: '03:00',
    theme: 'Analisis sistematis Al-Farabi terhadap bahan bunyi, tinggi-rendah nada (naghamāt), melodi (laḥn), dan irama (īqā‘).',
    keyQuestions: 'Bagaimana struktur objektif musik bekerja menurut kajian filosofis Al-Farabi?',
    mainMessage: 'Musik adalah susunan bunyi dan pola ritme terukur yang dapat dianalisis secara ilmiah.',
    academicNote: 'Naskah Kitāb al-Mūsīqā al-Kabīr berbentuk pindai Arab; pembacaan definisi pengantar dijembatani oleh kajian sekunder Ro Hani & Suryo Ediyono (2019).',
    primaryReferences: ['farabi_musiqa', 'rohani_ediyono_2019'],
    recommendedAudio: 'maqam_bayati_2',
    audioLabel: 'Māqām Bāyātī (Versi Kontemplasi)'
  },
  {
    id: 13,
    trackNumber: '13',
    title: 'Musik dan Pengaruhnya terhadap Jiwa',
    subtitle: 'Karakter Nada, Makna Syair, dan Tiga Ranah Manfaat',
    category: 'Al-Farabi',
    estimatedDuration: '03:00',
    theme: 'Keterhubungan melodi, tempo, syair, dan tiga ranah manfaat: jiwa, orientasi spiritual, serta pendamping psikosomatik.',
    keyQuestions: 'Apakah satu maqām atau komposisi selalu menghasilkan emosi yang sama pada setiap orang?',
    mainMessage: 'Efek musik bergantung pada karakter musik, makna syair, budaya, memori, dan keadaan pendengar.',
    academicNote: 'Daftar maqāmāt dan tiga ranah manfaat merujuk pada kajian deskriptif-kualitatif Ro Hani & Suryo Ediyono (2019, hlm. 70–74), bukan uji klinis medis.',
    primaryReferences: ['rohani_ediyono_2019', 'farabi_musiqa'],
    recommendedAudio: 'song_beranjak_dewasa',
    audioLabel: 'Koleksi Refleksi Jiwa'
  },
  {
    id: 14,
    trackNumber: '14',
    title: 'Al-Ghazali vs Al-Farabi',
    subtitle: 'Perbandingan 8 Aspek yang Saling Melengkapi',
    category: 'Sintesis & Perbandingan',
    estimatedDuration: '03:30',
    theme: 'Tabel komparatif fokus kajian, pertanyaan utama, objek perhatian, mekanisme, orientasi, syarat, risiko salah paham, dan sumber.',
    keyQuestions: 'Di mana letak perbedaan mendasar antara pendekatan tasawuf Al-Ghazali dan pendekatan musikal Al-Farabi?',
    mainMessage: 'Al-Farabi menjawab struktur musik; Al-Ghazali menjawab respons hati dan arah etis-spiritualnya.',
    academicNote: 'Perbandingan merupakan sintesis analitis pemateri; keduanya tidak pernah merumuskan satu teori gabungan secara bersama.',
    primaryReferences: ['ghazali_ihya', 'farabi_musiqa', 'rohani_ediyono_2019'],
    recommendedAudio: 'song_everything_u_are',
    audioLabel: 'Audio Kontemplatif'
  },
  {
    id: 15,
    trackNumber: '15',
    title: 'Di Mana Titik Temu Keduanya?',
    subtitle: 'Konvergensi Suara, Jiwa, dan Pembinaan Diri',
    category: 'Sintesis & Perbandingan',
    estimatedDuration: '02:30',
    theme: 'Tiga landasan persamaan: keterhubungan suara–jiwa, keterikatan pada kondisi pendengar, dan fungsi melampaui hiburan.',
    keyQuestions: 'Apa kesamaan prinsip yang mempertemukan gagasan Al-Ghazali dan Al-Farabi?',
    mainMessage: 'Keduanya mengakui pendengaran bukan pengalaman pasif, melainkan menyentuh kehidupan jiwa.',
    academicNote: 'Titik temu tidak menghapus perbedaan metode evaluasi moral-spiritual (Al-Ghazali) dan struktur musikal (Al-Farabi).',
    primaryReferences: ['ghazali_ihya', 'rohani_ediyono_2019', 'konsep_samaiy_2026'],
    recommendedAudio: 'song_sorai',
    audioLabel: 'Refleksi Kedamaian'
  },
  {
    id: 16,
    trackNumber: '16',
    title: 'Terapi Samā‘iy: Memulihkan Jiwa',
    subtitle: 'Lima Langkah Praktis dari Mendengar ke Amal Nyata',
    category: 'Terapi Samā‘iy',
    estimatedDuration: '03:00',
    theme: 'Sintesis alur 5 langkah: memilih suara bermakna, menyiapkan pendengar, mengamati respons, refleksi/zikir, dan amal akhlak.',
    keyQuestions: 'Bagaimana mengolah apa yang dibangkitkan oleh pendengaran agar berbuah perbaikan jiwa?',
    mainMessage: 'Bukan sekadar mendengar, melainkan mengolah respons batin menuju akhlak dan amal nyata.',
    academicNote: 'Alur 5 tahap adalah rancangan sintesis edukatif-reflektif presentasi, bukan protokol terapi klinis baku dari kedua tokoh.',
    primaryReferences: ['ghazali_ihya', 'farabi_musiqa', 'rohani_ediyono_2019', 'konsep_samaiy_2026'],
    recommendedAudio: 'arabian_acoustic',
    audioLabel: 'Feel the Healing (Penutup)'
  }
];

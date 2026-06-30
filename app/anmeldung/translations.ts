export type Lang = 'de' | 'ar' | 'tr' | 'fa';

export const dir: Record<Lang, 'ltr' | 'rtl'> = { de: 'ltr', ar: 'rtl', tr: 'ltr', fa: 'rtl' };

type Dict = {
  badge: string;
  title: string;
  subtitle: string;
  step1Title: string;
  step1Sub: string;
  vornameEltern: string;
  nachnameEltern: string;
  telefon: string;
  email: string;
  strasse: string;
  plzOrt: string;
  step2Title: string;
  step2Sub: string;
  vornameKind: string;
  nachnameKind: string;
  alterKind: string;
  klassenstufe: string;
  klassenstufeOptions: string[];
  schule: string;
  faecher: string;
  faecherPlaceholder: string;
  schwierigkeiten: string;
  step3Title: string;
  step3Sub: string;
  unterrichtsform: string;
  unterrichtsformOptions: string[];
  zeiten: string;
  zeitenPlaceholder: string;
  staatlUnterstuetzung: string;
  staatlOptions: string[];
  bewilligungsbescheid: string;
  bewilligungOptions: string[];
  kommunikation: string;
  kommunikationOptions: string[];
  spracheFamilie: string;
  spracheSub: string;
  spracheOptions: string[];
  anmerkungen: string;
  datenschutzPre: string;
  datenschutzLink: string;
  datenschutzPost: string;
  bitteWaehlen: string;
  vorUndNachname: string;
  vornamePlaceholder: string;
  schulePlaceholder: string;
  buttonWeiter: string;
  buttonZurueck: string;
  buttonAbsenden: string;
  buttonWirdGesendet: string;
  successTitle: string;
  successText: string;
  backHome: string;
  footerPre: string;
  errorGeneric: string;
  errorConnection: string;
};

export const t: Record<Lang, Dict> = {
  de: {
    badge: 'Anmeldung',
    title: 'Anmeldeformular',
    subtitle: 'In 3 Schritten zur Nachhilfe. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    step1Title: 'Schritt 1: Eltern',
    step1Sub: 'Bitte alle Namen wie im Personalausweis eingeben.',
    vornameEltern: 'Vorname (Erziehungsberechtigte/r)*',
    nachnameEltern: 'Nachname (Erziehungsberechtigte/r)*',
    telefon: 'Telefon (bevorzugt WhatsApp)*',
    email: 'E-Mail-Adresse*',
    strasse: 'Straße und Hausnummer',
    plzOrt: 'PLZ und Ort',
    step2Title: 'Schritt 2: Über das Kind',
    step2Sub: 'Erzählen Sie uns über das Kind, das gefördert werden soll.',
    vornameKind: 'Vorname des Kindes*',
    nachnameKind: 'Nachname des Kindes',
    alterKind: 'Alter des Kindes',
    klassenstufe: 'Klassenstufe*',
    klassenstufeOptions: ['Grundschule (1-4)', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'Berufsschule / Sonstiges'],
    schule: 'Schule',
    faecher: 'In welchen Fächern braucht das Kind Unterstützung?',
    faecherPlaceholder: 'z. B. Mathe, Deutsch, Englisch',
    schwierigkeiten: 'Welche Schwierigkeiten hat das Kind aktuell? (optional)',
    step3Title: 'Schritt 3: Organisation',
    step3Sub: 'Letzte Details — fast geschafft.',
    unterrichtsform: 'Bevorzugte Unterrichtsform',
    unterrichtsformOptions: ['Vor Ort in Kassel', 'Online', 'Beides möglich'],
    zeiten: 'Passende Zeiten (Tage / Uhrzeiten)',
    zeitenPlaceholder: 'z. B. Mo + Mi, nachmittags ab 15 Uhr',
    staatlUnterstuetzung: 'Beziehen Sie staatliche Unterstützung?',
    staatlOptions: ['Ja — Bürgergeld', 'Ja — Wohngeld', 'Ja — Kinderzuschlag', 'Nein', 'Weiß nicht'],
    bewilligungsbescheid: 'Bewilligungsbescheid vorhanden?',
    bewilligungOptions: ['Ja', 'Nein', 'Habe ich beantragt'],
    kommunikation: 'Bevorzugte Kommunikation',
    kommunikationOptions: ['WhatsApp', 'Telefon', 'E-Mail', 'Egal'],
    spracheFamilie: 'Welche Sprache(n) sprechen Sie zuhause?',
    spracheSub: 'Mehrfachauswahl möglich',
    spracheOptions: ['Deutsch', 'Arabisch', 'Türkisch', 'Farsi / Dari', 'Andere'],
    anmerkungen: 'Weitere Anmerkungen? (optional)',
    datenschutzPre: 'Ich habe die ',
    datenschutzLink: 'Datenschutzerklärung',
    datenschutzPost: ' gelesen und stimme der Verarbeitung meiner Daten zu.*',
    bitteWaehlen: 'Bitte wählen',
    vorUndNachname: 'Vor- und Nachname',
    vornamePlaceholder: 'Vorname',
    schulePlaceholder: 'Name der Schule',
    buttonWeiter: 'Weiter',
    buttonZurueck: 'Zurück',
    buttonAbsenden: 'Anmeldung absenden',
    buttonWirdGesendet: 'Wird gesendet …',
    successTitle: 'Vielen Dank!',
    successText: 'Ihre Anmeldung ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    backHome: 'Zurück zur Startseite',
    footerPre: 'Bei Fragen erreichen Sie uns jederzeit über WhatsApp unten rechts oder unter ',
    errorGeneric: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns auf WhatsApp.',
    errorConnection: 'Verbindungsfehler. Bitte versuchen Sie es erneut oder schreiben Sie uns auf WhatsApp.',
  },
  ar: {
    badge: 'التسجيل',
    title: 'استمارة التسجيل',
    subtitle: 'سجّلوا في 3 خطوات للحصول على الدروس الخصوصية. سنتواصل معكم خلال 24 ساعة.',
    step1Title: 'الخطوة 1: ولي الأمر',
    step1Sub: 'يرجى كتابة الأسماء كما هي في الهوية، بأحرف لاتينية.',
    vornameEltern: 'اسم ولي الأمر*',
    nachnameEltern: 'اسم العائلة (ولي الأمر)*',
    telefon: 'رقم الهاتف (يفضّل واتساب)*',
    email: 'البريد الإلكتروني*',
    strasse: 'الشارع ورقم المنزل',
    plzOrt: 'الرمز البريدي والمدينة',
    step2Title: 'الخطوة 2: عن الطالب',
    step2Sub: 'أخبرونا عن الطفل الذي يحتاج إلى الدعم.',
    vornameKind: 'اسم الطالب*',
    nachnameKind: 'اسم عائلة الطالب',
    alterKind: 'عمر الطالب',
    klassenstufe: 'الصف الدراسي*',
    klassenstufeOptions: ['المدرسة الابتدائية (1-4)', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'مدرسة مهنية / أخرى'],
    schule: 'اسم المدرسة',
    faecher: 'في أي مواد يحتاج الطالب إلى دعم؟',
    faecherPlaceholder: 'مثال: رياضيات، ألمانية، إنكليزية',
    schwierigkeiten: 'ما الصعوبات التي يواجهها الطالب حاليًا؟ (اختياري)',
    step3Title: 'الخطوة 3: التنظيم',
    step3Sub: 'التفاصيل الأخيرة — تقريبًا انتهينا.',
    unterrichtsform: 'طريقة التدريس المفضلة',
    unterrichtsformOptions: ['حضوريًا في كاسل', 'عبر الإنترنت', 'كلاهما ممكن'],
    zeiten: 'الأوقات المناسبة (الأيام / الساعات)',
    zeitenPlaceholder: 'مثال: الإثنين والأربعاء بعد الساعة 15:00',
    staatlUnterstuetzung: 'هل تتلقّون مساعدة مالية من الحكومة؟',
    staatlOptions: ['نعم — بورغرغيلد', 'نعم — مساعدة السكن', 'نعم — إعانة الطفل', 'لا', 'لا أعرف'],
    bewilligungsbescheid: 'هل لديكم قرار الموافقة؟',
    bewilligungOptions: ['نعم', 'لا', 'قدّمت الطلب'],
    kommunikation: 'وسيلة التواصل المفضلة',
    kommunikationOptions: ['واتساب', 'الهاتف', 'البريد الإلكتروني', 'لا يهم'],
    spracheFamilie: 'ما اللغة (اللغات) التي تتحدثونها في المنزل؟',
    spracheSub: 'يمكن اختيار أكثر من لغة',
    spracheOptions: ['الألمانية', 'العربية', 'التركية', 'الفارسية / الدري', 'أخرى'],
    anmerkungen: 'ملاحظات إضافية؟ (اختياري)',
    datenschutzPre: 'لقد قرأت ',
    datenschutzLink: 'سياسة الخصوصية',
    datenschutzPost: ' وأوافق على معالجة بياناتي.*',
    bitteWaehlen: 'يرجى الاختيار',
    vorUndNachname: 'الاسم الكامل',
    vornamePlaceholder: 'الاسم الأول',
    schulePlaceholder: 'اسم المدرسة',
    buttonWeiter: 'التالي',
    buttonZurueck: 'رجوع',
    buttonAbsenden: 'إرسال التسجيل',
    buttonWirdGesendet: 'جارٍ الإرسال…',
    successTitle: 'شكرًا جزيلاً!',
    successText: 'وصلنا تسجيلكم بنجاح. سنتواصل معكم خلال 24 ساعة.',
    backHome: 'العودة للصفحة الرئيسية',
    footerPre: 'لأي استفسار، تواصلوا معنا عبر واتساب (الزر في الأسفل) أو عبر البريد الإلكتروني ',
    errorGeneric: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.',
    errorConnection: 'خطأ في الاتصال. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.',
  },
  tr: {
    badge: 'Kayıt',
    title: 'Kayıt Formu',
    subtitle: '3 adımda özel ders kaydı. 24 saat içinde size dönüş yapacağız.',
    step1Title: 'Adım 1: Veli Bilgileri',
    step1Sub: 'Lütfen tüm isimleri kimlikte yazdığı şekilde giriniz.',
    vornameEltern: 'Velinin Adı*',
    nachnameEltern: 'Velinin Soyadı*',
    telefon: 'Telefon (tercihen WhatsApp)*',
    email: 'E-posta Adresi*',
    strasse: 'Sokak ve Kapı Numarası',
    plzOrt: 'Posta Kodu ve Şehir',
    step2Title: 'Adım 2: Öğrenci Hakkında',
    step2Sub: 'Destek alacak çocuk hakkında bize bilgi verin.',
    vornameKind: 'Öğrencinin Adı*',
    nachnameKind: 'Öğrencinin Soyadı',
    alterKind: 'Öğrencinin Yaşı',
    klassenstufe: 'Sınıf Seviyesi*',
    klassenstufeOptions: ['İlkokul (1-4)', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'Meslek Okulu / Diğer'],
    schule: 'Okul Adı',
    faecher: 'Öğrenci hangi derslerde desteğe ihtiyaç duyuyor?',
    faecherPlaceholder: 'örn. Matematik, Almanca, İngilizce',
    schwierigkeiten: 'Öğrencinin şu anda hangi zorlukları var? (isteğe bağlı)',
    step3Title: 'Adım 3: Organizasyon',
    step3Sub: 'Son detaylar — neredeyse tamamlandı.',
    unterrichtsform: 'Tercih edilen ders şekli',
    unterrichtsformOptions: ['Kassel\'de yüz yüze', 'Online', 'İkisi de olabilir'],
    zeiten: 'Uygun zamanlar (gün / saat)',
    zeitenPlaceholder: 'örn. Pzt + Çar, öğleden sonra 15:00\'ten itibaren',
    staatlUnterstuetzung: 'Devlet desteği alıyor musunuz?',
    staatlOptions: ['Evet — Bürgergeld', 'Evet — Wohngeld (konut yardımı)', 'Evet — çocuk yardımı', 'Hayır', 'Bilmiyorum'],
    bewilligungsbescheid: 'Onay belgeniz var mı?',
    bewilligungOptions: ['Evet', 'Hayır', 'Başvurdum'],
    kommunikation: 'Tercih edilen iletişim şekli',
    kommunikationOptions: ['WhatsApp', 'Telefon', 'E-posta', 'Farketmez'],
    spracheFamilie: 'Evde hangi dil(ler)i konuşuyorsunuz?',
    spracheSub: 'Birden fazla seçim yapılabilir',
    spracheOptions: ['Almanca', 'Arapça', 'Türkçe', 'Farsça / Darice', 'Diğer'],
    anmerkungen: 'Eklemek istediğiniz bir şey var mı? (isteğe bağlı)',
    datenschutzPre: '',
    datenschutzLink: 'Gizlilik Politikasını',
    datenschutzPost: ' okudum ve verilerimin işlenmesini kabul ediyorum.*',
    bitteWaehlen: 'Lütfen seçiniz',
    vorUndNachname: 'Ad ve Soyad',
    vornamePlaceholder: 'Ad',
    schulePlaceholder: 'Okulun adı',
    buttonWeiter: 'İleri',
    buttonZurueck: 'Geri',
    buttonAbsenden: 'Kaydı Gönder',
    buttonWirdGesendet: 'Gönderiliyor…',
    successTitle: 'Çok teşekkürler!',
    successText: 'Kaydınız bize ulaştı. 24 saat içinde size dönüş yapacağız.',
    backHome: 'Ana Sayfaya Dön',
    footerPre: 'Sorularınız için bize her zaman aşağıdaki WhatsApp butonundan veya şu adresten ulaşabilirsiniz: ',
    errorGeneric: 'Bir hata oluştu. Lütfen tekrar deneyin veya bize WhatsApp\'tan yazın.',
    errorConnection: 'Bağlantı hatası. Lütfen tekrar deneyin veya bize WhatsApp\'tan yazın.',
  },
  fa: {
    badge: 'ثبت‌نام',
    title: 'فرم ثبت‌نام',
    subtitle: 'ثبت‌نام در ۳ مرحله برای دروس خصوصی. ما ظرف ۲۴ ساعت با شما تماس می‌گیریم.',
    step1Title: 'مرحله ۱: والدین',
    step1Sub: 'لطفاً نام‌ها را همان‌طور که در کارت هویت نوشته شده وارد کنید.',
    vornameEltern: 'نام ولی (والد)*',
    nachnameEltern: 'نام خانوادگی ولی*',
    telefon: 'شماره تلفن (ترجیحاً واتساپ)*',
    email: 'آدرس ایمیل*',
    strasse: 'خیابان و شماره خانه',
    plzOrt: 'کد پستی و شهر',
    step2Title: 'مرحله ۲: درباره کودک',
    step2Sub: 'لطفاً درباره کودکی که نیاز به کمک دارد به ما بگویید.',
    vornameKind: 'نام دانش‌آموز*',
    nachnameKind: 'نام خانوادگی دانش‌آموز',
    alterKind: 'سن دانش‌آموز',
    klassenstufe: 'مقطع تحصیلی*',
    klassenstufeOptions: ['مقطع ابتدایی (۱-۴)', '۵', '۶', '۷', '۸', '۹', '۱۰', '۱۱', '۱۲', '۱۳', 'مدرسه حرفه‌ای / سایر'],
    schule: 'نام مدرسه',
    faecher: 'دانش‌آموز در کدام درس‌ها نیاز به کمک دارد؟',
    faecherPlaceholder: 'مثلاً ریاضی، آلمانی، انگلیسی',
    schwierigkeiten: 'دانش‌آموز در حال حاضر با چه مشکلاتی روبرو است؟ (اختیاری)',
    step3Title: 'مرحله ۳: تنظیمات',
    step3Sub: 'جزئیات آخر — تقریباً تمام شد.',
    unterrichtsform: 'روش تدریس مورد نظر',
    unterrichtsformOptions: ['حضوری در کاسل', 'آنلاین', 'هر دو ممکن است'],
    zeiten: 'زمان‌های مناسب (روز / ساعت)',
    zeitenPlaceholder: 'مثلاً دوشنبه و چهارشنبه، بعدازظهر از ساعت ۱۵',
    staatlUnterstuetzung: 'آیا از کمک‌های دولتی استفاده می‌کنید؟',
    staatlOptions: ['بله — بورگرگلد', 'بله — کمک‌هزینه مسکن', 'بله — کمک‌هزینه فرزند', 'خیر', 'نمی‌دانم'],
    bewilligungsbescheid: 'آیا برگه تأیید دارید؟',
    bewilligungOptions: ['بله', 'خیر', 'درخواست داده‌ام'],
    kommunikation: 'روش ارتباطی مورد نظر',
    kommunikationOptions: ['واتساپ', 'تلفن', 'ایمیل', 'فرقی نمی‌کند'],
    spracheFamilie: 'در خانه به چه زبان(هایی) صحبت می‌کنید؟',
    spracheSub: 'انتخاب چندگانه امکان‌پذیر است',
    spracheOptions: ['آلمانی', 'عربی', 'ترکی', 'فارسی / دری', 'سایر'],
    anmerkungen: 'توضیحات دیگر؟ (اختیاری)',
    datenschutzPre: 'من ',
    datenschutzLink: 'سیاست حفظ حریم خصوصی',
    datenschutzPost: ' را مطالعه کرده و با پردازش اطلاعاتم موافقم.*',
    bitteWaehlen: 'لطفاً انتخاب کنید',
    vorUndNachname: 'نام و نام خانوادگی',
    vornamePlaceholder: 'نام',
    schulePlaceholder: 'نام مدرسه',
    buttonWeiter: 'بعدی',
    buttonZurueck: 'بازگشت',
    buttonAbsenden: 'ارسال ثبت‌نام',
    buttonWirdGesendet: 'در حال ارسال…',
    successTitle: 'بسیار سپاسگزاریم!',
    successText: 'ثبت‌نام شما با موفقیت ارسال شد. ما ظرف ۲۴ ساعت با شما تماس می‌گیریم.',
    backHome: 'بازگشت به صفحه اصلی',
    footerPre: 'برای هرگونه سؤال، می‌توانید همیشه از طریق دکمه واتساپ در پایین صفحه یا از طریق ایمیل با ما در تماس باشید: ',
    errorGeneric: 'خطایی رخ داد. لطفاً دوباره تلاش کنید یا از طریق واتساپ با ما در تماس باشید.',
    errorConnection: 'خطای اتصال. لطفاً دوباره تلاش کنید یا از طریق واتساپ با ما در تماس باشید.',
  },
};

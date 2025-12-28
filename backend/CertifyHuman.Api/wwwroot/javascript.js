const translations = {
    pl: {
        "nav.how": "Jak to działa",
        "nav.generate": "Wydaj certyfikat",
        "nav.verify": "Zweryfikuj kod",
        "nav.about": "O nas",
        "nav.cta": "Uzyskaj certyfikat",
        "footer.disclaimer": "CertifyHuman przetwarza dane zgodnie z RODO. Pełna polityka poniżej.",
        "footer.rodoLink": "RODO / Przetwarzanie danych",
        "footer.cookies": "Serwis wykorzystuje pliki cookies niezbędne do jego poprawnego działania (w tym obsługi płatności i sesji użytkownika). Korzystając z Serwisu wyrażasz zgodę na ich wykorzystywanie zgodnie z ustawieniami Twojej przeglądarki. Szczegóły w Polityce Prywatności.",

        "hero.title": "Certyfikaty <span class=\"hero-gradient\">autentyczności treści</span><br/>w świecie opartym na AI.",
        "hero.subtitle": "Wyróżnij prace, w których to człowiek grał główną rolę. CertifyHuman wydaje oznaczenia „No-AI” oraz „AI-Assisted” z kodem QR, kierującym do publicznej karty weryfikacji.",
        "hero.tag1": "Treści No-AI",
        "hero.tag2": "AI-Assisted, nie AI-only",
        "hero.tag3": "Brak atestu dla 100% AI",
        "hero.tag4": "Kod QR + numeryczny",
        "hero.badge1": "● Twórcy / marki / wydawcy",
        "hero.badge2": "● Jednolity standard oznaczeń",
        "hero.badge3": "● Gotowy backend i płatności",
        "hero.exampleTitle": "Live example: content certificate",
        "hero.exampleDescription": "Przetestuj pełny flow: zgłoszenie, kod CH-XXXXXX-XXXXXX i kartę weryfikacyjną.",
        "hero.status": "Status: <strong>Early Access</strong> <span>wersja beta – self-service</span>",
        "hero.policy1": "Chronimy odbiorców przed treściami <span>100% generowanymi przez AI</span>.",
        "hero.policy2": "Certyfikujemy wyłącznie deklaracje: <span>No-AI</span> lub <span>AI-Assisted</span>.",
        "hero.badgeTitle": "TREŚĆ CERTYFIKOWANA",
        "hero.badgeStatus": "NO-AI / AI-ASSISTED",
        "hero.badgeCta": "Zeskanuj QR, aby sprawdzić",

        "how.heading": "Jak to działa?",
        "how.lead": "Prosta pętla: twórca zgłasza pracę, system wydaje kod CH, a odbiorcy weryfikują go jednym tapnięciem.",
        "how.step1.title": "Twórca → Formularz + płatność",
        "how.step1.body": "Podaje dane treści, wybiera No-AI lub AI-Assisted, akceptuje regulamin i opłaca weryfikację.",
        "how.step2.title": "System → Kod + QR",
        "how.step2.body": "Generuje unikalny numer wraz z QR do wklejenia w dowolnym miejscu.",
        "how.step3.title": "Odbiorca → Weryfikacja",
        "how.step3.body": "Wpisuje kod lub skanuje QR, by zobaczyć status i zadeklarowane użycie AI.",
        "how.list1": "Każdy certyfikat otrzymuje numer CH oraz QR kierujący do jego karty weryfikacyjnej.",
        "how.list2": "Czytelne oznaczenia „No-AI” i „AI-Assisted”, które partnerzy od razu rozumieją.",
        "how.list3": "Ścisła polityka: brak certyfikatów dla treści zadeklarowanych jako w 100% AI.",

        "form.heading": "Wydaj certyfikat (beta)",
        "form.lead": "Opisz dzieło, zadeklaruj użycie AI, załącz dowody. W sekundę otrzymasz kod CH oraz QR gotowy do publikacji.",
        "form.titleLabel": "Tytuł treści",
        "form.titlePlaceholder": "np. Artykuł: „Dlaczego AI nie zastąpi ludzi”",
        "form.creatorLabel": "Twórca / marka",
        "form.creatorPlaceholder": "Twoje imię lub brand",
        "form.emailLabel": "Email (tam trafi potwierdzenie)",
        "form.emailPlaceholder": "kontakt@twojamarka.pl",
        "form.typeLabel": "Rodzaj treści",
        "form.typeDefault": "Wybierz...",
        "form.typeArticle": "Artykuł / tekst",
        "form.typeVideo": "Wideo / social content",
        "form.typeImage": "Grafika / zdjęcie",
        "form.typeAudio": "Audio / podcast / muzyka",
        "form.typeOther": "Inne",
        "form.aiLabel": "Deklaracja użycia AI",
        "form.aiNoAi": "100% człowiek (No-AI)",
        "form.aiAssisted": "AI-assisted (człowiek wodzi)",
        "form.aiDisabled": "100% AI (nie obsługujemy)",
        "form.aiHint": "Przyjmujemy tylko prace, gdzie <strong>proces twórczy prowadzi człowiek</strong>. W pełni wygenerowane przez AI materiały nie kwalifikują się.",
        "form.processLabel": "Proces powstawania (dla weryfikatorów)",
        "form.processPlaceholder": "Opisz jak powstała praca: narzędzia, etapy, udział człowieka vs AI.",
        "form.attachmentsLabel": "Załączniki (dowód do weryfikacji własnej, max 5 plików)",
        "form.attachmentsHint": "Dodaj szkice, screeny z procesu lub inny proof-of-work. W tej fazie pliki zostają tylko w Twojej przeglądarce.",
        "form.paymentLabel": "Płatność i aktywacja",
        "form.paymentHint": "Po opłaceniu nasz zespół zacznie analizować wniosek o certyfikat.",
        "form.pricingSub": "Jednorazowa opłata weryfikacyjna",
        "form.waiverLabel": "Wyrażam zgodę na rozpoczęcie świadczenia usługi (weryfikacja i wydanie certyfikatu) przed upływem terminu 14 dni na odstąpienie od umowy i przyjmuję do wiadomości, że po pełnym wykonaniu usługi przez przedsiębiorcę utracę prawo do odstąpienia od umowy.",
        "form.submit": "Generuj certyfikat + kod + QR",
        "form.validationError": "Proszę wypełnić wszystkie wymagane pola i zaakceptować zgodę.",

        "code.label": "Kod certyfikatu:",
        "code.instructions": "Wklej ten kod lub QR gdziekolwiek publikujesz. Odbiorcy mogą od razu sprawdzić status.",
        "code.attachmentsCount": "Liczba załączników: {count}",

        "verify.heading": "Sprawdź kod certyfikatu",
        "verify.lead": "Masz numer CH lub QR? Wpisz go poniżej, by zobaczyć deklarację i status.",
        "verify.placeholder": "np. CH-274918-839201",
        "verify.button": "Sprawdź",
        "verify.buttonFull": "Zweryfikuj certyfikat",
        "verify.hint": "Private beta: weryfikacja sprawdza obecnie kody zapisane w tej przeglądarce. Wersja live będzie walidować każdy kod przez API w chmurze.",
        "verify.issuedOn": "Wydano: {date}",
        "verify.invalidTitle": "Nie znaleziono kodu",
        "verify.invalidDescription": "Żaden certyfikat nie pasuje do <strong>{code}</strong>.",
        "verify.invalidHint": "Sprawdź pisownię lub wydaj nowy certyfikat.",
        "verify.activeTitle": "Certyfikat aktywny",
        "verify.activeLink": "Otwórz kartę certyfikatu",
        "verify.redirect": "Przekierowanie do certyfikatu <strong>{code}</strong>...",
        "verify.inlinePrompt": "Wpisz kod, aby rozpocząć weryfikację.",

        "verifyHero.pill": "Live checker",
        "verifyHero.heading": "Zweryfikuj kod certyfikatu",
        "verifyHero.lead": "Wpisz numer <strong>CH-XXXXXX-XXXXXX</strong> lub wklej wartość z QR. To demo waliduje kody wystawione w Twojej sesji.",
        "verifyHero.point1": "1. Wklej kod lub numer z QR.",
        "verifyHero.point2": "2. System sprawdza „No-AI” vs „AI-Assisted”.",
        "verifyHero.point3": "3. Jeśli poprawny – zobaczysz pełną kartę certyfikatu.",
        "verifyHero.cta1": "Wydaj nowy certyfikat",
        "verifyHero.cta2": "Dowiedz się więcej",
        "verifyHero.inputLabel": "Kod certyfikatu",

        "certificate.detailsTitle": "Proces i deklaracja",
        "certificate.attachmentsTitle": "Załączniki i dowody",
        "certificate.copy": "Kopiuj kod",
        "certificate.verifyMore": "Zweryfikuj inny kod",
        "certificate.issueMore": "Wydaj własny certyfikat",
        "certificate.noDescription": "Autor nie podał dodatkowych szczegółów procesu.",
        "certificate.attachmentsEmpty": "Brak załączników – twórca pominął dodatkowe dowody.",
        "certificate.info.author": "Autor / marka",
        "certificate.info.type": "Typ treści",
        "certificate.info.aiUsage": "Deklaracja AI",
        "certificate.info.date": "Wydano",
        "certificate.info.attachments": "Załączniki",
        "certificate.missingTitle": "Certyfikat nie znaleziony",
        "certificate.missingDescription": "Kod <strong>{code}</strong> nie jest powiązany z żadnym certyfikatem w tej sesji.",
        "certificate.missingNoCode": "Brak kodu w adresie URL.",
        "certificate.missingBack": "Powrót do weryfikacji",
        "certificate.missingIssue": "Wydaj certyfikat",

        "about.pill": "O nas",
        "about.heading": "Chronimy historie tworzone przez ludzi",
        "about.lead": "CertifyHuman to inicjatywa twórców, strategów i projektantów, którzy chcą jasności w erze generatywnego AI.",
        "about.point1": "Jednolity system kodów CH i kart weryfikacji.",
        "about.point2": "Gotowe komponenty „plug-and-play” na Twoją stronę lub CMS.",
        "about.point3": "Roadmapa obejmuje API, płatności i webhooki weryfikacyjne.",
        "about.statsTitle": "Dlaczego to robimy",
        "about.statsBody": "Internet potrzebuje prostego sygnału, że za pracą stoi człowiek. CertifyHuman czyni tę obietnicę widoczną.",
        "about.metric1": "tryby odznaczeń",
        "about.metric2": "weryfikacja kodem",
        "about.metric3": "formaty treści",
        "about.cta": "Czytaj pełną historię",

        "aboutPage.heading": "Manifest CertifyHuman",
        "aboutPage.lead": "Wierzymy, że sieć wciąż może promować prawdziwych autorów. Budujemy ekosystem certyfikatów, który pokazuje, gdzie kończy się pomoc AI, a zaczyna ludzki kunszt.",
        "aboutPage.point1": "Otwarty standard CH-XXXXXX-XXXXXX, gotowy na CMS i marketplace.",
        "aboutPage.point2": "Doświadczenie no-code dla twórców, wydawców i marek.",
        "aboutPage.point3": "Partnerstwa z platformami technologicznymi, API, webhooki i automatyczna weryfikacja.",
        "aboutPage.valuesTitle": "Nasze wartości",
        "aboutPage.valuesBody": "Przejrzystość, odpowiedzialność i inkluzywna reprezentacja twórców. Niezależnie czy użyłeś wsparcia AI, czy działałeś w 100% jako człowiek – powinieneś móc to udowodnić.",
        "aboutPage.metric1": "uruchomienie beta",
        "aboutPage.metric2": "zespoły w pilocie",
        "aboutPage.metric3": "kontynenty na mapie",
        "aboutPage.cta": "Dołącz do programu partnerskiego",
        "aboutPage.timelineHeading": "Roadmapa",
        "aboutPage.timelineSub": "Roadmapa rozwoju",
        "aboutPage.timelineQ1": "Q1 2024",
        "aboutPage.timelineQ1Desc": "Standard kodów CH i pierwsze prototypy kart weryfikacji.",
        "aboutPage.timelineQ2": "Q2 2024",
        "aboutPage.timelineQ2Desc": "Beta self-service dla twórców i marek, integracje CMS.",
        "aboutPage.timelineQ3": "Q3 2024",
        "aboutPage.timelineQ3Desc": "API do masowego wydawania oraz weryfikacja przez webhooki.",
        "aboutPage.timelineQ4": "Q4 2024",
        "aboutPage.timelineQ4Desc": "Globalne wsparcie płatności i partnerstwa wydawnicze.",

        "messages.enterCode": "Wpisz prawidłowy kod certyfikatu.",
        "messages.notFound": "Nie znaleziono certyfikatu.",
        "messages.createError": "Wystąpił problem podczas generowania certyfikatu.",
        "messages.verifyError": "Nie udało się zweryfikować certyfikatu.",
        "verify.redirectStatus": "Kod aktywny",
        "verify.inlineEmpty": "Podaj kod, aby rozpocząć weryfikację.",
        "buttons.copySuccess": "Skopiowano!",
        "attachmentPreview.title": "Załączniki ({count}):",
        "contentTypes.article": "Artykuł / tekst",
        "contentTypes.video": "Wideo / social content",
        "contentTypes.image": "Grafika / zdjęcie",
        "contentTypes.audio": "Audio / podcast / muzyka",
        "contentTypes.other": "Treść",
        "aiUsage.no-ai": "No-AI (100% człowiek)",
        "aiUsage.ai-assisted": "AI-Assisted (człowiek + AI)",
        "status.badge.no-ai": "NO-AI",
        "status.badge.ai-assisted": "AI-Assisted"
    },
    en: {
        "nav.how": "How it works",
        "nav.generate": "Issue certificate",
        "nav.verify": "Verify code",
        "nav.about": "About",
        "nav.cta": "Get certificate",
        "footer.disclaimer": "CertifyHuman processes data in line with GDPR. Read the full policy below.",
        "footer.rodoLink": "GDPR / Data processing",
        "footer.cookies": "The Service uses cookies necessary for its proper functioning (including payment processing and user sessions). By using the Service, you agree to their use in accordance with your browser settings. Details in the Privacy Policy.",

        "hero.title": "Certificates of <span class=\"hero-gradient\">content authenticity</span><br/>in an AI-driven world.",
        "hero.subtitle": "Highlight work where people lead the process. CertifyHuman issues “No-AI” and “AI-Assisted” badges with QR codes that link to a public verification card.",
        "hero.tag1": "No-AI Content",
        "hero.tag2": "AI-Assisted, not AI-only",
        "hero.tag3": "No approval for 100% AI",
        "hero.tag4": "QR + numeric code",
        "hero.badge1": "● Creators / brands / publishers",
        "hero.badge2": "● Unified labelling standard",
        "hero.badge3": "● Backend & payments ready",
        "hero.exampleTitle": "Live example: content certificate",
        "hero.exampleDescription": "Test the full flow: submission, CH-XXXXXX-XXXXXX code and a verification card.",
        "hero.status": "Status: <strong>Early Access</strong> <span>beta ver. – self-service</span>",
        "hero.policy1": "We protect audiences from <span>100% AI-generated</span> content.",
        "hero.policy2": "We certify only: <span>No-AI</span> or <span>AI-Assisted</span> declarations.",
        "hero.badgeTitle": "CERTIFIED CONTENT",
        "hero.badgeStatus": "NO-AI / AI-ASSISTED",
        "hero.badgeCta": "Scan the QR to verify",

        "how.heading": "How it works?",
        "how.lead": "A simple loop: the creator declares their work, the system issues a CH code, and audiences verify it with one tap.",
        "how.step1.title": "Creator → Form + payment",
        "how.step1.body": "Provides content details, picks No-AI or AI-Assisted, accepts terms and completes payment.",
        "how.step2.title": "System → Code + QR",
        "how.step2.body": "Generates a unique number with a verification QR that can be embedded anywhere.",
        "how.step3.title": "Audience → Verification",
        "how.step3.body": "Enters the code or scans the QR to view status and declared AI usage.",
        "how.list1": "Every certificate gets a CH number plus a QR linking to its verification card.",
        "how.list2": "Clear badges for “No-AI” and “AI-Assisted” that partners immediately understand.",
        "how.list3": "Strict policy: no certificates for content declared as 100% AI.",

        "form.heading": "Issue a certificate (beta)",
        "form.lead": "Share the creative brief, declare AI usage, attach proof. In seconds you’ll receive a CH code plus QR ready to publish.",
        "form.titleLabel": "Content title",
        "form.titlePlaceholder": "e.g. Article: “Why AI won’t replace people”",
        "form.creatorLabel": "Creator / brand",
        "form.creatorPlaceholder": "Your name or brand",
        "form.emailLabel": "Email (confirmation goes there)",
        "form.emailPlaceholder": "contact@yourbrand.com",
        "form.typeLabel": "Content type",
        "form.typeDefault": "Select...",
        "form.typeArticle": "Article / text",
        "form.typeVideo": "Video / social content",
        "form.typeImage": "Visual / image",
        "form.typeAudio": "Audio / podcast / music",
        "form.typeOther": "Other",
        "form.aiLabel": "AI usage declaration",
        "form.aiNoAi": "100% human (No-AI)",
        "form.aiAssisted": "AI-assisted (human-led)",
        "form.aiDisabled": "100% AI (not supported)",
        "form.aiHint": "We only accept work where a <strong>human leads the creative process</strong>. Fully AI-generated assets don’t qualify.",
        "form.processLabel": "Creation process (for reviewers)",
        "form.processPlaceholder": "Describe how the work was made: tools, steps, human vs AI involvement.",
        "form.attachmentsLabel": "Attachments (self-verification proof, max 5 files)",
        "form.attachmentsHint": "Add sketches, process screenshots or any proof-of-work. In this beta, files stay in your browser only.",
        "form.paymentLabel": "Payment & activation",
        "form.paymentHint": "After payment, our team will start analyzing your certificate application.",
        "form.pricingSub": "One-time verification fee",
        "form.waiverLabel": "I agree to the commencement of the service (verification and issuance of the certificate) before the expiry of the 14-day withdrawal period and I acknowledge that after the service has been fully performed by the entrepreneur, I will lose the right to withdraw from the contract.",
        "form.submit": "Generate certificate + code + QR",
        "form.validationError": "Please fill in all required fields and accept the waiver.",

        "code.label": "Certificate code:",
        "code.instructions": "Embed this code or QR wherever you publish. Audiences can verify the status instantly.",
        "code.attachmentsCount": "Attachments count: {count}",

        "verify.heading": "Verify a certificate code",
        "verify.lead": "Have a CH number or QR? Enter it below to view the declaration and status.",
        "verify.placeholder": "e.g. CH-274918-839201",
        "verify.button": "Check",
        "verify.buttonFull": "Verify certificate",
        "verify.hint": "Private beta: verification currently checks codes stored in this browser. The live release will validate every code via cloud API.",
        "verify.issuedOn": "Issued on: {date}",
        "verify.invalidTitle": "Code not found",
        "verify.invalidDescription": "No certificate matches <strong>{code}</strong>.",
        "verify.invalidHint": "Double-check the spelling or issue a new certificate.",
        "verify.activeTitle": "Certificate active",
        "verify.activeLink": "Open certificate card",
        "verify.redirect": "Redirecting you to certificate <strong>{code}</strong>...",
        "verify.inlinePrompt": "Enter a code to start verification.",
        "verify.redirectStatus": "Code Active",
        "verify.inlineEmpty": "Enter code to verify.",

        "verifyHero.pill": "Live checker",
        "verifyHero.heading": "Verify a certificate code",
        "verifyHero.lead": "Enter a <strong>CH-XXXXXX-XXXXXX</strong> number or paste the QR value. This demo validates codes issued in your current session.",
        "verifyHero.point1": "1. Paste the code or QR number.",
        "verifyHero.point2": "2. The system checks “No-AI” vs “AI-Assisted”.",
        "verifyHero.point3": "3. If it’s valid you’ll see the full certificate card.",
        "verifyHero.cta1": "Issue a new certificate",
        "verifyHero.cta2": "Learn more",
        "verifyHero.inputLabel": "Certificate code",

        "certificate.detailsTitle": "Process & declaration",
        "certificate.attachmentsTitle": "Attachments & proof",
        "certificate.copy": "Copy code",
        "certificate.verifyMore": "Verify another code",
        "certificate.issueMore": "Issue your own certificate",
        "certificate.noDescription": "The author didn’t provide extra process details.",
        "certificate.attachmentsEmpty": "No attachments — the creator skipped additional proof.",
        "certificate.info.author": "Author / brand",
        "certificate.info.type": "Content type",
        "certificate.info.aiUsage": "AI declaration",
        "certificate.info.date": "Issued on",
        "certificate.info.attachments": "Attachments",
        "certificate.missingTitle": "Certificate not found",
        "certificate.missingDescription": "Code <strong>{code}</strong> isn’t linked to any certificate in this session.",
        "certificate.missingNoCode": "No code provided in the URL.",
        "certificate.missingBack": "Back to verification",
        "certificate.missingIssue": "Issue a certificate",

        "about.pill": "About us",
        "about.heading": "We protect human-made stories",
        "about.lead": "CertifyHuman is built by creators, strategists and product designers who want clarity in the age of generative AI.",
        "about.point1": "Unified CH code system and verification cards.",
        "about.point2": "Plug-and-play components for your site or CMS.",
        "about.point3": "Roadmap includes API, payments and verification webhooks.",
        "about.statsTitle": "Why we care",
        "about.statsBody": "The internet needs an easy signal that a human stands behind the work. CertifyHuman makes that promise visible.",
        "about.metric1": "badge modes",
        "about.metric2": "code verification",
        "about.metric3": "content formats",
        "about.cta": "Read our full story",

        "aboutPage.heading": "The CertifyHuman manifesto",
        "aboutPage.lead": "We believe the web can still highlight real authors. We’re building a certificate ecosystem that shows where AI assistance ends and human craft begins.",
        "aboutPage.point1": "Open CH-XXXXXX-XXXXXX standard, ready for CMS and marketplaces.",
        "aboutPage.point2": "No-code experiences for creators, publishers and brands.",
        "aboutPage.point3": "Partnerships with tech platforms to ship APIs, webhooks and automated verification.",
        "aboutPage.valuesTitle": "Our values",
        "aboutPage.valuesBody": "Transparency, accountability and inclusive representation of creators. Whether you used supportive AI or went fully human, you should be able to prove it.",
        "aboutPage.metric1": "beta launch",
        "aboutPage.metric2": "teams in pilot",
        "aboutPage.metric3": "continents on the roadmap",
        "aboutPage.cta": "Join the partner program",
        "aboutPage.timelineHeading": "Roadmap",
        "aboutPage.timelineSub": "Roadmap",
        "aboutPage.timelineQ1": "Q1 2024",
        "aboutPage.timelineQ1Desc": "CH code standard and first verification-card prototypes.",
        "aboutPage.timelineQ2": "Q2 2024",
        "aboutPage.timelineQ2Desc": "Self-service beta for creators and brands, CMS integrations.",
        "aboutPage.timelineQ3": "Q3 2024",
        "aboutPage.timelineQ3Desc": "API for bulk issuance plus webhook-based verification.",
        "aboutPage.timelineQ4": "Q4 2024",
        "aboutPage.timelineQ4Desc": "Global payments support and publishing partnerships.",

        "messages.enterCode": "Wpisz prawidłowy kod certyfikatu.",
        "messages.notFound": "Nie znaleziono certyfikatu.",
        "messages.createError": "Wystąpił problem podczas generowania certyfikatu.",
        "messages.verifyError": "Nie udało się zweryfikować certyfikatu.",
        "buttons.copySuccess": "Skopiowano!",
        "attachmentPreview.title": "Załączniki ({count}):",
        "contentTypes.article": "Artykuł / tekst",
        "contentTypes.video": "Wideo / social content",
        "contentTypes.image": "Grafika / zdjęcie",
        "contentTypes.audio": "Audio / podcast / muzyka",
        "contentTypes.other": "Treść",
        "aiUsage.no-ai": "No-AI (100% człowiek)",
        "aiUsage.ai-assisted": "AI-Assisted (człowiek + AI)",
        "status.badge.no-ai": "NO-AI",
        "status.badge.ai-assisted": "AI-Assisted"
    }
};

const API_BASE_URL = location.hostname === "localhost" ? "http://localhost:5292" : "";
const MAX_ATTACHMENTS = 5;
const MAX_IMAGE_PREVIEW_SIZE = 5 * 1024 * 1024; // 5MB

let currentLang = localStorage.getItem("certifyHumanLang") || "pl";
let issuedCertificates = new Map();
let lastGeneratedCertificate = null;
let lastStandaloneResult = { code: "", certificate: null, valid: false };
let currentDetailCertificate = null;

// DOM Elements
const form = document.getElementById("certificateForm");
const navCta = document.getElementById("navCta");
const verifyInput = document.getElementById("verifyInput");
const verifyResult = document.getElementById("verifyResult");
const verifyButton = document.getElementById("verifyButton"); // If exists

const generatedCodeEl = document.getElementById("generatedCode");
const codeMetaEl = document.getElementById("codeMeta");
const qrContainer = document.getElementById("qrContainer");
const codeResult = document.getElementById("codeResult");

const attachmentInput = document.getElementById("evidenceFiles");
const attachmentPreviewEl = document.getElementById("attachmentPreview");

// Verify Page specific
const standaloneInput = document.getElementById("standaloneVerifyInput");
const standaloneButton = document.getElementById("standaloneVerifyBtn");
const standaloneFeedback = document.getElementById("standaloneFeedback");
const verifyOrbit = document.querySelector(".verify-orbit-loader");

// Certificate Detail specific
const certificateCardEl = document.getElementById("certificateCard");
const certificateMissingEl = document.getElementById("certificateMissing");
const certificateTitleEl = document.getElementById("certificateTitle");
const certificateCodeEl = document.getElementById("certificateCode");
const certificateStatusEl = document.getElementById("certificateStatus");
const certificateMetaEl = document.getElementById("certificateMeta");
const certificateDescEl = document.getElementById("certificateDesc");
const certificateInfoListEl = document.getElementById("certificateInfoList");
const certificateAttachmentsEl = document.getElementById("certificateAttachments");
const evidenceListEl = document.getElementById("evidenceList");
const copyCodeBtn = document.getElementById("copyCodeBtn");

function init() {
    setLanguage(currentLang);

    // Common init
    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
        langToggle.addEventListener("click", () => {
            const next = currentLang === "pl" ? "en" : "pl";
            setLanguage(next);
        });
    }

    const page = document.body?.dataset?.page;
    if (page === "home") {
        initHomePage();
    } else if (page === "verify") {
        initVerifyPage();
    } else if (page === "certificate") {
        initCertificatePage();
    } else if (page === "apply") {
        initApplyPage();
    }
}
document.addEventListener("DOMContentLoaded", init);

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("certifyHumanLang", lang);
    document.documentElement.lang = lang;

    const toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) toggleBtn.textContent = lang === "pl" ? "EN" : "PL";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        const text = t(key);
        if (text) {
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = text;
            } else {
                el.innerHTML = text; // Allow HTML in translations
            }
        }
    });

    updatePricing();
}

function updatePricing() {
    const el = document.getElementById("pricingLabel");
    if (!el) return;

    // Force update based on currentLang
    if (currentLang === "pl") {
        el.textContent = "99 PLN";
    } else {
        el.textContent = "25 USD";
    }
}

function t(key) {
    return translations[currentLang]?.[key] ?? translations.pl[key] ?? key;
}

function formatMessage(key, replacements = {}) {
    let text = t(key);
    Object.entries(replacements).forEach(([token, value]) => {
        text = text.replace(new RegExp(`{${token}}`, "g"), value);
    });
    return text;
}

function getContentTypeLabel(type) {
    return t(`contentTypes.${type}`) || t("contentTypes.other");
}

function getAiUsageLabel(value) {
    return t(`aiUsage.${value}`) || value;
}

function getStatusBadgeLabel(value) {
    return t(`status.badge.${value}`) || value.toUpperCase();
}

// Page Specific Inits
function initHomePage() {
    // Index page logic if any, currently index is landing
    // But verify input might be there?
    if (verifyInput) {
        verifyInput.addEventListener("keyup", (event) => {
            if (event.key === "Enter") runVerification();
        });
        if (verifyButton) verifyButton.addEventListener("click", runVerification);
    }
}

function initApplyPage() {
    if (form) {
        form.addEventListener("submit", handleCertificateSubmit);
    }
    if (attachmentInput) {
        attachmentInput.addEventListener("change", () => displaySelectedEvidence(attachmentInput.files));
    }
    renderAttachmentPreview([]);
}

function initVerifyPage() {
    if (standaloneButton) {
        standaloneButton.addEventListener("click", handleStandaloneVerification);
    }
    if (standaloneInput) {
        standaloneInput.addEventListener("keyup", (event) => {
            if (event.key === "Enter") handleStandaloneVerification();
        });
    }
    bootstrapInlineQuery();
}

async function initCertificatePage() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
        renderMissingCertificate();
        return;
    }

    const { normalized, certificate } = await verifyCertificate(code);

    if (!certificate) {
        renderMissingCertificate(normalized || code);
        return;
    }

    renderCertificateDetails(certificate);

    if (copyCodeBtn) {
        copyCodeBtn.dataset.code = certificate.code;
        copyCodeBtn.addEventListener("click", () => handleCopyCode(certificate.code));
    }
}

function bootstrapInlineQuery() {
    const params = new URLSearchParams(window.location.search);
    const codeFromQuery = params.get("code");

    if (codeFromQuery && verifyInput) {
        verifyInput.value = codeFromQuery.trim();
        runVerification();
    }
}

function formatCertificateForUi(payload = {}, defaults = {}) {
    return {
        code: payload.code ?? defaults.code ?? "",
        title: payload.title ?? defaults.title ?? "",
        creator: payload.creator ?? defaults.creator ?? "",
        email: payload.email ?? defaults.email ?? "",
        type: payload.type ?? defaults.type ?? "",
        aiUsage: payload.aiUsage ?? defaults.aiUsage ?? "",
        desc: payload.description ?? defaults.desc ?? "",
        description: payload.description ?? defaults.description ?? "",
        attachments: payload.attachments ?? defaults.attachments ?? [],
        issuedAt: payload.createdAt ?? defaults.issuedAt ?? new Date().toISOString(),
        status: payload.status ?? defaults.status ?? "",
        paymentLink: payload.paymentLink ?? defaults.paymentLink,
        paymentId: payload.paymentId ?? defaults.paymentId,
        adminComment: payload.adminComment ?? defaults.adminComment ?? ""
    };
}

async function createCertificate(payload) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/certificates/new`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (response.status !== 201) {
            console.error("Unexpected status while creating certificate:", response.status);
            alert(t("messages.createError"));
            return null;
        }

        const created = await response.json();
        return formatCertificateForUi(
            {
                code: created.code,
                status: created.status,
                paymentLink: created.paymentLink,
                paymentId: created.paymentId
            },
            {
                title: payload.title,
                creator: payload.creator,
                email: payload.email,
                type: payload.type,
                aiUsage: payload.aiUsage,
                desc: payload.description,
                description: payload.description,
                attachments: payload.attachments ?? [],
                issuedAt: new Date().toISOString()
            }
        );
    } catch (error) {
        console.error("Błąd API:", error);
        alert(t("messages.createError"));
        return null;
    }
}

async function verifyCertificate(rawValue) {
    const normalized = normalizeCode(rawValue || "");
    if (!normalized) {
        return { normalized: "", certificate: null };
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/certificates/${normalized}`);
        if (response.status === 404) return { normalized, certificate: null };
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

        const data = await response.json();
        const certificate = formatCertificateForUi(data);
        return { normalized, certificate };
    } catch (error) {
        console.error("Błąd podczas weryfikacji:", error);
        alert(t("messages.verifyError"));
        return { normalized, certificate: null };
    }
}

async function handleCertificateSubmit(event) {
    event.preventDefault();

    const title = document.getElementById("contentTitle").value.trim();
    const creator = document.getElementById("creatorName").value.trim();
    const email = document.getElementById("creatorEmail").value.trim();
    const type = document.getElementById("contentType").value;
    const desc = document.getElementById("contentDescription").value.trim();
    const aiUsage = (document.querySelector("input[name='aiUsage']:checked") || {}).value;
    const waiver = document.getElementById("waiverCheckbox");

    if (!title || !creator || !email || !type || !aiUsage || !waiver?.checked) {
        alert(t("form.validationError"));
        return;
    }

    const fileInput = document.getElementById("evidenceFiles");
    const attachmentFiles = [];
    const attachmentNames = [];

    if (fileInput && fileInput.files.length > 0) {
        for (let i = 0; i < fileInput.files.length; i++) {
            const file = fileInput.files[i];
            attachmentNames.push(file.name);
            try {
                const base64 = await toBase64(file);
                attachmentFiles.push({
                    name: file.name,
                    base64: base64,
                    type: file.type
                });
            } catch (e) {
                console.error("Failed to convert file", file.name, e);
            }
        }
    }

    const data = {
        title,
        creator,
        email,
        type,
        description: desc,
        aiUsage,
        attachments: attachmentNames,
        attachmentFiles: attachmentFiles
    };

    if (type === 'article') {
        data.contentText = desc;
    }

    const created = await createCertificate(data);
    if (!created) return;

    lastGeneratedCertificate = created;
    persistCertificates();

    const paymentModal = document.getElementById('paymentModal');
    const paymentLinkBtn = document.getElementById('paymentLinkBtn');
    if (paymentModal && paymentLinkBtn) {
        paymentLinkBtn.href = created.paymentLink || "#";
        paymentModal.setAttribute('aria-hidden', 'false');
    }
}

function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.setAttribute('aria-hidden', 'true');
}

function persistCertificates() {
    // Basic stub if using localStorage
}

function displayCertificate() {
    // Legacy function, might not be used anymore?
}

function renderQr(code, container) {
    const target = container || qrContainer;
    if (!target || typeof QRCode === "undefined") return;
    target.innerHTML = "";

    const url = new URL(window.location.href);
    const currentPath = url.pathname;
    const newPath = currentPath.replace(/[^/]+$/, "certificate.html");
    url.pathname = newPath;
    url.search = "";
    url.hash = "";
    url.searchParams.set("code", code);

    new QRCode(target, {
        text: url.toString(),
        width: 110,
        height: 110,
        colorDark: "#38bdf8",
        colorLight: "#020817",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function runVerification() {
    // Redirect to verify page with query param?
    // Or if inline
    if (verifyInput && verifyInput.value.trim()) {
        const code = verifyInput.value.trim();
        window.location.href = `certificate.html?code=${code}`;
    }
}

async function handleStandaloneVerification() {
    if (!standaloneInput || !standaloneFeedback) return;
    const raw = standaloneInput.value.trim();
    if (!raw) {
        renderStandaloneFeedback("", null, false);
        return;
    }

    toggleOrbit(true);
    const { normalized, certificate } = await verifyCertificate(raw);

    if (!normalized || !certificate) {
        renderStandaloneFeedback(normalized, certificate, false);
        toggleOrbit(false);
        return;
    }

    renderStandaloneFeedback(normalized, certificate, true);
    setTimeout(() => {
        window.location.href = getCertificateDetailUrl(normalized);
    }, 900);
}

function renderStandaloneFeedback(code, certificate, isValid) {
    if (!standaloneFeedback) return;
    if (!code) {
        standaloneFeedback.innerHTML = `<p>${t("verify.inlinePrompt")}</p>`;
        return;
    }
    if (!isValid || !certificate) {
        const safeCode = escapeHtml(code);
        standaloneFeedback.innerHTML = `
            <div class="status-label status-invalid">${t("verify.invalidTitle")}</div>
            <p>${t("messages.notFound")}</p>
            <p>${formatMessage("verify.invalidDescription", { code: safeCode })}</p>
            <p>${t("verify.invalidHint")}</p>
        `;
        return;
    }
    const safeCode = escapeHtml(code);
    standaloneFeedback.innerHTML = `
        <div class="status-label status-valid">${t("verify.activeTitle")}</div>
        <p>${formatMessage("verify.redirect", { code: safeCode })}</p>
    `;
}

function renderCertificateDetails(certificate) {
    if (!certificateCardEl) return;
    currentDetailCertificate = certificate;

    certificateCardEl.hidden = false;
    if (certificateMissingEl) certificateMissingEl.hidden = true;

    if (certificateTitleEl) certificateTitleEl.textContent = certificate.title;
    if (certificateCodeEl) certificateCodeEl.textContent = certificate.code;

    if (certificateStatusEl) {
        certificateStatusEl.textContent = getStatusBadgeLabel(certificate.aiUsage);
        certificateStatusEl.classList.remove("status-invalid");
        certificateStatusEl.classList.add("status-valid");
    }

    if (certificateMetaEl) {
        certificateMetaEl.textContent = `${certificate.creator} • ${getContentTypeLabel(certificate.type)} • ${formatDate(certificate.issuedAt)}`;
    }

    if (certificateDescEl) {
        certificateDescEl.textContent = certificate.desc || t("certificate.noDescription");
    }

    renderCertificateInfoList(certificate);

    // Right Sidebar: Hide Attachments, Show Admin Comment
    if (certificateAttachmentsEl) {
        const rightSidebar = certificateAttachmentsEl.parentNode;
        if (rightSidebar) {
            rightSidebar.innerHTML = ''; // Clear Attachments

            if (certificate.adminComment) {
                const title = document.createElement('h3');
                title.textContent = "Opis Administracji";
                rightSidebar.appendChild(title);

                const content = document.createElement('div');
                content.className = 'admin-comment-section';
                content.innerHTML = `<p>${escapeHtml(certificate.adminComment)}</p>`;
                rightSidebar.appendChild(content);

                rightSidebar.style.display = 'block';
            } else {
                rightSidebar.style.display = 'none';
            }
        }
    }
}

function renderCertificateInfoList(certificate) {
    if (!certificateInfoListEl) return;
    const items = [
        { label: t("certificate.info.author"), value: certificate.creator },
        { label: t("certificate.info.type"), value: getContentTypeLabel(certificate.type) },
        { label: t("certificate.info.aiUsage"), value: getAiUsageLabel(certificate.aiUsage) },
        { label: t("certificate.info.date"), value: formatDate(certificate.issuedAt) },
        { label: t("certificate.info.attachments"), value: `${(certificate.attachments || []).length}` }
    ];
    certificateInfoListEl.innerHTML = items
        .map((item) => `<li><strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.value)}</li>`)
        .join("");
}

function renderMissingCertificate(code) {
    if (certificateCardEl) certificateCardEl.hidden = true;
    if (certificateMissingEl) {
        certificateMissingEl.hidden = false;
        certificateMissingEl.innerHTML = `
            <div class="certificate-header">
                <span class="status-label status-invalid">${t("verify.invalidTitle")}</span>
                <h2>${t("certificate.missingTitle")}</h2>
                ${code
                ? `<p>${formatMessage("certificate.missingDescription", { code: escapeHtml(code) })}</p>`
                : `<p>${t("certificate.missingNoCode")}</p>`
            }
            </div>
            <div class="certificate-actions">
                <a class="btn-secondary" href="verify.html">${t("certificate.missingBack")}</a>
                <a class="btn-secondary" href="apply.html">${t("certificate.missingIssue")}</a>
            </div>
        `;
    }
}

function displaySelectedEvidence(fileList) {
    // Only file name display
    if (!evidenceListEl) return;
    evidenceListEl.innerHTML = Array.from(fileList || [])
        .map(f => `<li>${escapeHtml(f.name)} (${formatFileSize(f.size)})</li>`)
        .join("");
}

function renderAttachmentPreview(attachments = []) {
    if (!attachmentPreviewEl) return;
    if (attachments.length === 0) {
        attachmentPreviewEl.innerHTML = "";
        return;
    }
}

function handleCopyCode(code) {
    if (!code || !copyCodeBtn) return;
    navigator.clipboard.writeText(code).then(() => {
        const original = copyCodeBtn.textContent;
        copyCodeBtn.textContent = t("buttons.copySuccess");
        setTimeout(() => copyCodeBtn.textContent = original, 1600);
    }).catch(() => window.prompt(t("certificate.copy"), code));
}

function toggleOrbit(isActive) {
    if (verifyOrbit) verifyOrbit.classList.toggle("active", Boolean(isActive));
}

function normalizeCode(value = "") {
    const cleaned = String(value).toUpperCase().replace(/[^A-Z0-9-]/g, "");
    return cleaned.startsWith("CH-") ? cleaned : cleaned.replace(/^CH/, "CH-");
}

function getCertificateDetailUrl(code) {
    return `certificate.html?code=${encodeURIComponent(code)}`;
}

function scrollToSection(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function formatDate(date) {
    try {
        const locale = currentLang === "pl" ? "pl-PL" : "en-US";
        return new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" }).format(new Date(date));
    } catch (e) { return new Date(date).toLocaleDateString(); }
}

function formatFileSize(bytes) {
    if (bytes === 0) return "0 B";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function truncate(text = "", max = 40) {
    if (text.length <= max) return text;
    return `${text.slice(0, max - 1)}…`;
}

function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

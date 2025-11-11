const translations = {
    pl: {
        "nav.how": "Jak to działa",
        "nav.generate": "Wydaj certyfikat",
        "nav.verify": "Zweryfikuj kod",
        "nav.about": "O nas",
        "nav.cta": "Zdobądź certyfikat",
        "footer.disclaimer": "CertifyHuman przetwarza dane zgodnie z RODO. Pełne zasady znajdziesz poniżej.",
        "footer.rodoLink": "RODO / Przetwarzanie danych",

        "hero.title": "Certyfikaty <span class=\"hero-gradient\">autentyczności treści</span><br/>w świecie zdominowanym przez AI.",
        "hero.subtitle": "Wyróżnij treści, w których człowiek jest liderem procesu. CertifyHuman nadaje cyfrowe plakietki „No-AI” i „AI-Assisted”, które możesz wkleić na stronę, do portfolio lub posta — wraz z kodem QR prowadzącym do karty weryfikacyjnej.",
        "hero.tag1": "No-AI Content",
        "hero.tag2": "AI-Assisted, not AI-only",
        "hero.tag3": "Brak akceptacji 100% AI",
        "hero.tag4": "QR + kod numeryczny",
        "hero.badge1": "● Twórcy / marki / wydawcy",
        "hero.badge2": "● Jednolity standard oznaczania",
        "hero.badge3": "● Gotowe pod backend & płatności",
        "hero.exampleTitle": "Live example: certyfikat treści",
        "hero.exampleDescription": "Przetestuj pełen flow: zgłoszenie, kod CH-XXXXXX-XXXXXX oraz dedykowana karta ze statusem.",
        "hero.status": "Status: <strong>Early Access</strong> <span>beta ver. – self-service</span>",
        "hero.policy1": "Chronimy odbiorców przed treściami <span>100% generowanymi przez AI</span>.",
        "hero.policy2": "Certyfikujemy tylko: <span>No-AI</span> lub <span>AI-Assisted</span>.",
        "hero.badgeTitle": "CERTIFIED CONTENT",
        "hero.badgeStatus": "NO-AI / AI-ASSISTED",
        "hero.badgeCta": "Skanuj QR, aby zweryfikować",

        "how.heading": "Jak to działa?",
        "how.lead": "Trzymamy się prostego, przejrzystego schematu. Twórca składa deklarację, system wydaje kod CH, a odbiorcy weryfikują go jednym kliknięciem.",
        "how.step1.title": "Twórca → Formularz + płatność",
        "how.step1.body": "Podaje dane treści, wybiera typ certyfikatu (No-AI / AI-Assisted), akceptuje regulamin i opłaca certyfikat.",
        "how.step2.title": "System → Kod + QR",
        "how.step2.body": "Generuje unikalny numer + QR z linkiem do weryfikacji. Twórca może wkleić kod lub QR w dowolne miejsce.",
        "how.step3.title": "Odbiorca → Weryfikacja",
        "how.step3.body": "Wpisuje kod lub skanuje QR i widzi status certyfikatu oraz zadeklarowany poziom użycia AI.",
        "how.list1": "Każdy certyfikat otrzymuje indywidualny numer CH + QR z linkiem do karty weryfikacyjnej.",
        "how.list2": "Oznaczenia „No-AI” oraz „AI-Assisted” są przejrzyste dla odbiorców i partnerów.",
        "how.list3": "Polityka twarda: brak certyfikatów dla treści zadeklarowanych jako 100% AI.",

        "form.heading": "Wydaj certyfikat (beta)",
        "form.lead": "Uzupełnij brief treści, wybierz deklarację AI i dołącz dowody pracy. W sekundę otrzymasz numer CH oraz QR do publikacji.",
        "form.titleLabel": "Nazwa / tytuł treści",
        "form.titlePlaceholder": "np. Artykuł: \"Dlaczego AI nie zastąpi ludzi?\"",
        "form.creatorLabel": "Autor / marka",
        "form.creatorPlaceholder": "Twoje imię / nazwa marki",
        "form.emailLabel": "E-mail (wyślemy tam potwierdzenie)",
        "form.emailPlaceholder": "kontakt@twojamarka.com",
        "form.typeLabel": "Typ treści",
        "form.typeDefault": "Wybierz...",
        "form.typeArticle": "Artykuł / tekst",
        "form.typeVideo": "Wideo / content social",
        "form.typeImage": "Grafika / zdjęcie",
        "form.typeAudio": "Audio / podcast / muzyka",
        "form.typeOther": "Inne",
        "form.aiLabel": "Deklaracja użycia AI",
        "form.aiNoAi": "100% bez AI (No-AI)",
        "form.aiAssisted": "Z pomocą AI (AI-Assisted)",
        "form.aiDisabled": "100% AI (nieobsługiwane)",
        "form.aiHint": "Akceptujemy tylko treści, gdzie <strong>człowiek jest głównym autorem</strong>. Wersja 100% AI nie otrzyma certyfikatu.",
        "form.processLabel": "Proces tworzenia (opis dla certyfikatora)",
        "form.processPlaceholder": "Opisz, jak powstawała treść: narzędzia, etapy, udział ludzi vs AI. To pole pomaga w samo-weryfikacji.",
        "form.attachmentsLabel": "Załączniki (dowody pracy własnej, maks. 5 plików)",
        "form.attachmentsHint": "Dołącz szkice, screeny z procesu lub inne dowody pracy własnej. W tej wersji beta pliki pozostają wyłącznie w Twojej przeglądarce.",
        "form.paymentLabel": "Płatność i aktywacja",
        "form.paymentHint": "Kliknięcie przycisku uruchamia przykładowy checkout i natychmiast aktywuje certyfikat w tej wersji prezentacyjnej.",
        "form.submit": "Wygeneruj certyfikat + kod + QR",

        "code.label": "Kod certyfikatu:",
        "code.instructions": "Możesz wkleić ten kod w opis treści lub osadzić poniższy QR. Odbiorca po wejściu na stronę i wpisaniu kodu (lub skanie QR) zweryfikuje status certyfikatu.",

        "verify.heading": "Zweryfikuj kod certyfikatu",
        "verify.lead": "Masz numer CH lub zeskanowałeś QR? Wpisz go poniżej i zobacz status treści wraz z deklaracją użycia AI.",
        "verify.placeholder": "np. CH-274918-839201",
        "verify.button": "Sprawdź",
        "verify.buttonFull": "Sprawdź certyfikat",
        "verify.hint": "Prywatna beta: weryfikacja obejmuje kody zapisane w tej przeglądarce. W finalnej wersji każdy kod będzie sprawdzany 24/7 w chmurze.",
        "verify.issuedOn": "Wydano: {date}",
        "verify.invalidTitle": "Kod nie istnieje",
        "verify.invalidDescription": "Nie znaleziono certyfikatu o numerze <strong>{code}</strong>.",
        "verify.invalidHint": "Sprawdź pisownię lub wygeneruj nowy certyfikat.",
        "verify.activeTitle": "Certyfikat aktywny",
        "verify.activeLink": "Otwórz kartę certyfikatu",
        "verify.redirect": "Przenosimy Cię do widoku certyfikatu <strong>{code}</strong>...",
        "verify.inlinePrompt": "Podaj kod, aby rozpocząć weryfikację.",

        "about.pill": "O nas",
        "about.heading": "Budujemy zaufanie do treści tworzonych przez ludzi",
        "about.lead": "CertifyHuman to inicjatywa twórców, strategów i product designerów, którzy chcą utrzymać przejrzystość w epoce generatywnego AI. Dostarczamy prosty standard oznaczania „No-AI” i „AI-Assisted”.",
        "about.point1": "Jednolity system kodów CH i kart weryfikacyjnych.",
        "about.point2": "Gotowe komponenty do integracji z Twoją stroną lub CMS.",
        "about.point3": "Roadmapa obejmuje API, płatności i webhooki weryfikacyjne.",
        "about.statsTitle": "Dlaczego to robimy?",
        "about.statsBody": "Internet potrzebuje prostego sposobu na udowodnienie, że za treścią stoi człowiek. Dzięki CertifyHuman odbiorcy widzą, kto deklaruje swoją pracę i w jaki sposób korzysta z AI.",
        "about.metric1": "tryby oznaczeń",
        "about.metric2": "weryfikacja kodów",
        "about.metric3": "formatów treści",
        "about.cta": "Poznaj pełną historię",

        "verifyHero.pill": "Live checker",
        "verifyHero.heading": "Zweryfikuj kod certyfikatu",
        "verifyHero.lead": "Wpisz numer w formacie <strong>CH-XXXXXX-XXXXXX</strong> lub zeskanuj QR otrzymany od twórcy. Wersja demo sprawdza tylko certyfikaty wygenerowane w tej sesji przeglądarki.",
        "verifyHero.point1": "1. Wpisz kod lub wklej numer z QR.",
        "verifyHero.point2": "2. System sprawdzi status „No-AI” vs „AI-Assisted”.",
        "verifyHero.point3": "3. Gdy kod istnieje, automatycznie przejdziesz do pełnej karty certyfikatu.",
        "verifyHero.cta1": "Wydaj nowy certyfikat",
        "verifyHero.cta2": "Dowiedz się więcej",
        "verifyHero.inputLabel": "Kod certyfikatu",

        "certificate.detailsTitle": "Opis procesu i deklaracja",
        "certificate.attachmentsTitle": "Załączniki i dowody",
        "certificate.copy": "Skopiuj kod",
        "certificate.verifyMore": "Zweryfikuj kolejny kod",
        "certificate.issueMore": "Wydaj własny certyfikat",
        "certificate.noDescription": "Autor nie dodał dodatkowego opisu procesu.",
        "certificate.attachmentsEmpty": "Brak załączników — twórca nie dodał dodatkowych dowodów.",
        "certificate.info.author": "Autor / marka",
        "certificate.info.type": "Typ treści",
        "certificate.info.aiUsage": "Deklaracja AI",
        "certificate.info.date": "Data wydania",
        "certificate.info.attachments": "Załączniki",
        "certificate.missingTitle": "Nie znaleziono certyfikatu",
        "certificate.missingDescription": "Numer <strong>{code}</strong> nie jest powiązany z żadnym certyfikatem w tej sesji.",
        "certificate.missingNoCode": "Brak kodu w adresie URL.",
        "certificate.missingBack": "Wróć do weryfikacji",
        "certificate.missingIssue": "Wydaj certyfikat",

        "aboutPage.heading": "Manifest CertifyHuman",
        "aboutPage.lead": "Wierzymy, że internet nadal może wskazywać prawdziwych autorów. Dlatego budujemy ekosystem certyfikatów, które jasno pokazują, gdzie kończy się wsparcie AI, a zaczyna praca człowieka.",
        "aboutPage.point1": "Tworzymy otwarty standard CH-XXXXXX-XXXXXX, gotowy do integracji z CMS i marketplace’ami.",
        "aboutPage.point2": "Projektujemy doświadczenia dla twórców, wydawców i marek — bez konieczności kodowania.",
        "aboutPage.point3": "Współpracujemy z partnerami technologicznymi, by dostarczyć API, webhooki i automatyczną weryfikację.",
        "aboutPage.valuesTitle": "Nasze wartości",
        "aboutPage.valuesBody": "Transparentność, odpowiedzialność i inkluzywność twórców. Chcemy, by każdy mógł pokazać, że stoi za nim zespół ludzi — niezależnie od tego, czy korzystał z AI pomocniczo, czy nie korzystał wcale.",
        "aboutPage.metric1": "start programu beta",
        "aboutPage.metric2": "zespołów w pilotażu",
        "aboutPage.metric3": "kontynentów w roadmapie",
        "aboutPage.cta": "Dołącz do programu partnerskiego",
        "aboutPage.timelineHeading": "Roadmapa rozwoju",
        "aboutPage.timelineQ1": "Q1 2024",
        "aboutPage.timelineQ1Desc": "Powstaje standard kodów CH oraz pierwsze prototypy kart weryfikacyjnych.",
        "aboutPage.timelineQ2": "Q2 2024",
        "aboutPage.timelineQ2Desc": "Beta self-service dla twórców i marek, integracje z CMS i builderami.",
        "aboutPage.timelineQ3": "Q3 2024",
        "aboutPage.timelineQ3Desc": "API do masowego wydawania certyfikatów oraz webhooki do automatycznej weryfikacji.",
        "aboutPage.timelineQ4": "Q4 2024",
        "aboutPage.timelineQ4Desc": "Obsługa płatności globalnych i partnerstwa z platformami publishingowymi.",
        "rodo.hero.title": "RODO / GDPR – jak chronimy Twoje dane",
        "rodo.hero.lead": "Ten dokument opisuje wszystkie operacje przetwarzania danych osobowych wykonywane w projekcie CertifyHuman, podstawy prawne, środki bezpieczeństwa oraz Twoje prawa jako osoby, której dane dotyczą.",
        "rodo.hero.updated": "Aktualizacja: 20.10.2024",
        "rodo.section.controller.title": "Administrator danych",
        "rodo.section.controller.body1": "Administratorem jest CertifyHuman sp. z o.o., ul. Wirtualna 1, 00-000 Warszawa, NIP 0000000000.",
        "rodo.section.controller.body2": "Kontakt w sprawach danych: privacy@certifyhuman.com lub pisemnie na adres siedziby.",
        "rodo.section.controller.body3": "Przetwarzanie odbywa się na terytorium UE, dane są wersjonowane w centrum danych zlokalizowanym w Irlandii.",
        "rodo.section.scope.title": "Cele i zakres",
        "rodo.section.scope.list1": "Obsługa zamówień certyfikatów, komunikacja e-mailowa oraz rozliczenia.",
        "rodo.section.scope.list2": "Weryfikacja treści i prowadzenie rejestru kodów CH.",
        "rodo.section.scope.list3": "Zabezpieczenie roszczeń i wykrywanie nadużyć związanych z deklaracjami No-AI / AI-Assisted.",
        "rodo.section.scope.list4": "Realizacja obowiązków księgowych i podatkowych wynikających z prawa UE.",
        "rodo.section.legal.title": "Podstawy prawne",
        "rodo.section.legal.list1": "Art. 6 ust. 1 lit. b RODO – wykonanie umowy o wydanie certyfikatu.",
        "rodo.section.legal.list2": "Art. 6 ust. 1 lit. c RODO – obowiązki wynikające z przepisów rachunkowych i podatkowych.",
        "rodo.section.legal.list3": "Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes, czyli zapewnienie integralności oznaczeń CertifyHuman.",
        "rodo.section.legal.list4": "Art. 6 ust. 1 lit. a RODO – dobrowolna zgoda na komunikację marketingową (jeśli jej udzielisz).",
        "rodo.section.retention.title": "Okres przechowywania",
        "rodo.section.retention.body1": "Dane transakcyjne i certyfikatów przechowujemy przez 72 miesiące od zakończenia umowy (wymogi podatkowe i dochodzeniowe).",
        "rodo.section.retention.body2": "Materiały pomocnicze kasujemy po 12 miesiącach od decyzji „approve/reject”, chyba że konieczne jest dłuższe przechowywanie ze względu na spór prawny.",
        "rodo.section.transfer.title": "Transfer poza EOG",
        "rodo.section.transfer.body": "Nie przekazujemy danych poza EOG. Jeśli nastąpi to w przyszłości, wdrożymy Standardowe Klauzule Umowne zgodnie z art. 46 RODO.",
        "rodo.section.recipients.title": "Odbiorcy danych",
        "rodo.section.recipients.list1": "Dostawcy płatności (Stripe/Przelewy24) – wyłącznie w zakresie płatności i fakturowania.",
        "rodo.section.recipients.list2": "Dostawcy chmury i hostingu – Microsoft Azure / OVH (umowy powierzenia danych).",
        "rodo.section.recipients.list3": "Audytorzy, kancelarie prawne oraz biuro rachunkowe wspierające naszą działalność.",
        "rodo.section.recipients.list4": "Organom publicznym udostępniamy dane wyłącznie, gdy istnieje ku temu obowiązek prawny.",
        "rodo.section.automation.title": "Profilowanie i zautomatyzowane decyzje",
        "rodo.section.automation.body": "Nie prowadzimy zautomatyzowanego podejmowania decyzji ani profilowania, które wywoływałoby skutki prawne wobec użytkowników. Analizy ryzyka wykonujemy manualnie.",
        "rodo.section.rights.title": "Prawa osób, których dane dotyczą",
        "rodo.section.rights.lead": "Możesz skorzystać z poniższych praw wysyłając wiadomość na privacy@certifyhuman.com lub poprzez panel klienta:",
        "rodo.section.rights.list1": "Dostęp do danych (art. 15 RODO) – otrzymasz kopię wszystkich przetwarzanych informacji.",
        "rodo.section.rights.list2": "Sprostowanie danych (art. 16 RODO) – poprawimy nieaktualne lub błędne dane.",
        "rodo.section.rights.list3": "Usunięcie danych (art. 17 RODO) – gdy dane nie są już potrzebne lub sprzeciwisz się przetwarzaniu.",
        "rodo.section.rights.list4": "Ograniczenie przetwarzania (art. 18 RODO) – np. na czas rozpatrywania reklamacji.",
        "rodo.section.rights.list5": "Przeniesienie danych (art. 20 RODO) – otrzymasz dane w formacie JSON/CSV.",
        "rodo.section.rights.list6": "Sprzeciw wobec przetwarzania (art. 21 RODO) – w szczególności wobec komunikacji marketingowej.",
        "rodo.section.rights.list7": "Skarga do UODO lub innego organu nadzorczego w UE, jeśli uznasz, że naruszyliśmy przepisy.",
        "rodo.section.security.title": "Bezpieczeństwo informacji",
        "rodo.section.security.list1": "Szyfrowanie danych w tranzycie (TLS 1.3) oraz w spoczynku (AES-256 w infrastrukturze chmurowej).",
        "rodo.section.security.list2": "Dostęp administracyjny ograniczony do kluczy sprzętowych FIDO2 i logów SIEM przechowywanych 12 miesięcy.",
        "rodo.section.security.list3": "Regularne testy bezpieczeństwa i kopie zapasowe wykonywane codziennie z retencją 30 dni.",
        "rodo.section.contact.title": "Kontakt i inspektor",
        "rodo.section.contact.body1": "Wyznaczyliśmy Inspektora Ochrony Danych: IOD – Anna Kowalska, dpo@certifyhuman.com.",
        "rodo.section.contact.body2": "Zgłoszenia naruszeń przyjmujemy całodobowo pod adresem incident@certifyhuman.com. Każde zgłoszenie analizujemy w ciągu 72 godzin.",
        "rodo.section.contact.body3": "Niniejsza polityka wchodzi w życie z dniem 20.10.2024 i będzie aktualizowana przy każdej zmianie procesu przetwarzania.",

        "form.validationError": "Uzupełnij wymagane pola i wybierz deklarację użycia AI.",
        "code.attachmentsCount": "Załączniki: {count}",
        "attachments.none": "Załączniki: brak (pole opcjonalne).",
        "attachments.previewUnavailable": "Podgląd niedostępny ({type})",
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
        "status.badge.ai-assisted": "AI-Assisted",
        "aboutPage.timelineSub": "Roadmapa rozwoju"
    },
    en: {
        "nav.how": "How it works",
        "nav.generate": "Issue certificate",
        "nav.verify": "Verify code",
        "nav.about": "About",
        "nav.cta": "Get certificate",
        "footer.disclaimer": "CertifyHuman processes data in line with GDPR. Read the full policy below.",
        "footer.rodoLink": "GDPR / Data processing",

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
        "form.paymentHint": "Clicking the button simulates checkout and activates the certificate in this showcase.",
        "form.submit": "Generate certificate + code + QR",

        "code.label": "Certificate code:",
        "code.instructions": "Embed this code or QR wherever you publish. Audiences can verify the status instantly.",

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
        "aboutPage.timelineQ1": "Q1 2024",
        "aboutPage.timelineQ1Desc": "CH code standard and first verification-card prototypes.",
        "aboutPage.timelineQ2": "Q2 2024",
        "aboutPage.timelineQ2Desc": "Self-service beta for creators and brands, CMS integrations.",
        "aboutPage.timelineQ3": "Q3 2024",
        "aboutPage.timelineQ3Desc": "API for bulk issuance plus webhook-based verification.",
        "aboutPage.timelineQ4": "Q4 2024",
        "aboutPage.timelineQ4Desc": "Global payments support and publishing partnerships.",
        "rodo.hero.title": "GDPR notice – how we protect your data",
        "rodo.hero.lead": "This document explains every data-processing activity inside CertifyHuman, the legal grounds, safeguards, and your rights as the data subject.",
        "rodo.hero.updated": "Updated: 20 Oct 2024",
        "rodo.section.controller.title": "Data controller",
        "rodo.section.controller.body1": "Controller: CertifyHuman sp. z o.o., Virtual Street 1, 00-000 Warsaw, Poland.",
        "rodo.section.controller.body2": "Questions about data: privacy@certifyhuman.com or by post.",
        "rodo.section.controller.body3": "Processing is performed within the EU and hosted in an Irish data center.",
        "rodo.section.scope.title": "Purposes and scope",
        "rodo.section.scope.list1": "Order handling, billing, and customer communication.",
        "rodo.section.scope.list2": "Content verification and maintenance of the CH code registry.",
        "rodo.section.scope.list3": "Fraud prevention and protection of the No-AI / AI-Assisted declarations.",
        "rodo.section.scope.list4": "Fulfilling accounting and tax duties required by EU law.",
        "rodo.section.legal.title": "Legal bases",
        "rodo.section.legal.list1": "Art. 6(1)(b) GDPR – performance of the certificate issuance agreement.",
        "rodo.section.legal.list2": "Art. 6(1)(c) GDPR – compliance with accounting and tax obligations.",
        "rodo.section.legal.list3": "Art. 6(1)(f) GDPR – legitimate interest in ensuring integrity of CertifyHuman labels.",
        "rodo.section.legal.list4": "Art. 6(1)(a) GDPR – optional consent for marketing communication.",
        "rodo.section.retention.title": "Retention periods",
        "rodo.section.retention.body1": "Transactional and certificate data is stored for 72 months after contract end (tax and evidence requirements).",
        "rodo.section.retention.body2": "Supporting materials are deleted 12 months after an approve/reject decision unless a dispute requires longer storage.",
        "rodo.section.transfer.title": "Transfers outside the EEA",
        "rodo.section.transfer.body": "We do not transfer data outside the EEA. If this changes, Standard Contractual Clauses per Art. 46 GDPR will apply.",
        "rodo.section.recipients.title": "Data recipients",
        "rodo.section.recipients.list1": "Payment providers (Stripe/Przelewy24) – limited to payment and invoicing data.",
        "rodo.section.recipients.list2": "Cloud and hosting vendors – Microsoft Azure / OVH under data-processing agreements.",
        "rodo.section.recipients.list3": "Auditors, legal counsel, and accounting partners supporting our operations.",
        "rodo.section.recipients.list4": "Public authorities only when required by binding law.",
        "rodo.section.automation.title": "Automated decisions",
        "rodo.section.automation.body": "We do not rely on automated decision-making or profiling that produces legal effects. Risk scoring is reviewed manually.",
        "rodo.section.rights.title": "Your GDPR rights",
        "rodo.section.rights.lead": "Use privacy@certifyhuman.com or the customer portal to exercise the following rights:",
        "rodo.section.rights.list1": "Access (Art. 15) – receive a copy of all data we process.",
        "rodo.section.rights.list2": "Rectification (Art. 16) – update inaccurate or outdated information.",
        "rodo.section.rights.list3": "Erasure (Art. 17) – when data is no longer needed or you object to processing.",
        "rodo.section.rights.list4": "Restriction (Art. 18) – for example while we review a claim.",
        "rodo.section.rights.list5": "Portability (Art. 20) – obtain your data in JSON/CSV format.",
        "rodo.section.rights.list6": "Objection (Art. 21) – especially against marketing communication.",
        "rodo.section.rights.list7": "Complaint to your supervisory authority if you believe we breach GDPR.",
        "rodo.section.security.title": "Information security",
        "rodo.section.security.list1": "TLS 1.3 in transit and AES-256 at rest within our cloud infrastructure.",
        "rodo.section.security.list2": "Admin access protected by FIDO2 hardware keys and 12-month SIEM log retention.",
        "rodo.section.security.list3": "Daily backups with 30-day retention plus regular security testing.",
        "rodo.section.contact.title": "Contact & DPO",
        "rodo.section.contact.body1": "Data Protection Officer: Anna Kowalska, dpo@certifyhuman.com.",
        "rodo.section.contact.body2": "Incident reports: incident@certifyhuman.com (24/7) with assessment within 72 hours.",
        "rodo.section.contact.body3": "This policy is effective from 20 Oct 2024 and will be updated whenever processing changes.",

        "form.validationError": "Please fill out the required fields and choose an AI usage declaration.",
        "code.attachmentsCount": "Attachments: {count}",
        "attachments.none": "Attachments: none (optional field).",
        "attachments.previewUnavailable": "Preview unavailable ({type})",
        "messages.enterCode": "Enter a valid certificate code.",
        "messages.notFound": "Certificate not found.",
        "messages.createError": "We couldn't generate the certificate. Try again.",
        "messages.verifyError": "Verification failed. Please retry.",
        "verify.redirectStatus": "Code active",
        "verify.inlineEmpty": "Enter a code to start verification.",
        "buttons.copySuccess": "Copied!",
        "attachmentPreview.title": "Attachments ({count}):",
        "contentTypes.article": "Article / text",
        "contentTypes.video": "Video / social content",
        "contentTypes.image": "Visual / image",
        "contentTypes.audio": "Audio / podcast / music",
        "contentTypes.other": "Content",
        "aiUsage.no-ai": "No-AI (100% human author)",
        "aiUsage.ai-assisted": "AI-Assisted (human + AI)",
        "status.badge.no-ai": "NO-AI",
        "status.badge.ai-assisted": "AI-Assisted",
        "aboutPage.timelineSub": "Roadmap"
    }
};

const storageKey = "certifyHumanCertificates";
const MAX_ATTACHMENTS = 5;
const MAX_IMAGE_PREVIEW_SIZE = 3 * 1024 * 1024;
const issuedCertificates = new Map();
const API_BASE_URL = "https://certifyhuman.onrender.com";

const form = document.getElementById("certificateForm");
const codeResult = document.getElementById("codeResult");
const generatedCodeEl = document.getElementById("generatedCode");
const codeMetaEl = document.getElementById("codeMeta");
const qrContainer = document.getElementById("qrcode");
const navCta = document.getElementById("navCta");
const verifyInput = document.getElementById("verifyCodeInput");
const verifyButton = document.getElementById("verifyButton");
const verifyResult = document.getElementById("verifyResult");
const attachmentInput = document.getElementById("evidenceFiles");
const evidenceListEl = document.getElementById("evidenceList");
const attachmentPreviewEl = document.getElementById("attachmentPreview");
const langToggle = document.getElementById("langToggle");
const langFlag = document.getElementById("langFlag");
const langLabel = document.getElementById("langLabel");

// Verify page elements
const standaloneInput = document.getElementById("standaloneCodeInput");
const standaloneButton = document.getElementById("standaloneVerifyBtn");
const standaloneFeedback = document.getElementById("standaloneVerifyFeedback");
const verifyOrbit = document.querySelector(".verify-orbit");

// Certificate page elements
const certificateCardEl = document.getElementById("certificateCard");
const certificateMissingEl = document.getElementById("certificateMissing");
const certificateTitleEl = document.getElementById("certificateTitle");
const certificateCodeEl = document.getElementById("certificateCode");
const certificateMetaEl = document.getElementById("certificateMeta");
const certificateDescEl = document.getElementById("certificateDescription");
const certificateInfoListEl = document.getElementById("certificateInfoList");
const certificateAttachmentsEl = document.getElementById("certificateAttachments");
const certificateStatusEl = document.getElementById("certificateStatus");
const copyCodeBtn = document.getElementById("copyCodeBtn");

let currentLang = localStorage.getItem("certifyHumanLang") || "pl";
let lastGeneratedCertificate = null;
let lastStandaloneResult = { code: "", certificate: null, valid: false };
let currentDetailCertificate = null;

init();

function init() {
    hydrateFromStorage();
    updateLanguageToggle();
    applyTranslations();

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            const nextLang = currentLang === "pl" ? "en" : "pl";
            setLanguage(nextLang);
        });
    }

    const page = document.body?.dataset?.page || "home";

    if (page === "home") {
        initHomePage();
    } else if (page === "verify") {
        initVerifyPage();
    } else if (page === "certificate") {
        initCertificatePage();
    } else if (page === "about" || page === "rodo") {
        // only translations needed
    }

    refreshDynamicContent();
}

function hydrateFromStorage() {
    try {
        const raw = sessionStorage.getItem(storageKey);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        parsed.forEach((item) => {
            if (item?.code) {
                issuedCertificates.set(item.code, item);
            }
        });
    } catch (error) {
        console.warn("Could not load certificates from session storage.", error);
    }
}

function persistCertificates() {
    const data = Array.from(issuedCertificates.values());
    sessionStorage.setItem(storageKey, JSON.stringify(data));
}

function setLanguage(lang) {
    if (!translations[lang]) {
        lang = "pl";
    }
    currentLang = lang;
    localStorage.setItem("certifyHumanLang", lang);
    updateLanguageToggle();
    applyTranslations();
    refreshDynamicContent();
}

function updateLanguageToggle() {
    if (!langFlag || !langLabel) return;
    if (currentLang === "pl") {
        langFlag.textContent = "🇺🇸";
        langLabel.textContent = "EN";
        langToggle?.setAttribute("aria-label", "Switch to English");
    } else {
        langFlag.textContent = "🇵🇱";
        langLabel.textContent = "PL";
        langToggle?.setAttribute("aria-label", "Przełącz na polski");
    }
}

function applyTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        const type = el.dataset.i18nType || "text";
        const value = t(key);
        if (type === "html") {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.dataset.i18nPlaceholder;
        el.placeholder = t(key);
    });
}

function refreshDynamicContent() {
    if (lastGeneratedCertificate) {
        displayCertificate(lastGeneratedCertificate, true);
        renderAttachmentPreview(lastGeneratedCertificate.attachments || []);
    } else {
        renderAttachmentPreview([]);
    }

    if (verifyInput && verifyInput.value.trim()) {
        runVerification();
    }

    if (document.body?.dataset?.page === "verify") {
        renderStandaloneFeedback(lastStandaloneResult.code, lastStandaloneResult.certificate, lastStandaloneResult.valid);
    }

    if (document.body?.dataset?.page === "certificate" && currentDetailCertificate) {
        renderCertificateDetails(currentDetailCertificate);
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

function initHomePage() {
    if (form) {
        form.addEventListener("submit", handleCertificateSubmit);
    }

    if (navCta) {
        navCta.addEventListener("click", () => scrollToSection(navCta.dataset.scrollTarget));
    }

    if (verifyButton) {
        verifyButton.addEventListener("click", runVerification);
    }

    if (verifyInput) {
        verifyInput.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                runVerification();
            }
        });
    }

    if (attachmentInput) {
        attachmentInput.addEventListener("change", () => displaySelectedEvidence(attachmentInput.files));
    }

    renderAttachmentPreview([]);
    bootstrapInlineQuery();
}

function initVerifyPage() {
    if (standaloneButton) {
        standaloneButton.addEventListener("click", handleStandaloneVerification);
    }

    if (standaloneInput) {
        standaloneInput.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                handleStandaloneVerification();
            }
        });
    }
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
        scrollToSection("verify");
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
        paymentId: payload.paymentId ?? defaults.paymentId
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

        if (response.status === 404) {
            return { normalized, certificate: null };
        }

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

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

    if (!title || !creator || !email || !type || !aiUsage) {
        alert(t("form.validationError"));
        return;
    }

    const data = {
        title,
        creator,
        email,
        type,
        description: desc,
        aiUsage,
        attachments: []
    };

    const certificate = await createCertificate(data);
    if (!certificate) {
        return;
    }

    displayCertificate(certificate);
    renderQr(certificate.code);
    form?.reset();
    renderAttachmentPreview([]);
}


function generateCertificateCode() {
    const part1 = Math.floor(100000 + Math.random() * 900000);
    const part2 = Math.floor(100000 + Math.random() * 900000);
    return `CH-${part1}-${part2}`;
}

function displayCertificate(certificate, isRefresh = false) {
    if (!generatedCodeEl || !codeMetaEl || !codeResult) return;
    if (!isRefresh) {
        lastGeneratedCertificate = certificate;
    }

    generatedCodeEl.textContent = certificate.code;

    const lines = [
        `${certificate.title} — ${certificate.creator}`,
        `${getContentTypeLabel(certificate.type)} • ${getAiUsageLabel(certificate.aiUsage)}`,
        certificate.desc ? certificate.desc : "",
        formatMessage("code.attachmentsCount", { count: (certificate.attachments || []).length }),
        formatMessage("verify.issuedOn", { date: formatDate(certificate.issuedAt) })
    ].filter(Boolean);

    codeMetaEl.textContent = lines.join("\n");
    codeResult.classList.add("visible");
}

function renderQr(code) {
    if (!qrContainer || typeof QRCode === "undefined") return;
    qrContainer.innerHTML = "";

    const url = new URL(window.location.href);
    const currentPath = url.pathname;
    const newPath = currentPath.replace(/[^/]+$/, "certificate.html");
    url.pathname = newPath;
    url.search = "";
    url.hash = "";
    url.searchParams.set("code", code);

    new QRCode(qrContainer, {
        text: url.toString(),
        width: 110,
        height: 110,
        colorDark: "#38bdf8",
        colorLight: "#020817",
        correctLevel: QRCode.CorrectLevel.H
    });
}

async function runVerification() {
    if (!verifyInput || !verifyResult) return;
    const raw = verifyInput.value.trim();

    if (!raw) {
        verifyResult.innerHTML = "";
        return;
    }

    const { normalized, certificate } = await verifyCertificate(raw);

    verifyResult.innerHTML = buildVerificationMessage(normalized, certificate);
}

async function handleStandaloneVerification() {
    if (!standaloneInput || !standaloneFeedback) return;

    const raw = standaloneInput.value.trim();
    if (!raw) {
        lastStandaloneResult = { code: "", certificate: null, valid: false };
        renderStandaloneFeedback("", null, false);
        return;
    }

    toggleOrbit(true);
    const { normalized, certificate } = await verifyCertificate(raw);


    lastStandaloneResult = {
        code: normalized,
        certificate,
        valid: Boolean(normalized && certificate)
    };

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

function renderCertificateDetails(certificate) {
    if (!certificateCardEl) return;
    currentDetailCertificate = certificate;

    certificateCardEl.hidden = false;
    if (certificateMissingEl) certificateMissingEl.hidden = true;

    if (certificateTitleEl) {
        certificateTitleEl.textContent = certificate.title;
    }

    if (certificateCodeEl) {
        certificateCodeEl.textContent = certificate.code;
    }

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
    renderAttachmentGallery(certificateAttachmentsEl, certificate.attachments, {
        emptyPlaceholder: t("certificate.attachmentsEmpty")
    });
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
    if (certificateCardEl) {
        certificateCardEl.hidden = true;
    }
    if (certificateMissingEl) {
        certificateMissingEl.hidden = false;
        certificateMissingEl.innerHTML = `
            <div class="certificate-header">
                <span class="status-label status-invalid">${t("verify.invalidTitle")}</span>
                <h2>${t("certificate.missingTitle")}</h2>
                ${
                    code
                        ? `<p>${formatMessage("certificate.missingDescription", { code: escapeHtml(code) })}</p>`
                        : `<p>${t("certificate.missingNoCode")}</p>`
                }
            </div>
            <div class="certificate-actions">
                <a class="btn-secondary" href="verify.html">${t("certificate.missingBack")}</a>
                <a class="btn-secondary" href="index.html#generate">${t("certificate.missingIssue")}</a>
            </div>
        `;
    }
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



function buildVerificationMessage(normalized, certificate) {
    if (!normalized) {
        return `<p>${t("messages.enterCode")}</p>`;
    }

    if (!certificate) {
        const safe = escapeHtml(normalized);
        return `
            <div class="status-label status-invalid">${t("verify.invalidTitle")}</div>
            <p>${t("messages.notFound")}</p>
            <p>${formatMessage("verify.invalidDescription", { code: safe })}</p>
            <p>${t("verify.invalidHint")}</p>
        `;
    }

    const safeTitle = escapeHtml(certificate.title);
    const safeCreator = escapeHtml(certificate.creator);
    const safeDesc = escapeHtml(certificate.desc);
    const detailUrl = getCertificateDetailUrl(certificate.code);

    return `
        <div class="status-label status-valid">${t("verify.activeTitle")}</div>
        <p><strong>${safeTitle}</strong> — ${safeCreator}</p>
        <p>${getContentTypeLabel(certificate.type)} • ${getAiUsageLabel(certificate.aiUsage)}</p>
        ${certificate.desc ? `<p>${safeDesc}</p>` : ""}
        <p>${formatMessage("verify.issuedOn", { date: formatDate(certificate.issuedAt) })}</p>
        <a class="btn-ghost" href="${detailUrl}">${t("verify.activeLink")}</a>
    `;
}

function displaySelectedEvidence(fileList) {
    if (!evidenceListEl) return;
    const files = Array.from(fileList || []).slice(0, MAX_ATTACHMENTS);

    if (!files.length) {
        evidenceListEl.innerHTML = "";
        return;
    }

    evidenceListEl.innerHTML = files
        .map((file) => {
            const safeName = escapeHtml(truncate(file.name, 50));
            return `<li><span>${safeName}</span><span>${formatFileSize(file.size)}</span></li>`;
        })
        .join("");
}

async function collectAttachments(fileList) {
    if (!fileList) return [];
    const files = Array.from(fileList).slice(0, MAX_ATTACHMENTS);
    const attachments = await Promise.all(files.map(readAttachment));
    return attachments;
}

function readAttachment(file, index) {
    return new Promise((resolve) => {
        const base = {
            id: `attachment-${Date.now()}-${index}`,
            name: file.name,
            size: file.size,
            type: file.type,
            preview: null
        };

        if (file.type.startsWith("image/") && file.size <= MAX_IMAGE_PREVIEW_SIZE) {
            const reader = new FileReader();
            reader.onload = () => resolve({ ...base, preview: reader.result });
            reader.onerror = () => resolve(base);
            reader.readAsDataURL(file);
        } else {
            resolve(base);
        }
    });
}

function renderAttachmentPreview(attachments = []) {
    if (!attachmentPreviewEl) return;
    if (!attachments.length) {
        attachmentPreviewEl.textContent = t("attachments.none");
        return;
    }

    const label = escapeHtml(formatMessage("attachmentPreview.title", { count: attachments.length }));
    attachmentPreviewEl.innerHTML = `
        <strong>${label}</strong>
        <div class="attachment-gallery">
            ${attachments.map(renderAttachmentCard).join("")}
        </div>
    `;
}

function renderAttachmentGallery(container, attachments = [], { emptyPlaceholder } = {}) {
    if (!container) return;

    if (!attachments.length) {
        container.innerHTML = `<p class="certificate-empty">${emptyPlaceholder || t("certificate.attachmentsEmpty")}</p>`;
        return;
    }

    container.innerHTML = `
        <div class="attachment-gallery">
            ${attachments.map(renderAttachmentCard).join("")}
        </div>
    `;
}

function renderAttachmentCard(attachment) {
    const safeName = escapeHtml(truncate(attachment.name, 40));
    const size = formatFileSize(attachment.size);
    const preview = attachment.preview
        ? `<img src="${attachment.preview}" alt="${safeName}" />`
        : `<div class="hint">${formatMessage("attachments.previewUnavailable", { type: escapeHtml(attachment.type || "file") })}</div>`;

    return `
        <div class="attachment-card">
            ${preview}
            <strong>${safeName}</strong>
            <span>${size}</span>
        </div>
    `;
}

function handleCopyCode(code) {
    if (!code || !copyCodeBtn) return;

    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(code).then(() => showCopySuccess(), fallbackPrompt);
    } else {
        fallbackPrompt();
    }

    function fallbackPrompt() {
        window.prompt(t("certificate.copy"), code);
    }

    function showCopySuccess() {
        const original = copyCodeBtn.textContent;
        copyCodeBtn.textContent = t("buttons.copySuccess");
        setTimeout(() => {
            copyCodeBtn.textContent = original;
        }, 1600);
    }
}

function toggleOrbit(isActive) {
    if (!verifyOrbit) return;
    verifyOrbit.classList.toggle("active", Boolean(isActive));
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
        return new Intl.DateTimeFormat(locale, {
            dateStyle: "medium",
            timeStyle: "short"
        }).format(new Date(date));
    } catch (error) {
        return new Date(date).toLocaleString(currentLang === "pl" ? "pl-PL" : "en-US");
    }
}

function formatFileSize(bytes) {
    if (!bytes && bytes !== 0) return "0 B";
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
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

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
        "form.paymentHint": "Po opłaceniu nasz zespół zacznie analizować wniosek o certyfikat.",
        "form.waiverLabel": "Wyrażam zgodę na rozpoczęcie świadczenia usługi (weryfikacji i wydania certyfikatu) przed upływem 14-dniowego terminu do odstąpienia od umowy i przyjmuję do wiadomości, że po spełnieniu świadczenia przez przedsiębiorcę utracę prawo do odstąpienia od umowy.",
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
        "aboutPage.timelineQ1": "Q3 2025",
        "aboutPage.timelineQ1Desc": "Start programu beta, powstaje standard kodów CH.",
        "aboutPage.timelineQ2": "Q4 2025",
        "aboutPage.timelineQ2Desc": "Rozpoczęcie działań komercyjnych, integracje z CMS.",
        "aboutPage.timelineQ3": "Q1 2026",
        "aboutPage.timelineQ3Desc": "Rozwój API do masowego wydawania certyfikatów.",
        "aboutPage.timelineQ4": "Q2 2027",
        "aboutPage.timelineQ4Desc": "Implementacja w dużych firmach i partnerstwa publishingowe.",
        "rodo.hero.title": "RODO / GDPR – jak chronimy Twoje dane",
        "rodo.hero.lead": "Ten dokument opisuje wszystkie operacje przetwarzania danych osobowych wykonywane w projekcie CertifyHuman, podstawy prawne, środki bezpieczeństwa oraz Twoje prawa jako osoby, której dane dotyczą.",
        "rodo.hero.updated": "Aktualizacja: 10.12.2025",
        "rodo.section.controller.title": "1. Administrator Danych",
        "rodo.section.controller.body1": "Administratorem Twoich danych osobowych jest [Twoje Imię i Nazwisko], prowadzący działalność nierejestrowaną zgodnie z art. 5 ustawy Prawo przedsiębiorców.",
        "rodo.section.controller.body2": "Adres do korespondencji: xxxxxx. Kontakt w sprawach ochrony danych: privacy@certifyhuman.com.",
        "rodo.section.controller.body3": "",

        "rodo.section.purpose.title": "2. Cele i podstawy przetwarzania",
        "rodo.section.purpose.list1": "<strong>Świadczenie usług (wykonanie umowy):</strong> Obsługa zamówień certyfikatów, weryfikacja treści, generowanie kodów CH oraz komunikacja związana z realizacją usługi (podstawa prawna: art. 6 ust. 1 lit. b RODO).",
        "rodo.section.purpose.list2": "<strong>Obowiązki prawne:</strong> Prowadzenie uproszczonej ewidencji sprzedaży dla celów podatkowych (podstawa prawna: art. 6 ust. 1 lit. c RODO).",
        "rodo.section.purpose.list3": "<strong>Prawnie uzasadniony interes:</strong> Ustalenie, dochodzenie lub obrona przed roszczeniami, archiwizacja dowodów na potrzeby wykazania rozliczalności, wykrywanie nadużyć (podstawa prawna: art. 6 ust. 1 lit. f RODO).",

        "rodo.section.scope.title": "3. Zakres danych",
        "rodo.section.scope.list1": "Przetwarzamy tylko dane niezbędne do realizacji usługi:",
        "rodo.section.scope.list2": "Dane identyfikacyjne i kontaktowe (adres e-mail, imię i nazwisko).",
        "rodo.section.scope.list3": "Dane transakcyjne (historia zamówień, status płatności).",
        "rodo.section.scope.list4": "Dane związane z certyfikacją (przesłane pliki, opisy procesu twórczego, deklaracje AI/No-AI).",

        "rodo.section.recipients.title": "4. Odbiorcy danych",
        "rodo.section.recipients.list1": "Twoje dane przekazujemy tylko zaufanym podmiotom, które wspierają działanie serwisu:",
        "rodo.section.recipients.list2": "Render (USA) – dostawca hostingu i infrastruktury bazodanowej.",
        "rodo.section.recipients.list3": "Stripe (USA) – operator płatności (administrator nie widzi pełnych danych Twojej karty, są one przetwarzane bezpośrednio przez Stripe).",
        "rodo.section.recipients.list4": "Dostawcy poczty e-mail – w celu prowadzenia komunikacji.",

        "rodo.section.transfer.title": "5. Transfer danych poza EOG",
        "rodo.section.transfer.body": "W związku z korzystaniem z usług firm takich jak Render czy Stripe, Twoje dane mogą być przekazywane do Stanów Zjednoczonych. Przekazywanie to jest bezpieczne i zgodne z prawem dzięki zastosowaniu Ramy Ochrony Danych UE-USA (Data Privacy Framework), do której należą nasi dostawcy, lub na podstawie Standardowych Klauzul Umownych (SCC) zatwierdzonych przez Komisję Europejską.",

        "rodo.section.retention.title": "6. Okres przechowywania",
        "rodo.section.retention.body1": "<strong>Dane księgowe/podatkowe:</strong> 5 lat od końca roku kalendarzowego, w którym upłynął termin płatności podatku (wymóg ordynacji podatkowej).",
        "rodo.section.retention.body2": "<strong>Dane dot. certyfikatów i materiały dowodowe:</strong> Przechowywane przez okres niezbędny do obrony przed ewentualnymi roszczeniami (zazwyczaj do 3 lat lub do 6 lat zgodnie z ogólnymi terminami przedawnienia roszczeń), chyba że użytkownik zażąda ich wcześniejszego usunięcia, a przepisy prawa na to pozwalają.",

        "rodo.section.rights.title": "7. Twoje Prawa",
        "rodo.section.rights.lead": "Ponieważ nie powołano Inspektora Ochrony Danych, wszelkie wnioski możesz kierować bezpośrednio do Administratora na adres: privacy@certifyhuman.com. Przysługuje Ci prawo do:",
        "rodo.section.rights.list1": "Dostępu do swoich danych oraz otrzymania ich kopii.",
        "rodo.section.rights.list2": "Sprostowania (poprawiania) danych.",
        "rodo.section.rights.list3": "Usunięcia danych (prawo do bycia zapomnianym), o ile nie zachodzą przesłanki prawne do ich dalszego przechowywania.",
        "rodo.section.rights.list4": "Ograniczenia przetwarzania.",
        "rodo.section.rights.list5": "Przenoszenia danych.",
        "rodo.section.rights.list6": "Wniesienia sprzeciwu wobec przetwarzania.",
        "rodo.section.rights.list7": "Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO), jeśli uznasz, że przetwarzanie narusza przepisy RODO.",

        "rodo.section.security.title": "8. Bezpieczeństwo",
        "rodo.section.security.list1": "Stosujemy standardowe środki bezpieczeństwa, w tym szyfrowanie połączenia (SSL/TLS) oraz zabezpieczenia oferowane przez dostawców infrastruktury chmurowej.",
        "rodo.section.security.list2": "",
        "rodo.section.security.list3": "",

        "rodo.section.contact.title": "",
        "rodo.section.contact.body1": "",
        "rodo.section.contact.body2": "",
        "rodo.section.contact.body3": "",

        "terms.title": "Regulamin Serwisu CertifyHuman",
        "terms.effectiveDate": "Obowiązuje od dnia 09.12.2025",
        "terms.section1.title": "§1. Postanowienia ogólne",
        "terms.section1.body1": "1. Niniejszy Regulamin określa zasady korzystania z serwisu internetowego CertifyHuman, dostępnego pod adresem certifyhuman.onrender.com.",
        "terms.section1.body2": "2. Właścicielem Serwisu jest Patryk Jurczak, prowadzący działalność nierejestrowaną zgodnie z art. 5 ustawy z dnia 6 marca 2018 r. – Prawo przedsiębiorców.",
        "terms.section1.body3": "3. Kontakt z Właścicielem jest możliwy drogą elektroniczną pod adresem e-mail: hello@certifyhuman.com.",
        "terms.section2.title": "§2. Definicje",
        "terms.section2.list1": "<strong>Serwis</strong> – strona internetowa CertifyHuman.",
        "terms.section2.list2": "<strong>Użytkownik</strong> – każda osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z Serwisu.",
        "terms.section2.list3": "<strong>Certyfikat</strong> – cyfrowe oznaczenie treści wydawane przez Serwis, obejmujące trzy typy: 100% Human (No-AI), AI-Assisted oraz 100% AI.",
        "terms.section2.list4": "<strong>Konsument</strong> – osoba fizyczna dokonująca z przedsiębiorcą czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową.",
        "terms.section2.list5": "<strong>Przedsiębiorca na prawach konsumenta</strong> – osoba fizyczna zawierająca umowę bezpośrednio związaną z jej działalnością gospodarczą, gdy z treści tej umowy wynika, że nie posiada ona dla niej charakteru zawodowego.",
        "terms.section3.title": "§3. Usługi świadczone drogą elektroniczną",
        "terms.section3.body1": "1. Serwis umożliwia Użytkownikom składanie wniosków o wydanie Certyfikatu dla określonych treści.",
        "terms.section3.body2": "2. Usługa polega na weryfikacji deklaracji Użytkownika i wygenerowaniu unikalnego kodu oraz kodu QR.",
        "terms.section3.body3": "3. Korzystanie z podstawowych funkcji Serwisu jest odpłatne zgodnie z cennikiem widocznym przy składaniu zamówienia.",
        "terms.section4.title": "§4. Płatności i Realizacja",
        "terms.section4.body1": "1. Płatności obsługiwane są przez zewnętrznego operatora (Stripe).",
        "terms.section4.body2": "2. Po dokonaniu płatności, wniosek o Certyfikat trafia do analizy.",
        "terms.section4.body3": "3. Czas realizacji usługi wynosi zazwyczaj do 48 godzin roboczych.",
        "terms.section4.body4": "4. W przypadku odrzucenia wniosku (np. z powodu wykrycia 100% AI w treści deklarowanej jako No-AI), opłata nie podlega zwrotowi, jako koszt przeprowadzonej weryfikacji.",
        "terms.section4.body5": "5. Kliknięcie przycisku finalizującego zamówienie jest równoznaczne z żądaniem natychmiastowego wykonania usługi przed upływem terminu do odstąpienia od umowy.",
        "terms.section5.title": "§5. Odstąpienie od umowy",
        "terms.section5.body1": "1. Zgodnie z art. 38 ustawy o prawach konsumenta, prawo odstąpienia od umowy zawartej poza lokalem przedsiębiorstwa lub na odległość nie przysługuje konsumentowi w odniesieniu do umów o dostarczanie treści cyfrowych, które nie są zapisane na nośniku materialnym, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną zgodą konsumenta przed upływem terminu do odstąpienia od umowy i po poinformowaniu go przez przedsiębiorcę o utracie prawa odstąpienia od umowy.",
        "terms.section5.body2": "2. Użytkownik będący Konsumentem lub Przedsiębiorcą na prawach konsumenta wyraża zgodę na rozpoczęcie świadczenia usługi przed upływem terminu do odstąpienia od umowy poprzez zaznaczenie odpowiedniego pola w formularzu zamówienia.",
        "terms.section6.title": "§6. Odpowiedzialność",
        "terms.section6.body1": "1. Właściciel dokłada wszelkich starań, aby Serwis działał poprawnie, jednak nie gwarantuje jego nieprzerwanej dostępności.",
        "terms.section6.body2": "2. Użytkownik ponosi pełną odpowiedzialność za prawdziwość danych podanych we wniosku o Certyfikat.",
        "terms.section6.body3": "3. Właściciel ma prawo cofnąć Certyfikat w przypadku wykrycia naruszenia Regulaminu lub fałszywych deklaracji.",
        "terms.section7.title": "§7. Reklamacje",
        "terms.section7.body1": "1. Reklamacje dotyczące działania Serwisu można zgłaszać na adres e-mail: hello@certifyhuman.com.",
        "terms.section7.body2": "2. Reklamacje rozpatrywane są w terminie 14 dni od daty ich otrzymania.",
        "terms.section8.title": "§8. Postanowienia końcowe",
        "terms.section8.body1": "1. W sprawach nieuregulowanych niniejszym Regulaminem mają zastosowanie przepisy Kodeksu cywilnego oraz inne właściwe przepisy prawa polskiego.",
        "terms.section8.body2": "2. Właściciel zastrzega sobie prawo do zmiany Regulaminu.",

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
        "form.paymentHint": "After payment, our team will start analyzing your certificate application.",
        "form.waiverLabel": "I agree to the commencement of the service (verification and issuance of the certificate) before the expiry of the 14-day withdrawal period and I acknowledge that after the service has been fully performed by the entrepreneur, I will lose the right to withdraw from the contract.",
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
        "rodo.hero.updated": "Updated: 10.12.2025",
        "rodo.section.controller.title": "1. Data Controller",
        "rodo.section.controller.body1": "The administrator of your personal data is [Your Name], conducting unregistered activity in accordance with Art. 5 of the Entrepreneurs' Law Act.",
        "rodo.section.controller.body2": "Correspondence address: xxxxxx. Contact regarding data protection: privacy@certifyhuman.com.",
        "rodo.section.controller.body3": "",
        "rodo.section.purpose.title": "2. Purposes and Legal Bases",
        "rodo.section.purpose.list1": "<strong>Service Provision (contract performance):</strong> Handling certificate orders, content verification, generating CH codes, and communication related to service delivery (legal basis: Art. 6(1)(b) GDPR).",
        "rodo.section.purpose.list2": "<strong>Legal Obligations:</strong> Keeping simplified sales records for tax purposes (legal basis: Art. 6(1)(c) GDPR).",
        "rodo.section.purpose.list3": "<strong>Legitimate Interest:</strong> Establishing, pursuing, or defending claims, archiving evidence to demonstrate accountability, fraud detection (legal basis: Art. 6(1)(f) GDPR).",
        "rodo.section.scope.title": "3. Scope of Data",
        "rodo.section.scope.list1": "We process only data necessary for service delivery:",
        "rodo.section.scope.list2": "Identification and contact data (email address, name and surname).",
        "rodo.section.scope.list3": "Transactional data (order history, payment status).",
        "rodo.section.scope.list4": "Certification-related data (submitted files, creative process descriptions, AI/No-AI declarations).",
        "rodo.section.recipients.title": "4. Data Recipients",
        "rodo.section.recipients.list1": "We transfer your data only to trusted entities supporting the service:",
        "rodo.section.recipients.list2": "Render (USA) – hosting and database infrastructure provider.",
        "rodo.section.recipients.list3": "Stripe (USA) – payment operator (the administrator does not see your full card details; they are processed directly by Stripe).",
        "rodo.section.recipients.list4": "Email providers – for communication purposes.",
        "rodo.section.transfer.title": "5. Data Transfer Outside EEA",
        "rodo.section.transfer.body": "Due to the use of services from companies like Render or Stripe, your data may be transferred to the United States. This transfer is safe and lawful thanks to the EU-US Data Privacy Framework, to which our providers belong, or based on Standard Contractual Clauses (SCC) approved by the European Commission.",
        "rodo.section.retention.title": "6. Retention Period",
        "rodo.section.retention.body1": "<strong>Accounting/Tax Data:</strong> 5 years from the end of the calendar year in which the tax payment deadline expired (Tax Ordinance requirement).",
        "rodo.section.retention.body2": "<strong>Certificate Data and Evidence:</strong> Stored for the period necessary to defend against potential claims (usually up to 3 or 6 years according to general limitation periods), unless the user requests earlier deletion and the law allows it.",
        "rodo.section.rights.title": "7. Your Rights",
        "rodo.section.rights.lead": "Since no Data Protection Officer has been appointed, you can direct all requests directly to the Administrator at: privacy@certifyhuman.com. You have the right to:",
        "rodo.section.rights.list1": "Access your data and receive a copy.",
        "rodo.section.rights.list2": "Rectify (correct) your data.",
        "rodo.section.rights.list3": "Erasure (right to be forgotten), unless there are legal grounds for further storage.",
        "rodo.section.rights.list4": "Restriction of processing.",
        "rodo.section.rights.list5": "Data portability.",
        "rodo.section.rights.list6": "Objection to processing.",
        "rodo.section.rights.list7": "Lodge a complaint with the President of the Personal Data Protection Office (PUODO) if you believe the processing violates GDPR.",
        "rodo.section.security.title": "8. Security",
        "rodo.section.security.list1": "We apply standard security measures, including connection encryption (SSL/TLS) and safeguards offered by cloud infrastructure providers.",
        "rodo.section.security.list2": "",
        "rodo.section.security.list3": "",
        "rodo.section.contact.title": "",
        "rodo.section.contact.body1": "",
        "rodo.section.contact.body2": "",
        "rodo.section.contact.body3": "",

        "terms.title": "Terms of Service",
        "terms.effectiveDate": "Effective from 09.12.2025",
        "terms.section1.title": "§1. General Provisions",
        "terms.section1.body1": "1. These Terms specify the rules for using the CertifyHuman website available at certifyhuman.onrender.com.",
        "terms.section1.body2": "2. The Service Owner is Patryk Jurczak, conducting unregistered activity in accordance with Art. 5 of the Entrepreneurs' Law Act of March 6, 2018.",
        "terms.section1.body3": "3. Contact with the Owner is possible via email at: hello@certifyhuman.com.",
        "terms.section2.title": "§2. Definitions",
        "terms.section2.list1": "<strong>Service</strong> – the CertifyHuman website.",
        "terms.section2.list2": "<strong>User</strong> – any natural person, legal person, or organizational unit using the Service.",
        "terms.section2.list3": "<strong>Certificate</strong> – a digital content designation issued by the Service, covering three types: 100% Human (No-AI), AI-Assisted, and 100% AI.",
        "terms.section2.list4": "<strong>Consumer</strong> – a natural person performing a legal act with an entrepreneur not directly related to their business or professional activity.",
        "terms.section2.list5": "<strong>Entrepreneur with consumer rights</strong> – a natural person concluding a contract directly related to their business activity, when the content of this contract shows that it does not have a professional character for them.",
        "terms.section3.title": "§3. Electronic Services",
        "terms.section3.body1": "1. The Service allows Users to submit applications for a Certificate for specific content.",
        "terms.section3.body2": "2. The service consists of verifying the User's declaration and generating a unique code and QR code.",
        "terms.section3.body3": "3. Using the basic functions of the Service is paid according to the price list visible when placing an order.",
        "terms.section4.title": "§4. Payments and Fulfillment",
        "terms.section4.body1": "1. Payments are handled by an external operator (Stripe).",
        "terms.section4.body2": "2. After payment, the Certificate application goes to analysis.",
        "terms.section4.body3": "3. The service fulfillment time is usually up to 48 business hours.",
        "terms.section4.body4": "4. In case of rejection (e.g., due to detecting 100% AI in content declared as No-AI), the fee is non-refundable as the cost of the verification performed.",
        "terms.section4.body5": "5. Clicking the button finalizing the order is equivalent to a demand for immediate performance of the service before the withdrawal period expires.",
        "terms.section5.title": "§5. Withdrawal from the Contract",
        "terms.section5.body1": "1. According to Art. 38 of the Consumer Rights Act, the right of withdrawal from a contract concluded off-premises or at a distance is not available to the consumer in respect of contracts for the supply of digital content which is not supplied on a tangible medium if the performance has begun with the consumer’s prior express consent before the end of the withdrawal period and the acknowledgment of the loss of the right of withdrawal.",
        "terms.section5.body2": "2. A User who is a Consumer or an Entrepreneur with consumer rights agrees to the commencement of the service before the expiry of the withdrawal period by checking the appropriate box in the order form.",
        "terms.section6.title": "§6. Liability",
        "terms.section6.body1": "1. The Owner makes every effort to ensure the Service works correctly but does not guarantee its uninterrupted availability.",
        "terms.section6.body2": "2. The User bears full responsibility for the truthfulness of the data provided in the Certificate application.",
        "terms.section6.body3": "3. The Owner has the right to revoke the Certificate in case of detecting a violation of the Terms or false declarations.",
        "terms.section7.title": "§7. Complaints",
        "terms.section7.body1": "1. Complaints regarding the operation of the Service can be reported to the email address: hello@certifyhuman.com.",
        "terms.section7.body2": "2. Complaints are considered within 14 days from the date of receipt.",
        "terms.section8.title": "§8. Final Provisions",
        "terms.section8.body1": "1. In matters not covered by these Terms, the provisions of the Civil Code and other relevant Polish laws apply.",
        "terms.section8.body2": "2. The Owner reserves the right to change the Terms.",

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
const API_BASE_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:5197"
    : window.location.origin;

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

    const waiver = document.getElementById("waiverCheckbox");

    if (!title || !creator || !email || !type || !aiUsage || !waiver?.checked) {
        alert(t("form.validationError"));
        return;
    }

    // Get attachments names and content
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
        attachmentFiles: attachmentFiles // Send full content
    };

    // AI Analysis Data Preparation
    if (type === 'article') {
        data.contentText = desc;
        // ... existing logic for AI analysis specific attachment ...
    } else if (type === 'image') {
        // ... existing logic ...
    }

    // Simulate creation
    const created = await createCertificate(data);
    if (!created) return;

    lastGeneratedCertificate = created;
    persistCertificates();

    // Show Payment Modal instead of direct result
    const paymentModal = document.getElementById('paymentModal');
    const paymentLinkBtn = document.getElementById('paymentLinkBtn');

    if (paymentModal && paymentLinkBtn) {
        paymentLinkBtn.href = created.paymentLink || "#";
        paymentModal.setAttribute('aria-hidden', 'false');
    }
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.setAttribute('aria-hidden', 'true');
}

function simulatePaymentSuccess() {
    closeModal('paymentModal');

    // Simulate updating status to awaiting_review (in real app this happens via webhook)
    if (lastGeneratedCertificate) {
        lastGeneratedCertificate.status = 'awaiting_review';
        // Update in storage
        issuedCertificates.set(lastGeneratedCertificate.code, lastGeneratedCertificate);
        persistCertificates();
    }

    const successModal = document.getElementById('successModal');
    const successCode = document.getElementById('successCode');
    if (successModal && successCode) {
        successCode.textContent = lastGeneratedCertificate?.code || "CH-????";
        successModal.setAttribute('aria-hidden', 'false');
    }
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

function renderCertificateDetails(cert) {
    if (!cert) return;

    currentDetailCertificate = cert;

    // Basic info
    if (certificateTitleEl) certificateTitleEl.textContent = cert.title;
    if (certificateCodeEl) certificateCodeEl.textContent = cert.code;

    if (certificateMetaEl) {
        const dateStr = new Date(cert.issuedAt).toLocaleDateString(currentLang);
        certificateMetaEl.innerHTML = `
            <span>${cert.creator}</span>
            <span class="dot">•</span>
            <span>${dateStr}</span>
        `;
    }

    if (certificateDescEl) {
        if (cert.description) {
            certificateDescEl.textContent = cert.description;
            certificateDescEl.style.fontStyle = "normal";
            certificateDescEl.style.opacity = "1";
        } else {
            certificateDescEl.textContent = t("certificate.noDescription");
            certificateDescEl.style.fontStyle = "italic";
            certificateDescEl.style.opacity = "0.6";
        }
    }

    // Status badge
    if (certificateStatusEl) {
        const isNoAi = cert.aiUsage === "no-ai";
        const badgeClass = isNoAi ? "status-valid" : "status-valid"; // Both are valid now
        const icon = isNoAi ? "✨" : "🤖";
        certificateStatusEl.className = `status-label ${badgeClass}`;
        certificateStatusEl.innerHTML = `${icon} ${getStatusBadgeLabel(cert.aiUsage)}`;
    }

    // Info list
    if (certificateInfoListEl) {
        certificateInfoListEl.innerHTML = `
            <li>
                <span>${t("certificate.info.author")}</span>
                <strong>${cert.creator}</strong>
            </li>
            <li>
                <span>${t("certificate.info.type")}</span>
                <strong>${getContentTypeLabel(cert.type)}</strong>
            </li>
            <li>
                <span>${t("certificate.info.aiUsage")}</span>
                <strong>${getAiUsageLabel(cert.aiUsage)}</strong>
            </li>
        `;
    }

    // Attachments - HIDDEN as requested
    if (certificateAttachmentsEl) {
        certificateAttachmentsEl.style.display = 'none';
    }

    // Admin Comment - NEW
    // Check if we already have the container, if not create it
    let adminSection = document.getElementById('adminCommentSection');
    if (!adminSection) {
        adminSection = document.createElement('div');
        adminSection.id = 'adminCommentSection';
        adminSection.className = 'admin-comment-section';
        // Insert after description
        if (certificateDescEl && certificateDescEl.parentNode) {
            certificateDescEl.parentNode.insertBefore(adminSection, certificateDescEl.nextSibling);
        }
    }

    // Only show if there is a comment (decisionNote/adminComment)
    // Note: The API returns 'decisionNote' mapped to 'adminComment' in DTO, or we need to check how we mapped it.
    // In Program.cs ToResponse we mapped c.DecisionNote to the last parameter.
    // In javascript.js formatCertificateForUi we need to make sure we capture it.
    // Let's assume formatCertificateForUi captures it as 'adminComment' or we need to update that function too.
    // Wait, I need to update formatCertificateForUi first!

    // I will update formatCertificateForUi in a separate edit or include it here if I can find it.
    // It's defined earlier in the file. I'll stick to renderCertificateDetails here and assume I'll fix formatCertificateForUi next.

    if (cert.adminComment) {
        adminSection.style.display = 'block';
        adminSection.innerHTML = `
            <h4>Opis Administracji</h4>
            <p>${cert.adminComment}</p>
        `;
    } else {
        adminSection.style.display = 'none';
    }
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.setAttribute('aria-hidden', 'true');
}

function simulatePaymentSuccess() {
    closeModal('paymentModal');

    // Simulate updating status to awaiting_review (in real app this happens via webhook)
    if (lastGeneratedCertificate) {
        lastGeneratedCertificate.status = 'awaiting_review';
        // Update in storage
        issuedCertificates.set(lastGeneratedCertificate.code, lastGeneratedCertificate);
        persistCertificates();
    }

    const successModal = document.getElementById('successModal');
    const successCode = document.getElementById('successCode');
    if (successModal && successCode) {
        successCode.textContent = lastGeneratedCertificate?.code || "CH-????";
        successModal.setAttribute('aria-hidden', 'false');
    }
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

    // Handle Right Sidebar (Attachments -> Admin Comment)
    // We want to replace the "Attachments" block with "Admin Comment"
    if (certificateAttachmentsEl) {
        const rightSidebar = certificateAttachmentsEl.parentNode; // .certificate-block
        if (rightSidebar) {
            // Clear existing content (Attachments title and list)
            rightSidebar.innerHTML = '';

            // Create Admin Comment Section
            if (certificate.adminComment) {
                const title = document.createElement('h3');
                title.textContent = "Opis Administracji"; // Hardcoded for now or use translation
                rightSidebar.appendChild(title);

                const content = document.createElement('div');
                content.className = 'admin-comment-section';
                content.innerHTML = `<p>${certificate.adminComment}</p>`;
                rightSidebar.appendChild(content);
                function toBase64(file) {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader.result);
                        reader.onerror = error => reject(error);
                    });
                }
                // Add QR Code here as well
                const qrDiv = document.createElement('div');
                qrDiv.style.marginTop = '20px';
                qrDiv.style.background = 'white';
                qrDiv.style.padding = '10px';
                qrDiv.style.borderRadius = '8px';
                qrDiv.style.display = 'inline-block';
                rightSidebar.appendChild(qrDiv);

                renderQr(certificate.code, qrDiv);

                rightSidebar.style.display = 'block'; // Ensure it's visible if there's a comment
            } else {
                // If no comment, maybe hide the block or show empty state?
                // User said "attachments available only for me", implying public shouldn't see them.
                // If no admin comment, we can leave it empty or hide it.
                // Let's hide it to be clean.
                rightSidebar.style.display = 'none';
            }
        }
    }

    // Remove the previous injection if it exists (cleanup)
    const oldAdminSection = document.getElementById('adminCommentSection');
    if (oldAdminSection) oldAdminSection.remove();
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
                ${code
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

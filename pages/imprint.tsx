import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HeroUnit from "../src/components/HeroUnit";

export default function HowToPlay() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <HeroUnit />
            <Imprint />
            <Footer />
        </React.Fragment>
    );
}
const Imprint: React.FunctionComponent = () => {
    return (
        <Container maxWidth="md" component="main">
            <h1 className="adsimple-321139178">Impressum</h1>
            <p className="adsimple-321139178">Informationspflicht laut § 5 TMG.</p>
            <p className="adsimple-321139178"></p>
            <p>Mirco Kraenz</p>
            <p className="adsimple-321139178">Sterndamm 34, <br />12487 Berlin, <br />Deutschland</p>
            <p className="adsimple-321139178">
            <strong>E-Mail:</strong> <a href="mailto:fursorger.game@gmail.com">fursorger.game@gmail.com</a>
            </p>
            <p>Quelle: Erstellt mit dem <a title="Impressum Generator Deutschland" href="https://www.adsimple.de/impressum-generator/" target="_blank" rel="follow" >Impressum Generator</a> von AdSimple in Kooperation mit <a href="https://www.hashtagmann.de" target="_blank" rel="follow" title="">hashtagmann.de</a>
            </p>
            <h2 className="adsimple-321139178">EU-Streitschlichtung</h2>
            <p>Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.<br />
            Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter <a className="adsimple-321139178" href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&amp;lng=DE" target="_blank" rel="noopener">http://ec.europa.eu/odr?tid=321139178</a> zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.</p>
            <p>Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            <h2 className="adsimple-321139178">Haftung für Inhalte dieser Website</h2>
            <p>Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Laut Telemediengesetz <a className="adsimple-321139178" href="https://www.gesetze-im-internet.de/tmg/__7.html?tid=321139178" rel="noopener" target="_blank">(TMG) §7 (1)</a> sind wir als Diensteanbieter für eigene Informationen, die wir zur Nutzung bereitstellen, nach den allgemeinen Gesetzen verantwortlich. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden. Als Diensteanbieter im Sinne der §§ 8 bis 10 sind wir nicht verpflichtet, die von ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p>Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt. </p>
            <p>Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.</p>
            <h2 className="adsimple-321139178">Haftung für Links auf dieser Website</h2>
            <p>Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.</p>
            <p>Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.</p>
            <h2 className="adsimple-321139178">Urheberrechtshinweis</h2>
            <p>Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht der Bundesrepublik Deutschland. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.</p>
            <p>Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.</p>
            <h2 className="adsimple-321139178">Bildernachweis</h2>
            <p>Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.</p>
            <p>Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:</p>
            <ul className="adsimple-321139178">
            <li className="adsimple-321139178">Fotograf Mustermann</li>
            </ul>
            <h1 className="adsimple-321139178">Datenschutzerklärung</h1>
            <h2 className="adsimple-321139178">Datenschutz</h2>
            <p>Wir haben diese Datenschutzerklärung (Fassung 31.12.2019-321139178) verfasst, um Ihnen gemäß der Vorgaben der <a className="adsimple-321139178" href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&amp;tid=321139178" target="_blank" rel="noopener">Datenschutz-Grundverordnung (EU) 2016/679</a> zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.</p>
            <p>Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.</p>
            <h2 className="adsimple-321139178">Automatische Datenspeicherung</h2>
            <p>Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und gespeichert, so auch auf dieser Webseite.</p>
            <p>Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie</p>
            <ul className="adsimple-321139178">
            <li className="adsimple-321139178">die Adresse (URL) der aufgerufenen Webseite</li>
            <li className="adsimple-321139178">Browser und Browserversion</li>
            <li className="adsimple-321139178">das verwendete Betriebssystem</li>
            <li className="adsimple-321139178">die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</li>
            <li className="adsimple-321139178">den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird</li>
            <li className="adsimple-321139178">Datum und Uhrzeit</li>
            </ul>
            <p>in Dateien (Webserver-Logfiles).</p>
            <p>In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.<br />
            Die Rechtsgrundlage besteht nach <a className="adsimple-321139178" href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=321139178" target="_blank" rel="noopener">Artikel 6  Absatz 1 f DSGVO</a> (Rechtmäßigkeit der Verarbeitung) darin, dass berechtigtes Interesse daran besteht, den fehlerfreien Betrieb dieser Webseite durch das Erfassen von Webserver-Logfiles zu ermöglichen.</p>
            <h2 className="adsimple-321139178">Cookies</h2>
            <p>Unsere Website verwendet HTTP-Cookies um nutzerspezifische Daten zu speichern.<br />
            Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser verstehen.</p>
            <h3 className="adsimple-321139178">Was genau sind Cookies?</h3>
            <p>Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Webseiten speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.</p>
            <p>Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Webseiten verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem &#8220;Hirn&#8221; Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.</p>
            <p>Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website, wer Sie sind und bietet Ihnen Ihre gewohnte Standardeinstellung. In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.</p>
            <p>Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.</p>
            <p>So können zum Beispiel Cookie-Daten aussehen:</p>
            <ul className="adsimple-321139178">
            <li className="adsimple-321139178">Name: _ga</li>
            <li className="adsimple-321139178">Ablaufzeit: 2 Jahre</li>
            <li className="adsimple-321139178">Verwendung: Unterscheidung der Webseitenbesucher</li>
            <li className="adsimple-321139178">Beispielhafter Wert: GA1.2.1326744211.152321139178</li>
            </ul>
            <p>Ein Browser sollte folgende Mindestgrößen unterstützen:</p>
            <ul className="adsimple-321139178">
            <li className="adsimple-321139178">Ein Cookie soll mindestens 4096 Bytes enthalten können</li>
            <li className="adsimple-321139178">Pro Domain sollen mindestens 50 Cookies gespeichert werden können</li>
            <li className="adsimple-321139178">Insgesamt sollen mindestens 3000 Cookies gespeichert werden können</li>
            </ul>
            <h3 className="adsimple-321139178">Welche Arten von Cookies gibt es?</h3>
            <p>Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in der folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.</p>
            <p>Man kann 4 Arten von Cookies unterscheiden:</p>
            <p>
            <strong className="adsimple-321139178">Unbedingt notwendige Cookies<br />
            </strong>Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster schließt.</p>
            <p>
            <strong className="adsimple-321139178">Funktionelle Cookies<br />
            </strong>Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen Browsern gemessen.</p>
            <p>
            <strong className="adsimple-321139178">Zielorientierte Cookies<br />
            </strong>Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.</p>
            <p>
            <strong className="adsimple-321139178">Werbe-Cookies<br />
            </strong>Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.</p>
            <p>Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite gefragt, welche dieser Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.</p>
            <h3 className="adsimple-321139178">Wie kann ich Cookies löschen?</h3>
            <p>Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, nur teilweise zuzulassen oder zu deaktivieren. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.</p>
            <p>Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden:</p>
            <p>
            <a className="adsimple-321139178" href="https://support.google.com/chrome/answer/95647?tid=321139178" target="_blank" rel="noopener">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
            </p>
            <p>
            <a className="adsimple-321139178" href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321139178" target="_blank" rel="noopener">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
            </p>
            <p>
            <a className="adsimple-321139178" href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321139178" target="_blank" rel="noopener">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
            </p>
            <p>
            <a className="adsimple-321139178" href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321139178" target="_blank" rel="noopener">Internet Explorer: Löschen und Verwalten von Cookies</a>
            </p>
            <p>
            <a className="adsimple-321139178" href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321139178" target="_blank" rel="noopener">Microsoft Edge: Löschen und Verwalten von Cookies</a>
            </p>
            <p>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten ist es Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder &#8220;Cookies deaktivieren Chrome&#8221; im Falle eines Chrome Browsers oder tauschen das Wort &#8220;Chrome&#8221; gegen den Namen Ihres Browsers, z.B. Edge, Firefox, Safari aus.</p>
            <h3 className="adsimple-321139178">Wie sieht es mit meinem Datenschutz aus?</h3>
            <p>Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies eine Einwilligung des Website-Besuchers (also von Ihnen) verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Deutschland wurden die Cookie-Richtlinien nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).</p>
            <p>Wenn Sie mehr über Cookies wissen möchten und vor technischen Dokumentationen nicht zurückscheuen, empfehlen wir <a className="adsimple-321139178" href="https://tools.ietf.org/html/rfc6265" target="_blank" rel="nofollow noopener">https://tools.ietf.org/html/rfc6265</a>, dem Request for Comments der Internet Engineering Task Force (IETF) namens &#8220;HTTP State Management Mechanism&#8221;.</p>
            <h2 className="adsimple-321139178">Speicherung persönlicher Daten</h2>
            <p>Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.</p>
            <p>Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die Kontakt ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.</p>
            <p>Wenn Sie uns persönliche Daten per E-Mail schicken &#8211; somit abseits dieser Webseite &#8211; können wir keine sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu übermitteln.</p>
            <p>Die Rechtsgrundlage besteht nach <a className="adsimple-321139178" href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=321139178" target="_blank" rel="noopener">Artikel 6  Absatz 1 a DSGVO</a> (Rechtmäßigkeit der Verarbeitung) darin, dass Sie uns die Einwilligung zur Verarbeitung der von Ihnen eingegebenen Daten geben. Sie können diesen Einwilligung jederzeit widerrufen &#8211; eine formlose E-Mail reicht aus, Sie finden unsere Kontaktdaten im Impressum.</p>
            <h2 className="adsimple-321139178">Rechte laut Datenschutzgrundverordnung</h2>
            <p>Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:</p>
            <ul className="adsimple-321139178">
            <li className="adsimple-321139178">Recht auf Berichtigung (Artikel 16 DSGVO)</li>
            <li className="adsimple-321139178">Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</li>
            <li className="adsimple-321139178">Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
            <li className="adsimple-321139178">Recht auf Benachrichtigung &#8211; Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)</li>
            <li className="adsimple-321139178">Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
            <li className="adsimple-321139178">Widerspruchsrecht (Artikel 21 DSGVO)</li>
            <li className="adsimple-321139178">Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)</li>
            </ul>
            <p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich an die <a className="adsimple-321139178" href="https://www.bfdi.bund.de/DE/Datenschutz/Ueberblick/MeineRechte/Artikel/BeschwerdeBeiDatenschutzbehoereden.html?tid=321139178" target="_blank" rel="noopener">Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</a> wenden.</p>
            <h2 className="adsimple-321139178">Auswertung des Besucherverhaltens</h2>
            <p>In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob und wie wir Daten Ihres Besuchs dieser Website auswerten. Die Auswertung der gesammelten Daten erfolgt in der Regel anonym und wir können von Ihrem Verhalten auf dieser Website nicht auf Ihre Person schließen.</p>
            <p>Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu widersprechen erfahren Sie in der folgenden Datenschutzerklärung.</p>
            <h2 className="adsimple-321139178">TLS-Verschlüsselung mit https</h2>
            <p>Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung <a className="adsimple-321139178" href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&#038;tid=321139178" target="_blank" rel="noopener">Artikel 25 Absatz 1 DSGVO</a>). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schloßsymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.</p>
            <h2 className="adsimple-321139178">Google Fonts Datenschutzerklärung</h2>
            <p>Wir verwenden Google Fonts der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) auf unserer Webseite.</p>
            <p>Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort hinterlegen. Weiters werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS, Schriftarten/Fonts) werden über die Google-Domains fonts.googleapis.com und fonts.gstatic.com angefordert. Laut Google sind die Anfragen nach CSS und Schriften vollkommen getrennt von allen anderen Google-Diensten. Wenn Sie ein Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre Google-Kontodaten, während der Verwendung von Google Fonts, an Google übermittelt werden. Google erfasst die Nutzung von CSS (Cascading Style Sheets) und der verwendeten Schriftarten und speichert diese Daten sicher. Wie die Datenspeicherung genau aussieht, werden wir uns noch im Detail ansehen.</p>
            <h3 className="adsimple-321139178">Was sind Google Fonts?</h3>
            <p>Google Fonts (früher Google Web Fonts) ist ein interaktives Verzeichnis mit mehr als 800 Schriftarten, die die <a className="adsimple-321139178" href="https://de.wikipedia.org/wiki/Google_LLC?tid=321139178" target="_blank" rel="noopener">Google LLC</a> zur freien Verwendung bereitstellt.</p>
            <p>Viele dieser Schriftarten sind unter der SIL Open Font License veröffentlicht, während andere unter der Apache-Lizenz veröffentlicht wurden. Beides sind freie Software-Lizenzen. Somit können wir sie frei verwenden, ohne dafür Lizenzgebühren zu zahlen.</p>
            <h3 className="adsimple-321139178">Warum verwenden wir Google Fonts auf unserer Webseite?</h3>
            <p>Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen, und müssen sie nicht auf unserem eigenen Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer Webseite hoch zu halten. Alle Google-Schriften sind automatisch für das Web optimiert und dies spart Datenvolumen und ist speziell für die Verwendung bei mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere Seite besuchen, sorgt die niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind Google Fonts sogenannte sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme (Rendering) in verschiedenen Browsern, Betriebssystemen und mobilen Endgeräten können zu Fehlern führen. Solche Fehler können teilweise Texte bzw. ganze Webseiten optisch verzerren. Dank des schnellen Content Delivery Network (CDN) gibt es mit Google Fonts keine plattformübergreifenden Probleme. Google Fonts unterstützt alle gängigen Browser ( Google Chrome, Mozilla Firefox, Apple Safari, Opera)  und funktioniert zuverlässig auf den meisten modernen mobilen Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone, iPad, iPod).</p>
            <p>Wir verwenden die Google Fonts also, damit wir unser gesamtes Online-Service so schön und einheitlich wie möglich darstellen können. Nach dem Art. 6 Abs. 1 f lit. F DSGVO stellt das bereits ein „berechtigtes Interesse“ an der Verarbeitung von personenbezogenen Daten dar. Unter „berechtigtem Interesse“ versteht man in diesem Fall sowohl rechtliche als auch wirtschaftliche oder ideelle Interessen, die vom Rechtssystem anerkannt werden.</p>
            <h3 className="adsimple-321139178">Welche Daten werden von Google gespeichert?</h3>
            <p>Wenn Sie unsere Webseite besuchen, werden die Schriften über einen Google-Server nachgeladen. Durch diesen externen Aufruf werden Daten an die Google-Server übermittelt. So erkennt Google auch, dass Sie bzw. Ihre IP-Adresse unsere Webseite besucht. Die Google Fonts API wurde entwickelt, um die Erfassung, Speicherung und Verwendung von Endnutzerdaten auf das zu reduzieren, was für eine effiziente Bereitstellung von Schriften nötig ist. API steht übrigens für „Application Programming Interface“ und dient unter anderem als Datenübermittler im Softwarebereich.</p>
            <p>Google Fonts speichert CSS- und Font-Anfragen sicher bei Google und ist somit geschützt. Durch die gesammelten Nutzungszahlen kann Google die Beliebtheit der Schriften feststellen. Die Ergebnisse veröffentlicht Google auf internen Analyseseiten, wie beispielsweise Google Analytics. Zudem verwendet Google auch Daten des eigenen Web-Crawlers, um festzustellen, welche Webseiten Google-Schriften verwenden. Diese Daten werden in der BigQuery-Datenbank von Google Fonts veröffentlicht. BigQuery ist ein Webservice von Google für Unternehmen, die große Datenmengen bewegen und analysieren wollen.</p>
            <p>Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage auch Informationen wie IP-Adresse, Spracheinstellungen, Bildschirmauflösung des Browsers, Version des Browsers und Name des Browsers automatisch an die Google-Server übertragen werden. Ob diese Daten auch gespeichert werden, ist nicht klar feststellbar bzw. wird von Google nicht eindeutig kommuniziert.</p>
            <h3 className="adsimple-321139178">Wie lange und wo werden die Daten gespeichert?</h3>
            <p>Anfragen für CSS-Assets speichert Google einen Tag lang auf Ihren Servern, die hauptsächlich außerhalb der EU angesiedelt sind. Das ermöglicht uns, mithilfe eines Google-Stylesheets die Schriftarten zu nutzen. Ein Stylesheet ist eine Formatvorlage, über die man einfach und schnell z.B. das Design bzw. die Schriftart einer Webseite ändern kann.</p>
            <p>Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die Ladezeit von Webseiten grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf die gleichen Schriften verweisen, werden sie nach dem ersten Besuch zwischengespeichert und erscheinen sofort auf allen anderen später besuchten Webseiten wieder. Manchmal aktualisiert Google Schriftdateien, um die Dateigröße zu reduzieren, die Abdeckung von Sprache zu erhöhen und das Design zu verbessern.</p>
            <h3 className="adsimple-321139178">Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
            <p>Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können nicht einfach gelöscht werden. Die Daten werden beim Seitenaufruf automatisch an Google übermittelt. Um diese Daten vorzeitig löschen zu können, müssen Sie den Google-Support auf <a className="adsimple-321139178" href="https://support.google.com/?hl=de&amp;tid=321139178" target="_blank" rel="noopener">https://support.google.com/?hl=de&amp;tid=321139178</a> kontaktieren. Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere Seite nicht besuchen.</p>
            <p>Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf <a className="adsimple-321139178" href="https://developers.google.com/fonts/faq?tid=321139178" target="_blank" rel="noopener">https://developers.google.com/fonts/faq?tid=321139178</a>. Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein, doch wirklich detaillierte Informationen über Datenspeicherung sind nicht enthalten. Es ist relativ schwierig (beinahe unmöglich), von Google wirklich präzise Informationen über gespeicherten Daten zu bekommen.</p>
            <p>Welche Daten grundsätzlich von Google erfasst werden und wofür diese Daten verwendet werden, können Sie auch auf <a className="adsimple-321139178" href="https://policies.google.com/privacy?hl=de&amp;tid=321139178" target="_blank" rel="noopener">https://www.google.com/intl/de/policies/privacy/</a> nachlesen.</p>
            <h2 className="adsimple-321139178">Google Fonts Lokal Datenschutzerklärung</h2>
            <p>Wir verwenden Google Fonts der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) auf unserer Webseite. Wir haben die Google-Schriftarten lokal, d.h. auf unserem Webserver &#8211; nicht auf den Servern von Google &#8211; eingebunden. Dadurch gibt es keine Verbindung zu Server von Google und somit auch keine Datenübertragung bzw. Speicherung.</p>
            <h3 className="adsimple-321139178">Was sind Google Fonts?</h3>
            <p>Google Fonts (früher Google Web Fonts) ist ein interaktives Verzeichnis mit mehr als 800 Schriftarten, die die <a className="adsimple-321139178" href="https://de.wikipedia.org/wiki/Google_LLC?tid=321139178">Google LLC</a> zur freien Verwendung bereitstellt. Mit Google Fonts könnte man die Schriften nutzen, ohne sie auf den eigenen Server hochzuladen. Doch um diesbezüglich jede Informationsübertragung zum Google-Server zu unterbinden, haben wir die Schriftarten auf unseren Server heruntergeladen. Auf diese Weise handeln wir datenschutzkonform und senden keine Daten an Google Fonts weiter.</p>
            <p>Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf <a className="adsimple-321139178" href="https://developers.google.com/fonts/faq?tid=321139178">https://developers.google.com/fonts/faq?tid=321139178</a>.</p>
            <h2 className="adsimple-321139178">Google Analytics Datenschutzerklärung</h2>
            <p>Wir verwenden auf unserer Website das Analyse-Tracking Tool Google Analytics (GA) des amerikanischen Unternehmens Google LLC (1600 Amphitheatre Parkway Mountain View, CA 94043, USA). Google Analytics sammelt Daten über Ihre Handlungen auf unserer Website. Wenn Sie beispielsweise einen Link anklicken, wird diese Aktion in einem Cookie gespeichert und an Google Analytics versandt. Mithilfe der Berichte, die wir von Google Analytics erhalten, können wir unsere Website und unser Service besser an Ihre Wünsche anpassen. Im Folgenden gehen wir näher auf das Tracking Tool ein und informieren Sie vor allem darüber, welche Daten gespeichert werden und wie Sie das verhindern können.</p>
            <h3 className="adsimple-321139178">Was ist Google Analytics?</h3>
            <p>Google Analytics ist ein Trackingtool, das der Datenverkehrsanalyse unserer Website dient. Damit Google Analytics funktioniert, wird ein Tracking-Code in den Code unserer Website eingebaut. Wenn Sie unsere Website besuchen, zeichnet dieser Code verschiedene Handlungen auf, die Sie auf unserer Website ausführen. Sobald Sie unsere Website verlassen, werden diese Daten an die Google-Analytics-Server gesendet und dort gespeichert.</p>
            <p>Google verarbeitet die Daten und wir bekommen Berichte über Ihr Userverhalten. Dabei kann es sich unter anderem um folgende Berichte handeln:</p>
            <ul className="adsimple-321139178">
            <li className="adsimple-321139178">Zielgruppenberichte: Über Zielgruppenberichte lernen wir unsere User besser kennen und wissen genauer, wer sich für unser Service interessiert.</li>
            <li className="adsimple-321139178">Anzeigeberichte: Durch Anzeigeberichte können wir unsere Onlinewerbung leichter analysieren und verbessern.</li>
            <li className="adsimple-321139178">Akquisitionsberichte: Akquisitionsberichte geben uns hilfreiche Informationen darüber, wie wir mehr Menschen für unser Service begeistern können.</li>
            <li className="adsimple-321139178">Verhaltensberichte: Hier erfahren wir, wie Sie mit unserer Website interagieren. Wir können nachvollziehen welchen Weg Sie auf unserer Seite zurücklegen und welche Links Sie anklicken.</li>
            <li className="adsimple-321139178">Conversionsberichte: Conversion nennt man einen Vorgang, bei dem Sie aufgrund einer Marketing-Botschaft eine gewünschte Handlung ausführen. Zum Beispiel, wenn Sie von einem reinen Websitebesucher zu einem Käufer oder Newsletter-Abonnent werden. Mithilfe dieser Berichte erfahren wir mehr darüber, wie unsere Marketing-Maßnahmen bei Ihnen ankommen. So wollen wir unsere Conversionrate steigern.</li>
            <li className="adsimple-321139178">Echtzeitberichte: Hier erfahren wir immer sofort, was gerade auf unserer Website passiert. Zum Beispiel sehen wir wie viele User gerade diesen Text lesen.</li>
            </ul>
            <h3 className="adsimple-321139178">Warum verwenden wir Google Analytics auf unserer Webseite?</h3>
            <p>Unser Ziel mit dieser Website ist klar: Wir wollen Ihnen das bestmögliche Service bieten. Die Statistiken und Daten von Google Analytics helfen uns dieses Ziel zu erreichen.</p>
            <p>Die statistisch ausgewerteten Daten zeigen uns ein klares Bild von den Stärken und Schwächen unserer Website. Einerseits können wir unsere Seite so optimieren, dass sie von interessierten Menschen auf Google leichter gefunden wird. Andererseits helfen uns die Daten, Sie als Besucher besser zu verstehen. Wir wissen somit sehr genau, was wir an unserer Website verbessern müssen, um Ihnen das bestmögliche Service zu bieten. Die Daten dienen uns auch, unsere Werbe- und Marketing-Maßnahmen individueller und kostengünstiger durchzuführen. Schließlich macht es nur Sinn, unsere Produkte und Dienstleistungen Menschen zu zeigen, die sich dafür interessieren.</p>
            <h3 className="adsimple-321139178">Welche Daten werden von Google Analytics gespeichert?</h3>
            <p>Google Analytics erstellt mithilfe eines Tracking-Codes eine zufällige, eindeutige ID, die mit Ihrem Browser-Cookie verbunden ist. So erkennt Sie Google Analytics als neuen User. Wenn Sie das nächste Mal unsere Seite besuchen, werden Sie als „wiederkehrender“ User erkannt. Alle gesammelten Daten werden gemeinsam mit dieser User-ID gespeichert. So ist es überhaupt erst möglich pseudonyme Userprofile auszuwerten.</p>
            <p>Durch Kennzeichnungen wie Cookies und App-Instanz-IDs werden Ihre Interaktionen auf unserer Website gemessen. Interaktionen sind alle Arten von Handlungen, die Sie auf unserer Website ausführen. Wenn Sie auch andere Google-Systeme (wie z.B. ein Google-Konto) nützen, können über Google Analytics generierte Daten mit Drittanbieter-Cookies verknüpft werden. Google gibt keine Google Analytics-Daten weiter, außer wir als Websitebetreiber genehmigen das. Zu Ausnahmen kann es kommen, wenn es gesetzlich erforderlich ist.</p>
            <p>Folgende Cookies werden von Google Analytics verwendet:</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> _ga<br />
            <strong className="adsimple-321139178">Wert:</strong>2.1326744211.152321139178-5<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Standardmäßig verwendet analytics.js das Cookie _ga, um die User-ID zu speichern. Grundsätzlich dient es zur Unterscheidung der Webseitenbesucher.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach 2 Jahre</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> _gid<br />
            <strong className="adsimple-321139178">Wert:</strong>2.1687193234.152321139178-1<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Das Cookie dient auch zur Unterscheidung der Webseitenbesucher<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach 24 Stunden</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> _gat_gtag_UA_&lt;property-id&gt;<br />
            <strong className="adsimple-321139178">Wert:</strong> 1<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Wird zum Senken der Anforderungsrate verwendet. Wenn Google Analytics über den Google Tag Manager bereitgestellt wird, erhält dieser Cookie den Namen _dc_gtm_ &lt;property-id&gt;.<br />
            <strong className="adsimple-321139178">Ablaufdatum: </strong>nach 1 Minute</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> AMP_TOKEN<br />
            <strong className="adsimple-321139178">Wert:</strong> keine Angaben<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Das Cookie hat einen Token, mit dem eine User ID vom AMP-Client-ID-Dienst abgerufen werden kann. Andere mögliche Werte weisen auf eine Abmeldung, eine Anfrage oder einen Fehler hin.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach 30 Sekunden bis zu einem Jahr</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> __utma<br />
            <strong className="adsimple-321139178">Wert:</strong>1564498958.1564498958.1564498958.1<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Mit diesem Cookie kann man Ihr Verhalten auf der Website verfolgen und sie Leistung messen. Das Cookie wird jedes Mal aktualisiert, wenn Informationen an Google Analytics gesendet werden.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach 2 Jahre</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> __utmt<br />
            <strong className="adsimple-321139178">Wert:</strong> 1<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Das Cookie wird wie _gat_gtag_UA_&lt;property-id&gt; zum Drosseln der Anforderungsrate verwendet.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach 10 Minuten</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> __utmb<br />
            <strong className="adsimple-321139178">Wert:</strong>3.10.1564498958<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Dieses Cookie wird verwendet, um neue Sitzungen zu bestimmen. Es wird jedes Mal aktualisiert, wenn neue Daten bzw. Infos an Google Analytics gesendet werden.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach 30 Minuten</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> __utmc<br />
            <strong className="adsimple-321139178">Wert:</strong> 167421564<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Dieses Cookie wird verwendet, um neue Sitzungen für wiederkehrende Besucher festzulegen. Dabei handelt es sich um ein Session-Cookie und wird nur solange gespeichert, bis Sie den Browser wieder schließen.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> Nach Schließung des Browsers</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> __utmz<br />
            <strong className="adsimple-321139178">Wert:</strong> m|utmccn=(referral)|utmcmd=referral|utmcct=/<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Das Cookie wird verwendet, um die Quelle des Besucheraufkommens auf unserer Website zu identifizieren. Das heißt, das Cookie speichert, von wo Sie auf unsere Website gekommen sind. Das kann eine andere Seite bzw. eine Werbeschaltung gewesen sein.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach 6 Monate</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> __utmv<br />
            <strong className="adsimple-321139178">Wert:</strong> keine Angabe<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Das Cookie wird verwendet, um benutzerdefinierte Userdaten zu speichern. Es wird immer aktualisiert, wenn Informationen an Google Analytics gesendet werden.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach 2 Jahre</p>
            <p>
            <strong className="adsimple-321139178">Anmerkung:</strong> Diese Aufzählung kann keinen Anspruch auf Vollständigkeit erheben, da Google die Wahl ihrer Cookies immer wieder auch verändert.</p>
            <p>Hier zeigen wir Ihnen einen Überblick über die wichtigsten Daten, die mit Google Analytics erhoben werden:</p>
            <p>
            <strong className="adsimple-321139178">Heatmaps:</strong> Google legt sogenannte Heatmaps an. Über Heatmaps sieht man genau jene Bereiche, die Sie anklicken. So bekommen wir Informationen, wo Sie auf unserer Seite „unterwegs“ sind.</p>
            <p>
            <strong className="adsimple-321139178">Sitzungsdauer:</strong> Als Sitzungsdauer bezeichnet Google die Zeit, die Sie auf unserer Seite verbringen, ohne die Seite zu verlassen. Wenn Sie 20 Minuten inaktiv waren, endet die Sitzung automatisch.</p>
            <p>
            <strong className="adsimple-321139178">Absprungrate</strong> (engl. Bouncerate): Von einem Absprung ist die Rede, wenn Sie auf unserer Website nur eine Seite ansehen und dann unsere Website wieder verlassen.</p>
            <p>
            <strong className="adsimple-321139178">Kontoerstellung:</strong> Wenn Sie auf unserer Website ein Konto erstellen bzw. eine Bestellung machen, erhebt Google Analytics diese Daten.</p>
            <p>
            <strong className="adsimple-321139178">IP-Adresse:</strong> Die IP-Adresse wird nur in gekürzter Form dargestellt, damit keine eindeutige Zuordnung möglich ist.</p>
            <p>
            <strong className="adsimple-321139178">Standort:</strong> Über die IP-Adresse kann das Land und Ihr ungefährer Standort bestimmt werden. Diesen Vorgang bezeichnet man auch als IP- Standortbestimmung.</p>
            <p>
            <strong className="adsimple-321139178">Technische Informationen:</strong> Zu den technischen Informationen zählen unter anderem Ihr Browsertyp, Ihr Internetanbieter oder Ihre Bildschirmauflösung.</p>
            <p>
            <strong className="adsimple-321139178">Herkunftsquelle:</strong> Google Analytics beziehungsweise uns interessiert natürlich auch über welche Website oder welche Werbung Sie auf unsere Seite gekommen sind.</p>
            <p>Weitere Daten sind Kontaktdaten, etwaige Bewertungen, das Abspielen von Medien (z.B., wenn Sie ein Video über unsere Seite abspielen), das Teilen von Inhalten über Social Media oder das Hinzufügen zu Ihren Favoriten. Die Aufzählung hat keinen Vollständigkeitsanspruch und dient nur zu einer allgemeinen Orientierung der Datenspeicherung durch Google Analytics.</p>
            <h3 className="adsimple-321139178">Wie lange und wo werden die Daten gespeichert?</h3>
            <p>Google hat Ihre Server auf der ganzen Welt verteilt. Die meisten Server befinden sich in Amerika und folglich werden Ihr Daten meist auf amerikanischen Servern gespeichert. Hier können Sie genau nachlesen wo sich die Google-Rechenzentren befinden: <a className="adsimple-321139178" href="https://www.google.com/about/datacenters/inside/locations/?hl=de" target="_blank" rel="noopener">https://www.google.com/about/datacenters/inside/locations/?hl=de</a>
            </p>
            <p>Ihre Daten werden auf verschiedenen physischen Datenträgern verteilt. Das hat den Vorteil, dass die Daten schneller abrufbar sind und vor Manipulation besser geschützt sind. In jedem Google-Rechenzentrum gibt es entsprechende Notfallprogramme für Ihre Daten. Wenn beispielsweise die Hardware bei Google ausfällt oder Naturkatastrophen Server lahmlegen, bleibt das Risiko einer Dienstunterbrechung bei Google dennoch gering.</p>
            <p>Standardisiert ist bei Google Analytics eine Aufbewahrungsdauer Ihrer Userdaten von 26 Monaten eingestellt. Dann werden Ihre Userdaten gelöscht. Allerdings haben wir die Möglichkeit, die Aufbewahrungsdauer von Nutzdaten selbst zu wählen. Dafür stehen uns fünf Varianten zur Verfügung:</p>
            <ul className="adsimple-321139178">
            <li className="adsimple-321139178">Löschung nach 14 Monaten</li>
            <li className="adsimple-321139178">Löschung nach 26 Monaten</li>
            <li className="adsimple-321139178">Löschung nach 38 Monaten</li>
            <li className="adsimple-321139178">Löschung nach 50 Monaten</li>
            <li className="adsimple-321139178">Keine automatische Löschung</li>
            </ul>
            <p>Wenn der festgelegte Zeitraum abgelaufen ist, werden einmal im Monat die Daten gelöscht. Diese Aufbewahrungsdauer gilt für Ihre Daten, die mit Cookies, Usererkennung und Werbe-IDs (z.B. Cookies der DoubleClick-Domain) verknüpft sind. Berichtergebnisse basieren auf aggregierten Daten und werden unabhängig von Nutzerdaten gespeichert. Aggregierte Daten sind eine Zusammenschmelzung von Einzeldaten zu einer größeren Einheit.</p>
            <h3 className="adsimple-321139178">Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
            <p>Nach dem Datenschutzrecht der Europäischen Union haben Sie das Recht, Auskunft über Ihre Daten zu erhalten, sie zu aktualisieren, zu löschen oder einzuschränken. Mithilfe des Browser-Add-ons zur Deaktivierung von Google Analytics-JavaScript (ga.js, analytics.js, dc.js) verhindern Sie, dass Google Analytics Ihre Daten verwendet. Das Browser-Add-on können Sie unter <a className="adsimple-321139178" href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener">https://tools.google.com/dlpage/gaoptout?hl=de</a> runterladen und installieren. Beachten Sie bitte, dass durch dieses Add-on nur die Datenerhebung durch Google Analytics deaktiviert wird.</p>
            <p>Falls Sie grundsätzlich Cookies (unabhängig von Google Analytics) deaktivieren, löschen oder verwalten wollen, gibt es für jeden Browser eine eigene Anleitung:</p>
            <p>
            <a className="adsimple-321139178" href="https://support.google.com/chrome/answer/95647?tid=321139178" target="_blank" rel="noopener">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
            </p>
            <p>
            <a className="adsimple-321139178" href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321139178" target="_blank" rel="noopener">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
            </p>
            <p>
            <a className="adsimple-321139178" href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321139178" target="_blank" rel="noopener">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
            </p>
            <p>
            <a className="adsimple-321139178" href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321139178" target="_blank" rel="noopener">Internet Explorer: Löschen und Verwalten von Cookies</a>
            </p>
            <p>
            <a className="adsimple-321139178" href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321139178" target="_blank" rel="noopener">Microsoft Edge: Löschen und Verwalten von Cookies</a>
            </p>
            <p>Google Analytics ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch der korrekte und sichere Datentransfer persönlicher Daten geregelt wird. Mehr Informationen dazu finden Sie auf <a className="adsimple-321139178" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI" target="_blank" rel="follow noopener">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;tid=321139178</a>. Wir hoffen wir konnten Ihnen die wichtigsten Informationen rund um die Datenverarbeitung von Google Analytics näherbringen. Wenn Sie mehr über den Tracking-Dienst erfahren wollen, empfehlen wir diese beiden Links: <a className="adsimple-321139178" href="http://www.google.com/analytics/terms/de.html" target="_blank" rel="noopener">http://www.google.com/analytics/terms/de.html</a> und <a className="adsimple-321139178" href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p>
            <h2 className="adsimple-321139178">Google Analytics IP-Anonymisierung</h2>
            <p>Wir haben auf dieser Webseite die IP-Adressen-Anonymisierung von Google Analytics implementiert. Diese Funktion wurde von Google entwickelt, damit diese Webseite die geltenden Datenschutzbestimmungen und Empfehlungen der lokalen Datenschutzbehörden einhalten kann, wenn diese eine Speicherung der vollständigen IP-Adresse untersagen. Die Anonymisierung bzw. Maskierung der IP findet statt, sobald die IP-Adressen im Google Analytics-Datenerfassungsnetzwerk eintreffen und bevor eine Speicherung oder Verarbeitung der Daten stattfindet.</p>
            <p>Mehr Informationen zur IP-Anonymisierung finden Sie auf <a className="adsimple-321139178" href="https://support.google.com/analytics/answer/2763052?hl=de" target="_blank" rel="noopener">https://support.google.com/analytics/answer/2763052?hl=de</a>.</p>
            <h2 className="adsimple-321139178">Hotjar Datenschutzerklärung</h2>
            <p>Wir verwenden auf unserer Webseite Hotjar der Firma Hotjar Limited (Level 2, St Julian&#8217;s Business Centre, 3, Elia Zammit Street, St Julian&#8217;s STJ 1000, Malta), um Besucherdaten statistisch auszuwerten. Hotjar ist ein Dienst, der das Verhalten und das Feedback von Ihnen als Nutzer auf unserer Webseite durch eine Kombination von Analyse- und Feedback-Tools analysiert. Wir erhalten von Hotjar Berichte und visuelle Darstellungen, die uns zeigen wo und wie Sie sich auf unserer Seite &#8220;bewegen&#8221;. Personenbezogenen Daten werden automatisch anonymisiert und erreichen niemals die Server von Hotjar. Das heißt Sie werden als Webseitenbenutzer nicht persönlich identifiziert und wir lernen dennoch vieles über Ihr Userverhalten.</p>
            <h3 className="adsimple-321139178">Was ist Hotjar?</h3>
            <p>Wie im oberen Abschnitt bereits erwähnt, hilft uns Hotjar das Verhalten unserer Seitenbesucher zu analysieren. Zu diesen Tools, die Hotjar anbietet,  gehören Heatmaps, Conversion Funnels, Visitor Recording, Incoming Feedback, Feedback Polls und Surveys (mehr Informationen darüber erhalten Sie unter <a className="adsimple-321139178" href="https://www.hotjar.com?tid=321139178/" target="_blank" rel="noopener">https://www.hotjar.com/</a>). Damit hilft uns Hotjar, Ihnen eine bessere Nutzererfahrung und ein besseres Service anzubieten. Es bietet somit einerseits eine gute Analyse über das Onlineverhalten, andererseits erhalten wir auch ein gutes Feedback über die Qualität unserer Webseite. Denn neben all den analysetechnischen Aspekten wollen wir natürlich auch einfach Ihre Meinung über unsere Webseite wissen. Und mit dem Feedbacktool ist genau das möglich.</p>
            <h3 className="adsimple-321139178">Warum verwenden wir Hotjar auf unserer Webseite?</h3>
            <p>In den letzten Jahren nahm die Bedeutung von User Experience (also Benutzererfahrung) auf Webseiten stark zu. Und das auch aus gutem Grund. Eine Webseite soll so aufgebaut sein, dass Sie sich als Besucher wohl fühlen und sich einfach zurechtfinden. Wir können dank der Analyse-Tools und des Feedback-Tools von Hotjar unsere Webseite und unser Angebot attraktiver gestalten. Für uns besonders wertvoll erweisen sich die Heatmaps von Hotjar. Bei Heatmaps handelt es sich um eine Darstellungsform für die Visualisierung von Daten. Durch die Heatmaps von Hotjar sehen wir beispielsweise sehr genau, was Sie gerne anklicken, antippen und wohin Sie scrollen.</p>
            <h3 className="adsimple-321139178">Welche Daten werden von Hotjar gespeichert?</h3>
            <p>Während Sie durch unsere Webseite surfen, sammelt Hotjar automatisch Informationen über Ihr Userverhalten. Um diese Informationen sammeln zu können, haben wir auf unserer Webseite einen eigenen Tracking-Code eingebaut. Folgende Daten können über Ihren Computer beziehungsweise Ihren Browser gesammelt werden:</p>
            <ul className="adsimple-321139178">
            <li className="adsimple-321139178">IP-Adresse Ihres Computers (wird in einem anonymen Format gesammelt und gespeichert)</li>
            <li className="adsimple-321139178">Bildschirmgröße</li>
            <li className="adsimple-321139178">Browserinfos (welcher Browser, welche Version usw.)</li>
            <li className="adsimple-321139178">Ihr Standort (aber nur das Land)</li>
            <li className="adsimple-321139178">Ihre bevorzugte Spracheinstellung</li>
            <li className="adsimple-321139178">Besuchte Webseiten (Unterseiten)</li>
            <li className="adsimple-321139178">Datum und Uhrzeit des Zugriffs auf eine unserer Unterseiten (Webseiten)</li>
            </ul>
            <p>Zudem speichern auch Cookies Daten, die auf Ihrem Computer (meist in Ihrem Browser) platziert werden. Darin werden keine personenbezogenen Daten gesammelt. Grundsätzlich gibt Hotjar keine gesammelten Daten an Dritte weiter. Hotjar weist allerdings ausdrücklich darauf hin, dass es manchmal notwendig ist, Daten mit Amazon Web Services zu teilen. Dann werden Teile Ihrer Informationen auf deren Servern gespeichert. Amazon ist aber durch eine Geheimhaltungspflicht gebunden, diese Daten nicht preiszugeben.</p>
            <p>Auf die gespeicherten Informationen haben nur eine begrenzte Anzahl an Personen (Mitarbeiter von Hotjar) Zugriff. Die Hotjar-Server sind durch Firewalls und IP-Beschränkungen (Zugriff nur genehmigter IP-Adressen) geschützt. Firewalls sind Sicherheitssysteme, die Computer vor unerwünschten Netzwerkzugriffen schützen. Sie sollen als Barriere zwischen dem sicheren internen Netzwerk von Hotjar und dem Internet dienen. Weiters verwendet Hotjar für Ihre Dienste auch Drittunternehmen, wie etwa Google Analytics oder Optimizely. Diese Firmen können auch Informationen, die Ihr Browser an unsere Webseite sendet, speichern.</p>
            <p>Folgende Cookies werden von Hotjar verwendet. Da wir uns unter anderem auf die Cookie-Liste aus der Datenschutzerklärung von Hotjar unter <a className="adsimple-321139178" href="https://help.hotjar.com/hc/en-us/articles/115011789248-Hotjar-Cookies" target="_blank" rel="follow noopener">https://www.hotjar.com/legal/policies/cookie-information</a> beziehen, liegt nicht bei jedem Cookie ein exemplarischer Wert vor. Die Liste zeigt Beispiele von verwendeten Hotjar-Cookies und erhebt keinen Anspruch auf Vollständigkeit.</p>
            <p>
            <strong className="adsimple-321139178">Name</strong>: ajs_anonymous_id<br />
            <strong className="adsimple-321139178">Wert: </strong>%2258832463-7cee-48ee-b346-a195f18b06c3%22321139178-5<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Das Cookie wird gewöhnlich für Analysezwecke verwendet und hilft beim Zählen von Besuchern einer unserer Website, indem sie verfolgen, ob sie schon mal auf dieser Seite waren.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach einem Jahr</p>
            <p>
            <strong className="adsimple-321139178">Name</strong>: ajs_group_id<br />
            <strong className="adsimple-321139178">Wert: </strong>0<br />
            <strong className="adsimple-321139178">Verwendungszweck: </strong>Dieses Cookie sammelt Daten über das User-Verhalten. Diese Daten können dann, basierend auf Gemeinsamkeiten der Websitebesucher, einer bestimmten Besuchergruppe zugeordnet werden.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach einem Jahr</p>
            <p>
            <strong className="adsimple-321139178">Name</strong>: _hjid<br />
            <strong className="adsimple-321139178">Wert: </strong>699ffb1c-4bfb-483f-bde1-22cfa0b59c6c<br />
            <strong className="adsimple-321139178">Verwendungszweck: </strong>Das Cookie wird verwendet, um eine Hotjar-User-ID beizubehalten, die für die Website im Browser eindeutig ist. So kann das Userverhalten bei den nächsten Besuchen derselben User-ID zugeordnet werden.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach einem Jahr</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> _hjMinimizedPolls<br />
            <strong className="adsimple-321139178">Wert:</strong> 462568321139178-8<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Immer, wenn Sie ein Feedback Poll Widget minimieren, setzt Hotjar dieses Cookie. Das Cookie stellt sicher, dass das Widget auch wirklich minimiert bleibt, wenn Sie auf unseren Seiten surfen.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach einem Jahr</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> _hjIncludedInSample<br />
            <strong className="adsimple-321139178">Wert:</strong> 1<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Dieses Session-Cookie wird gesetzt, um Hotjar darüber zu informieren, ob Sie Teil der ausgewählten Personen (Sample) sind, die zum Erzeugen von Trichtern (Funnels) herangezogen werden.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach einem Jahr</p>
            <p>
            <strong className="adsimple-321139178">Name</strong>: _hjClosedSurveyInvites<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Dieses Cookie wird gesetzt, wenn Sie über ein Popup-Fenster eine Einladung zu einer Feedback-Umfrage sehen. Das Cookie wird verwendet, um sicherzustellen, dass diese Einladung für Sie nur einmal erscheint.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach einem Jahr</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> _hjDonePolls<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Sobald Sie eine Feedback- „Fragerunde“ mit dem sogenannten Feedback Poll Widget beenden, wird dieses Cookie in Ihrem Browser gesetzt. Damit verhindert Hotjar, dass Sie in Zukunft nicht wieder dieselben Umfragen erhalten.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach einem Jahr</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> _hjDoneTestersWidgets<strong className="adsimple-321139178">
            <br />
            </strong>
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Dieses Cookie wird verwendet, sobald Sie Ihre Daten im „Recruit User Tester Widget“ angeben. Mit diesem Widget wollen wir Sie als Tester anheuern. Damit dieses Formular nicht immer wieder erscheint, wird das Cookie verwendet.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach einem Jahr</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> _hjMinimizedTestersWidgets<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Damit der „Recruit User Tester“ auch wirklich auf all unseren Seite minimiert bleibt, sobald Sie Ihn einmal minimiert haben, wird dieses Cookie gesetzt.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach einem Jahr</p>
            <p>
            <strong className="adsimple-321139178">Name:</strong> _hjShownFeedbackMessage<br />
            <strong className="adsimple-321139178">Verwendungszweck:</strong> Dieses Cookie wird gesetzt, wenn Sie das eingehende Feedback minimiert oder ergänzt haben. Dies geschieht, damit das eingehende Feedback sofort als minimiert geladen wird, wenn Sie zu einer anderen Seite navigieren, auf der es angezeigt werden soll.<br />
            <strong className="adsimple-321139178">Ablaufdatum:</strong> nach einem Jahr</p>
            <h3 className="adsimple-321139178">Wie lange und wo werden die Daten gespeichert?</h3>
            <p>Wir haben einen Tracking-Code auf unserer Webseite eingebaut, der an die Hotjar-Server in Irland (EU) übertragen wird. Dieser Tracking-Code kontaktiert die Server von Hotjar und sendet ein Skript an Ihren Computer oder Ihr Endgerät, mit dem Sie auf unsere Seite zugreifen. Das Skript erfasst bestimmte Daten in Bezug auf Ihre Interaktion mit unserer Webseite. Diese Daten werden dann zur Verarbeitung an die Server von Hotjar gesendet. Hotjar hat sich selbst eine 365-Tage-Datenspeicherungsfrist auferlegt. Das heißt alle Daten, die Hotjar gesammelt hat und älter als ein Jahr sind, werden automatisch wieder gelöscht.</p>
            <h3 className="adsimple-321139178">Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
            <p>Hotjar speichert für die Analyse keine personenbezogenen Daten von Ihnen. Das Unternehmen wirbt sogar mit dem Slogan „We track behavior, not individuals“ (also „Wir tracken Userverhalten, aber keine identifizierbaren, individuellen Daten). Sie haben auch immer die Möglichkeit die Erhebung Ihrer Daten zu unterbinden. Dafür müssen Sie nur auf die „<a className="adsimple-321139178" href="https://www.hotjar.com/legal/compliance/opt-out" target="_blank" rel="noopener">Opt-out-Seite</a>“ gehen und auf „Hotjar deaktivieren“ klicken. Bitte beachten Sie, dass das Löschen von Cookies, die Nutzung des Privatmodus Ihres Browsers oder die Nutzung eines anderen Browsers dazu führt, Daten wieder zu erheben. Weiters können Sie auch in Ihrem Browser den „Do Not Track“-Button aktivieren. Im Browser Chrome beispielsweise müssen Sie dafür rechts oben auf die drei Balken klicken und auf „Einstellungen“ gehen. Dort finden Sie im Abschnitt „Datenschutz“ die Option „Mit Browserzugriffen eine &#8220;Do Not Track&#8221;-Anforderung senden&#8221;. Jetzt aktivieren Sie nur noch diese Schaltfläche und schon werden keinen Daten von Hotjar erhoben.</p>
            <p>Mehr Details zur Datenschutzrichtlinie und welche Daten auf welche Art durch Hotjar erfasst werden finden Sie auf <a className="adsimple-321139178" href="https://www.hotjar.com/legal/policies/privacy?tid=321139178" target="_blank" rel="noopener">https://www.hotjar.com/legal/policies/privacy?tid=321139178</a>.</p>
            <p>Quelle: Erstellt mit dem <a title="Datenschutz Generator Deutschland" href="https://www.adsimple.de/datenschutz-generator/" target="_blank" rel="follow" >Datenschutz Generator</a> von AdSimple in Kooperation mit <a href="https://www.bauenwir.de" target="_blank" rel="follow" title="">bauenwir.de</a>
            </p>
        </Container>
    );
};

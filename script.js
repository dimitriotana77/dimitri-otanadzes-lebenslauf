document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".nav-links a");

    const content = document.getElementById("dynamicContent");

    const menuIcon = document.getElementById("menuIcon");

    const navLinks = document.getElementById("navLinks");


    /* =========================================
       CONTENT SECTIONS
    ========================================= */

    const sectionTexts = {


        /* =====================================
           HOME
        ===================================== */

        home: `

            <section class="about-section">

                <h2>IT-Quereinsteiger | Software Testing | QA</h2>

                <p>
                    Willkommen auf meinem persönlichen
                    IT-Portfolio.
                </p>

                <p>
                    Ich entwickle mich beruflich in Richtung
                    Software Testing, QA und IT-Support.
                </p>

                <p>
                    Mein kurzfristiges Ziel ist der Einstieg
                    als Manual Software Tester bzw.
                    Junior QA Tester.
                </p>

            </section>

        `,


        /* =====================================
           ÜBER MICH
        ===================================== */

        about: `

            <section class="about-section">

                <h2>Über mich</h2>

                <p>
                    Als IT-Quereinsteiger möchte ich meine
                    bisherigen technischen Kenntnisse
                    weiterentwickeln und praktische
                    Berufserfahrung im IT-Bereich sammeln.
                </p>

                <p>
                    Besonders interessiere ich mich für
                    Software Testing, Fehleranalyse,
                    Qualitätssicherung und technische
                    Problemlösung.
                </p>

                <p>
                    Ich arbeite strukturiert, lerne schnell
                    und beschäftige mich gerne selbstständig
                    mit neuen technischen Themen.
                </p>

                <p>
                    Mein langfristiges Ziel ist eine
                    Entwicklung vom Manual Software Tester
                    über QA bis hin zum QA Engineer und
                    später Automation Testing.
                </p>

            </section>

        `,


        /* =====================================
           IT-KENNTNISSE
        ===================================== */

        skills: `

            <section class="about-section">

                <h2>IT-Kenntnisse</h2>

                <div class="experience-grid">


                    <div class="card">

                        <h3>Software Testing</h3>

                        <ul>

                            <li>Testfälle</li>

                            <li>Testpläne</li>

                            <li>Fehleranalyse</li>

                            <li>Bug Reporting</li>

                            <li>Web Testing</li>

                            <li>Mobile Testing</li>

                            <li>UI/UX Testing</li>

                        </ul>

                    </div>


                    <div class="card">

                        <h3>API & Datenbanken</h3>

                        <ul>

                            <li>API Testing</li>

                            <li>SQL Grundlagen</li>

                            <li>SELECT Statements</li>

                            <li>Datenbank-Grundlagen</li>

                        </ul>

                    </div>


                    <div class="card">

                        <h3>Webentwicklung</h3>

                        <ul>

                            <li>HTML</li>

                            <li>CSS</li>

                            <li>JavaScript Grundlagen</li>

                            <li>PHP Grundlagen</li>

                        </ul>

                    </div>


                    <div class="card">

                        <h3>Tools & Methoden</h3>

                        <ul>

                            <li>Git</li>

                            <li>GitHub</li>

                            <li>Trello</li>

                            <li>Agile / Scrum</li>

                        </ul>

                    </div>


                </div>

            </section>

        `,


        /* =====================================
           PROJEKTE
        ===================================== */

        projects: `

            <section class="about-section">

                <h2>Projekte</h2>

                <div class="experience-grid">


                    <div class="card">

                        <h3>Personal IT Portfolio</h3>

                        <p>
                            Entwicklung und Gestaltung
                            einer persönlichen Portfolio-Webseite
                            mit HTML, CSS und JavaScript.
                        </p>

                        <p>
                            Git und GitHub werden zur
                            Versionsverwaltung verwendet.
                        </p>

                        <a
                            href="https://github.com/dimitriotana77/mein-bewerbung"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Projekt auf GitHub öffnen
                        </a>

                    </div>


                    <div class="card">

                        <h3>Webprojekte</h3>

                        <p>
                            Eigene kleinere Webseiten mit
                            HTML und CSS.
                        </p>

                        <p>
                            Grundlagen in JavaScript und
                            responsive Webgestaltung.
                        </p>

                    </div>


                    <div class="card">

                        <h3>Software Testing</h3>

                        <p>
                            Praktische Übungen aus der
                            Weiterbildung Digital Products Testing.
                        </p>

                        <p>
                            Testfälle, Fehleranalyse,
                            Bug Reporting, API Testing,
                            Web- und Mobile Testing.
                        </p>

                    </div>


                </div>

            </section>

        `,


        /* =====================================
           ERFAHRUNG
        ===================================== */

        experience: `

            <section class="about-section">

                <h2>Erfahrung & Ausbildung</h2>

                <div class="experience-grid">


                    <div class="card">

                        <h3>08/2024 – 07/2026</h3>

                        <strong>
                            Fachkraft für Gastronomie
                        </strong>

                        <p>
                            Schwerpunkt Systemgastronomie
                        </p>

                        <p>
                            Abschluss: 24.07.2026
                        </p>

                    </div>


                    <div class="card">

                        <h3>05/2022 – 07/2022</h3>

                        <strong>
                            Digital Products Testing
                        </strong>

                        <p>
                            Smart Academy
                        </p>

                        <p>
                            Software Testing, Testfälle,
                            Fehleranalyse, Bug Reporting,
                            API-, Web- und Mobile-Testing.
                        </p>

                    </div>


                    <div class="card">

                        <h3>08/2020 – 10/2020</h3>

                        <strong>
                            Frontend Developer
                        </strong>

                        <p>
                            Smart Academy
                        </p>

                        <p>
                            HTML, CSS und
                            JavaScript Grundlagen.
                        </p>

                    </div>


                    <div class="card">

                        <h3>09/2006 – 07/2010</h3>

                        <strong>
                            Bachelor Betriebswirtschaft
                        </strong>

                        <p>
                            Georgian State Agrarian University
                        </p>

                    </div>


                </div>

            </section>

        `,


        /* =====================================
           KONTAKT
        ===================================== */

        contact: `

            <section class="about-section">

                <h2>Kontakt</h2>

                <div class="contact-card">

                    <h3>Dimitri Otanadze</h3>

                    <p>
                        Friedrichshafen, Deutschland
                    </p>

                    <p>
                        Telefon:
                        <a href="tel:+491633647768">
                            0163 3647768
                        </a>
                    </p>

                    <p>
                        E-Mail:
                        <a href="mailto:dimitriotana77@gmail.com">
                            dimitriotana77@gmail.com
                        </a>
                    </p>

                    <p>
                        GitHub:
                        <a
                            href="https://github.com/dimitriotana77"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github.com/dimitriotana77
                        </a>
                    </p>

                </div>

            </section>

        `

    };


    /* =========================================
       MOBILE MENU
    ========================================= */

    if (menuIcon) {

        menuIcon.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

    }


    /* =========================================
       NAVIGATION
    ========================================= */

    links.forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();


            const section =
                this.getAttribute("data-section");


            if (sectionTexts[section]) {

                content.innerHTML =
                    sectionTexts[section];

            }


            /* Active navigation */

            links.forEach(function (item) {

                item.classList.remove("active-link");

            });


            this.classList.add("active-link");


            /* Close mobile menu */

            if (navLinks) {

                navLinks.classList.remove("active");

            }


            /* Scroll to content */

            setTimeout(function () {

                content.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 50);

        });

    });


});

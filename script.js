document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================================
           ELEMENTS
        ====================================================== */

        const links =
            document.querySelectorAll(
                ".nav-links a"
            );


        const content =
            document.getElementById(
                "dynamicContent"
            );


        const menuIcon =
            document.getElementById(
                "menuIcon"
            );


        const navLinks =
            document.getElementById(
                "navLinks"
            );



        /* =====================================================
           DYNAMIC CONTENT
        ====================================================== */

        const sectionTexts = {


            /* =================================================
               HOME
            ================================================== */

            home: `

                <section
                    class="about-section"
                    aria-labelledby="home-title"
                >

                    <h2 id="home-title">
                        Willkommen auf meinem IT-Portfolio
                    </h2>


                    <div class="experience-grid">


                        <article class="card">

                            <h3>
                                Mein Profil
                            </h3>

                            <p>
                                IT-Quereinsteiger mit Schwerpunkt
                                Manual Software Testing, QA und
                                Webentwicklung.
                            </p>

                        </article>


                        <article class="card">

                            <h3>
                                Mein Ziel
                            </h3>

                            <p>
                                Einstieg als Manual Software Tester
                                bzw. Junior QA Tester und
                                Weiterentwicklung im QA-Bereich.
                            </p>

                        </article>


                        <article class="card">

                            <h3>
                                Meine Stärken
                            </h3>

                            <ul>

                                <li>
                                    Strukturiertes Arbeiten
                                </li>

                                <li>
                                    Lernbereitschaft
                                </li>

                                <li>
                                    Fehleranalyse
                                </li>

                                <li>
                                    Technisches Interesse
                                </li>

                            </ul>

                        </article>


                        <article class="card">

                            <h3>
                                Technischer Fokus
                            </h3>

                            <ul>

                                <li>
                                    Manual Testing
                                </li>

                                <li>
                                    QA
                                </li>

                                <li>
                                    HTML & CSS
                                </li>

                                <li>
                                    JavaScript Grundlagen
                                </li>

                            </ul>

                        </article>


                    </div>

                </section>

            `,



            /* =================================================
               ÜBER MICH
            ================================================== */

            about: `

                <section
                    class="about-section"
                    aria-labelledby="about-title"
                >

                    <h2 id="about-title">
                        Über mich
                    </h2>


                    <div class="experience-grid">


                        <article class="card">

                            <h3>
                                Quereinstieg in die IT
                            </h3>

                            <p>
                                Ich möchte meine bisherigen
                                technischen Kenntnisse weiterentwickeln
                                und praktische Berufserfahrung
                                im IT-Bereich sammeln.
                            </p>

                        </article>


                        <article class="card">

                            <h3>
                                Software Testing
                            </h3>

                            <p>
                                Mein besonderer Schwerpunkt liegt auf
                                Manual Software Testing, Fehleranalyse,
                                Qualitätssicherung und Bug Reporting.
                            </p>

                        </article>


                        <article class="card">

                            <h3>
                                Arbeitsweise
                            </h3>

                            <ul>

                                <li>
                                    Strukturiert
                                </li>

                                <li>
                                    Zuverlässig
                                </li>

                                <li>
                                    Lernbereit
                                </li>

                                <li>
                                    Selbstständig
                                </li>

                            </ul>

                        </article>


                        <article class="card">

                            <h3>
                                Langfristiges Ziel
                            </h3>

                            <p>
                                Mein langfristiges Ziel ist die
                                Weiterentwicklung vom Manual Software
                                Tester über QA bis hin zum QA Engineer
                                und später Automation Testing.
                            </p>

                        </article>


                    </div>

                </section>

            `,



            /* =================================================
               IT-KENNTNISSE
            ================================================== */

            skills: `

                <section
                    class="about-section"
                    aria-labelledby="skills-title"
                >

                    <h2 id="skills-title">
                        IT-Kenntnisse
                    </h2>


                    <div class="experience-grid">


                        <article class="card">

                            <h3>
                                Software Testing
                            </h3>

                            <ul>

                                <li>
                                    Testfälle
                                </li>

                                <li>
                                    Testpläne
                                </li>

                                <li>
                                    Fehleranalyse
                                </li>

                                <li>
                                    Bug Reporting
                                </li>

                                <li>
                                    Web Testing
                                </li>

                                <li>
                                    Mobile Testing
                                </li>

                                <li>
                                    UI/UX Testing
                                </li>

                            </ul>

                        </article>


                        <article class="card">

                            <h3>
                                API & Datenbanken
                            </h3>

                            <ul>

                                <li>
                                    API Testing
                                </li>

                                <li>
                                    SQL Grundlagen
                                </li>

                                <li>
                                    SELECT Statements
                                </li>

                                <li>
                                    Datenbank-Grundlagen
                                </li>

                            </ul>

                        </article>


                        <article class="card">

                            <h3>
                                Webentwicklung
                            </h3>

                            <ul>

                                <li>
                                    HTML
                                </li>

                                <li>
                                    CSS
                                </li>

                                <li>
                                    JavaScript Grundlagen
                                </li>

                                <li>
                                    PHP Grundlagen
                                </li>

                            </ul>

                        </article>


                        <article class="card">

                            <h3>
                                Tools & Methoden
                            </h3>

                            <ul>

                                <li>
                                    Git
                                </li>

                                <li>
                                    GitHub
                                </li>

                                <li>
                                    Trello
                                </li>

                                <li>
                                    Agile / Scrum
                                </li>

                            </ul>

                        </article>


                    </div>

                </section>

            `,



            /* =================================================
               PROJEKTE
            ================================================== */

            projects: `

                <section
                    class="about-section"
                    aria-labelledby="projects-title"
                >

                    <h2 id="projects-title">
                        Projekte
                    </h2>


                    <div class="experience-grid">


                        <article class="card">

                            <h3>
                                Personal IT Portfolio
                            </h3>


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

                        </article>


                        <article class="card">

                            <h3>
                                Webprojekte
                            </h3>


                            <p>
                                Eigene kleinere Webseiten mit
                                HTML und CSS.
                            </p>


                            <p>
                                Grundlagen in JavaScript und
                                responsive Webgestaltung.
                            </p>

                        </article>


                        <article class="card">

                            <h3>
                                Software Testing
                            </h3>


                            <p>
                                Praktische Übungen aus der
                                Weiterbildung Digital Products Testing.
                            </p>


                            <p>
                                Testfälle, Fehleranalyse,
                                Bug Reporting, API Testing,
                                Web- und Mobile Testing.
                            </p>

                        </article>


                    </div>

                </section>

            `,



            /* =================================================
               ERFAHRUNG & AUSBILDUNG
            ================================================== */

            experience: `

                <section
                    class="about-section"
                    aria-labelledby="experience-title"
                >

                    <h2 id="experience-title">
                        Erfahrung & Ausbildung
                    </h2>


                    <div class="experience-grid">


                        <article class="card">

                            <h3>
                                09/2024 – 07/2026
                            </h3>


                            <strong>
                                Fachkraft für Gastronomie
                            </strong>


                            <p>
                                Schwerpunkt Systemgastronomie
                            </p>


                            <p>
                                Abschluss: 24.07.2026
                            </p>

                        </article>


                        <article class="card">

                            <h3>
                                05/2022 – 07/2022
                            </h3>


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

                        </article>


                        <article class="card">

                            <h3>
                                08/2020 – 10/2020
                            </h3>


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

                        </article>


                        <article class="card">

                            <h3>
                                09/2006 – 07/2010
                            </h3>


                            <strong>
                                Bachelor Betriebswirtschaft
                            </strong>


                            <p>
                                Georgian State Agrarian University
                            </p>

                        </article>


                    </div>

                </section>

            `

        };



        /* =====================================================
           MOBILE MENU
        ====================================================== */

        if (menuIcon && navLinks) {

            menuIcon.addEventListener(
                "click",
                function () {

                    const isOpen =
                        navLinks.classList.toggle(
                            "active"
                        );


                    menuIcon.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );

                }
            );

        }



        /* =====================================================
           NAVIGATION
        ====================================================== */

        links.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();


                        const section =
                            this.getAttribute(
                                "data-section"
                            );


                        /* =====================================
                           LOAD DYNAMIC CONTENT
                        ====================================== */

                        if (
                            sectionTexts[section] &&
                            content
                        ) {

                            content.innerHTML =
                                sectionTexts[section];

                        }


                        /* =====================================
                           ACTIVE NAVIGATION LINK
                        ====================================== */

                        links.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active-link"
                                );

                            }
                        );


                        this.classList.add(
                            "active-link"
                        );


                        /* =====================================
                           CLOSE MOBILE MENU
                        ====================================== */

                        if (navLinks) {

                            navLinks.classList.remove(
                                "active"
                            );

                        }


                        if (menuIcon) {

                            menuIcon.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }


                        /* =====================================
                           SCROLL TO CONTENT
                        ====================================== */

                        if (content) {

                            setTimeout(
                                function () {

                                    content.scrollIntoView(
                                        {
                                            behavior: "smooth",
                                            block: "start"
                                        }
                                    );

                                },
                                50
                            );

                        }

                    }
                );

            }
        );



        /* =====================================================
           LOGO → TOP
        ====================================================== */

        const logo =
            document.querySelector(
                ".site-logo"
            );


        if (logo) {

            logo.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    window.scrollTo(
                        {
                            top: 0,
                            behavior: "smooth"
                        }
                    );

                }
            );

        }


    }
);

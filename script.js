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
   HOME — SINGLE DYNAMIC CARD
================================================== */

home: `

    <section
        class="about-section"
        aria-labelledby="home-title"
    >

        <article class="card single-card">

            <h2 id="home-title">
                Willkommen auf meinem IT-Portfolio
            </h2>


            <p>
                IT-Quereinsteiger mit Schwerpunkt
                Manual Software Testing, QA und
                Webentwicklung.
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

        </article>

    </section>

`,


 /* =================================================
   ÜBER MICH — SINGLE DYNAMIC CARD
================================================== */

about: `

    <section
        class="about-section"
        aria-labelledby="about-title"
    >

        <article class="card single-card">

            <h2 id="about-title">
                Über mich
            </h2>


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

        </article>

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
                                href="https://github.com/dimitriotana77"
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
                                Ausbildung als Fachkraft für Gastronomie
                            </strong>


                            <p>
                                Schwerpunkt: Systemgastronomie
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

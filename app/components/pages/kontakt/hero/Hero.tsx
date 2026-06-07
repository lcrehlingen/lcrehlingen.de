import ContactSVG from "../svg/ContactSVG";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center py-6 w-full">
      {/* Left side Vector Illustration (hidden on mobile) */}
      <div className="hidden h-full flex-col items-center justify-center md:flex max-w-md mx-auto w-full">
        <ContactSVG />
      </div>

      {/* Right side Contact Cards */}
      <div className="flex h-full flex-col justify-center gap-6 w-full">
        <div className="flex flex-col gap-1.5 w-full">
          <span className="text-xs font-extrabold uppercase text-red-600 tracking-wider">
            Unsere Geschäftsstelle
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-none mb-1">
            Treten Sie mit uns in Kontakt
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Haben Sie Fragen zur Mitgliedschaft, zu unseren Trainingsangeboten oder zum Pfingstsportfest?
            Bitte haben Sie Verständnis, dass wir Anfragen zu Startplätzen nicht telefonisch entgegennehmen können. Vielen Dank für Ihr Verständnis.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {/* Address Card */}
          <div className="w-full rounded-2xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <a 
              href="https://goo.gl/maps/jQbZfb5od2j4bcb49"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1 flex flex-col">
                <span className="font-extrabold text-gray-900 group-hover:text-red-600 transition-colors duration-200 text-base leading-snug">
                  Leichtathletik-Club Rehlingen e.V.
                </span>
                <p className="text-sm text-gray-500 mt-1">Beckinger Str. 31 a</p>
                <p className="text-sm text-gray-500">66780 Rehlingen-Siersburg</p>
                <span className="text-xs font-semibold text-gray-400 mt-2 flex items-center gap-1">
                  <span>Auf Google Maps anzeigen</span>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </a>
          </div>

          {/* Details Card */}
          <div className="w-full rounded-2xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            {/* Phone */}
            <div className="flex items-center gap-4 group">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-500 border border-gray-100 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.86l-.85 3.4a1 1 0 01-1.13.73L6.9 7.35a16.03 16.03 0 006 6l1.27-1.27a1 1 0 011.13-.73l3.4.85a1 1 0 01.86 1.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Telefon</span>
                <a href="tel:4968354408" className="text-sm font-bold text-gray-800 hover:text-red-600 transition-colors duration-200">
                  06835 - 4408
                </a>
              </div>
            </div>

            {/* Fax */}
            <div className="flex items-center gap-4 group">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-500 border border-gray-100 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Telefax</span>
                <span className="text-sm font-semibold text-gray-850">
                  06835 - 607431
                </span>
              </div>
            </div>

            {/* Email Geschäftsstelle */}
            <div className="flex items-center gap-4 group">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-500 border border-gray-100 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Geschäftsstelle Mail</span>
                <a href="mailto:geschaeftsstelle@lcrehlingen.de" className="text-sm font-bold text-gray-850 hover:text-red-600 transition-colors duration-200">
                  geschaeftsstelle@lcrehlingen.de
                </a>
              </div>
            </div>

            {/* Email Pfingstsportfest */}
            <div className="flex items-center gap-4 group">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4l-2-3h-2zm0 0H8l2-3h2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">Pfingstsportfest Mail</span>
                <a href="mailto:pfingstsportfest@lcrehlingen.de" className="text-sm font-bold text-gray-850 hover:text-red-600 transition-colors duration-200">
                  pfingstsportfest@lcrehlingen.de
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons Row */}
        <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
          <a
            href="tel:4968354408"
            className="flex-1 text-center py-3.5 px-6 font-bold uppercase tracking-wide text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md shadow-red-200/50 transition-all duration-200 text-sm flex items-center justify-center gap-2"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.86l-.85 3.4a1 1 0 01-1.13.73L6.9 7.35a16.03 16.03 0 006 6l1.27-1.27a1 1 0 011.13-.73l3.4.85a1 1 0 01.86 1.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Anrufen</span>
          </a>
          <a
            href="mailto:geschaeftsstelle@lcrehlingen.de"
            className="flex-1 text-center py-3.5 px-6 font-bold uppercase tracking-wide text-gray-700 bg-white hover:bg-red-50/20 hover:text-red-600 border border-gray-200 hover:border-red-100 rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Mail schreiben</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import ContactSVG from "../svg/ContactSVG";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="hidden h-full flex-col items-center justify-center md:flex">
        <ContactSVG />
      </div>
      <div className="flex h-full flex-col justify-center gap-4 align-middle">
        <div className="flex flex-col gap-2">
          <span className="font-bold uppercase text-gray-600">
            Geschäftsstelle
          </span>
          <div className="text-bold w-full rounded-lg bg-gray-300 p-3 text-gray-900">
            <a href="https://goo.gl/maps/jQbZfb5od2j4bcb49">
              <p>Leichtathletik-Club Rehlingen e.V.</p>
              <p>Beckinger Str. 31 a</p>
              <p>66780 Rehlingen-Siersburg</p>
            </a>
          </div>
        </div>
        <div className="text-bold w-full rounded-lg bg-gray-300 p-3 text-gray-900">
          <p>
            Telefon: <a href="tel:4968354408">06835 - 4408</a>
          </p>
          <p>Fax: 06835 - 607431 </p>
          <p>
            Mail:
            <a href="mailto:geschaeftsstelle@lcrehlingen.de">
              geschaeftsstelle@lcrehlingen.de
            </a>
          </p>
          <p>
            Mail (Meeting):
            <a href="mailto:pfingstsportfest@lcrehlingen.de">
              pfingstsportfest@lcrehlingen.de
            </a>
          </p>
        </div>

        <a
          href="tel:4968354408"
          type="button"
          className="w-full rounded-lg bg-indigo-500 p-3 font-bold uppercase tracking-wide text-gray-100"
        >
          Anrufen
        </a>
        <a
          href="mailto:geschaeftsstelle@lcrehlingen.de"
          type="button"
          className="w-full rounded-lg bg-indigo-500 p-3 font-bold uppercase tracking-wide text-gray-100"
        >
          Mail schreiben
        </a>
      </div>
    </div>
  );
}

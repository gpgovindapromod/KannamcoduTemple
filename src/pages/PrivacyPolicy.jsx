import PageHero from '../components/PageHero';
import DarshanBar from '../components/DarshanBar';
import SectionHeader from '../components/SectionHeader';
import { TEMPLE_INFO } from '../utils/constants';

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy & Disclaimers"
        subtitle="സ്വകാര്യതാ നയവും വിവരങ്ങളും"
        bgImage="/images/temple/temple-front.jpg"
      />
      <DarshanBar />

      <section className="py-5 bg-light">
        <div className="container py-3">
          <SectionHeader
            label="Legal & Transparency"
            title="Privacy Policy & Disclaimers"
            titleMal="സ്വകാര്യതാ നയവും വ്യവസ്ഥകളും"
          />

          <div
            className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mx-auto"
            style={{ maxWidth: '900px', borderColor: 'var(--border-gold)' }}
          >
            {/* Section 1: Nature of Website */}
            <h4 className="fw-bold mb-3" style={{ color: 'var(--dark-brown)' }}>
              1. Nature and Status of the Website
            </h4>
            <p className="text-muted leading-relaxed">
              This website (<strong>kannamkodetemple.netlify.app</strong>) is the official public
              informational portal of <strong>{TEMPLE_INFO.name}</strong>, located at Vettikkavala,
              Kottarakkara, Kollam District, Kerala, India. It is operated for devotional, cultural,
              and informational purposes by the Temple Administration Committee (ഭരണസമിതി).
            </p>

            <hr className="my-4" />

            {/* Section 2: Data Protection Compliance */}
            <h4 className="fw-bold mb-3" style={{ color: 'var(--dark-brown)' }}>
              2. Privacy & Data Handling (DPDP Act, 2023 Compliance)
            </h4>
            <p className="text-muted leading-relaxed">
              We respect your privacy under the{' '}
              <em>Digital Personal Data Protection Act, 2023 (DPDPA)</em> and relevant Indian IT
              regulations:
            </p>
            <ul className="text-muted">
              <li className="mb-2">
                <strong>No Mandatory User Registration:</strong> You can browse all sections (Pooja
                timings, history, festival calendar, committee details, and photo gallery) without
                creating an account or submitting personal information.
              </li>
              <li className="mb-2">
                <strong>No Third-Party Ad Trackers or Spyware:</strong> We do not deploy commercial
                advertising cookies or behavioral profiling trackers.
              </li>
              <li className="mb-2">
                <strong>Vazhipadu Calculator & WhatsApp Inquiries:</strong> When using the
                interactive Vazhipadu calculator, name and birth star details are processed solely
                on your local device to format a pre-filled WhatsApp message. No data is stored on
                external servers unless sent directly by you via WhatsApp.
              </li>
              <li className="mb-2">
                <strong>Contact Inquiries:</strong> Messages or queries sent through phone or email
                are used strictly to respond to your devotional inquiry and are not shared with any
                third party.
              </li>
            </ul>

            <hr className="my-4" />

            {/* Section 3: Financial Transactions */}
            <h4 className="fw-bold mb-3" style={{ color: 'var(--dark-brown)' }}>
              3. Payments and Offerings Disclaimer
            </h4>
            <p className="text-muted leading-relaxed">
              This website{' '}
              <strong>
                does not process direct online financial transactions, credit card payments, or bank
                transfers on-site
              </strong>
              . All offering rates and pooja charges published on this website are for informational
              reference only. Devotees are advised to confirm availability and schedule directly
              with the temple counter or authorized temple officials before finalizing bookings.
            </p>

            <hr className="my-4" />

            {/* Section 4: Copyright and Intellectual Property */}
            <h4 className="fw-bold mb-3" style={{ color: 'var(--dark-brown)' }}>
              4. Copyright and Intellectual Property Notice
            </h4>
            <p className="text-muted leading-relaxed">
              All visual assets, temple photographs, deity imagery, festive documentation, and
              Malayalam content published on this website are the property of{' '}
              <strong>{TEMPLE_INFO.name}</strong> or published with customary devotional permission.
              Unauthorized reproduction, commercial redistribution, or distortion of sacred imagery
              is strictly prohibited under the <em>Copyright Act, 1957</em>.
            </p>

            <hr className="my-4" />

            {/* Section 5: Grievance Redressal and Contact */}
            <h4 className="fw-bold mb-3" style={{ color: 'var(--dark-brown)' }}>
              5. Grievance Officer & Contact Information
            </h4>
            <p className="text-muted leading-relaxed mb-2">
              For inquiries regarding website content, privacy concerns, or institutional
              clarifications, please reach out to the authorized Temple Committee administration:
            </p>
            <div className="p-3 bg-light rounded-3 border">
              <p className="mb-1">
                <strong>Institution:</strong> {TEMPLE_INFO.name}
              </p>
              <p className="mb-1">
                <strong>Address:</strong> {TEMPLE_INFO.location.address}
              </p>
              <p className="mb-1">
                <strong>Telephone Helpline:</strong> {TEMPLE_INFO.phones[0].display} /{' '}
                {TEMPLE_INFO.phones[1].display}
              </p>
              <p className="mb-1">
                <strong>WhatsApp Inquiries:</strong> {TEMPLE_INFO.whatsapp.display}
              </p>
              <p className="mb-0">
                <strong>Email:</strong> {TEMPLE_INFO.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

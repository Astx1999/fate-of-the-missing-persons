import { useTranslation } from 'react-i18next'
import './Venue.scss'

const MAP_QUERY = 'Armenia+Marriott+Hotel,+1+Amiryan+Street,+Yerevan,+Armenia'

export function Venue() {
  const { t, i18n } = useTranslation()
  const mapLang = i18n.language.startsWith('hy') ? 'hy' : 'en'
  const mapEmbedUrl = `https://www.google.com/maps?q=${MAP_QUERY}&hl=${mapLang}&z=16&output=embed`

  return (
    <section className="venue" id="venue" aria-labelledby="venue-title">
      <div className="venue__inner">
        <div className="venue__header">
          <p className="venue__eyebrow">{t('venue.eyebrow')}</p>
          <h2 className="venue__title" id="venue-title">
            {t('venue.title')}
          </h2>
        </div>

        <div className="venue__body">
          <div className="venue__details">
            <p>
              <strong>{t('venue.addressLabel')}</strong> {t('venue.address')}
            </p>
            <p>
              <strong>{t('venue.datesLabel')}</strong> {t('venue.dates')}
            </p>
          </div>

          <div className="venue__map">
            <iframe
              title={t('venue.mapAlt')}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <p className="venue__online-note">{t('venue.onlineNote')}</p>

          <div className="venue__contact">
            <h3>{t('venue.contact')}</h3>
            <p className="venue__contact-intro">{t('venue.contactIntro')}</p>
            <p>
              <strong>{t('venue.enquiries')}</strong>
              <br />
              {t('venue.emailPlaceholder')}
            </p>
            <p>
              <strong>{t('venue.phoneLabel')}</strong>
              <br />
              {t('venue.phonePlaceholder')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

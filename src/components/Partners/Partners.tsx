import { useTranslation } from 'react-i18next'
import partnerIcrc from '../../assets/partner-icrc.png'
import partnerCircular from '../../assets/partner-circular.png'
import './Partners.scss'

export function Partners() {
  const { t } = useTranslation()

  return (
    <section className="partners" id="partners" aria-labelledby="partners-title">
      <div className="partners__inner">
        <p className="partners__eyebrow">{t('partners.eyebrow')}</p>
        <h2 className="partners__title" id="partners-title">
          {t('partners.title')}
        </h2>
        <p className="partners__lead">{t('partners.lead')}</p>

        <div className="partners__logos">
          <img src={partnerIcrc} alt={t('partners.icrcAlt')} />
          <img
            className="partners__logo-circle"
            src={partnerCircular}
            alt={t('partners.emblemAlt')}
          />
        </div>
      </div>
    </section>
  )
}

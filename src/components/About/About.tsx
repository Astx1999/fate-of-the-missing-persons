import { useTranslation } from 'react-i18next'
import './About.scss'

export function About() {
  const { t } = useTranslation()

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__inner">
        <div className="about__row">
          <div className="about__aside">
            <h2 className="about__title" id="about-title">
              {t('about.title')}
            </h2>
          </div>
          <div className="about__copy">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>
        </div>

        <div className="about__row about__row--objectives">
          <div className="about__aside">
            <p className="about__eyebrow">{t('about.objectives')}</p>
          </div>
          <div className="about__copy">
            <p>{t('about.objectivesText')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

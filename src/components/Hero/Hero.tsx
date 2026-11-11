import { useTranslation } from 'react-i18next'
import heroBg from '../../assets/hero-bg.png'
import heroArtwork from '../../assets/hero-artwork.svg?raw'
import './Hero.scss'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <img src={heroBg} alt="" />
      </div>

      <div
        className="hero__art"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: heroArtwork }}
      />

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">{t('hero.eyebrow')}</p>
          <h1 className="hero__title" id="hero-title">
            <span className="hero__title-light">{t('hero.titleLight')}</span>
            <span className="hero__title-bold">{t('hero.titleBold')}</span>
          </h1>
          <p className="hero__subtitle">{t('brand.subtitle')}</p>
          <p className="hero__meta">
            {t('hero.dates')} | {t('hero.location')}
          </p>
          <p className="hero__facts">
            {t('hero.format')}
            <br />
            {t('hero.languages')}
          </p>
          <p className="hero__lead">{t('hero.lead')}</p>
          <div className="hero__actions">
            <a className="btn btn--gold" href="#programme">
              {t('hero.viewProgramme')}
            </a>
            <a className="btn btn--outline" href="#about">
              {t('hero.aboutConference')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useTranslation } from 'react-i18next'
import { themeKeys } from '../../data/content'
import './Themes.scss'

export function Themes() {
  const { t } = useTranslation()

  return (
    <section className="themes" aria-labelledby="themes-title">
      <div className="themes__inner">
        <div className="themes__intro">
          <div>
            <p className="themes__eyebrow">{t('themes.eyebrow')}</p>
            <h2 className="themes__title" id="themes-title">
              {t('themes.title')}
            </h2>
          </div>
          <p className="themes__copy">{t('themes.lead')}</p>
        </div>

        <ol className="themes__list">
          {themeKeys.map((key, index) => (
            <li className="themes__item" key={key}>
              <span className="themes__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="themes__text">{t(key)}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

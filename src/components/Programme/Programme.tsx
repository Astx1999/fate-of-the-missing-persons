import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import chevron from '../../assets/chevron-down.svg'
import {
  programmeDay1,
  programmeDay2,
  type ProgrammeItem,
} from '../../data/content'
import './Programme.scss'

export function Programme() {
  const { t } = useTranslation()
  const [day, setDay] = useState<1 | 2>(1)
  const items = day === 1 ? programmeDay1 : programmeDay2

  return (
    <section className="programme" id="programme" aria-labelledby="programme-title">
      <div className="programme__inner">
        <p className="programme__eyebrow">{t('programme.eyebrow')}</p>
        <h2 className="programme__title" id="programme-title">
          {t('programme.title')}
        </h2>
        <p className="programme__lead">{t('programme.lead')}</p>
        <p className="programme__notice">{t('programme.draftNotice')}</p>
        <p className="programme__timezone">{t('programme.timezone')}</p>

        <div
          className="programme__tabs"
          role="tablist"
          aria-label={t('programme.daysLabel')}
        >
          <button
            type="button"
            role="tab"
            aria-selected={day === 1}
            className={day === 1 ? 'is-active' : ''}
            onClick={() => setDay(1)}
          >
            {t('programme.day1')}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={day === 2}
            className={day === 2 ? 'is-active' : ''}
            onClick={() => setDay(2)}
          >
            {t('programme.day2')}
          </button>
        </div>

        <p className="programme__day-note">
          {t(day === 1 ? 'programme.day1Note' : 'programme.day2Note')}
        </p>

        <ul className="programme__list">
          {items.map((item) => (
            <ProgrammeRow
              key={`${day}-${item.time}-${item.titleKey}`}
              item={item}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

function ProgrammeRow({ item }: { item: ProgrammeItem }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(Boolean(item.defaultOpen))

  return (
    <li
      className={[
        'programme__item',
        item.muted ? 'is-muted' : '',
        item.accentTitle ? 'is-accent' : '',
        open ? 'is-open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="programme__row">
        <p className="programme__time">{item.time}</p>
        <div className="programme__main">
          <p className="programme__item-title">{t(item.titleKey)}</p>
          {item.tags ? (
            <div className="programme__tags">
              {item.tags.map((tag) => (
                <span
                  key={tag.labelKey}
                  className={`programme__tag programme__tag--${tag.tone}`}
                >
                  {t(tag.labelKey)}
                </span>
              ))}
            </div>
          ) : null}
          {open && item.detailsKey ? (
            <p className="programme__details">{t(item.detailsKey)}</p>
          ) : null}
        </div>
        {item.expandable ? (
          <button
            type="button"
            className="programme__toggle"
            aria-expanded={open}
            aria-label={t(open ? 'programme.collapse' : 'programme.expand')}
            onClick={() => setOpen((value) => !value)}
          >
            <img src={chevron} alt="" width={12} height={22} />
          </button>
        ) : (
          <span className="programme__toggle-spacer" aria-hidden="true" />
        )}
      </div>
    </li>
  )
}

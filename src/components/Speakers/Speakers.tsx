import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import arrowNext from '../../assets/arrow-next.svg'
import arrowPrev from '../../assets/arrow-prev.svg'
import {
  speakerFilters,
  speakers,
  type Speaker,
} from '../../data/content'
import { SpeakerModal } from './SpeakerModal'
import './Speakers.scss'

const PAGE_SIZE = 4

export function Speakers() {
  const { t, i18n } = useTranslation()
  const [filter, setFilter] = useState<(typeof speakerFilters)[number]['id']>('all')
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<Speaker | null>(null)

  const filtered = useMemo(() => {
    if (filter === 'all') return speakers
    return speakers.filter((speaker) => speaker.category === filter)
  }, [filter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <section className="speakers" id="speakers" aria-labelledby="speakers-title">
      <div className="speakers__inner">
        <p className="speakers__eyebrow">{t('speakers.eyebrow')}</p>
        <h2 className="speakers__title" id="speakers-title">
          {t('speakers.title')}
        </h2>
        <p className="speakers__lead">{t('speakers.lead')}</p>

        <div
          className="speakers__filters"
          role="tablist"
          aria-label={t('speakers.filtersLabel')}
        >
          {speakerFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              className={filter === item.id ? 'is-active' : ''}
              onClick={() => {
                setFilter(item.id)
                setPage(1)
              }}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </div>

        <ul className="speakers__grid">
          {visible.map((speaker) => (
            <li key={speaker.id}>
              <button
                type="button"
                className="speaker-card"
                onClick={() => setSelected(speaker)}
              >
                <div className="speaker-card__photo">
                  {speaker.photo ? <img src={speaker.photo} alt="" /> : null}
                </div>
                <div className="speaker-card__body">
                  <h3>{t(speaker.nameKey)}</h3>
                  <p>{t(speaker.roleKey)}</p>
                  <p className="speaker-card__country">{t(speaker.organizationKey)}</p>
                  <p>
                    {t(
                      speaker.category === 'moderators'
                        ? 'speakers.moderator'
                        : 'speakers.panellist',
                    )}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <div className="speakers__pager">
          <button
            type="button"
            className="speakers__pager-btn speakers__pager-btn--prev"
            aria-label={t('speakers.prev')}
            disabled={currentPage <= 1}
            onClick={() => setPage((value) => Math.max(1, value - 1))}
          >
            <img src={arrowPrev} alt="" width={26} height={15} />
          </button>
          <button
            type="button"
            className="speakers__pager-btn speakers__pager-btn--next"
            aria-label={t('speakers.next')}
            disabled={currentPage >= totalPages}
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
          >
            <img src={arrowNext} alt="" width={26} height={15} />
          </button>
          <span className="speakers__pager-count">
            {currentPage}/{totalPages}
          </span>
        </div>
      </div>

      {selected ? (
        <SpeakerModal
          key={`${selected.id}-${i18n.language}`}
          speaker={selected}
          onClose={() => setSelected(null)}
        />
      ) : null}
    </section>
  )
}

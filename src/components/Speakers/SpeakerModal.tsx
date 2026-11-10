import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import type { Speaker } from '../../data/content'
import './SpeakerModal.scss'

type SpeakerModalProps = {
  speaker: Speaker
  onClose: () => void
}

export function SpeakerModal({ speaker, onClose }: SpeakerModalProps) {
  const { t } = useTranslation()
  const closeRef = useRef<HTMLButtonElement>(null)
  const bio = speaker.bioKey ? t(speaker.bioKey) : ''
  const hasBio = Boolean(bio && bio !== speaker.bioKey)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div className="speaker-modal" role="presentation">
      <button
        type="button"
        className="speaker-modal__backdrop"
        aria-label={t('speakers.closeDetails')}
        onClick={onClose}
      />

      <div
        className="speaker-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="speaker-modal-title"
      >
        <button
          ref={closeRef}
          type="button"
          className="speaker-modal__close"
          aria-label={t('ui.close')}
          onClick={onClose}
        >
          <span aria-hidden="true" />
        </button>

        <div className="speaker-modal__top">
          <div className="speaker-modal__photo">
            {speaker.photo ? <img src={speaker.photo} alt="" /> : null}
          </div>

          <div className="speaker-modal__meta">
            <h3 id="speaker-modal-title">{t(speaker.nameKey)}</h3>
            <p>{t(speaker.roleKey)}</p>
            <p className="speaker-modal__country">{t(speaker.organizationKey)}</p>
            <p>
              {t(
                speaker.category === 'moderators'
                  ? 'speakers.moderator'
                  : 'speakers.panellist',
              )}
            </p>
            <a className="speaker-modal__cta" href="#programme" onClick={onClose}>
              {t('speakers.viewInProgramme')}
            </a>
          </div>
        </div>

        {hasBio ? <p className="speaker-modal__bio">{bio}</p> : null}
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import logoIcon from '../../assets/logo-icon.svg'
import logoWordmark from '../../assets/logo-wordmark.svg'
import { navLinks } from '../../data/content'
import type { AppLanguage } from '../../i18n'
import './Header.scss'

export function Header() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(() => window.location.hash)
  const language = (i18n.language.startsWith('hy') ? 'hy' : 'en') as AppLanguage

  const setLanguage = (next: AppLanguage) => {
    void i18n.changeLanguage(next)
  }

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const syncFromHash = () => setActiveHref(window.location.hash)
    window.addEventListener('hashchange', syncFromHash)

    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('hashchange', syncFromHash)
      observer.disconnect()
    }
  }, [])

  return (
    <header className={`site-header${menuOpen ? ' is-menu-open' : ''}`}>
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label={t('brand.name')}>
          <img src={logoIcon} alt="" width={62} height={59} />
          <img
            className="site-header__wordmark"
            src={logoWordmark}
            alt={t('brand.name')}
            width={137}
            height={30}
          />
        </a>

        <nav className="site-header__nav site-header__nav--desktop" aria-label={t('nav.primary')}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeHref === link.href ? 'is-active' : undefined}
              aria-current={activeHref === link.href ? 'true' : undefined}
            >
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        <div
          className="site-header__lang site-header__lang--desktop"
          role="group"
          aria-label={t('nav.language')}
        >
          <button
            type="button"
            className={language === 'hy' ? 'is-active' : ''}
            onClick={() => setLanguage('hy')}
          >
            HY
          </button>
          <button
            type="button"
            className={language === 'en' ? 'is-active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>

        <button
          className={`site-header__burger${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.menu')}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`site-header__mobile${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="site-header__mobile-nav" aria-label={t('nav.primary')}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeHref === link.href ? 'is-active' : undefined}
              aria-current={activeHref === link.href ? 'true' : undefined}
              onClick={closeMenu}
            >
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        <div
          className="site-header__lang site-header__lang--mobile"
          role="group"
          aria-label={t('nav.language')}
        >
          <button
            type="button"
            className={language === 'hy' ? 'is-active' : ''}
            onClick={() => setLanguage('hy')}
          >
            HY
          </button>
          <button
            type="button"
            className={language === 'en' ? 'is-active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}

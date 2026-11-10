import { useTranslation } from 'react-i18next'
import logoIcon from '../../assets/logo-icon-lg.svg'
import { navLinks } from '../../data/content'
import './Footer.scss'

export function Footer() {
  const { t } = useTranslation()

  const footerLinks = [
    ...navLinks.filter((link) => link.href !== '#venue'),
    { href: '#venue', labelKey: 'nav.venue' as const },
  ]

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src={logoIcon} alt="" width={109} height={103} />
          <div>
            <p className="site-footer__name">{t('brand.name')}</p>
            <p className="site-footer__brand-meta">
              {`${t('brand.subtitle')}\n${t('brand.dates')}`}
            </p>
          </div>
        </div>

        <div className="site-footer__links">
          <p>{t('footer.quickLinks')}</p>
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {t(link.labelKey)}
            </a>
          ))}
        </div>

        <div className="site-footer__contact">
          <p className="site-footer__contact-title">{t('footer.contact')}</p>
          <p>{t('footer.emailPlaceholder')}</p>
          <p>{t('footer.phonePlaceholder')}</p>
          <a href="#privacy">{t('footer.privacy')}</a>
          <p className="site-footer__copy">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

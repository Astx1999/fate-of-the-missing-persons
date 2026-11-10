import speakerRiepl from '../assets/speaker-riepl.png'
import speakerCitroni from '../assets/speaker-citroni.png'
import speakerKirakosyan from '../assets/speaker-kirakosyan.png'
import speakerGimigliano from '../assets/speaker-gimigliano.png'

export const navLinks = [
  { href: '#about', labelKey: 'nav.about' },
  { href: '#programme', labelKey: 'nav.programme' },
  { href: '#speakers', labelKey: 'nav.speakers' },
  { href: '#partners', labelKey: 'nav.partners' },
  { href: '#venue', labelKey: 'nav.venueContact' },
] as const

export const themeKeys = [
  'themes.items.1',
  'themes.items.2',
  'themes.items.3',
  'themes.items.4',
] as const

export type ProgrammeTag = {
  labelKey: string
  tone: 'navy' | 'blue'
}

export type ProgrammeItem = {
  time: string
  titleKey: string
  muted?: boolean
  accentTitle?: boolean
  tags?: ProgrammeTag[]
  detailsKey?: string
  expandable?: boolean
  defaultOpen?: boolean
}

export const programmeDay1: ProgrammeItem[] = [
  {
    time: '08:00–09:30',
    titleKey: 'programme.items.breakfast',
    muted: true,
  },
  {
    time: '09:30–10:00',
    titleKey: 'programme.items.registrationCoffee',
    accentTitle: true,
    tags: [
      { labelKey: 'programme.tags.registration', tone: 'navy' },
      { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    ],
    detailsKey: 'programme.items.registrationDetails',
    expandable: true,
    defaultOpen: true,
  },
  {
    time: '10:00–10:40',
    titleKey: 'programme.items.opening',
    tags: [
      { labelKey: 'programme.tags.ceremony', tone: 'navy' },
      { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    ],
    detailsKey: 'programme.items.openingDetails',
    expandable: true,
  },
  {
    time: '10:40–11:40',
    titleKey: 'programme.items.session1',
    tags: [
      { labelKey: 'programme.tags.session', tone: 'navy' },
      { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    ],
    detailsKey: 'programme.items.session1Details',
    expandable: true,
  },
  {
    time: '11:40–12:00',
    titleKey: 'programme.items.coffeeBreak',
    muted: true,
  },
  {
    time: '12:00–13:00',
    titleKey: 'programme.items.session2',
    tags: [
      { labelKey: 'programme.tags.session', tone: 'navy' },
      { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    ],
    detailsKey: 'programme.items.session2Details',
    expandable: true,
  },
  {
    time: '13:00–14:30',
    titleKey: 'programme.items.lunch',
    muted: true,
  },
  {
    time: '14:30–15:30',
    titleKey: 'programme.items.session3',
    tags: [
      { labelKey: 'programme.tags.session', tone: 'navy' },
      { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    ],
    detailsKey: 'programme.items.session3Details',
    expandable: true,
  },
  {
    time: '15:30–16:30',
    titleKey: 'programme.items.pressTime',
    tags: [
      { labelKey: 'programme.tags.media', tone: 'navy' },
      { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    ],
    detailsKey: 'programme.items.pressTimeDetails',
    expandable: true,
  },
  {
    time: '16:30–17:30',
    titleKey: 'programme.items.closingDay1',
    tags: [
      { labelKey: 'programme.tags.session', tone: 'navy' },
      { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    ],
    detailsKey: 'programme.items.closingDay1Details',
    expandable: true,
  },
  {
    time: '17:30–18:00',
    titleKey: 'programme.items.transfer',
    muted: true,
  },
  {
    time: '18:00–19:00',
    titleKey: 'programme.items.dinner',
    muted: true,
  },
]

export const programmeDay2: ProgrammeItem[] = [
  {
    time: '08:00–09:30',
    titleKey: 'programme.items.breakfast',
    muted: true,
  },
  {
    time: '10:00–11:00',
    titleKey: 'programme.items.session4',
    tags: [
      { labelKey: 'programme.tags.session', tone: 'navy' },
      { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    ],
    detailsKey: 'programme.items.session4Details',
    expandable: true,
  },
  {
    time: '11:00–11:20',
    titleKey: 'programme.items.coffeeBreak',
    muted: true,
  },
  {
    time: '11:20–12:30',
    titleKey: 'programme.items.session5',
    tags: [
      { labelKey: 'programme.tags.session', tone: 'navy' },
      { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    ],
    detailsKey: 'programme.items.session5Details',
    expandable: true,
  },
  {
    time: '12:30–13:30',
    titleKey: 'programme.items.lunchShort',
    muted: true,
  },
  {
    time: '13:30–14:30',
    titleKey: 'programme.items.session6',
    tags: [
      { labelKey: 'programme.tags.session', tone: 'navy' },
      { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    ],
    detailsKey: 'programme.items.session6Details',
    expandable: true,
  },
  {
    time: '14:30–15:30',
    titleKey: 'programme.items.visionExercise',
    tags: [
      { labelKey: 'programme.tags.session', tone: 'navy' },
      { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    ],
    detailsKey: 'programme.items.visionExerciseDetails',
    expandable: true,
  },
  {
    time: '15:30–17:30',
    titleKey: 'programme.items.closingDay2',
    tags: [
      { labelKey: 'programme.tags.session', tone: 'navy' },
      { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    ],
    detailsKey: 'programme.items.closingDay2Details',
    expandable: true,
  },
  {
    time: '17:30',
    titleKey: 'programme.items.departure',
    muted: true,
  },
]

export type Speaker = {
  id: string
  nameKey: string
  roleKey: string
  organizationKey: string
  category: 'opening' | 'moderators' | 'panellists'
  photo?: string
  bioKey?: string
}

export const speakers: Speaker[] = [
  {
    id: 'riepl',
    nameKey: 'speakers.people.riepl.name',
    roleKey: 'speakers.people.riepl.role',
    organizationKey: 'speakers.people.riepl.organization',
    category: 'panellists',
    photo: speakerRiepl,
    bioKey: 'speakers.people.riepl.bio',
  },
  {
    id: 'citroni',
    nameKey: 'speakers.people.citroni.name',
    roleKey: 'speakers.people.citroni.role',
    organizationKey: 'speakers.people.citroni.organization',
    category: 'panellists',
    photo: speakerCitroni,
    bioKey: 'speakers.people.citroni.bio',
  },
  {
    id: 'kirakosyan',
    nameKey: 'speakers.people.kirakosyan.name',
    roleKey: 'speakers.people.kirakosyan.role',
    organizationKey: 'speakers.people.kirakosyan.organization',
    category: 'panellists',
    photo: speakerKirakosyan,
    bioKey: 'speakers.people.kirakosyan.bio',
  },
  {
    id: 'gimigliano',
    nameKey: 'speakers.people.gimigliano.name',
    roleKey: 'speakers.people.gimigliano.role',
    organizationKey: 'speakers.people.gimigliano.organization',
    category: 'panellists',
    photo: speakerGimigliano,
    bioKey: 'speakers.people.gimigliano.bio',
  },
  {
    id: 'melikyan',
    nameKey: 'speakers.people.melikyan.name',
    roleKey: 'speakers.people.melikyan.role',
    organizationKey: 'speakers.people.melikyan.organization',
    category: 'panellists',
    bioKey: 'speakers.people.melikyan.bio',
  },
  {
    id: 'fonderbider',
    nameKey: 'speakers.people.fonderbider.name',
    roleKey: 'speakers.people.fonderbider.role',
    organizationKey: 'speakers.people.fonderbider.organization',
    category: 'panellists',
    bioKey: 'speakers.people.fonderbider.bio',
  },
  {
    id: 'salado',
    nameKey: 'speakers.people.salado.name',
    roleKey: 'speakers.people.salado.role',
    organizationKey: 'speakers.people.salado.organization',
    category: 'panellists',
    bioKey: 'speakers.people.salado.bio',
  },
  {
    id: 'pantelides',
    nameKey: 'speakers.people.pantelides.name',
    roleKey: 'speakers.people.pantelides.role',
    organizationKey: 'speakers.people.pantelides.organization',
    category: 'panellists',
    bioKey: 'speakers.people.pantelides.bio',
  },
  {
    id: 'muftuzade',
    nameKey: 'speakers.people.muftuzade.name',
    roleKey: 'speakers.people.muftuzade.role',
    organizationKey: 'speakers.people.muftuzade.organization',
    category: 'panellists',
    bioKey: 'speakers.people.muftuzade.bio',
  },
  {
    id: 'gentile',
    nameKey: 'speakers.people.gentile.name',
    roleKey: 'speakers.people.gentile.role',
    organizationKey: 'speakers.people.gentile.organization',
    category: 'panellists',
    bioKey: 'speakers.people.gentile.bio',
  },
  {
    id: 'zaccaro',
    nameKey: 'speakers.people.zaccaro.name',
    roleKey: 'speakers.people.zaccaro.role',
    organizationKey: 'speakers.people.zaccaro.organization',
    category: 'moderators',
  },
  {
    id: 'kardumyan',
    nameKey: 'speakers.people.kardumyan.name',
    roleKey: 'speakers.people.kardumyan.role',
    organizationKey: 'speakers.people.kardumyan.organization',
    category: 'moderators',
  },
]

export const speakerFilters = [
  { id: 'all', labelKey: 'speakers.filters.all' },
  { id: 'moderators', labelKey: 'speakers.filters.moderators' },
  { id: 'panellists', labelKey: 'speakers.filters.panellists' },
] as const

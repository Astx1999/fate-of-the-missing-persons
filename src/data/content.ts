import speakerRiepl from '../assets/speaker-riepl.png'
import speakerCitroni from '../assets/speaker-citroni.png'
import speakerKirakosyan from '../assets/speaker-kirakosyan.png'
import speakerGimigliano from '../assets/speaker-gimigliano.jpg'
import speakerMelikyan from '../assets/speaker-melikyan.jpg'
import speakerFonderbider from '../assets/speaker-fonderbider.jpg'
import speakerSalado from '../assets/speaker-salado.jpg'
import speakerPantelides from '../assets/speaker-pantelides.jpg'
import speakerMuftuzade from '../assets/speaker-muftuzade.jpg'
import speakerGentile from '../assets/speaker-gentile.jpg'
import speakerKardumyan from '../assets/speaker-kardumyan.jpg'
import speakerPoghosyan from '../assets/speaker-poghosyan.jpg'
import speakerPashinyan from '../assets/speaker-pashinyan.jpg'
import speakerSimonyan from '../assets/speaker-simonyan.jpg'
import speakerMirzoyan from '../assets/speaker-mirzoyan.jpg'
import speakerSafaryan from '../assets/speaker-safaryan.jpg'
import speakerSpoljaric from '../assets/speaker-spoljaric.jpg'
import speakerZaccaro from '../assets/speaker-zaccaro.png'
import speakerGuzman from '../assets/speaker-guzman.jpg'
import speakerRobichon from '../assets/speaker-robichon.png'
import speakerBeruto from '../assets/speaker-beruto.png'

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
    time: '08:00–08:30',
    titleKey: 'programme.items.registrationCoffee',
    accentTitle: true,
    // tags: [
    //   { labelKey: 'programme.tags.registration', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.registrationDetails',
    expandable: true,
    defaultOpen: true,
  },
  {
    time: '09:00–10:00',
    titleKey: 'programme.items.opening',
    // tags: [
    //   { labelKey: 'programme.tags.ceremony', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.openingDetails',
    expandable: true,
  },
  {
    time: '10:00–11:30',
    titleKey: 'programme.items.session1',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.session1Details',
    expandable: true,
  },
  {
    time: '11:30–12:00',
    titleKey: 'programme.items.coffeeBreak',
    muted: true,
  },
  {
    time: '12:00–13:30',
    titleKey: 'programme.items.session2',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.session2Details',
    expandable: true,
  },
  {
    time: '13:30–14:30',
    titleKey: 'programme.items.lunch',
    muted: true,
  },
  {
    time: '14:30–16:40',
    titleKey: 'programme.items.session3',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.session3Details',
    expandable: true,
  },
  {
    time: '16:40–17:00',
    titleKey: 'programme.items.coffeeBreak',
    muted: true,
  },
  {
    time: '17:00–17:20',
    titleKey: 'programme.items.closingDay1',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.closingDay1Details',
    expandable: true,
  },
]

export const programmeDay2: ProgrammeItem[] = [
  {
    time: '09:00–09:30',
    titleKey: 'programme.items.welcomeCoffee',
    muted: true,
  },
  {
    time: '09:30–10:00',
    titleKey: 'programme.items.openingDay2',
    // tags: [
    //   { labelKey: 'programme.tags.ceremony', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.openingDay2Details',
    expandable: true,
  },
  {
    time: '10:00–10:25',
    titleKey: 'programme.items.itfPresentation',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.itfPresentationDetails',
    expandable: true,
  },
  {
    time: '10:25–10:45',
    titleKey: 'programme.items.session4',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.session4Details',
    expandable: true,
  },
  {
    time: '10:45–11:20',
    titleKey: 'programme.items.panel1',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.panel1Details',
    expandable: true,
  },
  {
    time: '11:20–11:25',
    titleKey: 'programme.items.moderatorReflection',
    muted: true,
  },
  {
    time: '11:25–11:45',
    titleKey: 'programme.items.coffeeBreak',
    muted: true,
  },
  {
    time: '11:45–11:50',
    titleKey: 'programme.items.voicesIntro',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.voicesIntroDetails',
    expandable: true,
  },
  {
    time: '11:50–12:00',
    titleKey: 'programme.items.armenianFamilies',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.armenianFamiliesDetails',
    expandable: true,
  },
  {
    time: '12:00–12:45',
    titleKey: 'programme.items.panel2',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.panel2Details',
    expandable: true,
  },
  {
    time: '12:50–12:55',
    titleKey: 'programme.items.moderatorReflection',
    muted: true,
  },
  {
    time: '12:55–14:25',
    titleKey: 'programme.items.lunchShort',
    muted: true,
  },
  {
    time: '14:25–15:25',
    titleKey: 'programme.items.worldCafe',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.worldCafeDetails',
    expandable: true,
  },
  {
    time: '15:25–16:25',
    titleKey: 'programme.items.visionExercise',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.visionExerciseDetails',
    expandable: true,
  },
  {
    time: '16:25–16:55',
    titleKey: 'programme.items.coffeeBreak',
    muted: true,
  },
  {
    time: '16:55–17:55',
    titleKey: 'programme.items.jointReflections',
    // tags: [
    //   { labelKey: 'programme.tags.session', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.jointReflectionsDetails',
    expandable: true,
  },
  {
    time: '17:55–18:15',
    titleKey: 'programme.items.closingDay2',
    // tags: [
    //   { labelKey: 'programme.tags.ceremony', tone: 'navy' },
    //   { labelKey: 'programme.tags.upcoming', tone: 'blue' },
    // ],
    detailsKey: 'programme.items.closingDay2Details',
    expandable: true,
  },
  {
    time: '18:30',
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
  photoPosition?: string
  bioKey?: string
}

export const speakers: Speaker[] = [
  {
    id: 'pashinyan',
    nameKey: 'speakers.people.pashinyan.name',
    roleKey: 'speakers.people.pashinyan.role',
    organizationKey: 'speakers.people.pashinyan.organization',
    category: 'opening',
    photo: speakerPashinyan,
    bioKey: 'speakers.people.pashinyan.bio',
  },
  {
    id: 'simonyan',
    nameKey: 'speakers.people.simonyan.name',
    roleKey: 'speakers.people.simonyan.role',
    organizationKey: 'speakers.people.simonyan.organization',
    category: 'opening',
    photo: speakerSimonyan,
    bioKey: 'speakers.people.simonyan.bio',
  },
  {
    id: 'mirzoyan',
    nameKey: 'speakers.people.mirzoyan.name',
    roleKey: 'speakers.people.mirzoyan.role',
    organizationKey: 'speakers.people.mirzoyan.organization',
    category: 'opening',
    photo: speakerMirzoyan,
    bioKey: 'speakers.people.mirzoyan.bio',
  },
  {
    id: 'spoljaric',
    nameKey: 'speakers.people.spoljaric.name',
    roleKey: 'speakers.people.spoljaric.role',
    organizationKey: 'speakers.people.spoljaric.organization',
    category: 'opening',
    photo: speakerSpoljaric,
    bioKey: 'speakers.people.spoljaric.bio',
  },
  {
    id: 'safaryan',
    nameKey: 'speakers.people.safaryan.name',
    roleKey: 'speakers.people.safaryan.role',
    organizationKey: 'speakers.people.safaryan.organization',
    category: 'panellists',
    photo: speakerSafaryan,
  },
  {
    id: 'riepl',
    nameKey: 'speakers.people.riepl.name',
    roleKey: 'speakers.people.riepl.role',
    organizationKey: 'speakers.people.riepl.organization',
    category: 'moderators',
    photo: speakerRiepl,
    bioKey: 'speakers.people.riepl.bio',
  },
  {
    id: 'beruto',
    nameKey: 'speakers.people.beruto.name',
    roleKey: 'speakers.people.beruto.role',
    organizationKey: 'speakers.people.beruto.organization',
    category: 'panellists',
    photo: speakerBeruto,
    bioKey: 'speakers.people.beruto.bio',
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
    photo: speakerMelikyan,
    bioKey: 'speakers.people.melikyan.bio',
  },
  {
    id: 'fonderbider',
    nameKey: 'speakers.people.fonderbider.name',
    roleKey: 'speakers.people.fonderbider.role',
    organizationKey: 'speakers.people.fonderbider.organization',
    category: 'panellists',
    photo: speakerFonderbider,
    photoPosition: 'center 18%',
    bioKey: 'speakers.people.fonderbider.bio',
  },
  {
    id: 'salado',
    nameKey: 'speakers.people.salado.name',
    roleKey: 'speakers.people.salado.role',
    organizationKey: 'speakers.people.salado.organization',
    category: 'panellists',
    photo: speakerSalado,
    bioKey: 'speakers.people.salado.bio',
  },
  {
    id: 'guzman',
    nameKey: 'speakers.people.guzman.name',
    roleKey: 'speakers.people.guzman.role',
    organizationKey: 'speakers.people.guzman.organization',
    category: 'moderators',
    photo: speakerGuzman,
    bioKey: 'speakers.people.guzman.bio',
  },
  {
    id: 'robichon',
    nameKey: 'speakers.people.robichon.name',
    roleKey: 'speakers.people.robichon.role',
    organizationKey: 'speakers.people.robichon.organization',
    category: 'panellists',
    photo: speakerRobichon,
    bioKey: 'speakers.people.robichon.bio',
  },
  {
    id: 'pantelides',
    nameKey: 'speakers.people.pantelides.name',
    roleKey: 'speakers.people.pantelides.role',
    organizationKey: 'speakers.people.pantelides.organization',
    category: 'panellists',
    photo: speakerPantelides,
    bioKey: 'speakers.people.pantelides.bio',
  },
  {
    id: 'muftuzade',
    nameKey: 'speakers.people.muftuzade.name',
    roleKey: 'speakers.people.muftuzade.role',
    organizationKey: 'speakers.people.muftuzade.organization',
    category: 'panellists',
    photo: speakerMuftuzade,
    bioKey: 'speakers.people.muftuzade.bio',
  },
  {
    id: 'gentile',
    nameKey: 'speakers.people.gentile.name',
    roleKey: 'speakers.people.gentile.role',
    organizationKey: 'speakers.people.gentile.organization',
    category: 'panellists',
    photo: speakerGentile,
    bioKey: 'speakers.people.gentile.bio',
  },
  {
    id: 'zaccaro',
    nameKey: 'speakers.people.zaccaro.name',
    roleKey: 'speakers.people.zaccaro.role',
    organizationKey: 'speakers.people.zaccaro.organization',
    category: 'moderators',
    photo: speakerZaccaro,
  },
  {
    id: 'kardumyan',
    nameKey: 'speakers.people.kardumyan.name',
    roleKey: 'speakers.people.kardumyan.role',
    organizationKey: 'speakers.people.kardumyan.organization',
    category: 'moderators',
    photo: speakerKardumyan,
    photoPosition: 'center 12%',
  },
  {
    id: 'poghosyan',
    nameKey: 'speakers.people.poghosyan.name',
    roleKey: 'speakers.people.poghosyan.role',
    organizationKey: 'speakers.people.poghosyan.organization',
    category: 'moderators',
    photo: speakerPoghosyan,
  },
]

export const speakerFilters = [
  { id: 'all', labelKey: 'speakers.filters.all' },
  { id: 'opening', labelKey: 'speakers.filters.opening' },
  { id: 'moderators', labelKey: 'speakers.filters.moderators' },
  { id: 'panellists', labelKey: 'speakers.filters.panellists' },
] as const

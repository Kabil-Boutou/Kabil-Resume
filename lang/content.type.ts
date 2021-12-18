export interface Misson {
  inc: string
  logo: string
  logoAlt: string
  post: string
  period: string
  intro: string
  tasks: any[]
  stack: string
}

export interface Mission {
  inc: string
  logo: string
  logoAlt: string
  post: string
  period: string
  intro: string
  tasks: any[]
  stack: string
}

export interface WorkExp {
  inc: string
  logo: string
  logoAlt: string
  post: string
  period: string
  intro: string
  tasks: any[]
  stack: string
  missions?: Mission[]
}

export interface Quote {
  name: string
  linkedin: string
  avatar: string
  position: string
  quote: string
}

export interface Domaines {
  title: string
  items: string[]
}

export interface Skills {
  title: string
  items: string[]
}

export interface Intro {
  title: string
  desc: string
}

export interface About {
  title: string
  desc: string
}

export interface ContentType {
  share: string
  city: string
  tech_stack: string
  work_exp: string
  workExp: WorkExp[]
  quotes: Quote[]
  domaines: Domaines
  skills: Skills
  intro: Intro
  about: About
}

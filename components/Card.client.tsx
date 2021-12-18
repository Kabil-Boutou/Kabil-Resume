import { ContentType } from 'lang/content.type'
import type { ReactNode } from 'react'

export default function Card({
  children,
  className = 'medium',
  exp,
}: {
  exp?: ContentType['workExp'][0]
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={`card ${className}`}>
      {exp && (
        <>
          <div className="card-header">
            <img className="logo" src={`assets/inc/${exp.logo}`} alt={exp.logoAlt} />
            <h4>
              {exp.inc}-{exp.post}-{exp.period}
            </h4>
          </div>
          <div className="card-body">
            <p>{exp.intro}</p>
          </div>
          <div className="card-footer">{exp.stack}</div>
        </>
      )}
      {children}
    </div>
  )
}

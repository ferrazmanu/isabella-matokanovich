/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import { CarreiraSwiperStyles } from './styles'

interface CompaniesProps {
  companies: CompanyProps[]
}

interface CompanyProps {
  id: string | number
  companyName: string
  endYear: number
  startYear: number
}

export function CarreiraSwiperComponent({ companies }: CompaniesProps) {
  const [sortedCompanies, setSortedCompanies] = useState<CompanyProps[]>([])

  useEffect(() => {
    if (companies) {
      const sorted = [...companies].sort((a, b) => a.startYear - b.startYear)
      setSortedCompanies(sorted)
    }
  }, [companies])

  return (
    <CarreiraSwiperStyles>
      <div className="path-container">
        {sortedCompanies.map((company) => {
          return (
            <div className="box" key={company.id}>
              <div className="top-box">
                <h6 className="place-name paragraph-24-regular">
                  {company.companyName}
                </h6>
                <div className="bubble-date">
                  <span className="paragraph-18-regular">
                    {company.startYear} - {company.endYear}
                  </span>
                </div>
              </div>

              <div className="line"></div>
            </div>
          )
        })}
      </div>
    </CarreiraSwiperStyles>
  )
}

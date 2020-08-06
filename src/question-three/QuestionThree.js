import React, { useState, useEffect } from 'react'

import { HeaderComponent } from './HeaderComponent'
import { PlaceholderBox } from './PlaceholderBox'
import { JobDetail } from './JobDetail'

import {
  joinDataSourceForQuestionThree,
  fetchDataForQuestionThree,
} from '../service/helpers'

import './QuestionThree.css'

export const QuestionThree = (props) => {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    const getData = async () => {
      const results = await fetchDataForQuestionThree()
      const dataSource = joinDataSourceForQuestionThree(results)
      setJobs(dataSource)
    }
    getData()
  }, [])

  return (
    <div className="three__container">
      <nav className="three__sideBar">
        <div>
          <div className="three__sideBarIcon">&nbsp;</div>
          <div className="three__sideBarIcon">&nbsp;</div>
          <div className="three__sideBarIcon">&nbsp;</div>
          <div className="three__sideBarIcon">&nbsp;</div>
        </div>
        <div className="three__sideBarIcon">&nbsp;</div>
      </nav>
      <div className="three__content">
        <header className="three__header">
          <HeaderComponent />
        </header>
        <main className="three__columns">
          <div className="three__leftColumn">
            {jobs.map(job => <JobDetail job={job} key={job.id} />)}
          </div>
          <div className="three__rightColumn">
            <PlaceholderBox /><PlaceholderBox /><PlaceholderBox /><PlaceholderBox />
            <PlaceholderBox /><PlaceholderBox /><PlaceholderBox /><PlaceholderBox />
            <PlaceholderBox /><PlaceholderBox /><PlaceholderBox /><PlaceholderBox />
          </div>
        </main>
      </div>
    </div>
  )
}
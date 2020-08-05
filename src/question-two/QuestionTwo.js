import React, { useState, useEffect } from 'react';

import { SectionGroup } from '../components/section/SectionGroup'
import { SectionPanel } from '../components/section/SectionPanel'
import { Swimlane } from '../components/swimlane/Swimlane'

import {
  decorateDataForSwimlane,
  joinDataSourceForQuestionTwo,
  fetchDataForQuestionTwo,
} from '../service/helpers'

import './QuestionTwo.css';

/**
 * Please do not change these dates, the data on the server all fall within the 01/09/2018
 */
const RANGE_START = new Date('2018-09-01T00:00:00Z')
const RANGE_END = new Date('2018-09-01T24:00:00Z')

export const QuestionTwo = () => {
  const [lanes, setLanes] = useState([])
  useEffect(() => {
    const getData = async () => {
      const results = await fetchDataForQuestionTwo()
      const dataSource = joinDataSourceForQuestionTwo(results)
      const decoratedDataSource = decorateDataForSwimlane(dataSource)
      setLanes(decoratedDataSource)
    }
    getData()
  }, [])

  return (
    <SectionGroup>
      <SectionPanel>
        <Swimlane
          start={RANGE_START}
          end={RANGE_END}
          lanes={lanes}
        />
      </SectionPanel>
    </SectionGroup>
  )
}
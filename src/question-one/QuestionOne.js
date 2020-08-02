import React, { useState } from 'react'
import { Input, List, Divider, Skeleton } from 'antd'
import _debounce from 'lodash/debounce'

import { SectionGroup } from '../components/section/SectionGroup'
import { SectionPanel } from '../components/section/SectionPanel'
import { JobCard } from './JobCard'

import { NOT_LOADED, LOADING, LOADED } from '../service/constants'

import './QuestionOne.css'

const { Search } = Input

export const renderItem = item => <JobCard item={item} />

export const QuestionOne = ({ service }) => {
  const [jobs, setJobs] = useState([])
  const [loadingStatus, setLoadingStatus] = useState(NOT_LOADED)
  const handleSearch = _debounce(async (value) => {
    setLoadingStatus(LOADING)
    const result = await service.getJobsWithSearchTerm(value)
    setLoadingStatus(LOADED)
    setJobs(result)
  }, 1000)

  return (
    <SectionGroup>
      <SectionPanel>
        <Search
          addonBefore="Job name"
          onChange={e => {
            const { value } = e.currentTarget
            if (!value) {
              return setLoadingStatus(NOT_LOADED)
              
            }
            if (value.length > 2) {
              return handleSearch(value)
            }
          }}
          loading={loadingStatus === LOADING}
          placeholder="Enter job name"
        />
        {
          loadingStatus !== NOT_LOADED && (
            <Skeleton loading={loadingStatus === LOADING}>
              <Divider />
              <List
                grid={{ column: 2 }}
                dataSource={jobs}
                locale={{
                  emptyText: 'No result',
                }}
                renderItem={renderItem}
              />
            </Skeleton>
          )
        }
      </SectionPanel>
    </SectionGroup>
  )
}

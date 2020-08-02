import React from 'react'
import { List, Card } from 'antd'

export const JobCard = ({ item }) => {
  const start = new Date(item.start)
  const end = new Date(item.end)
  const { contact } = item

  return (
    <List.Item>
      <Card title={item.name}>
        Start date: {start.toLocaleDateString()}
        <br />
        End date: {end.toLocaleDateString()}
        <br />
        Assignee: {contact.name}
      </Card>
    </List.Item>
  )
}

JobCard.defaultProps = {
  item: {},
}

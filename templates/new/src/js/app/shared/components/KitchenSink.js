import React from 'react'
import Tabs from 'revelry-components/lib/Tabs'
import KitchenSink from 'revelry-components/lib/KitchenSink'
import TestMount from './TestMount'
import QuickSearch from './QuickSearch'
import TopBar from './TopBar'

export default function SiteKitchenSink() {
  return (
    <div>
      <TestMount />
      <Tabs.Stateful>
        <Tabs.Item contentKey="core" title="Core">
          <KitchenSink />
        </Tabs.Item>
        <Tabs.Item contentKey="site" title="Site">
          <h3>QuickSearch</h3>
          <QuickSearch />
          <hr />
          <h3>TopBar</h3>
          <TopBar title="Custom Title" />
        </Tabs.Item>
      </Tabs.Stateful>
    </div>
  )
}

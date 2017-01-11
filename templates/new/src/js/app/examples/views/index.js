import React from 'react'
import Tabs from 'revelry-components/lib/Tabs'
import KitchenSink from 'revelry-components/lib/KitchenSink'
import Layout from 'app/shared/components/Layout'
import StateSpy from 'app/shared/components/StateSpy'
import TestMount from 'app/shared/components/TestMount'
import CounterIncrementButton from '../components/CounterIncrementButton'

export default function Index() {
  return (
    <Layout>
      <h1>Examples</h1>
      <Tabs.Stateful>
        <Tabs.Item contentKey="mount" title="Mount">
          <TestMount />
        </Tabs.Item>
        <Tabs.Item contentKey="redux" title="Redux">
          <StateSpy />
          <CounterIncrementButton />
        </Tabs.Item>
        <Tabs.Item contentKey="core" title="Core">
          <KitchenSink />
        </Tabs.Item>
        <Tabs.Item contentKey="site" title="Site">
          <p>Put examples of site-specific components here</p>
        </Tabs.Item>
      </Tabs.Stateful>
    </Layout>
  )
}

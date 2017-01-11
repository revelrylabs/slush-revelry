import React, {PropTypes} from 'react'
import TopBar from 'revelry-components/lib/TopBar'
import Menu from 'revelry-components/lib/Menu'
import QuickSearch from './QuickSearch'

export default function SiteTopBar({title}) {
  return (
    <TopBar>
      <TopBar.Title>
        <strong><a href="/">{title}</a></strong>
      </TopBar.Title>
      <TopBar.Left>
        <Menu>
          <Menu.Item><a href="/examples">Examples</a></Menu.Item>
        </Menu>
      </TopBar.Left>
      <TopBar.Right>
        <QuickSearch />
      </TopBar.Right>
    </TopBar>
  )
}

SiteTopBar.propTypes = {
  title: PropTypes.string,
}

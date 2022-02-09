import List from 'components/list'
import ListItem from 'components/list/item'
import ChromeIcon from 'icons/chrome.svg'
import VSCodeIcon from 'icons/vscode.svg'
import React, { FC } from 'react'
import AppItem from './app-item'

interface Props {
  id?: string
}

const AppList: FC<Props> = ({ id }) => {
  const wifiList = [
    {
      key: 'vscode',
      icon: <VSCodeIcon className="h-4 w-4 text-primary" />,
      value: 'Visual Studio Code.app',
    },
    {
      key: 'chrome',
      icon: <ChromeIcon className="h-4 w-4 text-yellow-600" />,
      value: 'Chrome.app',
    },
  ]
  return (
    <List
      id={id}
      gap="gap-1"
      dataSource={wifiList}
      render={(record) => (
        <ListItem key={record.key}>
          <AppItem name={record.value} icon={record.icon} onClick={() => {}} />
        </ListItem>
      )}
    ></List>
  )
}

export default AppList

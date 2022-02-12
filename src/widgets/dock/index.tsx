import List from 'components/list'
import ListItem from 'components/list/item'
import Image from 'next/image'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'redux/hooks'
import { finderActions } from 'redux/slices/finder'
import DockItem from './item'

interface Props {}

const Dock: FC<Props> = () => {
  const dispatch = useDispatch()
  const pinnedItems = useAppSelector(({ dock }) => dock.pinnedItems)
  return (
    <div className="flex items-center justify-center">
      <div className="mb-3 rounded-2xl bg-slate-200/50 p-1 backdrop-blur-3xl">
        <List
          horizontal
          dataSource={[
            {
              key: 'finder',
              isOpen: true,
              value: (
                <Image
                  priority
                  width={48}
                  height={48}
                  alt="finder"
                  draggable={false}
                  src="/images/finder.png"
                />
              ),
              onClick: () => {
                dispatch(finderActions.show())
              },
            },
            ...pinnedItems.map((item) => ({
              key: item.key,
              isOpen: false,
              value: (
                <Image
                  priority
                  width={48}
                  height={48}
                  alt={item.key}
                  draggable={false}
                  src={item.icon}
                />
              ),
              onClick: () => {},
            })),
          ]}
          render={(record) => (
            <ListItem key={record.key}>
              <DockItem isOpen={record.isOpen} onClick={record.onClick}>
                {record.value}
              </DockItem>
            </ListItem>
          )}
        />
      </div>
    </div>
  )
}

export default Dock

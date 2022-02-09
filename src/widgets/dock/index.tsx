import List from 'components/list'
import ListItem from 'components/list/item'
import Image from 'next/image'
import React, { FC } from 'react'
import DockItem from './item'

interface Props {}

const Dock: FC<Props> = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mb-3 rounded-xl bg-slate-200/50 p-1 backdrop-blur-3xl">
        <List
          horizontal
          dataSource={[
            {
              key: 'finder',
              isOpen: true,
              value: (
                <Image
                  width={48}
                  height={48}
                  alt="finder"
                  src="/images/finder.png"
                />
              ),
            },
            {
              key: 'siri',
              value: (
                <Image
                  width={48}
                  height={48}
                  alt="siri"
                  src="/images/siri.png"
                />
              ),
            },
            {
              key: 'terminal',
              isOpen: true,
              value: (
                <Image
                  width={48}
                  height={48}
                  alt="terminal"
                  src="/images/terminal.png"
                />
              ),
            },
            {
              key: 'music',
              isOpen: true,
              value: (
                <Image
                  width={48}
                  height={48}
                  alt="music"
                  src="/images/music.png"
                />
              ),
            },
            {
              key: 'facetime',
              value: (
                <Image
                  width={48}
                  height={48}
                  alt="facetime"
                  src="/images/facetime.png"
                />
              ),
            },
            {
              key: 'calculator',
              value: (
                <Image
                  width={48}
                  height={48}
                  alt="calculator"
                  src="/images/calculator.png"
                />
              ),
            },
            {
              key: 'notes',
              value: (
                <Image
                  width={48}
                  height={48}
                  alt="notes"
                  src="/images/notes.png"
                />
              ),
            },
            {
              key: 'mail',
              isOpen: true,
              value: (
                <Image
                  width={48}
                  height={48}
                  alt="mail"
                  src="/images/mail.png"
                />
              ),
            },
          ]}
          render={(record) => (
            <ListItem key={record.key}>
              <DockItem isOpen={record.isOpen}>{record.value}</DockItem>
            </ListItem>
          )}
        />
      </div>
    </div>
  )
}

export default Dock

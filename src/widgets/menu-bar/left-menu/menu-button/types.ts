export interface MenuItemData {
  type?: 'custom'
  key: string
  icon?: React.ReactNode
  iconGap?: string
  value: React.ReactNode
  shortcut?: React.ReactNode
  onClick?: () => void
  children?: MenuItemData[]
}

export interface MenuItemDivider {
  type: 'divider'
  key: string
}

export type MenuItemRecord = MenuItemData | MenuItemDivider

export enum DropdownMenuPlacement {
  RIGHT = 'right',
  LEFT = 'left',
}

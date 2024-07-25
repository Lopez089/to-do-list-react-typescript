export interface toggleComplete {
    isComplete: boolean,
    handleComplete: (id: string) => void,
    id: string
}

export interface todo {
    id: string
    todo: string
    isComplete: boolean
    isDelete:boolean
  }

export interface icon {
    icon: string
    onClick?: () => void
}

export interface button {
    children: JSX.Element
    onClick: () => void
}

export interface item { 
    children: JSX.Element, 
    isDelete: boolean 
}
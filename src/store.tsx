import create from 'zustand'

export interface DataType {
    name: string,
    number: number,
    toggle: boolean, 
    nameSet: (data: string) => void,
    updateNum: (number: number) => void, 
    toggleSet: (toggle: boolean) => void,
}

export const useData = create<DataType>((set, get) => ({
    name: '',
    number: 40,
    toggle: true,
    nameSet: (data: string) => set({name: data}),
    updateNum: (param: number) => set({number: param + get().number}),
    toggleSet: (toggle) => set({toggle: toggle}),
}))

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => useData.getState().nameSet(data.name))
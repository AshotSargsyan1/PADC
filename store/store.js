import { create } from 'zustand'

export const useHashs = create(set => ({
    activeLink: window.location.pathname !== '/' ? `${window.location.pathname}` : `/${window.location.hash}`,
    addLinkHash: (currentHash) => set((state) => {
        return { activeLink: currentHash }
    })
}))
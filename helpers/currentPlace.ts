export function currentActiveTab(currentPage: string, currentHash: string) {
    if (currentPage === '/trainings' || currentPage === '/career') {
        return currentPage
    } else {
        return currentHash
    }
}
import { Metadata } from "next";

export function generateMetadataPerPage(currentPage: string): Metadata {
    return {
        title: `${currentPage} - PADC LLC`,
        description: ''
    }
}
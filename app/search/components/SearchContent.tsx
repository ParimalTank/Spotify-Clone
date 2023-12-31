"use client"
import { LikeButton } from '@/components/LikeButton'
import { MediaItem } from '@/components/MediaItem'
import { Song } from '@/types'
import React from 'react'


interface SearchContentProps {
    songs: Song[]
}

export const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {

    if (songs.length === 0) {
        return (
            <div className='flex flex-col gap-y-2 w-full px-6 text-neutral-400'>
                No songs found.
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-y-2 w-full px-6'>
            {songs.map((songs) => (
                <div key={songs.id} className='flex items-center gap-x-4 w-full'>
                    <div className='flex-1'>
                        <MediaItem
                            onClick={() => { }}
                            data={songs}
                        />
                    </div>
                    <LikeButton songId={songs.id} />
                </div>
            ))}
        </div>
    )
}

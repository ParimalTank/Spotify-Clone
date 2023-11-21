import { Song } from '@/types'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import React from 'react'

export const useLoadImage = (song: Song) => {

    const supabaseClient = useSupabaseClient();

    if (!song) {
        return null;
    }

    // Get Image URL from the Database
    const { data: imageData } = supabaseClient
        .storage
        .from('images')
        .getPublicUrl(song.image_path)

    return imageData.publicUrl
}

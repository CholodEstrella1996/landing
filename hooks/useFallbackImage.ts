import { useState } from 'react'

import { ImageProps } from 'next/image'

import { hasImageExtension } from 'utils/helpers/hasImageExtension'

const DEFAULT_IMAGE = '/genericLabs.jpg'

type Error = null | 'inImage' | 'inFallback'

export const useFallbackImage = () => {
  const [error, setError] = useState<Error>(null)

  const onError = () =>
    setError((prevState) => (prevState === 'inImage' ? 'inFallback' : 'inImage'))

  const withFallback = (image?: ImageProps['src'], fallback?: ImageProps['src']): ImageProps => {
    const src = image || fallback || DEFAULT_IMAGE

    const areImages =
      (image && hasImageExtension(String(image))) ||
      (fallback && hasImageExtension(String(fallback)))
    if (!areImages) return { src: DEFAULT_IMAGE, onError }

    if (fallback && error === 'inImage') return { src: fallback, onError }
    return { src: error ? DEFAULT_IMAGE : src, onError }
  }

  return { withFallback }
}

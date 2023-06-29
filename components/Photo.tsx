import Image from 'next/image'

interface ImageProps {
  alt: string
  height: number
  link: string
  src: string
  title: string
  width: number
}

export default function Photo(props: ImageProps) {
  const {alt, height, link, src, title, width} = props

  return (
    <div className="mb-8 flex flex-col items-center justify-center gap-8">
      <a href={link} rel="noreferrer" target="_blank" title={title}>
        <h1
          className="mb-4 text-center text-2xl font-bold"
          dangerouslySetInnerHTML={{__html: title}}
        />
        <Image alt={alt} height={height} src={src} width={width} />
      </a>
    </div>
  )
}

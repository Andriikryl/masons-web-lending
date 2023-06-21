interface IImageComponent {
  src: string;
  alt: string;
}

export default function ImageComponent({ src, alt }: IImageComponent) {
  return <img src={src} alt={alt} />;
}

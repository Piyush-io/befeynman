import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">BE FEYNMAN</div>
      <div className="footer-bottom">
        <div className="footer-image-glow"></div>
        <Image
          src="/4.png"
          alt="The Feynman Method"
          width={900}
          height={600}
          className="footer-image"
          priority={false}
        />
      </div>
    </footer>
  );
}

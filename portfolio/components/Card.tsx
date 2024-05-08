interface CardProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

export default function Card({ children, className, backgroundImage }: Readonly<CardProps>) {
  return (
    <div className="p-3">
      <div 
        className={`relative ${className} rounded-xl bg-nigeria-green text-nigeria-white shadow-xl`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay to make the image a bit dark */}
        <div className="absolute inset-0 opacity-30 rounded-xl"></div>
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

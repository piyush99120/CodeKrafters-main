import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  // Increased container size and adjusted positioning for larger popup images
  const container =
    "absolute right-0 xs:right-2 sm:right-4 md:right-6 -top-4 z-40 h-20 xs:h-24 sm:h-28 md:h-32 w-16 xs:w-20 sm:w-24 md:w-28";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-[200%] group-hover:h-[200%] w-16 xs:w-20 sm:w-24 md:w-28 h-16 xs:h-20 sm:h-24 md:h-28 overflow-hidden transition-all rounded-md aspect-square";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-2 xs:py-4 sm:py-6 md:py-8">
      <h1 className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-black text-black/70 transition-all duration-500 group-hover:opacity-40 text-center xs:text-left">
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-4 xs:group-hover:translate-x-6 sm:group-hover:translate-x-8 md:group-hover:translate-x-10 group-hover:translate-y-4 xs:group-hover:translate-y-6 sm:group-hover:translate-y-8 md:group-hover:translate-y-10 group-hover:rotate-12",
        )}
      >
        <div className={cn(effect, "duration-200")}> 
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Data Mining",
      images: [
        {
          src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Big Data",
      images: [
        {
          src: "images/BD-1.jpg",
          alt: "Image 1",
        },
        {
          src: "images/BD-2.jpg",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Data Visualization",
      images: [
        {
          src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Machine Learning",
      images: [
        {
          src: "/images/ML-2.avif",
          alt: "Image 1",
        },
        {
          src: "/images/ML-1.jpg",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Natural Language Processing",
      images: [
        {
          src: "/images/NLP-1.webp",
          alt: "Image 1",
        },
        {
          src: "/images/NLP-2.webp",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Cloud Computing",
      images: [
        {
          src: "/images/CC-1.webp",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
  ];
  return (
    <div className="relative min-h-screen w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg1.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col gap-6 rounded-sm px-4 sm:px-6 md:px-8 w-full max-w-7xl mx-auto h-full items-center justify-center">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wider text-center mb-4 xs:mb-6 sm:mb-8">
          <span className="text-black/70 bg-clip-text text-2xl md:text-7xl ">
            Data Science
          </span>
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-8 w-full px-1 xs:px-2">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <RevealImageListItem text={item.text} images={item.images} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { RevealImageList };

import React from "react";

type PageContentProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function PageContent({
  children = null,
  className,
}: PageContentProps) {
  return (
    <section id="content" className="bg-gray-200">
      <div
        className={`${className} container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative -top-40 z-20 `}
      >
        <div className="p-6 md:p-6 lg:py-8 lg:px-10 rounded-xl bg-white">
          <div className="pb-4">{children}</div>
        </div>
      </div>
    </section>
  );
}

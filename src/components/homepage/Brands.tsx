import React from 'react';
import Link from '@docusaurus/Link';

function Brand({ icon, to, name }: { icon: string; name: string; to?: string }) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center rounded-lg border border-secondary-700 p-2.5 text-inherit hover:border-primary hover:text-primary hover:no-underline"
    >
      <img src={icon} className="mr-2 h-7 w-7" />
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function Brands() {
  return (
    <section className="mx-auto mb-32 flex w-full max-w-5xl flex-col p-4 py-0">
      <span className="mb-2 uppercase tracking-wider text-text-400">
        Robot Brands
      </span>

      <h3 className="mb-12 text-4xl">
        Choose your brand, or access the master startup guide <a href="/startup">here</a>.
      </h3>

      <div className="mb-10">
        <h4 className="mb-2 text-2xl">Brands</h4>

        <p className="mb-6 text-text-400">
          Click the Fanuc brand for the new design.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Brand
            name="ABB"
            to="/react-ui-kit"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <Brand
            name="EPSON"
            to="/angular-ui-kit"
            icon="/static/landing-page/sdk-icons/angular.png"
          />
          <Brand
            name="FANUC"
            to="/fanuc"
            icon="/static/landing-page/sdk-icons/html.png"
          />
          <Brand
            name="Kawasaki"
            to="/flutter"
            icon="/static/landing-page/sdk-icons/flutter.png"
          />
          <Brand
            name="Staubli"
            to="/react-native"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <Brand
            name="UR"
            to="/ios"
            icon="/static/landing-page/sdk-icons/swift.png"
          />
          <Brand
            name="Yaskawa"
            to="/android"
            icon="/static/landing-page/sdk-icons/kotlin.png"
          />
        </div>
      </div>
    </section>
  );
}

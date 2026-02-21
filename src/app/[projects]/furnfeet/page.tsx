import { ArrowUpRight, Globe, ShoppingBag, Sofa, Truck } from "lucide-react";

const features = [
  {
    title: "Furniture Discovery",
    description:
      "A clean browsing experience for sofas, beds, tables, lighting, and essential furnishing accessories.",
    icon: Sofa,
  },
  {
    title: "Ecommerce Flow",
    description:
      "Structured product pages, smooth add-to-cart interactions, and a reliable checkout journey for online buyers.",
    icon: ShoppingBag,
  },
  {
    title: "Delivery Focused",
    description:
      "Built to support practical order handling and shipping expectations for large and small home items.",
    icon: Truck,
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Payload CMS",
  "Node.js",
  "MongoDB",
  "Razorpay"
];

function Furnfeet() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-20 pt-24 md:px-10">
        <p className="text-sm uppercase tracking-[0.22em] text-zinc-400">
          Project Showcase
        </p>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Furnfeet
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Furnfeet is an ecommerce platform focused on furniture and
            furnishing items, designed to help customers find home essentials
            quickly and shop with confidence.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://furnfeet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Visit Live Site
            <ArrowUpRight size={16} />
          </a>
          <a
            href="https://furnfeet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            <Globe size={16} />
            furnfeet.com
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-18 md:px-10">
        <div className="w-full max-w-5xl mx-auto pb-20">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-black aspect-video">
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/-xIYyL_F29Q" title="Furnfeet - A Modern Furniture & Furnishing E-commerce Platform" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-6 pb-20 md:grid-cols-3 md:px-10">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article
              key={feature.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
            >
              <Icon className="mb-4 text-zinc-300" size={20} />
              <h2 className="mb-2 text-xl font-medium">{feature.title}</h2>
              <p className="text-sm leading-relaxed text-zinc-400">
                {feature.description}
              </p>
            </article>
          );
        })}
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-medium">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
        <div>
          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            Overview
          </h4>

          Furnfeet is a full-stack e-commerce platform designed to modernize how customers discover, customize, and purchase furniture online. The platform focuses on flexibility, performance, and real-world usability — enabling customers not only to browse products, but also to tailor furniture according to their exact needs.<br/><br/>
          Built with scalability and production reliability in mind, Furnfeet combines a performant frontend architecture with a flexible headless CMS and a robust backend ecosystem to deliver a smooth and secure shopping experience.

          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            The Problem
          </h4>

          Traditional furniture e-commerce platforms often limit customers to fixed product configurations. This makes it difficult for buyers, architects, and interior designers to source furniture that precisely fits their design requirements, space constraints, or aesthetic preferences.<br/><br/>

          Additionally, the furniture ecosystem involves multiple stakeholders such as designers, architects, and craftsmen, yet most platforms do not support role-specific incentives or workflows.<br/><br/>

          Furnfeet was created to solve these limitations by introducing customizable furniture ordering along with a multi-role referral reward system.<br/><br/>

          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            The Solution
          </h4>

          Furnfeet enables users to customize furniture according to their exact specifications while also supporting a collaborative ecosystem of professionals including architects, interior designers, and craftsmen (Karagirs).

          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">
            The platform introduces:
          </h4>

          <ul className="list-disc pl-4 mb-2">
            <li>A customization-driven purchasing flow</li>
            <li>Role-based authentication and access control</li>
            <li>Referral rewards for industry professionals</li>
            <li>Secure payments with seamless checkout</li>
            <li>Optimized performance with server-side rendering</li>
          </ul>
          
          The result is a scalable, production-ready system capable of supporting both direct consumers and professional collaborators.

          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            Key Features
          </h4>
          Custom Furniture Ordering

          Customers can purchase furniture tailored to their exact requirements, ensuring better usability and personalization compared to traditional catalog-only systems.<br/><br/>

          Multi-Role Referral Rewards

          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">
            Furnfeet supports a unique referral ecosystem where:
          </h4>
          <ul className="list-disc pl-4 mb-2">
            <li>Architects</li>
            <li>Interior Designers</li>
            <li>Karagirs (Craftsmen)</li>
          </ul>

          can earn rewards for bringing customers to the platform.

          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">
            Secure Authentication System
          </h4>

          The platform includes:

          <ul className="list-disc pl-4 mb-2">
            <li>Google Sign-In integration</li>
            <li>Role-based authentication (Admin, Architect, Interior Designer, Karagir, User)</li>
            <li>Protected routes and permission-based access</li>
          </ul>

          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">
            Seamless Payment Integration
          </h4>

          Payments are handled through Razorpay, enabling:
          <ul className="list-disc pl-4 mb-2">
            <li>Secure checkout</li>
            <li>Reliable transaction handling</li>
            <li>Smooth user purchase experience</li>
          </ul>

          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">
            Responsive and Production-Ready UI
          </h4>
          
          The frontend is fully responsive and built with reusable React components, ensuring maintainability and consistency across the application.

          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            Technology Stack
          </h4>

          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">
            Frontend
          </h4>
          <ul className="list-disc pl-4 mb-2">
            <li>Next.js (Server-Side Rendering for performance and SEO)</li>
            <li>React (Component-driven architecture)</li>
          </ul>
          
          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">Backend & CMS</h4>
          <ul className="list-disc pl-4 mb-2">
            <li>Payload CMS (Headless CMS for flexible content and admin workflows)</li>
            <li>Node.js ecosystem</li>
          </ul>
          
          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">Database</h4>
          <ul className="list-disc pl-4 mb-2">
            <li>MongoDB (Scalable and document-oriented storage)</li>
          </ul>
          
          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">Payments</h4>
          <ul className="list-disc pl-4 mb-2">
            <li>Razorpay (Secure and seamless payment processing)</li>
          </ul>
          
          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">Deployment & Hosting</h4>
          <ul className="list-disc pl-4 mb-2">
            <li>Hosted on a Virtual Machine using Coolify</li>
            <li>Production environment configured for stability and scalability</li>
          </ul>
          
          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            Engineering Highlights
          </h4>

          While building Furnfeet, special focus was placed on:
           
          <ul className="list-disc pl-4 mb-2">
            <li>Creating a scalable authentication architecture supporting multiple user roles</li>
            <li>Designing reusable UI components for long-term maintainability</li>
            <li>Integrating third-party APIs without affecting performance</li>
            <li>Ensuring SSR-based rendering for faster page loads and SEO improvements</li>
            <li>Structuring the system to support future marketplace expansion</li>
          </ul>
          

          The project reflects a real-world production mindset: build responsibly, think in systems, and optimize for both user experience and operational stability.
          
          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            Live Demo
          </h4>

          You can explore the platform here:
          <a href="https://furnfeet.com" target="_1"> https://furnfeet.com</a>

          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            Final Thoughts
          </h4>

          Furnfeet represents more than just an e-commerce application — it demonstrates the ability to design and build a scalable production system that handles authentication, payments, customization workflows, and multi-role business logic within a single cohesive architecture.<br/><br/>

          The project showcases full-stack ownership from development to deployment, reflecting practical experience in building reliable, user-focused production applications.<br/><br/>

          Feedback and suggestions are always welcome.
        </div>
      </section>
    </main>
  );
}

export default Furnfeet;

import { ArrowUpRight, Globe, MessageSquare, SlidersHorizontal, MousePointerClick  } from "lucide-react";

const features = [
  {
    title: "Context-Aware AI Comments",
    description:
      "Generates smart, relevant LinkedIn comments by analyzing post content, helping users respond thoughtfully without manual drafting.",
    icon: MessageSquare,
  },
  {
    title: "Custom Prompt Profiles",
    description:
      "Allows users to create and save multiple prompt templates to control tone, writing style, and engagement type for different professional situations.",
    icon: SlidersHorizontal,
  },
  {
    title: "One-Click LinkedIn Integration",
    description:
      "Seamlessly embeds into the LinkedIn interface, enabling instant AI-generated comments directly under posts without leaving the platform.",
    icon: MousePointerClick,
  },
];

const stack = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Razorpay",
  "Vercel AI SDK"
];

function Replio() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-20 pt-24 md:px-10">
        <p className="text-sm uppercase tracking-[0.22em] text-zinc-400">
          Project Showcase
        </p>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Replio
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Replio is a Chrome extension that helps users generate smart, contextual LinkedIn comments instantly. It integrates directly into the LinkedIn interface and allows users to create and save custom AI prompts to control tone, style, and intent for different engagement scenarios. Built using React, Node.js, MongoDB, Razorpay, and the Vercel AI SDK, the project focuses on real-world AI workflow automation and seamless browser integration.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://replio.furnfeet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Visit Live Site
            <ArrowUpRight size={16} />
          </a>
          <a
            href="https://replio.furnfeet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            <Globe size={16} />
            replio.furnfeet.com
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-18 md:px-10">
        <div className="w-full max-w-5xl mx-auto pb-20">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-black aspect-video">
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/42YAn-kZPcw" title="Replio - AI Powered Linkedin Engagement" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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

          Replio is an AI-powered Chrome extension designed to make professional engagement on LinkedIn faster, smarter, and more personalized. Instead of spending time thinking about what to comment on posts, users can generate contextual, high-quality responses instantly with a single click.<br/><br/>
          The extension integrates directly into the LinkedIn interface and provides intelligent comment suggestions tailored to the content of each post, while allowing users to control tone, style, and intent through customizable prompts.<br/><br/>
          Replio represents my first hands-on AI-driven production project, combining real-world browser extension architecture with modern AI tooling and scalable backend services.

          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            The Problem
          </h4>

          Professional engagement on LinkedIn is valuable but time-consuming. Writing thoughtful comments consistently requires:<br/><br/>

          <ul className="list-disc pl-4 mb-2">
            <li>Reading the post carefully</li>
            <li>Thinking of a meaningful response</li>
            <li>Maintaining a professional tone</li>
            <li>Secure payments with seamless checkout</li>
            <li>Avoiding repetitive or generic replies</li>
          </ul>
          For users who actively network or build their presence, this process quickly becomes a bottleneck.<br/><br/>

          Replio was created to remove this friction by generating contextual, personalized comments automatically while still giving users control over how they want to communicate.<br/><br/>

          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            The Solution
          </h4>

          Replio embeds directly into LinkedIn’s post interface and adds a small action icon beneath each post.<br/><br/>
          With one click, the extension analyzes the post context and generates an AI-powered comment suggestion within seconds. Users can also define their own prompt templates to control:
          <ul className="list-disc pl-4 mb-2">
            <li>Tone (professional, friendly, analytical, supportive, etc.)</li>
            <li>Writing style</li>
            <li>Comment intent (appreciation, discussion, question, insight)</li>
          </ul>
          
          Multiple prompts can be saved for different engagement scenarios, allowing users to switch instantly depending on the situation.<br/><br/>
          This turns LinkedIn engagement into a fast, structured, and repeatable workflow.

          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            Key Features
          </h4>
          Context-Aware Comment Generation

          Replio reads the visible LinkedIn post content and generates a relevant, meaningful response instead of generic AI text.<br/><br/>

          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">
            One-Click Smart Commenting
          </h4>

          Users simply click the extension icon under a post to instantly receive a ready-to-use response.

          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">
            Custom Prompt System
          </h4>

            Users can create their own prompts to control:

          <ul className="list-disc pl-4 mb-2">
            <li>Tone of voice</li>
            <li>Response style</li>
            <li>Comment objective</li>
          </ul>

          This ensures generated responses remain aligned with personal branding.

          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">
            Multiple Saved Prompt Profiles
          </h4>

          Replio allows storing different prompts for different purposes such as:

          <ul className="list-disc pl-4 mb-2">
            <li>Networking comments</li>
            <li>Thoughtful professional replies</li>
            <li>Quick appreciation responses</li>
            <li>Discussion-starting comments</li>
          </ul>

          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">
            Seamless LinkedIn Integration
          </h4>

          The extension works directly inside the LinkedIn UI, making the workflow natural and frictionless without requiring users to switch platforms.
          
          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            Technology Stack
          </h4>

          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">
            Frontend
          </h4>
          <ul className="list-disc pl-4 mb-2">
            <li>React (component-based interface for extension popup and controls)</li>
          </ul>
          
          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">Backend & CMS</h4>
          <ul className="list-disc pl-4 mb-2">
            <li>Node.js backend for request processing and logic</li>
            <li>Vercel AI SDK v5 (AI orchestration and response handling)</li>
          </ul>
          
          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">Database</h4>
          <ul className="list-disc pl-4 mb-2">
            <li>MongoDB for storing user prompts and configuration</li>
          </ul>
          
          <h4 className="text-xl font-semibold leading-tight sm:text-md md:text-lg my-2">Payments</h4>
          <ul className="list-disc pl-4 mb-2">
            <li>Razorpay integration for handling subscription or payment workflows</li>
          </ul>
          
          
          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            Engineering Highlights
          </h4>

          While building Replio, the focus was on creating a real-world usable AI tool rather than a demo. Key engineering considerations included:
           
          <ul className="list-disc pl-4 mb-2">
            <li>Injecting UI elements safely into a third-party website (LinkedIn DOM manipulation)</li>
            <li>Designing a prompt management system that supports multiple reusable templates</li>
            <li>Ensuring AI responses remain contextual rather than generic</li>
            <li>Structuring the backend for scalable prompt storage and request handling</li>
            <li>Creating a lightweight extension architecture to maintain fast performance</li>
          </ul>
          

          This project marked an important step into applied AI development, demonstrating how AI can be integrated into everyday professional workflows to improve productivity.
          
          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            Use Cases
          </h4>
            Replio is especially useful for:
          <ul className="list-disc pl-4 mb-2">
            <li>Professionals building their LinkedIn presence</li>
            <li>Recruiters engaging with industry posts</li>
            <li>Founders and developers networking publicly</li>
            <li>Content creators responding quickly to discussions</li>
            <li>Anyone who wants to stay active on LinkedIn without spending excessive time crafting responses</li>
          </ul>

          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            Live Demo
          </h4>

          You can explore the project here:
          <a href="https://replio.furnfeet.com" target="_1"> https://replio.furnfeet.com</a>

          <h4 className="text-2xl font-semibold leading-tight sm:text-2xl md:text-3xl my-8">
            Final Thoughts
          </h4>

          Replio represents my first production-ready AI-driven product and an exploration into building intelligent workflow automation tools.<br/><br/>

          The project demonstrates not only frontend and backend engineering skills, but also the ability to integrate AI meaningfully into real user scenarios — focusing on usability, personalization, and performance.<br/><br/>

          This is just the beginning of deeper work in AI-powered developer tools and productivity platforms, and feedback is always welcome for future improvements.
        </div>
      </section>
    </main>
  );
}

export default Replio;

"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please complete all fields.");
      return;
    }

    const text = `Halo Ariana,

Saya tertarik menggunakan jasa Anda.

Nama:
${name}

Email:
${email}

Pesan:
${message}`;

    const url = `https://wa.me/6287774230949?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section
      id="contact"
      className="relative bg-[#050505] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-lime-400">
            CONTACT
          </p>

          <h2 className="text-5xl font-bold md:text-6xl">
            Let's Work Together
          </h2>

          <p className="mt-8 leading-8 text-zinc-400">
            Have an idea, a project, or simply want to say hello?
            Feel free to reach out.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <h3 className="mb-10 text-3xl font-bold">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-lime-400">
                  Email
                </p>

                <p className="mt-2 text-lg text-zinc-300">
                  i.made.2304146@students.um.ac.id
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-lime-400">
                  Location
                </p>

                <p className="mt-2 text-lg text-zinc-300">
                  Malang, Indonesia
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-lime-400">
                  Social
                </p>

                <div className="mt-4 flex flex-wrap gap-4">

                  <a
                    href="https://github.com/arianasky262626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-5 py-3 transition hover:border-lime-400 hover:text-lime-400"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/i-made-ariana2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-5 py-3 transition hover:border-lime-400 hover:text-lime-400"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://www.instagram.com/imadearianas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-5 py-3 transition hover:border-lime-400 hover:text-lime-400"
                  >
                    Instagram
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl outline-none transition focus:border-lime-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl outline-none transition focus:border-lime-400"
            />

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl outline-none transition focus:border-lime-400"
            />

            <button
              type="submit"
              className="
                rounded-full
                bg-lime-400
                px-8
                py-4
                font-semibold
                text-black
                transition
                duration-300
                hover:scale-105
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}